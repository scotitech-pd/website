import {
  buildSeoDescription,
  formatDisplayDate,
  slugify,
  todayUtc,
} from "./insights.mjs";

const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
const OPENAI_TIMEOUT_MS = Number(process.env.OPENAI_TIMEOUT_MS || 60000);

const ARTICLE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "category",
    "topic",
    "title",
    "summary",
    "seoDescription",
    "tags",
    "highlights",
    "sections",
    "actionItems",
    "relatedProduct",
  ],
  properties: {
    category: { type: "string" },
    topic: { type: "string" },
    title: { type: "string" },
    summary: { type: "string" },
    seoDescription: { type: "string" },
    tags: {
      type: "array",
      minItems: 4,
      items: { type: "string" },
    },
    highlights: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["label", "value", "description"],
        properties: {
          label: { type: "string" },
          value: { type: "string" },
          description: { type: "string" },
        },
      },
    },
    sections: {
      type: "array",
      minItems: 4,
      maxItems: 6,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["heading", "paragraphs"],
        properties: {
          heading: { type: "string" },
          paragraphs: {
            type: "array",
            minItems: 2,
            maxItems: 2,
            items: { type: "string" },
          },
        },
      },
    },
    actionItems: {
      type: "array",
      minItems: 4,
      maxItems: 6,
      items: { type: "string" },
    },
    relatedProduct: {
      type: "object",
      additionalProperties: false,
      required: ["name", "href", "description", "cta"],
      properties: {
        name: { type: "string" },
        href: { type: "string" },
        description: { type: "string" },
        cta: { type: "string" },
      },
    },
  },
};

function buildPrompt(brief) {
  return [
    "Write a production-ready ScotiTech insight article.",
    "Keep the tone credible, specific, and engaging for business buyers and operators.",
    "Do not overstate product maturity, market position, or unsupported capabilities.",
    "Use the provided source notes and angle. If source details are thin, stay conservative and avoid invention.",
    "Focus on practical interpretation, not generic news recap.",
    "",
    `Topic: ${brief.topic}`,
    `Angle: ${brief.angle}`,
    `Product: ${brief.product}`,
    `Category: ${brief.category}`,
    `Preferred title: ${brief.title || "Create the title yourself"}`,
    `Keywords: ${(brief.keywords || []).join(", ")}`,
    `Source name: ${brief.sourceName || "Not provided"}`,
    `Source URL: ${brief.sourceUrl || "Not provided"}`,
    `Source notes: ${brief.sourceNotes || "Not provided"}`,
    `Related product href: ${brief.relatedProductHref}`,
    `Related product CTA: ${brief.relatedProductCta}`,
  ].join("\n");
}

function extractOutputText(payload) {
  if (payload.output_text) return payload.output_text;

  if (!Array.isArray(payload.output)) return "";

  return payload.output
    .flatMap((item) => item.content || [])
    .map((contentItem) => {
      if (typeof contentItem.text === "string") return contentItem.text;
      return contentItem?.text?.value || "";
    })
    .filter(Boolean)
    .join("\n");
}

async function generateStructuredArticleWithOpenAI(brief) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL;

  if (!apiKey || !model) {
    return null;
  }

  const response = await fetch(`${OPENAI_BASE_URL}/responses`, {
    signal: AbortSignal.timeout(OPENAI_TIMEOUT_MS),
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      reasoning: {
        effort: "minimal",
      },
      max_output_tokens: 2200,
      input: [
        {
          role: "system",
          content:
            "You write original B2B software insight articles for the ScotiTech website. You are careful, engaging, and conservative with claims.",
        },
        {
          role: "user",
          content: buildPrompt(brief),
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "insight_article",
          strict: true,
          schema: ARTICLE_SCHEMA,
        },
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `OpenAI draft generation failed (${response.status}): ${errorText}`
    );
  }

  const payload = await response.json();
  const outputText = extractOutputText(payload);
  if (!outputText) {
    throw new Error("OpenAI draft generation returned no article payload");
  }

  return JSON.parse(outputText);
}

