import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the resource library", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Useful Resources — Curated reference library<\/title>/i);
  assert.match(html, /Reference library/);
  assert.match(html, />17<\/strong><span>Resources<\/span>/);
  assert.match(html, /Search titles, topics, or notes/);
  assert.match(html, /All formats/);
  assert.match(html, /All topics/);
  assert.match(html, /View notes/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps generated resources and controls wired into the client", async () => {
  const [page, layout, generated] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/resources.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /from "\.\/resources"/);
  assert.match(page, /resource\.topics\.includes\(topic\)/);
  assert.match(page, /searchRef\.current\?\.focus\(\)/);
  assert.match(layout, /Useful Resources — Curated reference library/);
  assert.equal((generated.match(/^ {2}\{$/gm) ?? []).length, 17);
  assert.doesNotMatch(page, /react-loading-skeleton|_sites-preview/);
});
