export const productThemes = {
  appdeploy: {
    color: "#2563EB",
    soft: "#EFF6FF",
    border: "#BFDBFE",
    label: "AppDeploy Blue",
  },
  axos: {
    color: "#0F766E",
    soft: "#ECFDF5",
    border: "#99F6E4",
    label: "AXOS Teal",
  },
  claritypath: {
    color: "#B7A84D",
    soft: "#F9F6E7",
    border: "#E7DFA4",
    label: "ClarityPath Gold",
  },
};

export const flagshipProducts = [
  {
    slug: "appdeploy",
    name: "AppDeploy",
    eyebrow: "Flagship product",
    href: "/products/appdeploy",
    logo: "/images/brand/appdeploy-logo-black.png",
    status: "Rollout-ready",
    buyer: "IT, operations, and release owners",
    headline: "Entitlement-led internal app distribution around Apple Business.",
    summary:
      "A hosted workspace for private iOS releases, branded organisation pages, role-based access, install tracking, and employee-friendly app delivery without turning rollout into full device management.",
    bestFor:
      "Agencies, SMEs, schools, startups, and internal IT teams delivering private apps to employees, testers, or client organisations.",
    details:
      "AppDeploy includes a hosted portal, admin dashboard, request approval, billing, invites, reporting, entitlement-led access, and branded workspace settings.",
    outcomes: [
      "Branded organisation app pages",
      "Entitlement-led access control",
      "iOS release and version management",
      "Install and usage visibility",
    ],
    modules: ["Workspace", "Branding", "Releases", "Reports"],
    theme: productThemes.appdeploy,
  },
  {
    slug: "axos",
    name: "AXOS",
    eyebrow: "Flagship platform",
    href: "/products/axos",
    logo: "/images/brand/axos-icon.png",
    status: "Private evaluation",
    buyer: "Founders, operators, and teams handling sensitive work",
    headline: "A private workspace for communication, files, tasks, and practical AI.",
    summary:
      "AXOS brings communication, files, tasks, planning, and policy-aligned AI into one private workspace with hosted, private-cloud, self-hosted, and on-premises deployment paths.",
    bestFor:
      "Organisations that want less tool sprawl and more ownership over where everyday work happens.",
    details:
      "Designed for teams that want daily work software with stronger ownership over context, deployment, data posture, and AI assistance.",
    outcomes: [
      "Mail, files, chat, tasks, and notes",
      "Workspace-level roles and permissions",
      "Deployment choices for different maturity levels",
      "Governance-first AI assistance inside operational context",
    ],
    modules: ["Workspace", "Files", "Tasks", "AI"],
    theme: productThemes.axos,
  },
];

export const supportingProducts = [
  {
    slug: "claritypath",
    name: "ClarityPath",
    eyebrow: "Private product",
    href: "/products/claritypath",
    logo: "/images/brand/claritypath-logo.png",
    status: "Private access",
    buyer: "Teams and individuals making structured decisions",
    headline: "Guided decision support for structured private reviews.",
    summary:
      "A focused product for planning sessions, decision reviews, and guided next-step recommendations delivered through a private access experience.",
    bestFor:
      "Use cases where focused guidance matters more than broad public-market distribution.",
    outcomes: [
      "Structured decision sessions",
      "Private access route",
      "Guided next-step recommendations",
    ],
    theme: productThemes.claritypath,
  },
];

export const allProducts = [...flagshipProducts, ...supportingProducts];

export const portfolioHighlights = [
  {
    label: "Product portfolio",
    value: "Focused product suite",
    detail: "AppDeploy, AXOS, and ClarityPath serve defined product jobs.",
  },
  {
    label: "Recognition",
    value: "UK StartUp Awards 2026",
    detail: "Shortlisted in the Digital StartUp of the Year category.",
  },
  {
    label: "Operating base",
    value: "Scotland, UK",
    detail: "Building focused software products with international ambition.",
  },
];

export const productComparison = [
  {
    label: "Primary job",
    appdeploy: "Entitlement-led private app delivery and install visibility",
    axos: "Private workspace, files, tasks, chat, and governance-first AI assistance",
    claritypath: "Structured guided decision support",
  },
  {
    label: "Main buyer",
    appdeploy: "IT, release, and operations teams",
    axos: "Founders, operators, and privacy-aware teams",
    claritypath: "Leaders and individuals reviewing important choices",
  },
  {
    label: "Status",
    appdeploy: "Rollout-ready",
    axos: "Private evaluation",
    claritypath: "Private access",
  },
];
