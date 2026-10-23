# scotitech.com SEO changes, 23 October 2026

Branch `seo/gsc-2026-10-23`, cut from `origin/main` at `da2e7ed` (the live site, PR #18).
Source: the accepted proposals with site `scotitech.com` and owner `claude-code` in the
23 October Search Console plan. Each change follows the proposal's `change` field,
including the verifier's corrections. Rendered `<title>` and meta lengths below are
measured on the built HTML in `out/`.

## Founder's merge and deploy note

- **Nothing is pushed or deployed.** The branch is local only. Production deploys from
  `main` when a PR is merged, so the next step is yours: push the branch, open a PR to
  `main`, and merge when you are happy.
- **Read the featured article first.** `/insights/uk-built-apple-business-app-distribution`
  is the featured article at the top of /insights. It has a new title and H1, a new meta
  description and rewritten body copy (see `scotitech-uk-built-rewrite`).
- **"Updated" dates are set to 23 October 2026.** These are the deploy date for nine
  articles. If the merge happens on a later day, change `"updated"` in those
  `content/insights/*.json` files and run `npm run insights:sync` before merging.
- **One competitor sentence remains, on a page this branch touches.**
  `/insights/wwdc26-app-store-updates-mean-for-appdeploy-rollout`, `sections[3].paragraphs[0]`,
  is already live and reads: "The winning position is not to ask enterprises to replace
  Jamf, Intune, Kandji, Mosyle, or Apple Business." No accepted proposal covers it, so it
  is unchanged. A wording that keeps the meaning without naming anyone would be: "The
  winning position is to work with the device-management tools and Apple Business set-up
  an organisation already has." That edit is yours to approve.
- **After the deploy:**
  - Run `curl -sIL https://scotitech.com/products/aicaptionstudio`. It should show a 308
    to `/products`, then a 200.
  - Request indexing in Search Console for the nine insight URLs and for `/aboutus`,
    `/contact`, `/careers` and `/products/axos`.
- Share cards in `public/og/` were not re-rendered. They come from fixed headlines in
  `scripts/og-cards.html`, and none of those changed. `/private-ai` (`public/private-ai.html`)
  was not changed, so its CSP hashes stay as they are.

## Changes by proposal

### scotitech-insight-seotitle-field (P1)
- Page: every `/insights/<slug>`. File: `src/app/(page)/insights/[slug]/page.jsx` (generateMetadata).
- Old: `<title>` was always built from `insight.title`.
- New: `<title>` uses `insight.seoTitle || insight.title`. The H1, Open Graph and X titles,
  breadcrumb and Article headline stay on `insight.title`.
- The generated modules `src/lib/insights.generated.js` and
  `src/lib/insights.review.generated.js` were regenerated with `npm run insights:sync`.
- Local `main` was not fast-forwarded. This branch was cut from `origin/main` (`da2e7ed`),
  which already contains the code, and other branches stay untouched.

### scotitech-gw-alternative-title-meta (P1)
Page `/insights/google-workspace-alternative-private-ai`.
- Title (76) "Looking for a Google Workspace alternative? Start with control, not features" → seoTitle (54) "Google Workspace alternatives for secure collaboration". The H1 is unchanged.
- Meta (187) "A practical guide for teams comparing Google Workspace alternatives, Microsoft 365 alternatives, …" → (151) "Comparing Google Workspace alternatives for secure collaboration? Check data control, enterprise search, permissions and AI boundaries before features."
- H2 "Enterprise knowledge management is the hidden requirement" → "Enterprise search and knowledge management decide the shortlist".
- updated 2026-08-16 → 2026-10-23.

### scotitech-uk-built-rewrite (P1)
Page `/insights/uk-built-apple-business-app-distribution` (the featured article).
- Title/H1 (57) "Why are so many Apple device-management vendors American?" → (52) "A UK-built layer for Apple Business app distribution".
- Meta (172) "Jamf, Kandji, Mosyle and SimpleMDM are all US companies. …" → (149) "Apple Business launched worldwide in April 2026. Why a UK-built layer for private app distribution and Apple device management matters to buyers now."
- The "All US" highlight that named vendors → "US-built": "Most of the best-known Apple device-management platforms are headquartered in the United States."
- H2 "The vendor map is a map of America" → "Most of the category is built outside the UK". Both paragraphs of that section were rewritten without vendor names.
- Removed "encrypted off-server backups in the EU are being set up".
- Removed "with no enrolment at all": the copy now describes the branded app store, device management for enrolled iPhones, iPads and Macs, and build checks.
- "the American suites are mature" → "the established suites are mature". The closing paragraph was rewritten (no "buy American", no "not ready for a full MDM platform").
- relatedProduct description → "Apple device management and a branded app store for your private apps, with build checks before each release."
- actionItems[3] → "Pilot with a small group: list the apps in your branded app store and install them on a few enrolled company devices."
- Tag "MDM alternative" removed. Read next links added (Apple Business app distribution, private app distribution on vamiq.app).
- updated 2026-10-21 → 2026-10-23.

### scotitech-firebase-title-meta (P2)
Page `/insights/firebase-app-distribution-vs-private-app-rollout`.
- Title (65) "Firebase App Distribution solves testing, not private app rollout" → seoTitle (58) "Firebase App Distribution vs TestFlight: built for testing". The H1 is unchanged.
- Meta (178) → (149) "Firebase App Distribution and TestFlight are built for pre-release testing. Here is what changes when a tested app has to reach your staff's devices."
- Read next links added: vamiq.app/testflight-for-internal-apps and vamiq.app/private-app-distribution. The workedExample link is kept.
- updated 2026-10-21 → 2026-10-23.

### scotitech-ai-workspace-definition (P2)
Page `/insights/ai-workspace-vs-digital-workplace-solutions`.
- Title/H1 (66) "AI workspace or digital workplace solution? The difference matters" → (58) "AI workspace vs digital workplace: what is the difference?".
- Meta (167) → (152) "What is an AI workspace, and how is it different from a digital workplace? What to check on data, identity, files and AI access before employee rollout."
- First H2 "AI workspace is becoming the sharper search term" → "What is an AI workspace?". Its opening paragraph is now a definition.
- Second H2 "Digital workplace solutions still matter" → "AI in the digital workplace: what changes".
- Read next links added. updated 2026-08-16 → 2026-10-23.

### scotitech-readnext-vamiq-links (P2)
- Template: a "Read next" `<nav>` was added after the article sections and before the worked example, in `src/app/(page)/insights/[slug]/page.jsx`. The links are followed.
- `readNext` was added to nine articles, exactly as listed in the proposal:
  - firebase → TestFlight and private app distribution (vamiq.app);
  - private-apple-app-rollout → private app distribution and the enterprise iOS guide (vamiq.app);
  - uk-built and wwdc26 → Apple Business app distribution and private app distribution (vamiq.app);
  - apple-business-sme-impact → Apple Business app distribution and "Do I need MDM" (vamiq.app);
  - google-workspace and ai-workspace → /products/axos and each other;
  - enterprise-ai-trials and uk-ai-governance → /products/axos.

### scotitech-private-rollout-retitle (P2)
Page `/insights/private-apple-app-rollout-needs-more-than-approval`.
- Title/H1 (59) "Private app distribution needs more than App Store approval" → (60) "Private Apple app rollout needs more than App Store approval".
- Meta (160) → (152) "Getting a private iPhone app approved is the start. How Apple Business Custom Apps, device management and Vamiq turn approval into a controlled rollout."
- Read next links added. updated 2026-10-21 → 2026-10-23.

### scotitech-seo-memo-copy (P2)
- Firebase:
  - summary "Vamiq should sit … operating layer" → "Vamiq sits … the layer for private app rollout".
  - "Search intent" highlight → "The shift / Testing vs rollout".
  - "The keyword data is clear: …" paragraph → the developer-pain sentence alone.
  - "Vamiq should not pretend to replace every developer distribution tool." → "Vamiq does not replace developer distribution tools."
  - "The best SEO answer is also the honest product answer:" → "The short answer:". The final paragraph now covers Custom Apps, install by group and a branded app store.
- Google Workspace:
  - summary first sentence → "Teams comparing Google Workspace alternatives are rarely comparing mail, files and chat alone."
  - "Search intent" highlight → "Why teams look / Control, not cost".
  - The "Microsoft 365 alternative and Office 365 alternative searches" sentence → "The same is true across the other big productivity suites."
  - The Microsoft 365 and Office 365 tags were removed.
- AI workspace:
  - "Search demand" highlight → "Buyer focus / AI workspace".
  - "private AI, self-hosted AI, self hosted AI, and on premise AI discussions" → "private, self-hosted and on-premise AI".
  - The duplicate "self hosted AI" tag was removed.

### scotitech-company-page-titles (P2)
- `/aboutus`: "About ScotiTech | ScotiTech" → "About ScotiTech: the company behind Vamiq and AXOS" (50, absolute).
- `/contact`: "Contact ScotiTech | ScotiTech" → "Contact ScotiTech: Vamiq, AXOS and partnerships" (47, absolute). Meta (103) → (136) "Talk to ScotiTech about Vamiq, an AXOS deployment, Apple Business set-up or partnerships. Email info@scotitech.com or call 01698 609091."
- `/careers`: "Careers: growth roles | ScotiTech" → "Careers at ScotiTech: growth and partner roles" (46, absolute).

### scotitech-axos-title (P2)
Page `/products/axos`.
- Title "AXOS: private AI workspace on your own servers | ScotiTech" (58) → "AXOS: self-hosted enterprise AI workspace | ScotiTech" (53).
- Meta (151) → (154) "AXOS is a self-hosted enterprise AI workspace: mail, files, chat, video and tasks with governed AI built in, running entirely inside your own environment."
- The H1 "AXOS" and its tagline are unchanged.

### scotitech-meta-length (P3)
- Home (`src/lib/seo.js` SITE_DESCRIPTION), 164 → 144: "ScotiTech makes Vamiq, Apple device management with a private app store for your own apps, and AXOS, a private AI workspace on your own servers." The home H1 is unchanged.
- `/trust` 162 → 148. `/media` 181 → 144. `/products` 160 → 146. `/products/vamiq` 177 → 138. `/products/claritypath` 172 → 149. The wording is exactly as in the proposal.

### scotitech-other-insight-titles (P3)
- `/insights/enterprise-ai-trials-need-tighter-control-before-rollout`: title 65 → seoTitle (56) "Enterprise AI trials need tighter control before rollout". Meta 160 → 151.
- `/insights/uk-ai-governance-gap-business-policy`: title 74 → seoTitle (60) "UK AI governance: 5% of AI-using firms have a written policy". 'Written' is kept, as the survey supports. Meta 159 → 153.
- `/insights/apple-business-sme-impact`: title/H1 63 "Apple Business Manager custom apps need a cleaner rollout model" → 55 "Apple Business custom apps need a cleaner rollout model". Meta 158 → 144 "How SMEs should roll out Apple Business (formerly Apple Business Manager) custom apps, with device management and access governance kept simple."
- `/insights/wwdc26-app-store-updates-mean-for-appdeploy-rollout`: title 78 → seoTitle (54) "Apple Business Admin APIs and private app distribution". The meta (151) and slug are unchanged.
- updated → 2026-10-23 on all four. They also get the Read next links.

### scotitech-regus-address-nap (P3)
- `/contact`, operational office: "Regus - Lanarkshire Eurocentral, Maxim 1, 2 Parklands Way, …" → "Maxim 1, 2 Parklands Way, Eurocentral, Motherwell ML1 4WR, United Kingdom".
- `/contact`, company card: "UK-registered technology and product company. Our operational office is at Regus Lanarkshire Eurocentral, working with clients and partners worldwide." → "UK-registered software company. Our operational office is at Maxim 1, Eurocentral, and we work with clients and partners worldwide."
- Organization JSON-LD in `src/app/layout.js` (every page): streetAddress "Maxim 1, 2 Parklands Way, Maxim Business Park, 1st Floor" → "Maxim 1, 2 Parklands Way, Eurocentral". addressRegion "Eurocentral, Scotland" → "North Lanarkshire".
- The Google Maps link still says Regus, so Maps finds the building. The statutory footer line is unchanged.

### scotitech-appdeploy-redirect-verified (P3)
- The vercel.json redirects for /products/appdeploy(/) and /products/opsly(/) are kept.
- Deleted the stubs `src/app/(page)/products/appdeploy/page.jsx` and `src/app/(page)/products/opsly/page.jsx`. vercel.json had already taken over their routes; neither page is in `out/` now.
- Added the permanent redirects `/products/aicaptionstudio` and `/products/aicaptionstudio/` → `/products` to vercel.json.
- `scripts/lib/editorial-ai.mjs`: the AppDeploy draft link `href "/products/appdeploy"` → `"/products/vamiq"`. This was the optional item.

## Gate results (23 October 2026)

| Check | Result |
| --- | --- |
| `npm ci` | Pass |
| `npm run lint` (ESLint) | Pass, no problems |
| Tests | The repo has no test script |
| `npm run insights:sync` | Pass: 11 published, 0 drafts, 0 scheduled. The HEAD generated files matched the HEAD content before the edits, so the diff is only this change. |
| `npm run build` (static export) | Pass: 34 static pages exported |
| `<title>` ≤ 60 on changed pages | Pass on all 20 (longest 60) |
| Meta description ≤ 155 | Pass on all 20 (longest 154) |
| Exactly one H1 | Pass on all 20 |
| Canonical present and self-referencing | Pass on all 20 |
| /products/appdeploy and /products/opsly absent from `out/` | Pass |
| Internal SEO-memo wording ("keyword data", "Search intent", "should not pretend", "being set up" and others) | None on any changed page |
| Competitor names (Jamf, Kandji, Mosyle, SimpleMDM, Addigy, Appaloosa, Intune, Microsoft 365, Office 365) | None on 19 of the 20 changed pages. On the whole built site they appear only in the already-live wwdc26 sentence noted above, which is left for the founder. |

The 20 pages checked:
- `/`, `/aboutus`, `/contact`, `/careers`, `/trust`, `/media`;
- `/products`, `/products/vamiq`, `/products/axos`, `/products/claritypath`;
- `/insights`, and the nine changed `/insights/<slug>` pages.

Side effects:
- On /insights, the four 14 July articles now sort in a different order. Sorting breaks ties by the `updated` date.
- The featured article is still `uk-built-apple-business-app-distribution`.
