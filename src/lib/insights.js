export const insights = [
  {
    slug: "wwdc26-app-store-updates-mean-for-appdeploy-rollout",
    category: "WWDC 2026 Briefing",
    topic: "AppDeploy",
    title:
      "Apple Business Admin APIs make AppDeploy's product bet bigger",
    summary:
      "Apple's App Store updates matter, but the bigger AppDeploy signal is Apple Business: built-in MDM, employee groups, app distribution, Blueprints, and Admin API access to device, user, audit, and MDM service data. That moves the opportunity from a branded rollout portal toward live fleet visibility, group-based app workflows, MDM-aware deployment intelligence, and centralised version status.",
    seoDescription:
      "A ScotiTech briefing on Apple Business Admin APIs, WWDC26 App Store updates, live fleet visibility, group-based app distribution, MDM-aware deployment intelligence, and AppDeploy.",
    date: "2026-06-13",
    updated: "2026-06-13",
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
        value: "Fleet visibility",
        description:
          "Apple Business includes API access to device, user, audit, and MDM service data, creating a stronger foundation for live deployment context.",
      },
      {
        label: "Distribution",
        value: "Groups + apps",
        description:
          "Employee groups and app distribution can turn rollout planning from manual audience lists into targeted workflows by team, role, location, or pilot cohort.",
      },
      {
        label: "MDM context",
        value: "Routing intelligence",
        description:
          "MDM service data lets AppDeploy complement existing Jamf, Intune, Kandji, Mosyle, or Apple Business setups instead of trying to replace them.",
      },
    ],
    sections: [
      {
        heading: "The bigger signal: Apple Business Admin API",
        paragraphs: [
          "The first read of WWDC26 can easily focus on App Store Connect, creative assets, product page previews, volume purchasing, and age-safety metadata. Those changes still matter, but they are not the biggest AppDeploy story.",
          "The larger shift is Apple Business. Apple is bringing device management, employee groups, app distribution, Blueprints, and an Admin API into one business platform. Apple describes the Admin API as access to device, user, audit, and MDM service data. For AppDeploy, that is the difference between showing an install route and understanding the rollout state behind it.",
        ],
      },
      {
        heading: "Live fleet visibility changes the product",
        paragraphs: [
          "For private app rollout, the operational question is no longer only who can access the app. It is which enrolled Apple devices exist, which model and OS version they run, which MDM service owns them, which app version they should receive, and where deployment is blocked.",
          "That is where AppDeploy can become more than a branded front door. With Apple Business-backed inventory and MDM context, the platform can move toward live fleet visibility across enrolled Apple devices, centralised deployment status, and clearer version management for business app owners.",
        ],
      },
      {
        heading: "Group-based distribution becomes the workflow",
        paragraphs: [
          "Apple Business lets organisations create employee groups by function or team and assign apps and roles around those groups. WWDC26 also keeps pushing subscription and app access toward group and volume purchasing routes through Apple Business and Apple School Manager.",
          "That matters because enterprise distribution is rarely a single public audience. A pilot team may need one build, a field team another, and a leadership group a controlled preview. AppDeploy should treat groups, app eligibility, app versions, and rollout waves as first-class workflow objects.",
        ],
      },
      {
        heading: "MDM-aware intelligence, not MDM replacement",
        paragraphs: [
          "The strongest positioning is not that AppDeploy replaces MDM. Enterprises already use Apple Business, Jamf, Microsoft Intune, Kandji, Mosyle, or mixed environments. The product opportunity is to read the deployment context and make it understandable for the people responsible for app rollout.",
          "That means AppDeploy can become the practical intelligence layer: which devices are assigned, which MDM route applies, which app version is current, which installs are pending, where exceptions exist, and what needs attention before a rollout is considered complete.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "This makes AppDeploy's product bet bigger and more serious. The platform should still help users understand access, install guidance, release notes, and support. But the deeper enterprise value is centralised visibility into application deployment status and version management.",
          "Blueprint-based zero-touch deployment, audit-ready rollout exports, group-based targeting, and MDM-aware deployment intelligence should sit close to the roadmap. The message is simple: AppDeploy should complement Apple's platform rails and give enterprises one clear operating layer for private app delivery.",
        ],
      },
    ],
    actionItems: [
      "Model Apple Business device, user, group, app, audit, and MDM service data as core AppDeploy entities.",
      "Prioritise live fleet visibility across enrolled Apple devices, including device assignment, app version, and deployment status.",
      "Design group-based app distribution workflows for teams, roles, locations, pilot cohorts, and enterprise rollout waves.",
      "Keep the MDM-agnostic promise clear: AppDeploy should coordinate and explain deployment across existing enterprise environments, not replace the customer's MDM.",
    ],
  },
  {
    slug: "private-apple-app-rollout-needs-more-than-approval",
    category: "Platform Briefing",
    topic: "Private app distribution",
    title:
      "Private Apple app rollout needs more than App Store approval",
    summary:
      "Apple gives organisations a strong private distribution route through Custom Apps and Apple Business. The business gap is usually not approval; it is controlled access, rollout communication, install readiness, and support ownership.",
    seoDescription:
      "A practical ScotiTech briefing on Apple Custom Apps, private distribution, and why internal iOS rollout needs a controlled operating layer after approval.",
    date: "2026-05-04",
    updated: "2026-05-04",
    displayDate: "4 May 2026",
    readTime: "5 min read",
    sourceName: "Apple Developer",
    sourceUrl: "https://developer.apple.com/support/volume-purchase-and-custom-apps/",
    image: "/images/insights/private-app-rollout.jpg",
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
        label: "Primary route",
        value: "Custom Apps",
        description:
          "Apple supports private app availability for selected organisations through Apple Business.",
      },
      {
        label: "Key timing",
        value: "Before approval",
        description:
          "Apple says the private distribution option is selected before an app is approved.",
      },
      {
        label: "Business need",
        value: "Rollout control",
        description:
          "Approved apps still need clear ownership, audience selection, access communication, and user support.",
      },
    ],
    sections: [
      {
        heading: "What Apple provides",
        paragraphs: [
          "Apple supports private app distribution for businesses through Custom Apps, where an approved app can be made available to specific organisations in Apple Business.",
          "This is a strong platform route for proprietary apps, partner apps, internal workflow tools, and controlled audience releases. Apple explains that organisations can distribute approved Custom Apps through Mobile Device Management or redemption codes.",
        ],
      },
      {
        heading: "Where rollout still fails",
        paragraphs: [
          "Approval is only one part of the launch path. Teams still need to know who should receive access, which version is approved, what instructions users should follow, and who owns support when installs fail.",
          "The operational risk increases when app access is handled through email threads, disconnected spreadsheets, or one-off instructions. That creates avoidable confusion for users and limited visibility for the team responsible for rollout.",
        ],
      },
      {
        heading: "Why this matters for SMEs",
        paragraphs: [
          "Small and mid-sized organisations often do not need a heavy enterprise platform, but they do need a reliable release layer around private app access. The buyer may be a founder, operations lead, product owner, or IT manager rather than a full mobile engineering team.",
          "A practical rollout layer should make the process understandable: who the app is for, how access is requested, what users need before installing, and where the latest approved route lives.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "Private Apple distribution works best when the technical route is matched with a clear business workflow. AppDeploy supports that workflow with branded access, install guidance, request handling, and rollout visibility for private or internal iOS apps.",
          "This complements Apple Business with a clearer rollout experience for teams that need control, clarity, and fewer manual handoffs.",
        ],
      },
    ],
    actionItems: [
      "Confirm your audience and distribution route before submission to prevent late rollout changes.",
      "Define app access ownership for requests, approvals, and support accountability.",
      "Provide one branded install path with current instructions, eligibility guidance, and support contact.",
      "Track rollout status clearly by approved version and eligible audience.",
    ],
  },
  {
    slug: "secure-ai-adoption-now-needs-operating-controls",
    category: "AI Governance",
    topic: "Secure AI adoption",
    title:
      "Secure AI adoption now needs operating controls, not just policies",
    summary:
      "The UK AI Cyber Security Code of Practice sets a clearer baseline for organisations using AI systems. For buyers, the practical question is whether AI tools have controlled data access, accountable users, secure deployment, monitoring, and clear end-of-life handling.",
    seoDescription:
      "A ScotiTech briefing on the UK AI Cyber Security Code of Practice, secure AI deployment, access governance, monitoring, and why enterprise AI adoption needs operating controls.",
    date: "2026-05-04",
    updated: "2026-05-04",
    displayDate: "4 May 2026",
    readTime: "6 min read",
    sourceName: "GOV.UK",
    sourceUrl:
      "https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai",
    image: "/images/insights/secure-ai-governance.jpg",
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
        label: "Official baseline",
        value: "13 principles",
        description:
          "The UK AI Cyber Security Code covers design, development, deployment, maintenance, and end-of-life controls.",
      },
      {
        label: "Buyer concern",
        value: "Operational risk",
        description:
          "AI adoption changes how data, prompts, models, logs, and external components are governed.",
      },
      {
        label: "Practical answer",
        value: "Controlled workspace",
        description:
          "Teams need a private operating layer that defines access, usage boundaries, monitoring, and accountability.",
      },
    ],
    sections: [
      {
        heading: "What changed",
        paragraphs: [
          "The UK government published the AI Cyber Security Code of Practice to set baseline cyber security principles for organisations that develop or deploy AI systems. The guidance covers the AI lifecycle, including secure design, secure development, secure deployment, secure maintenance, and secure end of life.",
          "The code is voluntary, but it gives buyers and operators a useful structure for evaluating whether AI adoption is being handled as an operational risk, not only as an innovation project.",
        ],
      },
      {
        heading: "Why policy alone is not enough",
        paragraphs: [
          "Many organisations now have AI usage policies, but policies do not control where files are stored, who can access sensitive material, what gets logged, or how teams handle outputs that influence real work.",
          "Secure AI adoption needs practical operating controls: access boundaries, data-handling rules, approved workflows, user accountability, and visibility into how AI-supported work is being used.",
        ],
      },
      {
        heading: "What buyers should ask",
        paragraphs: [
          "The useful questions are concrete. Which data sources can the AI system reach? Who approves workspace access? Are prompts, files, and outputs handled in a controlled environment? Is there a process for monitoring behaviour, managing updates, and retiring data or models?",
          "These questions help separate credible enterprise AI adoption from unmanaged tool usage. They also help teams avoid over-claiming security while still moving forward with practical use cases.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "AXOS gives teams a private workspace for useful AI support without losing control over access, files, tasks, and operating boundaries.",
          "It reflects ScotiTech’s practical software approach for private workflows, with a clear secure AI path for teams that need governance without unnecessary complexity.",
        ],
      },
    ],
    actionItems: [
      "Start with workflows where AI already touches business data or decision-support outputs.",
      "Separate user access, file access, and AI assistance to set clear workspace boundaries.",
      "Make data use, output review, and accountability visible before expanding AI access.",
      "Include monitoring, incident response, and data disposal in the operating model from day one.",
    ],
  },
  {
    slug: "software-security-code-raises-the-standard-for-product-buyers",
    category: "Security Briefing",
    topic: "Software assurance",
    title:
      "The Software Security Code raises the standard for product buyers",
    summary:
      "The UK Software Security Code of Practice gives business customers a clearer way to assess software vendors. Secure design, build environment control, secure updates, vulnerability disclosure, and customer communication are becoming part of the product buying conversation.",
    seoDescription:
      "A ScotiTech briefing on the UK Software Security Code of Practice, secure-by-design software, vendor assurance, deployment, maintenance, and buyer expectations.",
    date: "2026-05-04",
    updated: "2026-05-04",
    displayDate: "4 May 2026",
    readTime: "6 min read",
    sourceName: "GOV.UK",
    sourceUrl:
      "https://www.gov.uk/government/publications/software-security-code-of-practice",
    image: "/images/insights/software-security.jpg",
    tags: ["Software security", "Vendor assurance", "Secure by design", "Governance"],
    relatedProduct: {
      name: "ScotiTech product portfolio",
      href: "/products",
      description:
        "Focused software products built around private rollout, team workflows, and policy-aligned technology adoption.",
      cta: "Explore products",
    },
    highlights: [
      {
        label: "Updated guidance",
        value: "15 Jan 2026",
        description:
          "GOV.UK lists the Software Security Code of Practice as last updated on this date.",
      },
      {
        label: "Core scope",
        value: "B2B software",
        description:
          "The code is most relevant to vendors developing and selling software or software services to organisations.",
      },
      {
        label: "Buyer signal",
        value: "Evidence matters",
        description:
          "Customers can use the code to structure questions about development, deployment, maintenance, and communication.",
      },
    ],
    sections: [
      {
        heading: "What the code says",
        paragraphs: [
          "The UK Software Security Code of Practice sets expectations for the security and resilience of software that organisations rely on. It is aimed at software vendors and their customers, with principles covering secure design and development, build environment security, secure deployment and maintenance, and communication with customers.",
          "The code matters because it gives buyers a more practical vocabulary for vendor assurance. Instead of asking whether a product is secure in a general sense, buyers can ask how security is handled through the software lifecycle.",
        ],
      },
      {
        heading: "What this changes for product companies",
        paragraphs: [
          "Product credibility is no longer only about features, design, and speed. Buyers increasingly want evidence of secure development practices, controlled build environments, vulnerability handling, support expectations, and clear communication around incidents or end-of-support.",
          "This does not mean every small product company needs enterprise-heavy certification on day one. It does mean product teams should be able to explain how software is built, maintained, updated, and supported.",
        ],
      },
      {
        heading: "Why it matters for private rollout products",
        paragraphs: [
          "Products used for private app access, team communication, or AI-supported work sit close to operational data. Even when the product is lightweight, the trust expectation is not lightweight.",
          "A clear security narrative helps buyers understand the difference between a simple product and an unmanaged product. Simple can still be controlled, documented, and professionally operated.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "ScotiTech products stay strongest when security posture is explicit: controlled deployment, private workflow boundaries, clear ownership, and data-aware operating paths.",
          "This gives buyers practical confidence and a clear set of questions for product-fit conversations.",
        ],
      },
    ],
    actionItems: [
      "Present security as part of the product experience across development, deployment, maintenance, and support.",
      "Explain how vulnerabilities, incidents, and end-of-support changes are communicated to customers.",
      "Show control, access, data handling, and rollout ownership clearly on product pages.",
      "Use recognised guidance in enterprise conversations without overstating maturity or adding complexity.",
    ],
  },
  {
    slug: "apple-business-sme-impact",
    category: "Industry Update",
    topic: "Apple ecosystem",
    title:
      "Apple Business: the SME impact",
    summary:
      "Apple is consolidating device management, employee access, app distribution, brand presence, and support into Apple Business. For SMEs, the shift creates a clearer platform foundation for rollout, governance, and day-to-day operations.",
    seoDescription:
      "A practical ScotiTech briefing on Apple Business, what changed on 14 April 2026, and how SMEs should approach device deployment, MDM, access governance, and app rollout.",
    date: "2026-03-24",
    updated: "2026-04-29",
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
        label: "Launch date",
        value: "14 April 2026",
        description:
          "Apple said the new Apple Business platform would become available from this date.",
      },
      {
        label: "What is changing",
        value: "One platform",
        description:
          "Apple Business brings together device, employee-access, app distribution, brand presence, and support capabilities.",
      },
      {
        label: "Why it matters",
        value: "Stronger control",
        description:
          "SMEs get a clearer route for managing devices, employees, apps, brand presence, and support.",
      },
    ],
    sections: [
      {
        heading: "What Apple announced",
        paragraphs: [
          "On 24 March 2026, Apple announced Apple Business as a new all-in-one platform for organisations. Apple said the platform would be available from 14 April 2026 in more than 200 countries and regions.",
          "The important change is consolidation. Apple Business creates one place for device management, employee access, app distribution, business identity, location details, and support options.",
        ],
      },
      {
        heading: "Why SMEs should pay attention",
        paragraphs: [
          "For small and mid-sized organisations, Apple device workflows often become fragmented. One person manages devices, another handles app access, another updates brand details, and support often lives outside the same process.",
          "Apple Business reduces that fragmentation at the platform level and gives teams a stronger foundation for onboarding staff, preparing devices, distributing approved apps, and keeping business details consistent across Apple services.",
        ],
      },
      {
        heading: "What changes for device and app rollout",
        paragraphs: [
          "The built-in mobile device management capability is the key signal. Apple is making device setup, settings, employee groups, security, and app assignment easier to manage from one business-facing workspace.",
          "For teams distributing internal iOS apps, the surrounding rollout journey becomes more important. Businesses still need clear release ownership, access approvals, install communication, legal acceptance, and visibility into who has access to each version.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "This update strengthens the case for a professional access layer around internal app distribution. Apple can simplify the platform foundation, while AppDeploy helps organisations present branded access, manage requests, coordinate rollout steps, and support non-technical stakeholders.",
          "The outcome is a clearer path from employee onboarding to secure app access, with fewer manual handoffs and less uncertainty for administrators and users.",
        ],
      },
    ],
    actionItems: [
      "Treat Apple Business as a chance to simplify device, app, employee-access, and support ownership.",
      "Map existing device, app, and access activity into one Apple Business operating structure.",
      "Remove rollout steps that still rely on manual messages, email approvals, or disconnected support routes.",
      "Create a clear access workflow for requests, release communication, governance, and user support.",
    ],
  },
  {
    slug: "private-apple-app-rollout-needs-more-than-approval",
    category: "Platform Briefing",
    topic: "Private app distribution",
    title: "Private Apple app rollout needs more than App Store approval",
    summary:
      "Apple gives organisations a strong private distribution route through Custom Apps and Apple Business. The business gap is usually not approval; it is controlled access, rollout communication, install readiness, and support ownership.",
    seoDescription:
      "A practical ScotiTech briefing on Apple Custom Apps, private distribution, and why internal iOS rollout needs a controlled operating layer after approval.",
    date: "2026-05-04",
    updated: "2026-05-04",
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
        label: "Primary route",
        value: "Custom Apps",
        description:
          "Apple supports private app availability for selected organisations through Apple Business.",
      },
      {
        label: "Key timing",
        value: "Before approval",
        description:
          "Apple says the private distribution option is selected before an app is approved.",
      },
      {
        label: "Business need",
        value: "Rollout control",
        description:
          "Approved apps still need clear ownership, audience selection, access communication, and user support.",
      },
    ],
    sections: [
      {
        heading: "What Apple provides",
        paragraphs: [
          "Apple supports private app distribution for businesses through Custom Apps, where an approved app can be made available to specific organisations in Apple Business.",
          "This is a strong platform route for proprietary apps, partner apps, internal workflow tools, and controlled audience releases. Apple explains that organisations can distribute approved Custom Apps through Mobile Device Management or redemption codes.",
        ],
      },
      {
        heading: "Where rollout still fails",
        paragraphs: [
          "Approval is only one part of the launch path. Teams still need to know who should receive access, which version is approved, what instructions users should follow, and who owns support when installs fail.",
          "The operational risk increases when app access is handled through email threads, disconnected spreadsheets, or one-off instructions. That creates avoidable confusion for users and limited visibility for the team responsible for rollout.",
        ],
      },
      {
        heading: "Why this matters for SMEs",
        paragraphs: [
          "Small and mid-sized organisations often do not need a heavy enterprise platform, but they do need a reliable release layer around private app access. The buyer may be a founder, operations lead, product owner, or IT manager rather than a full mobile engineering team.",
          "A practical rollout layer should make the process understandable: who the app is for, how access is requested, what users need before installing, and where the latest approved route lives.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "Private Apple distribution works best when the technical route is matched with a clear business workflow. AppDeploy supports that workflow with branded access, install guidance, request handling, and rollout visibility for private or internal iOS apps.",
          "This complements Apple Business with a clearer rollout experience for teams that need control, clarity, and fewer manual handoffs.",
        ],
      },
    ],
    actionItems: [
      "Confirm your audience and distribution route before submission to prevent late rollout changes.",
      "Define app access ownership for requests, approvals, and support accountability.",
      "Provide one branded install path with current instructions, eligibility guidance, and support contact.",
      "Track rollout status clearly by approved version and eligible audience.",
    ],
  },
  {
    slug: "secure-ai-adoption-now-needs-operating-controls",
    category: "AI Governance",
    topic: "Secure AI adoption",
    title: "Secure AI adoption now needs operating controls, not just policies",
    summary:
      "The UK AI Cyber Security Code of Practice sets a clearer baseline for organisations using AI systems. For buyers, the practical question is whether AI tools have controlled data access, accountable users, secure deployment, monitoring, and clear end-of-life handling.",
    seoDescription:
      "A ScotiTech briefing on the UK AI Cyber Security Code of Practice, secure AI deployment, access governance, monitoring, and why enterprise AI adoption needs operating controls.",
    date: "2026-05-04",
    updated: "2026-05-04",
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
        label: "Official baseline",
        value: "13 principles",
        description:
          "The UK AI Cyber Security Code covers design, development, deployment, maintenance, and end-of-life controls.",
      },
      {
        label: "Buyer concern",
        value: "Operational risk",
        description:
          "AI adoption changes how data, prompts, models, logs, and external components are governed.",
      },
      {
        label: "Practical answer",
        value: "Controlled workspace",
        description:
          "Teams need a private operating layer that defines access, usage boundaries, monitoring, and accountability.",
      },
    ],
    sections: [
      {
        heading: "What changed",
        paragraphs: [
          "The UK government published the AI Cyber Security Code of Practice to set baseline cyber security principles for organisations that develop or deploy AI systems. The guidance covers the AI lifecycle, including secure design, secure development, secure deployment, secure maintenance, and secure end of life.",
          "The code is voluntary, but it gives buyers and operators a useful structure for evaluating whether AI adoption is being handled as an operational risk, not only as an innovation project.",
        ],
      },
      {
        heading: "Why policy alone is not enough",
        paragraphs: [
          "Many organisations now have AI usage policies, but policies do not control where files are stored, who can access sensitive material, what gets logged, or how teams handle outputs that influence real work.",
          "Secure AI adoption needs practical operating controls: access boundaries, data-handling rules, approved workflows, user accountability, and visibility into how AI-supported work is being used.",
        ],
      },
      {
        heading: "What buyers should ask",
        paragraphs: [
          "The useful questions are concrete. Which data sources can the AI system reach? Who approves workspace access? Are prompts, files, and outputs handled in a controlled environment? Is there a process for monitoring behaviour, managing updates, and retiring data or models?",
          "These questions help separate credible enterprise AI adoption from unmanaged tool usage. They also help teams avoid over-claiming security while still moving forward with practical use cases.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "AXOS gives teams a private workspace for useful AI support without losing control over access, files, tasks, and operating boundaries.",
          "It reflects ScotiTech's practical software approach for private workflows, with a clear secure AI path for teams that need governance without unnecessary complexity.",
        ],
      },
    ],
    actionItems: [
      "Start with workflows where AI already touches business data or decision-support outputs.",
      "Separate user access, file access, and AI assistance to set clear workspace boundaries.",
      "Make data use, output review, and accountability visible before expanding AI access.",
      "Include monitoring, incident response, and data disposal in the operating model from day one.",
    ],
  },
  {
    slug: "software-security-code-raises-the-standard-for-product-buyers",
    category: "Security Briefing",
    topic: "Software assurance",
    title: "The Software Security Code raises the standard for product buyers",
    summary:
      "The UK Software Security Code of Practice gives business customers a clearer way to assess software vendors. Secure design, build environment control, secure updates, vulnerability disclosure, and customer communication are becoming part of the product buying conversation.",
    seoDescription:
      "A ScotiTech briefing on the UK Software Security Code of Practice, secure-by-design software, vendor assurance, deployment, maintenance, and buyer expectations.",
    date: "2026-05-04",
    updated: "2026-05-04",
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
        label: "Updated guidance",
        value: "15 Jan 2026",
        description:
          "GOV.UK lists the Software Security Code of Practice as last updated on this date.",
      },
      {
        label: "Core scope",
        value: "B2B software",
        description:
          "The code is most relevant to vendors developing and selling software or software services to organisations.",
      },
      {
        label: "Buyer signal",
        value: "Evidence matters",
        description:
          "Customers can use the code to structure questions about development, deployment, maintenance, and communication.",
      },
    ],
    sections: [
      {
        heading: "What the code says",
        paragraphs: [
          "The UK Software Security Code of Practice sets expectations for the security and resilience of software that organisations rely on. It is aimed at software vendors and their customers, with principles covering secure design and development, build environment security, secure deployment and maintenance, and communication with customers.",
          "The code matters because it gives buyers a more practical vocabulary for vendor assurance. Instead of asking whether a product is secure in a general sense, buyers can ask how security is handled through the software lifecycle.",
        ],
      },
      {
        heading: "What this changes for product companies",
        paragraphs: [
          "Product credibility is no longer only about features, design, and speed. Buyers increasingly want evidence of secure development practices, controlled build environments, vulnerability handling, support expectations, and clear communication around incidents or end-of-support.",
          "This does not mean every small product company needs enterprise-heavy certification on day one. It does mean product teams should be able to explain how software is built, maintained, updated, and supported.",
        ],
      },
      {
        heading: "Why it matters for private rollout products",
        paragraphs: [
          "Products used for private app access, team communication, or AI-supported work sit close to operational data. Even when the product is lightweight, the trust expectation is not lightweight.",
          "A clear security narrative helps buyers understand the difference between a simple product and an unmanaged product. Simple can still be controlled, documented, and professionally operated.",
        ],
      },
      {
        heading: "The ScotiTech view",
        paragraphs: [
          "ScotiTech products stay strongest when security posture is explicit: controlled deployment, private workflow boundaries, clear ownership, and data-aware operating paths.",
          "This gives buyers practical confidence and a clear set of questions for product-fit conversations.",
        ],
      },
    ],
    actionItems: [
      "Present security as part of the product experience across development, deployment, maintenance, and support.",
      "Explain how vulnerabilities, incidents, and end-of-support changes are communicated to customers.",
      "Show control, access, data handling, and rollout ownership clearly on product pages.",
      "Use recognised guidance in enterprise conversations without overstating maturity or adding complexity.",
    ],
  },
];

export const featuredInsight = insights[0];

export function getInsightBySlug(slug) {
  return insights.find((insight) => insight.slug === slug);
}
