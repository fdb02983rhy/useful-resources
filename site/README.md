# Useful Resources frontend

A searchable, filterable frontend for the repository's resource notes.

## Data

Run `npm run sync` after adding or changing files under `resources/`. This rebuilds
`app/resources.ts` from the Markdown frontmatter, summaries, saved reasons, and
source highlights.

## Development

- `npm run dev` starts the local site.
- `npm run build` creates the deployment build.
