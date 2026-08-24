# Marketing & Brand Artifacts

## Brand Book — Draft v1

[`brand-book.html`](./brand-book.html) — positioning, logo system, color/type specs,
voice & tone, and marketing strategy. Open it directly in a browser to view.

Published (interactive) version: https://claude.ai/code/artifact/6bdb2ce1-78dd-4a14-b275-e7aa76a26185

**Status:** Recommendations reviewed and partially implemented on the live site —
see the book's "Implementation Checklist" section (#checklist) for what's done vs.
outstanding.

Implemented so far:
- Three-peak logo mark (`public/logo.svg`, `public/logo-reversed.svg`, `public/favicon.svg`)
- Hero eyebrow swapped to the brand mantra, "Evidence Over Guesswork"
- "Zagros = range, not a single peak" name story added to the About section
- Social preview image wired into site metadata (`public/og-image.png`)
- Everything below this line

Left as recommendations, not yet built:
- Gated/downloadable technical docs as a lead-capture magnet
- Testimonials from delivered projects (Van Arm Line, Van Pro Co, The Grizzly)

## Guidelines

- [`boilerplate.md`](./boilerplate.md) — approved company bio copy at four
  lengths (elevator pitch through ~150 words), tagline reference, contact block.
  Use verbatim for directories, guest posts, sponsorships, speaker bios.
- [`content-guidelines.md`](./content-guidelines.md) — voice & tone (condensed
  from the brand book), the illustrative-content disclosure rule, blog/resource
  frontmatter reference, and a pre-publish checklist. Read before writing a new
  post in `content/blog/` or `content/resources/`.
- [`social-posts.md`](./social-posts.md) — Telegram/WhatsApp intro posts,
  English and Farsi, ready to copy-paste into groups or DMs.

## Ready-to-use assets

All in [`./assets/`](./assets/):

| File | What it's for |
|---|---|
| `capability-statement.pdf` | One-page sales collateral — practices, capabilities, selected work, contact. Print or attach as-is. Source: `capability-statement.html`. |
| `email-signature.html` | Open in a browser, select the signature table, copy, paste into your email client's signature editor. Logo loads from the live site. |
| `social-avatar.png` (512×512) | Profile photo for LinkedIn, GitHub org, etc. |
| `linkedin-banner.png` (1584×396) | LinkedIn company/profile cover image. Content is already offset clear of the profile-photo overlap zone — don't re-center it. |

Site-served (the rendered output lives in `public/`, not `docs/`, but the source is `./assets/og-image.html`):
- `public/og-image.png` (1200×630) — social link-preview image, wired into `app/layout.tsx` metadata. Regenerate this if the mantra or tagline ever changes.
- `public/brand/signature-mark.png` — the logo the email signature loads from; keep it in sync with `public/logo.svg` if the mark changes.

## Regenerating these assets

The social images and the capability statement were built as plain HTML/CSS
(fonts via Google Fonts, same tokens as the live site) and rendered with a
headless browser at exact target dimensions — there's no separate design-tool
source file. Each rendered asset has its `.html` source alongside it in
`./assets/` (`og-image.html`, `social-avatar.html`, `linkedin-banner.html`,
`capability-statement.html`). To edit one: change the source, then re-render it
at its target pixel size (dimensions are in the table above) with a headless
browser and re-export the PNG/PDF.
