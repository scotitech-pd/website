# Editorial Pipeline

ScotiTech insights now live in `content/insights/*.json` and are compiled into
`src/lib/insights.generated.js`.

## OpenAI setup

Create a local `.env.local` file in the website repo:

```bash
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-5-mini
```

The editorial scripts automatically load `.env.local`, so you do not need to
export those variables manually every time.

`gpt-5-mini` is a practical default for draft generation speed. If you want a
higher-quality but slower pass, switch the model to `gpt-5`.

## Publish workflow

1. Add or edit an article JSON file in `content/insights/`.
2. Run `npm run insights:sync`.
3. Published articles appear automatically on `/insights`, the home-page
   insights section, and `sitemap.xml`.

## Review workflow

On localhost, open `/editorial` to see unpublished draft and scheduled
articles in website design. Each draft card links to a full-page preview and
shows the exact publish command for approval.

## Draft workflow

Every draft requires an independent primary reference. Use an authoritative
external source such as GOV.UK, a UK regulator, official product documentation,
or a vendor's original announcement. ScotiTech domains are rejected as article
sources; product links belong in the separate related-product field.

Create a review-ready draft directly from the terminal:

```bash
npm run insights:draft -- \
  --topic "Apple Business rollout visibility" \
  --angle "How live device and group context changes private app deployment" \
  --product "AppDeploy" \
  --source-name "Apple Newsroom" \
  --source-url "https://www.apple.com/newsroom/"
```

If `OPENAI_API_KEY` and `OPENAI_MODEL` are set, the script uses the OpenAI
Responses API to generate structured article content. Without those variables,
it creates a strong editorial scaffold for human review instead of failing.

## Scheduled draft queue

Queue recurring topics in `content/editorial-queue.json`, then run:

```bash
npm run insights:pipeline
```

Each queued item is converted into a draft article file and tracked back in the
queue with its generated slug and generation date.

## Publish a draft

```bash
npm run insights:publish -- your-insight-slug
```

That flips the article to `published`, refreshes the generated insights module,
and exposes it across the site.
