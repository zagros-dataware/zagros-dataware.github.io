# Content & Editorial Guidelines

Practical rules for anything published to the blog (`content/blog/`) or resource
library (`content/resources/`). Read this before writing a new post — it's the
difference between the site reading as one voice over time versus a pile of
one-off drafts.

## Voice, condensed

Full detail in the [brand book](./brand-book.html#voice) — the short version:

- **Rigorous, plainspoken, unshowy.** Name the actual mistake. Give a real
  diagnostic question a reader can apply to their own situation.
- **Vary sentence length on purpose.** A short sentence after two long ones
  lands like a verdict.
- **Say "typically" for patterns, not guarantees.** "In engagements of this
  shape" is honest; "always" and "guaranteed" usually aren't.
- **Banned words:** synergy, leverage (as a verb), holistic, cutting-edge,
  world-class, seamless, unlock, empower, journey. If a sentence would read the
  same with any noun swapped in, it's not saying anything — rewrite it specific
  to this business.

## The illustrative-content rule

This is a hard rule, not a style preference: **never present a fabricated
client, result, or statistic as real.** Every resource-library entry has an
`illustrative` frontmatter flag —

- `illustrative: true` — the scenario is a representative pattern, not a
  specific named client. Must open with the disclosure blockquote (copy the
  pattern from any existing use case in `content/resources/`) and must not name
  a real company.
- `illustrative: false` — reserved for genuinely disclosed, factual work (the
  three "Selected Work" projects, or anything a real client has explicitly
  approved for public reference).

If you don't know whether something is real, treat it as illustrative and flag
it for a human to confirm before publishing.

## Frontmatter reference

**Blog post** (`content/blog/<slug>.md`):

```yaml
title: "..."
date: "YYYY-MM-DD"
excerpt: "One or two sentences — this is what renders on cards and teasers."
tags: ["Tag One", "Tag Two"]
track: "enterprise" | "startup" | "local"
```

**Resource** (`content/resources/<slug>.md`) — adds two fields:

```yaml
type: "use-case" | "technical-doc"
illustrative: true | false
```

`track` determines which practice-area accent color the card renders with
(navy/emerald for enterprise, indigo for startup, amber for local) and which
track pages it appears as related content on — get it right, it's load-bearing
for the site's layout, not just metadata.

## Before publishing, check

1. Does the `excerpt` actually make someone want to read the piece, or is it a
   restated title?
2. Is `track` correct? (Determines color-coding and where it surfaces sitewide.)
3. If it's a use case: is `illustrative` set correctly, and if `true`, is the
   disclosure blockquote present?
4. Does the piece contain at least one concrete, checkable claim — a diagnostic
   question, a decision framework, a specific pattern — rather than only
   general advice?
5. Read the first two sentences out loud. If they could open a post from any
   generic consultancy, rewrite them.

## Repurposing for social

Per the brand book's marketing strategy: every long-form post gets a shortened
LinkedIn version. Keep the opening hook (usually the "mistake" or diagnostic
question), cut supporting detail, end with a link back to the full post — don't
try to compress the whole argument into the post itself.
