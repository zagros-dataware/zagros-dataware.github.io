// When built inside GitHub Actions for GitHub Pages, the site is served from
// https://<org>.github.io/<repo>/ rather than the domain root, so assets and
// links need that repo name as a base path. The one exception is a repo
// literally named <org>.github.io, which GitHub always serves at the root
// domain. Locally (and on a custom domain) this stays empty.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPagesRepo = repoName?.endsWith(".github.io") ?? false;

export const basePath =
  process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgPagesRepo
    ? `/${repoName}`
    : "";
