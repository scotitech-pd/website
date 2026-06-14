export const insights = [
  {
    slug: "wwdc26-app-store-updates-mean-for-appdeploy-rollout",
    category: "WWDC 2026 Briefing",
    topic: "AppDeploy",
    title:
      "Apple Business Admin APIs could make AppDeploy the rollout command centre",
    summary:
      "The old private app question was simple: how do users install it? The better enterprise question is sharper: which people, devices, groups, MDM routes, app versions, and exceptions are actually in play? Apple's direction with Apple Business, including Admin API access to device, user, audit, and MDM service data, gives AppDeploy a bigger path: from polished install portal to rollout command centre for private Apple apps.",
    seoDescription:
      "A ScotiTech briefing on Apple Business Admin APIs, WWDC26 App Store updates, live fleet visibility, group-based app distribution, MDM-aware deployment intelligence, and AppDeploy.",
    date: "2026-06-13",
    updated: "2026-06-14",
    displayDate: "13 June 2026",
    readTime: "7 min read",
    sourceName: "Apple Newsroom",
    sourceUrl:
      "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/",
    image: "/images/insights/apple-business-team-devices.jpg",
    tags: ["Apple Business", "Admin API", "MDM", "AppDeploy", "WWDC26"],
    relatedProduct: {
      name: "AppDeploy",
      href: "/products/appdeploy",
      description:
        "A branded workspace for private app access, install guidance, rollout ownership, and clearer Apple Business-aligned delivery.",
      cta: "Explore AppDeploy",
    },
    highlights: [
      {
        label: "Admin API",
        value: "Live context",
        description:
          "Device, user, audit, and MDM service data can move private app rollout from static instructions to live operational awareness.",
      },
      {
        label: "Distribution",
        value: "Groups over guesswork",
        description:
          "Employee groups and app distribution create a cleaner path from business audience to app version, access route, and rollout wave.",
      },
      {
        label: "MDM context",
        value: "Command centre",
        description:
          "AppDeploy can sit above existing MDM environments and give product, IT, and operations teams one clearer view of rollout status.",
      },
    ],
    sections: [
      {
        heading: "The real shift is control, not another app listing",
        paragraphs: [
          "WWDC26 includes useful App Store Connect improvements, from product page previews to richer metadata and volume purchasing routes. Those updates matter, but they are not the part that makes AppDeploy strategically more interesting.",
          "The larger signal is Apple Business. Apple is pulling device management, employee groups, app distribution, Blueprints, and Admin API access into a more unified business platform. For AppDeploy, that opens a stronger ambition: not only helping someone find an app, but helping a business understand whether rollout is actually working.",
        ],
      },
      {
        heading: "Fleet visibility changes the whole conversation",
        paragraphs: [
          "Private rollout becomes serious when the team can answer practical questions quickly: which enrolled Apple devices exist, which OS versions are in the field, which MDM service owns each device, which app version is expected, and where deployment is stuck.",
          "That is the kind of visibility that turns AppDeploy from a branded front door into a rollout intelligence layer. The product opportunity is not more decoration around an install link. It is centralised status, exceptions, version clarity, and deployment confidence.",
        ],
      },
      {
        heading: "Groups make distribution feel enterprise-ready",
        paragraphs: [
          "Enterprise rollout rarely means one audience and one version. A pilot group may need a controlled build, a field team may need a production release, and a leadership team may need visibility before wider launch.",
          "Apple Business employee groups and app distribution workflows make that structure more natural. AppDeploy should treat groups, eligibility, app versions, install routes, and rollout waves as first-class product objects, not manual notes scattered across emails.",
        ],
      },
      {
        heading: "MDM-aware, not MDM-heavy",
        paragraphs: [
          "The winning position is not to ask enterprises to replace Jamf, Intune, Kandji, Mosyle, or Apple Business. The stronger move is to understand those environments and make deployment status easier for non-specialists to act on.",
          "That means AppDeploy can become the practical command centre: which devices are assigned, which MDM route applies, which installs are pending, which app version is current, where exceptions exist, and what still needs attention before rollout can be called complete.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "This is the most compelling AppDeploy direction: a product that still feels simple to the user, but gives the business far more operational confidence behind the scenes.",
          "Blueprint-based deployment, audit-ready exports, group-based targeting, and MDM-aware deployment intelligence should remain close to the roadmap. The message is stronger now: AppDeploy should complement Apple's platform rails and give enterprises one clear operating layer for private app delivery.",
        ],
      },
    ],
    actionItems: [
      "Design AppDeploy around live rollout questions: who, which device, which version, which route, and what is blocked.",
      "Model Apple Business device, user, group, app, audit, and MDM service data as core product concepts.",
      "Prioritise views for group-based targeting, version status, pending installs, deployment exceptions, and audit-ready evidence.",
      "Keep the promise MDM-agnostic: AppDeploy should coordinate around the customer's existing stack, not compete with it.",
    ],
  },
  {
    slug: "private-apple-app-rollout-needs-more-than-approval",
    category: "Platform Briefing",
    topic: "Private app distribution",
    title:
      "App Store approval is only the beginning of private app rollout",
    summary:
      "Approval feels like the finish line until the first real rollout starts. Then the hard questions arrive: who should get access, which version is approved, what should users do next, and who owns the mess when installs fail? Apple gives businesses the distribution rails. AppDeploy gives the rollout a working operating layer.",
    seoDescription:
      "A practical ScotiTech briefing on Apple Custom Apps, private distribution, and why internal iOS rollout needs a controlled operating layer after approval.",
    date: "2026-05-04",
    updated: "2026-06-14",
    displayDate: "4 May 2026",
    readTime: "5 min read",
    sourceName: "Apple Developer",
    sourceUrl:
      "https://developer.apple.com/support/volume-purchase-and-custom-apps/",
    image: "/images/insights/private-app-rollout-tablet.jpg",
    tags: ["Custom Apps", "Apple Business", "Private rollout", "AppDeploy"],
    relatedProduct: {
      name: "AppDeploy",
      href: "/products/appdeploy",
      description:
        "A branded workspace for controlled iOS app access, install guidance, and rollout ownership.",
      cta: "Explore AppDeploy",
    },
    highlights: [
      {
        label: "Approval",
        value: "Not adoption",
        description:
          "An approved private app still needs audience control, install clarity, support ownership, and version confidence.",
      },
      {
        label: "Rollout gap",
        value: "The messy middle",
        description:
          "The risk usually lives between Apple approval and daily use: requests, instructions, failed installs, and unclear ownership.",
      },
      {
        label: "AppDeploy",
        value: "One front door",
        description:
          "A branded rollout workspace gives users one trusted place to understand access, install steps, release notes, and support.",
      },
    ],
    sections: [
      {
        heading: "Approval is not the same as adoption",
        paragraphs: [
          "Apple's Custom Apps route gives organisations a credible way to distribute private apps through Apple Business. That solves an important platform problem, but it does not automatically solve the business rollout problem.",
          "The moment a real team needs the app, the questions become operational. Who is eligible? Which build is approved? Which instructions are current? What happens when someone cannot install it? Who decides whether a rollout is complete?",
        ],
      },
      {
        heading: "The messy middle is where launches slow down",
        paragraphs: [
          "Private app launches often break down in ordinary places: email chains, spreadsheet approvals, outdated screenshots, one-off support messages, and no single page that everyone trusts.",
          "That friction is expensive because it makes a professional app feel unfinished. Users hesitate, administrators repeat themselves, and the product team loses visibility just when rollout should be building confidence.",
        ],
      },
      {
        heading: "SMEs feel this before enterprises admit it",
        paragraphs: [
          "Small and mid-sized organisations may not have a full mobile engineering or IT operations team sitting behind every release. The buyer might be a founder, operations lead, product owner, or IT manager who simply needs rollout to feel controlled.",
          "For those teams, a lightweight but professional rollout layer is not a luxury. It is how they avoid turning every private app launch into a manual support project.",
        ],
      },
      {
        heading: "Where AppDeploy fits",
        paragraphs: [
          "AppDeploy gives private distribution a business-facing home: branded access, current install guidance, release context, request handling, support routes, and clearer rollout ownership.",
          "The point is not to complicate Apple's distribution route. The point is to make it usable for the people who need to launch, explain, support, and measure private apps in the real world.",
        ],
      },
    ],
    actionItems: [
      "Define the rollout owner before submission, not after users start asking for help.",
      "Create one trusted access page with eligibility, install steps, release notes, and support contact.",
      "Track approved versions and target audiences so users never act on stale instructions.",
      "Treat failed installs and access requests as part of the product experience, not background admin.",
    ],
  },
  {
    slug: "secure-ai-adoption-now-needs-operating-controls",
    category: "AI Governance",
    topic: "Secure AI adoption",
    title:
      "Secure AI adoption fails when policy never reaches the workflow",
    summary:
      "Most AI risk does not appear in a board policy document. It appears when files move into the wrong workspace, prompts expose sensitive context, outputs influence decisions, and nobody can see who did what. The UK AI Cyber Security Code gives buyers a useful baseline. AXOS turns that conversation toward controlled, private AI workspaces.",
    seoDescription:
      "A ScotiTech briefing on the UK AI Cyber Security Code of Practice, secure AI deployment, access governance, monitoring, and why enterprise AI adoption needs operating controls.",
    date: "2026-05-04",
    updated: "2026-06-14",
    displayDate: "4 May 2026",
    readTime: "6 min read",
    sourceName: "GOV.UK",
    sourceUrl:
      "https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai",
    image: "/images/insights/ai-governance-workspace.jpg",
    tags: ["AI security", "Governance", "Secure deployment", "AXOS"],
    relatedProduct: {
      name: "AXOS",
      href: "/products/axos",
      description:
        "A private workspace approach for communication, files, tasks, and governance-aligned AI operations.",
      cta: "Explore AXOS",
    },
    highlights: [
      {
        label: "Reality check",
        value: "Policy is not control",
        description:
          "AI rules only become useful when access, files, prompts, outputs, and review paths are controlled in the workflow.",
      },
      {
        label: "Buyer concern",
        value: "Operational risk",
        description:
          "Teams need to know where data goes, who can use AI assistance, what is logged, and how outputs are reviewed.",
      },
      {
        label: "AXOS fit",
        value: "Private workspace",
        description:
          "AXOS is positioned for teams that want useful AI support without losing control over data, permissions, and accountability.",
      },
    ],
    sections: [
      {
        heading: "The AI risk is already inside the workflow",
        paragraphs: [
          "By the time a business writes an AI policy, teams may already be experimenting with documents, customer notes, meeting summaries, spreadsheets, code, and decision-support prompts.",
          "That is why secure AI adoption cannot live only in a document. The practical risk sits inside everyday work: who can upload files, what the system can see, where outputs are stored, and whether a human review path exists before AI-supported work affects a real decision.",
        ],
      },
      {
        heading: "The UK code gives buyers a sharper lens",
        paragraphs: [
          "The UK AI Cyber Security Code of Practice is useful because it pushes the conversation beyond excitement and into operating discipline. It covers secure design, deployment, maintenance, monitoring, and end-of-life handling across AI systems.",
          "For buyers, that turns a vague question into a practical one: does this AI workflow have controlled access, clear data boundaries, visible accountability, and a way to manage risk after launch?",
        ],
      },
      {
        heading: "Policy without workspace control becomes theatre",
        paragraphs: [
          "A policy can say sensitive data should not be pasted into unmanaged tools. It cannot, by itself, stop a team from doing exactly that when deadlines are tight and the approved workflow is inconvenient.",
          "Secure adoption needs an operating layer: permissions, private file handling, approved workspaces, usage boundaries, output review, monitoring, and clear ownership when something needs to be investigated.",
        ],
      },
      {
        heading: "Where AXOS fits",
        paragraphs: [
          "AXOS is strongest when the customer wants AI support in a controlled environment rather than another open-ended tool dropped into the business.",
          "The product story should be practical: private workspace, clearer access, governed files, task context, and useful AI assistance that respects the organisation's need for control.",
        ],
      },
    ],
    actionItems: [
      "Start with workflows where AI already touches business data, files, or decision-support outputs.",
      "Separate user access, file access, and AI assistance so workspace boundaries are clear.",
      "Make prompt use, output review, and accountability visible before expanding AI availability.",
      "Include monitoring, incident response, and data disposal in the operating model from day one.",
    ],
  },
  {
    slug: "software-security-code-raises-the-standard-for-product-buyers",
    category: "Security Briefing",
    topic: "Software assurance",
    title:
      "Software buyers are starting to ask harder security questions",
    summary:
      "Security is no longer a late-stage procurement checkbox. The UK Software Security Code of Practice gives buyers a sharper way to ask how software is designed, built, updated, supported, and retired. For vendors, the opportunity is clear: the companies that can explain their security posture simply will look more trustworthy before the technical review even starts.",
    seoDescription:
      "A ScotiTech briefing on the UK Software Security Code of Practice, secure-by-design software, vendor assurance, deployment, maintenance, and buyer expectations.",
    date: "2026-05-04",
    updated: "2026-06-14",
    displayDate: "4 May 2026",
    readTime: "6 min read",
    sourceName: "GOV.UK",
    sourceUrl:
      "https://www.gov.uk/government/publications/software-security-code-of-practice",
    image: "/images/insights/software-security-code.jpg",
    tags: [
      "Software security",
      "Vendor assurance",
      "Secure by design",
      "Governance",
    ],
    relatedProduct: {
      name: "ScotiTech product portfolio",
      href: "/products",
      description:
        "Focused software products built around private rollout, team workflows, and policy-aligned technology adoption.",
      cta: "Explore products",
    },
    highlights: [
      {
        label: "Buyer pressure",
        value: "Evidence matters",
        description:
          "Customers increasingly expect clear answers about secure design, build controls, updates, vulnerabilities, and support.",
      },
      {
        label: "Vendor signal",
        value: "Trust before demo",
        description:
          "A simple, credible security story helps software companies stand out before procurement turns into a document chase.",
      },
      {
        label: "Product impact",
        value: "Control by design",
        description:
          "Products that handle private apps, AI workflows, or operational data need security posture to be visible in the experience.",
      },
    ],
    sections: [
      {
        heading: "Security is becoming part of the sale",
        paragraphs: [
          "For business software, trust now starts long before a contract is signed. Buyers want to know not only what a product does, but how it is built, updated, monitored, supported, and retired.",
          "The UK Software Security Code of Practice makes that expectation easier to name. It gives buyers a practical language for asking about secure design, development, deployment, maintenance, vulnerability handling, and customer communication.",
        ],
      },
      {
        heading: "The questions are getting more specific",
        paragraphs: [
          "The old question was: is this product secure? The better question is: how do you know, who owns it, how are updates delivered, what happens when a vulnerability appears, and how will customers be told?",
          "That shift matters because vague reassurance is no longer enough. Buyers are looking for evidence that security is part of the product lifecycle, not a slide added at the end of the sales process.",
        ],
      },
      {
        heading: "Lightweight does not mean unmanaged",
        paragraphs: [
          "Small product companies do not need to pretend they have enterprise certification for everything on day one. But they do need to show that simple software can still be responsibly designed, operated, updated, and supported.",
          "That is especially important for products close to private app access, team communication, AI-supported work, or operational data. The lighter the product feels, the clearer the control story needs to be.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "ScotiTech products are strongest when trust is visible: controlled deployment, private workflow boundaries, clear ownership, sensible data handling, and a security story that buyers can understand without a 40-page explanation.",
          "That is not just compliance hygiene. It is commercial credibility. Buyers remember the vendor that can explain risk clearly and honestly.",
        ],
      },
    ],
    actionItems: [
      "Explain security as part of the product experience, not a separate procurement appendix.",
      "Prepare clear answers for development practice, update handling, vulnerability response, and customer communication.",
      "Show access control, data handling, rollout ownership, and support expectations directly on product pages.",
      "Use recognised guidance to build confidence without overstating maturity or adding unnecessary complexity.",
    ],
  },
  {
    slug: "apple-business-sme-impact",
    category: "Industry Update",
    topic: "Apple ecosystem",
    title:
      "Apple Business gives SMEs a cleaner way to run Apple at work",
    summary:
      "For many SMEs, Apple administration has been a patchwork of device setup, app access, employee changes, support routes, and brand details. Apple Business brings those pieces closer together. The opportunity for ScotiTech is to help organisations turn that platform foundation into cleaner app rollout, better access workflows, and less operational noise.",
    seoDescription:
      "A practical ScotiTech briefing on Apple Business, what changed on 14 April 2026, and how SMEs should approach device deployment, MDM, access governance, and app rollout.",
    date: "2026-03-24",
    updated: "2026-06-14",
    displayDate: "24 March 2026",
    readTime: "5 min read",
    sourceName: "Apple Newsroom",
    sourceUrl:
      "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/",
    image: "/images/insights/apple-business-team-devices.jpg",
    tags: ["Apple Business", "MDM", "SME technology", "AppDeploy"],
    relatedProduct: {
      name: "AppDeploy",
      href: "/products/appdeploy",
      description:
        "A branded workspace for controlled iOS app access, install guidance, and rollout ownership.",
      cta: "Explore AppDeploy",
    },
    highlights: [
      {
        label: "Launch signal",
        value: "14 April 2026",
        description:
          "Apple positioned Apple Business as a unified platform for organisations across more than 200 countries and regions.",
      },
      {
        label: "SME relief",
        value: "Less admin sprawl",
        description:
          "Device management, employee access, app distribution, business identity, and support are easier to think about together.",
      },
      {
        label: "AppDeploy angle",
        value: "Rollout clarity",
        description:
          "The stronger Apple Business becomes, the more valuable a clear access and rollout layer becomes around private apps.",
      },
    ],
    sections: [
      {
        heading: "Apple is reducing the admin sprawl",
        paragraphs: [
          "On 24 March 2026, Apple announced Apple Business as an all-in-one platform for organisations, with availability from 14 April 2026 across more than 200 countries and regions.",
          "The important part for SMEs is not just the launch date. It is the consolidation: device management, employee access, app distribution, business identity, location details, and support moving into a cleaner operating foundation.",
        ],
      },
      {
        heading: "Small teams need clarity more than complexity",
        paragraphs: [
          "In many small and mid-sized organisations, Apple workflows grow organically. Someone handles devices, someone else manages app access, brand details live elsewhere, and support becomes a chain of favours and forwarded messages.",
          "Apple Business can reduce that fragmentation at the platform level. But the business still needs an operating model that makes onboarding, app access, support, and rollout ownership obvious to the people doing the work.",
        ],
      },
      {
        heading: "The app rollout opportunity",
        paragraphs: [
          "Built-in MDM, employee groups, security settings, and app assignment all make Apple Business a stronger platform foundation. For internal or private iOS apps, that foundation still needs a clear user-facing layer.",
          "That is where AppDeploy becomes relevant. It can give teams one branded place for access requests, install guidance, release communication, legal acceptance, support, and visibility into who should be using which version.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "Apple Business makes the platform cleaner. AppDeploy should make the rollout clearer. Together, that creates a better path from employee onboarding to secure app access without forcing SMEs into unnecessary enterprise weight.",
          "The strongest message for customers is practical: fewer manual handoffs, fewer stale instructions, fewer confused users, and a more professional way to operate Apple app delivery.",
        ],
      },
    ],
    actionItems: [
      "Use Apple Business as a chance to simplify device, employee, app, brand, and support ownership.",
      "Map where app access still depends on email approvals, manual messages, or disconnected spreadsheets.",
      "Create a single rollout workflow for requests, eligibility, install guidance, release updates, and support.",
      "Connect Apple Business foundations with AppDeploy-style visibility so private app delivery feels controlled from day one.",
    ],
  },
];

export const featuredInsight = insights[0];

export function getInsightBySlug(slug) {
  return insights.find((insight) => insight.slug === slug);
}
