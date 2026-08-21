// When built inside GitHub Actions for GitHub Pages, the site is served from
// https://<org>.github.io/<repo>/ rather than the domain root, so assets and
// links need that repo name as a base path. Locally (and on a custom domain)
// this stays empty.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export const basePath =
  process.env.GITHUB_ACTIONS && repoName ? `/${repoName}` : "";
