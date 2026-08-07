"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { resources, type Resource } from "./resources";

type SortMode = "recent" | "title" | "kind";

const displayTopic = (topic: string) =>
  topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const displayKind = (kind: string) =>
  kind.charAt(0).toUpperCase() + kind.slice(1);

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

export default function Home() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const [topic, setTopic] = useState("all");
  const [sortMode, setSortMode] = useState<SortMode>("recent");
  const [selected, setSelected] = useState<Resource | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const kinds = useMemo(
    () => [...new Set(resources.map((resource) => resource.kind))].sort(),
    [],
  );

  const topics = useMemo(
    () => [...new Set(resources.flatMap((resource) => resource.topics))].sort(),
    [],
  );

  const kindCounts = useMemo(
    () =>
      Object.fromEntries(
        kinds.map((item) => [
          item,
          resources.filter((resource) => resource.kind === item).length,
        ]),
      ),
    [kinds],
  );

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = resources.filter((resource) => {
      const searchable = [
        resource.title,
        resource.kind,
        resource.summary,
        ...resource.topics,
        ...resource.whySaved,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (kind === "all" || resource.kind === kind) &&
        (topic === "all" || resource.topics.includes(topic))
      );
    });

    return matches.toSorted((a, b) => {
      if (sortMode === "title") return a.title.localeCompare(b.title);
      if (sortMode === "kind") {
        return a.kind.localeCompare(b.kind) || a.title.localeCompare(b.title);
      }
      return b.added.localeCompare(a.added) || a.title.localeCompare(b.title);
    });
  }, [query, kind, topic, sortMode]);

  const hasFilters = query || kind !== "all" || topic !== "all";

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    document.addEventListener("keydown", focusSearch);
    return () => document.removeEventListener("keydown", focusSearch);
  }, []);

  useEffect(() => {
    if (!selected) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("panel-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("panel-open");
    };
  }, [selected]);

  const clearFilters = () => {
    setQuery("");
    setKind("all");
    setTopic("all");
  };

  return (
    <main>
      <header className="masthead">
        <nav className="topline" aria-label="Site">
          <span className="wordmark">UR / 26</span>
          <span className="library-status">
            <span className="status-dot" aria-hidden="true" />
            Reference library
          </span>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A curated working index</p>
            <h1>Useful<br />Resources</h1>
            <p className="hero-description">
              Tools, papers, courses, and field notes worth returning to—researched,
              summarized, and organized for fast retrieval.
            </p>
          </div>

          <div className="stats" aria-label="Library statistics">
            <div className="stat">
              <strong>{resources.length.toString().padStart(2, "0")}</strong>
              <span>Resources</span>
            </div>
            <div className="stat">
              <strong>{topics.length.toString().padStart(2, "0")}</strong>
              <span>Topics</span>
            </div>
            <div className="stat">
              <strong>{kinds.length.toString().padStart(2, "0")}</strong>
              <span>Formats</span>
            </div>
          </div>
        </div>

        <label className="search-box">
          <span className="search-mark" aria-hidden="true">⌕</span>
          <span className="sr-only">Search resources</span>
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles, topics, or notes…"
          />
          <kbd>⌘ K</kbd>
        </label>
      </header>

      <div className="library-shell">
        <aside className="filters" aria-label="Resource filters">
          <div className="filter-section">
            <p className="filter-label">Format</p>
            <button
              className={kind === "all" ? "filter-row active" : "filter-row"}
              onClick={() => setKind("all")}
              type="button"
            >
              <span>All formats</span>
              <span>{resources.length}</span>
            </button>
            {kinds.map((item) => (
              <button
                className={kind === item ? "filter-row active" : "filter-row"}
                onClick={() => setKind(item)}
                type="button"
                key={item}
              >
                <span>{displayKind(item)}</span>
                <span>{kindCounts[item]}</span>
              </button>
            ))}
          </div>

          <div className="filter-section topic-filter">
            <p className="filter-label">Topic</p>
            <div className="topic-list">
              <button
                className={topic === "all" ? "topic-button active" : "topic-button"}
                onClick={() => setTopic("all")}
                type="button"
              >
                All topics
              </button>
              {topics.map((item) => (
                <button
                  className={topic === item ? "topic-button active" : "topic-button"}
                  onClick={() => setTopic(item)}
                  type="button"
                  key={item}
                >
                  {displayTopic(item)}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="catalog" aria-labelledby="catalog-heading">
          <div className="catalog-toolbar">
            <div>
              <p className="catalog-kicker">Index</p>
              <h2 id="catalog-heading">
                {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
              </h2>
            </div>
            <label className="sort-control">
              <span>Sort</span>
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
              >
                <option value="recent">Recently added</option>
                <option value="title">Title A–Z</option>
                <option value="kind">Format</option>
              </select>
            </label>
          </div>

          {filteredResources.length ? (
            <div className="resource-grid">
              {filteredResources.map((resource, index) => (
                <article className="resource-card" data-kind={resource.kind} key={resource.id}>
                  <div className="card-topline">
                    <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="kind-label">{displayKind(resource.kind)}</span>
                  </div>

                  <h3>{resource.title}</h3>
                  <p className="card-summary">{resource.summary}</p>

                  <div className="card-topics" aria-label="Topics">
                    {resource.topics.slice(0, 3).map((item) => (
                      <span key={item}>{displayTopic(item)}</span>
                    ))}
                    {resource.topics.length > 3 && <span>+{resource.topics.length - 3}</span>}
                  </div>

                  <div className="card-footer">
                    <span>{formatDate(resource.added)}</span>
                    <button type="button" onClick={() => setSelected(resource)}>
                      View notes <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span aria-hidden="true">00</span>
              <h3>No matching resources</h3>
              <p>Try a broader phrase or clear the active filters.</p>
              {hasFilters && <button type="button" onClick={clearFilters}>Clear filters</button>}
            </div>
          )}
        </section>
      </div>

      <footer className="site-footer">
        <span>Useful Resources</span>
        <span>Git-backed · source-aware · compact by design</span>
      </footer>

      {selected && (
        <div className="detail-layer">
          <button
            className="detail-backdrop"
            type="button"
            aria-label="Close resource notes"
            onClick={() => setSelected(null)}
          />
          <aside className="detail-panel" role="dialog" aria-modal="true" aria-labelledby="detail-title">
            <div className="detail-header">
              <span>{displayKind(selected.kind)}</span>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close resource notes">×</button>
            </div>

            <div className="detail-body">
              <p className="detail-index">Reference / {selected.status}</p>
              <h2 id="detail-title">{selected.title}</h2>
              <p className="detail-summary">{selected.summary}</p>

              {!!selected.whySaved.length && (
                <section>
                  <h3>Why it matters</h3>
                  <ul>
                    {selected.whySaved.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              )}

              {!!selected.highlights.length && (
                <section>
                  <h3>Source highlights</h3>
                  <ul>
                    {selected.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              )}

              <div className="detail-topics">
                {selected.topics.map((item) => <span key={item}>{displayTopic(item)}</span>)}
              </div>
            </div>

            <a className="source-link" href={selected.sourceUrl} target="_blank" rel="noreferrer">
              Open original source <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      )}
    </main>
  );
}
