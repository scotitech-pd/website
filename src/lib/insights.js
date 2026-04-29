export const insights = [
  {
    slug: "apple-business-replaces-apple-business-manager",
    category: "Industry Update",
    topic: "Apple ecosystem",
    title:
      "Apple Business replaces Apple Business Manager: what SMEs need to know",
    summary:
      "Apple is consolidating Apple Business Manager, Apple Business Essentials, and Apple Business Connect into Apple Business. For SMEs, the change matters because device management, business identity, app distribution, and brand visibility are moving into one Apple platform.",
    seoDescription:
      "A practical ScotiTech briefing on Apple Business replacing Apple Business Manager, what changed on 14 April 2026, and how SMEs should think about device deployment, MDM, and internal app rollout.",
    date: "2026-03-24",
    updated: "2026-04-29",
    displayDate: "24 March 2026",
    readTime: "5 min read",
    sourceName: "Apple Newsroom",
    sourceUrl:
      "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    tags: ["Apple Business", "MDM", "SME technology", "AppDeploy"],
    highlights: [
      {
        label: "Launch date",
        value: "14 April 2026",
        description:
          "Apple said the new Apple Business platform would become available from this date.",
      },
      {
        label: "What is changing",
        value: "One platform",
        description:
          "Apple Business brings together tools previously split across Business Manager, Business Essentials, and Business Connect.",
      },
      {
        label: "Why it matters",
        value: "Cleaner operations",
        description:
          "SMEs get a simpler route for managing devices, employees, apps, brand presence, and support.",
      },
    ],
    sections: [
      {
        heading: "What Apple announced",
        paragraphs: [
          "On 24 March 2026, Apple announced Apple Business as a new all-in-one platform for organisations. Apple said the platform would be available from 14 April 2026 in more than 200 countries and regions.",
          "The important operational change is consolidation. Apple Business Manager, Apple Business Essentials, and Apple Business Connect are being folded into Apple Business, creating one place for device management, employee access, app distribution, business identity, location details, and support options.",
        ],
      },
      {
        heading: "Why SMEs should pay attention",
        paragraphs: [
          "For small and mid-sized organisations, Apple device workflows often become fragmented. One person manages devices, another handles app access, another updates brand details, and support often lives outside the same process.",
          "Apple Business reduces that fragmentation at the platform level. That does not remove the need for clear internal rollout processes, but it gives teams a better foundation for onboarding staff, preparing devices, distributing approved apps, and keeping business details consistent across Apple services.",
        ],
      },
      {
        heading: "What changes for device and app rollout",
        paragraphs: [
          "The built-in mobile device management direction is the key signal. Apple is making device setup, settings, employee groups, security, and app assignment easier to manage from one business-facing surface.",
          "For teams distributing internal iOS apps, this makes the surrounding workflow more important. Businesses still need clear release ownership, access approvals, install communication, legal acceptance, and visibility into who has access to which version.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "This announcement strengthens the case for practical operational layers around Apple Business based workflows. Apple can simplify the platform foundation, while products such as AppDeploy can help organisations present branded internal app access, manage requests, coordinate rollout steps, and make distribution easier for non-technical stakeholders.",
          "The best result is not more tooling for its own sake. It is a cleaner path from employee onboarding to secure app access, with fewer manual handoffs and less confusion for administrators and users.",
        ],
      },
    ],
    actionItems: [
      "Review who currently owns Apple device, app, and employee-access workflows.",
      "Map any Apple Business Manager, Business Essentials, or Business Connect activity into the new Apple Business structure.",
      "Check whether internal app distribution still depends on manual instructions or disconnected approval steps.",
      "Create a clearer rollout process for access requests, release communication, and support.",
    ],
  },
];

export const featuredInsight = insights[0];

export function getInsightBySlug(slug) {
  return insights.find((insight) => insight.slug === slug);
}