function buildTemplateArticle(brief) {
  const productLine =
    brief.product === "AXOS"
      ? "governance-first AI workspaces"
      : "deployment and rollout operations";

  const title =
    brief.title ||
    `${brief.topic} is becoming a more operational conversation for ${brief.product}`;

  const summary = `${brief.angle} This draft keeps the focus on what changed, why it matters in practice, and how ScotiTech should frame the opportunity without overstating the story.`;

  return {
    category: brief.category,
    topic: brief.topic,
    title,
    summary,
    seoDescription: buildSeoDescription(summary),
    tags: brief.keywords?.length
      ? brief.keywords
      : [brief.topic, brief.product, "ScotiTech", "Business technology"],
    highlights: [
      {
        label: "What changed",
        value: "Operational signal",
        description:
          "The update matters because it changes how teams make rollout, governance, or product operations decisions in practice.",
      },
      {
        label: "Why it matters",
        value: "Clearer buyer lens",
        description:
          "The strongest stories translate platform or policy shifts into plain business implications instead of abstract commentary.",
      },
      {
        label: "ScotiTech angle",
        value: brief.product,
        description: `The article should connect the shift back to ${brief.product} and ${productLine} in a grounded, commercially credible way.`,
      },
    ],
    sections: [
      {
        heading: "The update deserves a practical reading",
        paragraphs: [
          `${brief.angle} This section should explain the shift in business terms, not as a generic product announcement.`,
          `Use ${brief.sourceName || "the named source"} to frame what changed, then connect it to the operators who have to make rollout or governance decisions with limited time and incomplete visibility.`,
        ],
      },
      {
        heading: "Where teams usually feel the friction",
        paragraphs: [
          `The article should explain the operational gap that appears between the official capability and day-to-day adoption.`,
          "That is usually where ScotiTech products become relevant: not by replacing the platform, but by making the operating layer clearer, more controlled, and easier to trust.",
        ],
      },
      {
        heading: "The buyer question is getting sharper",
        paragraphs: [
          "Strong insight content should describe the real questions a buyer, product owner, or IT lead will ask next.",
          "That keeps the article useful for both search and sales conversations because it speaks to concrete evaluation criteria instead of vague trends.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          `The close should position ${brief.product} honestly: aligned to the customer's existing stack, useful in live operations, and clear about where control or clarity improves.`,
          "End with practical guidance that feels decision-ready rather than promotional.",
        ],
      },
    ],
    actionItems: [
      "State the operational shift in one sentence before explaining the product angle.",
      "Translate the update into buyer questions, rollout implications, or governance checks.",
      "Keep claims tied to the source notes and remove anything that sounds inflated or speculative.",
      "Use the related product link as the next step, not as a hard sell inside every paragraph.",
    ],
    relatedProduct: {
      name: brief.product,
      href: brief.relatedProductHref,
      description: brief.relatedProductDescription,
      cta: brief.relatedProductCta,
    },
  };
}

function defaultImageForProduct(product) {
  if (product === "AXOS") return "/images/insights/secure-ai-governance.jpg";
  return "/images/insights/apple-business-team-devices.jpg";
}

function defaultRelatedProduct(brief) {
  if (brief.product === "AXOS") {
    return {
      href: "/products/axos",
      cta: "Explore AXOS",
      description:
        "A controlled, enterprise-focused environment for private AI workflows, team operations, and governance-first adoption.",
    };
  }

  if (brief.product === "AppDeploy") {
    return {
      href: "/products/appdeploy",
      cta: "Explore AppDeploy",
      description:
        "A branded operational layer for internal app access, rollout visibility, and clearer Apple deployment workflows.",
    };
  }

  return {
    href: "/products",
    cta: "Explore products",
    description:
      "Focused software products designed around rollout clarity, operational control, and practical business adoption.",
  };
}

export async function createInsightFromBrief(rawBrief) {
  const defaults = defaultRelatedProduct(rawBrief);
  const brief = {
    category: rawBrief.category || "Insight Briefing",
    topic: rawBrief.topic || rawBrief.product || "ScotiTech insight",
    product: rawBrief.product || "ScotiTech Solutions",
    angle: rawBrief.angle || rawBrief.title || "A practical ScotiTech briefing",
    title: rawBrief.title || "",
    keywords: Array.isArray(rawBrief.keywords) ? rawBrief.keywords : [],
    sourceName: rawBrief.sourceName || "ScotiTech editorial team",
    sourceUrl: rawBrief.sourceUrl || "https://scotitech.com/insights",
    sourceNotes: rawBrief.sourceNotes || "",
    relatedProductHref: rawBrief.relatedProductHref || defaults.href,
    relatedProductCta: rawBrief.relatedProductCta || defaults.cta,
    relatedProductDescription:
      rawBrief.relatedProductDescription || defaults.description,
  };

  let article = null;
  let generationMeta = null;

  try {
    article = await generateStructuredArticleWithOpenAI(brief);
    if (article) {
      generationMeta = {
        mode: "openai",
        model: process.env.OPENAI_MODEL || null,
      };
    }
  } catch (error) {
    generationMeta = {
      mode: "template-fallback",
      model: process.env.OPENAI_MODEL || null,
      error: error instanceof Error ? error.message : "Unknown generation error",
    };
  }

  article = article || buildTemplateArticle(brief);

  const date = rawBrief.date || todayUtc();
  const slug = rawBrief.slug || slugify(rawBrief.title || article.title);

  return {
    status: rawBrief.publish ? "published" : rawBrief.status || "draft",
    featured: Boolean(rawBrief.featured),
    slug,
    date,
    updated: rawBrief.updated || date,
    displayDate: rawBrief.displayDate || formatDisplayDate(date),
    readTime: rawBrief.readTime || "",
    sourceName: brief.sourceName,
    sourceUrl: brief.sourceUrl,
    image: rawBrief.image || defaultImageForProduct(brief.product),
    generationMeta,
    ...article,
  };
}
