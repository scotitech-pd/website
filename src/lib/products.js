/**
 * Product configuration consumed by the shared ProductTemplate.
 * Keep copy customer-facing and proof-backed. Sections render only when present.
 */

export const products = {
  appdeploy: {
    slug: "appdeploy",
    name: "AppDeploy",
    accent: "appdeploy", // bg-appdeploy / text-appdeploy
    status: { variant: "live", dot: true, label: "Live" },
    eyebrow: "Internal app distribution",
    tagline: "Internal app distribution, fully under your control.",
    description:
      "Private iOS delivery with branded access pages, release visibility, and a one-tap install experience — so teams and partners get the right build without the manual handoffs.",
    hero: {
      media: {
        type: "image",
        src: "/images/products/appdeploy/phonepic.png",
        alt: "AppDeploy workspace dashboard showing apps, installs and access",
        chrome: "app.appdeploy — Workspace",
      },
    },
    problem: {
      title: "Internal rollout shouldn't depend on manual steps",
      points: [
        "Builds shared over chat, email, or ad-hoc links with no version control.",
        "No clear view of who installed which release, or who still has access.",
        "Non-technical staff stuck following fragile install instructions.",
      ],
    },
    solution: {
      title: "One controlled path from build to install",
      points: [
        "A branded access page employees actually recognise and trust.",
        "Release control with visibility into installs and active users.",
        "Access managed centrally, revoked just as easily.",
      ],
    },
    features: [
      { icon: "Palette", title: "Branded access pages", body: "Distribute through a page that carries your identity, not a generic portal." },
      { icon: "MousePointerClick", title: "One-tap install", body: "A simple, guided install experience for non-technical staff and partners." },
      { icon: "GitBranch", title: "Release control", body: "Publish, stage, and manage versions with clear ownership of each release." },
      { icon: "Users", title: "Access management", body: "Grant and revoke access per person; always know who can reach what." },
      { icon: "BarChart3", title: "Install visibility", body: "See installs, active users, and catalogue status from one dashboard." },
      { icon: "Building2", title: "Enterprise rollout", body: "Structured onboarding and governance for larger, policy-driven teams." },
    ],
    howItWorks: [
      { title: "Upload your build", body: "Bring your internal iOS app into the AppDeploy workspace." },
      { title: "Configure access", body: "Set up a branded distribution page and access rules." },
      { title: "Invite your team", body: "Share a single link; users install in one tap." },
      { title: "Track rollout", body: "Monitor installs, access, and releases as they happen." },
    ],
    proof: {
      quote:
        "AppDeploy gave our team a much clearer internal distribution flow, with a branded access path and far less operational friction around releases.",
      name: "Rohit Ahlawat",
      role: "Aviskaar Enterprises Ltd",
      img: "/images/solution/rohit.jpeg",
    },
    security: {
      title: "Built for control and accountability",
      points: [
        "Access is explicit — granted per person and revocable at any time.",
        "Release ownership and install visibility support audit and governance.",
        "Aligned to Apple Business based internal distribution workflows.",
      ],
    },
    pricing: {
      note: "Plans scale with team size and rollout needs.",
      cta: "Talk to us about pricing",
    },
    faqs: [
      { q: "Is AppDeploy live?", a: "Yes — AppDeploy is running in production today and ready for rollout." },
      { q: "Does it work with Apple Business workflows?", a: "Yes. AppDeploy is built around Apple Business based internal distribution." },
      { q: "Can we brand the install experience?", a: "Yes — distribution pages carry your identity for a recognisable, trusted install." },
    ],
    cta: {
      title: "Ready to clean up internal distribution?",
      body: "See AppDeploy against your rollout and access requirements.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },

  axos: {
    slug: "axos",
    name: "AXOS",
    accent: "axos",
    status: { variant: "early", label: "Early access" },
    eyebrow: "Private team workspace",
    tagline: "A private workspace with AI built into daily work.",
    description:
      "Mail, drive, chat, tasks, and notes in one self-hostable environment — less SaaS sprawl, stronger data control, and AI where teams actually work.",
    hero: {
      media: { type: "placeholder", label: "Product preview coming soon", icon: "/images/brand/axos-icon.png" },
    },
    problem: {
      title: "Daily operations are scattered and leaky",
      points: [
        "Mail, files, chat, and tasks spread across disconnected SaaS tools.",
        "Rising subscription cost and weak control over where data lives.",
        "AI bolted on at the edges instead of built into the workflow.",
      ],
    },
    solution: {
      title: "One private environment for everyday work",
      points: [
        "Core tools unified — mail, drive, chat, tasks, notes — in one place.",
        "A self-hostable option so data stays where you decide.",
        "Private AI assistance built directly into daily work.",
      ],
    },
    features: [
      { icon: "Mail", title: "Mail & calendar", body: "Communication and scheduling inside one controlled workspace." },
      { icon: "HardDrive", title: "Drive & storage", body: "Files and cloud storage your team owns and governs." },
      { icon: "MessageSquare", title: "Chat", body: "Team conversation without another disconnected app." },
      { icon: "CheckSquare", title: "Tasks & notes", body: "Coordination and knowledge captured alongside the work." },
      { icon: "Sparkles", title: "Private AI", body: "AI assistance built into workflows, on your terms." },
      { icon: "ServerCog", title: "Self-hosted option", body: "Deploy privately for stronger data control and sovereignty." },
    ],
    howItWorks: [
      { title: "Request early access", body: "Tell us about your team and what you want to consolidate." },
      { title: "Choose deployment", body: "Pick the hosting and data-control model that fits you." },
      { title: "Onboard your team", body: "Bring daily work into one private environment." },
    ],
    proof: {
      quote:
        "AXOS gives teams one secure place for mail, storage, coordination, and AI-assisted work — with much less dependence on disconnected tools.",
      name: "Vijay Rathee",
      role: "Founder, Bizztor",
      img: "/images/solution/vijay.jpeg",
    },
    security: {
      title: "Private by design",
      points: [
        "Self-hosting option keeps data within your chosen boundary.",
        "Clear data ownership rather than scattered third-party storage.",
        "Deployment control suited to privacy-conscious teams.",
      ],
    },
    cta: {
      title: "Join AXOS early access",
      body: "Get a private preview and shape a deployment that fits your data and control needs.",
      primary: "Request early access",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },

  claritypath: {
    slug: "claritypath",
    name: "ClarityPath",
    accent: "claritypath",
    status: { variant: "supporting", label: "Supporting product" },
    eyebrow: "Decision-support tools",
    tagline: "Structured support for sensitive, high-stakes journeys.",
    description:
      "Private decision-support tools designed for considered, sensitive user journeys — where a generic form or chatbot isn't enough.",
    hero: {
      media: { type: "placeholder", label: "Product preview coming soon", icon: "/images/brand/claritypath-logo.png" },
    },
    problem: {
      title: "Sensitive decisions need structure, not noise",
      points: [
        "High-stakes journeys reduced to generic forms or shallow chatbots.",
        "Little privacy consideration for genuinely sensitive information.",
        "No guided structure to help people move forward with confidence.",
      ],
    },
    solution: {
      title: "A private, guided path",
      points: [
        "Structured flows shaped around real, considered decisions.",
        "Privacy-conscious handling of sensitive inputs.",
        "Clarity at each step rather than an open-ended interaction.",
      ],
    },
    features: [
      { icon: "Route", title: "Guided journeys", body: "Considered, step-by-step flows for sensitive decisions." },
      { icon: "Lock", title: "Privacy-conscious", body: "Built to handle sensitive information with care." },
      { icon: "Compass", title: "Clear structure", body: "Direction and clarity instead of an open-ended chat." },
    ],
    cta: {
      title: "Interested in ClarityPath?",
      body: "Talk to us about where structured decision-support fits your needs.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },
};

export function getProduct(slug) {
  return products[slug];
}
