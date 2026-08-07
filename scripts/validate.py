#!/usr/bin/env python3
"""Validate Study Vault metadata, identities, and local Markdown links."""

from __future__ import annotations

import re
import sys
from datetime import date
from pathlib import Path
from urllib.parse import parse_qsl, unquote, urlencode, urlsplit, urlunsplit


ROOT = Path(__file__).resolve().parents[1]
MATERIALS = ROOT / "materials"

REQUIRED_FIELDS = {
    "id",
    "title",
    "kind",
    "source_url",
    "added",
    "retrieved_at",
    "status",
    "topics",
}
ALLOWED_KINDS = {
    "article",
    "book",
    "collection",
    "course",
    "image",
    "note",
    "paper",
    "repository",
    "video",
    "web",
}
ALLOWED_STATUSES = {"queued", "studying", "completed", "reference"}
TRACKING_QUERY_PREFIXES = ("utm_",)
TRACKING_QUERY_KEYS = {"fbclid", "gclid", "mc_cid", "mc_eid"}
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


def parse_frontmatter(path: Path) -> tuple[dict[str, str], list[str]]:
    errors: list[str] = []
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, ["missing opening frontmatter delimiter"]

    try:
        end = lines.index("---", 1)
    except ValueError:
        return {}, ["missing closing frontmatter delimiter"]

    data: dict[str, str] = {}
    for line_number, line in enumerate(lines[1:end], start=2):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if ":" not in line:
            errors.append(f"line {line_number}: malformed frontmatter entry")
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if not key or not value:
            errors.append(f"line {line_number}: empty frontmatter key or value")
            continue
        if key in data:
            errors.append(f"line {line_number}: duplicate frontmatter key '{key}'")
            continue
        data[key] = value
    return data, errors


def canonical_url(raw: str) -> str:
    parts = urlsplit(raw.strip())
    scheme = parts.scheme.lower()
    host = parts.netloc.lower()
    path = re.sub(r"/{2,}", "/", parts.path)

    if host in {"arxiv.org", "www.arxiv.org"}:
        match = re.fullmatch(r"/pdf/(.+?)(?:\.pdf)?", path)
        if match:
            host = "arxiv.org"
            path = f"/abs/{match.group(1)}"

    if path != "/":
        path = path.rstrip("/")

    query = [
        (key, value)
        for key, value in parse_qsl(parts.query, keep_blank_values=True)
        if key.lower() not in TRACKING_QUERY_KEYS
        and not key.lower().startswith(TRACKING_QUERY_PREFIXES)
    ]
    return urlunsplit((scheme, host, path, urlencode(sorted(query)), ""))


def validate_materials() -> list[str]:
    errors: list[str] = []
    seen_ids: dict[str, Path] = {}
    seen_urls: dict[str, Path] = {}
    material_paths = sorted(MATERIALS.rglob("*.md"))

    if not material_paths:
        return ["materials/: no material notes found"]

    for path in material_paths:
        relative = path.relative_to(ROOT)
        data, parse_errors = parse_frontmatter(path)
        errors.extend(f"{relative}: {message}" for message in parse_errors)

        missing = sorted(REQUIRED_FIELDS - data.keys())
        if missing:
            errors.append(f"{relative}: missing fields: {', '.join(missing)}")
            continue

        material_id = data["id"]
        if not SLUG_RE.fullmatch(material_id):
            errors.append(f"{relative}: id must be a lowercase hyphenated slug")
        if path.stem != material_id:
            errors.append(f"{relative}: filename must match id '{material_id}'")

        previous_id = seen_ids.get(material_id)
        if previous_id:
            errors.append(
                f"{relative}: duplicate id also used by {previous_id.relative_to(ROOT)}"
            )
        else:
            seen_ids[material_id] = path

        if data["kind"] not in ALLOWED_KINDS:
            errors.append(f"{relative}: unsupported kind '{data['kind']}'")
        if data["status"] not in ALLOWED_STATUSES:
            errors.append(f"{relative}: unsupported status '{data['status']}'")

        for field in ("added", "retrieved_at"):
            try:
                date.fromisoformat(data[field])
            except ValueError:
                errors.append(f"{relative}: {field} must use YYYY-MM-DD")

        parsed_url = urlsplit(data["source_url"])
        if parsed_url.scheme not in {"http", "https"} or not parsed_url.netloc:
            errors.append(f"{relative}: source_url must be an HTTP(S) URL")
        else:
            identity = canonical_url(data["source_url"])
            previous_url = seen_urls.get(identity)
            if previous_url:
                errors.append(
                    f"{relative}: duplicate canonical URL also used by "
                    f"{previous_url.relative_to(ROOT)}"
                )
            else:
                seen_urls[identity] = path

    return errors


def validate_local_links() -> list[str]:
    errors: list[str] = []
    for path in sorted(ROOT.rglob("*.md")):
        if ".git" in path.parts:
            continue
        text = path.read_text(encoding="utf-8")
        for raw_target in LINK_RE.findall(text):
            target = raw_target.strip().strip("<>").split(maxsplit=1)[0]
            if not target or target.startswith(("#", "http://", "https://", "mailto:")):
                continue
            file_part = unquote(target.split("#", 1)[0])
            resolved = (path.parent / file_part).resolve()
            try:
                resolved.relative_to(ROOT)
            except ValueError:
                errors.append(
                    f"{path.relative_to(ROOT)}: local link escapes repository: {target}"
                )
                continue
            if not resolved.exists():
                errors.append(
                    f"{path.relative_to(ROOT)}: broken local link: {target}"
                )
    return errors


def main() -> int:
    errors = validate_materials() + validate_local_links()
    if errors:
        print("Study Vault validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    material_count = len(list(MATERIALS.rglob("*.md")))
    print(f"Study Vault validation passed ({material_count} material(s)).")
    return 0


if __name__ == "__main__":
    sys.exit(main())

