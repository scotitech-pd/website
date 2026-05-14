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
    buyer: "Founders, operators, IT leads, and compliance officers who want to consolidate scattered tools into one controlled environment.",
    headline: "One private workspace for your team's daily work, files, and AI.",
    summary:
      "AXOS brings communication, files, tasks, planning, and policy-aligned AI into one private workspace with hosted, private-cloud, self-hosted, and on-premises deployment paths for organisations that need stronger control.",
    bestFor:
      "Organisations that want less tool sprawl, controlled access to business knowledge, and a practical path to private or on-premises AI.",
    details:
      "Designed for teams that want daily work software with stronger ownership over context, identity, data sources, deployment model, and AI-assisted operations.",
    outcomes: [
      "Mail, files, chat, tasks, and notes",
      "Workspace-level roles and permissions",
      "Deployment choices from hosted evaluation to on-premises rollout",
      "Governance-first AI assistance connected to approved business context",
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
    label: "Cloud pricing",
    value: "From £79 / month",
    detail: "AppDeploy Cloud plan — no hardware, no MDM, live in days.",
  },
  {
    label: "Recognition",
    value: "UK StartUp Awards 2026",
    detail: "Shortlisted in Digital StartUp of the Year, Scotland.",
  },
  {
    label: "Distribution channel",
    value: "Apple Custom Apps",
    detail: "AppDeploy distributes via Apple Business Manager — no App Store required.",
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
    label: "Pricing",
    appdeploy: "From £79/mo Cloud · £600/yr · Custom Enterprise",
    axos: "Private evaluation — book a session to discuss",
    claritypath: "Accessed via AppDeploy",
  },
  {
    label: "Platform",
    appdeploy: "Web admin + iOS app delivery",
    axos: "Web workspace (all modules)",
    claritypath: "iOS mobile app",
  },
  {
    label: "Deployment",
    appdeploy: "Hosted (cloud)",
    axos: "Hosted · Private-cloud · Self-hosted · On-premises",
    claritypath: "Hosted via AppDeploy",
  },
  {
    label: "Status",
    appdeploy: "Rollout-ready",
    axos: "Private evaluation",
    claritypath: "Private access",
  },
];
