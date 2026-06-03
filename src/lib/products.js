/**
 * Product configuration consumed by the shared ProductTemplate.
 * Keep copy customer-facing and proof-backed. Sections render only when present.
 */

export const products = {
  appdeploy: {
    slug: "appdeploy",
    name: "AppDeploy",
    accent: "appdeploy", // bg-appdeploy / text-appdeploy
    externalUrl: "https://appdeploy.scotitech.com",
    status: { variant: "live", dot: true, label: "Live" },
    eyebrow: "Private app distribution",
    tagline: "Your apps. Your brand. Enterprise-ready in 14 days.",
    description:
      "A polished, branded workspace for private iOS and Android app delivery — with Apple Business-aligned workflows and clearer install guidance, without forcing full MDM adoption.",
    hero: {
      media: {
        type: "image",
        src: "/images/products/appdeploy/phonepic.png",
        alt: "AppDeploy workspace dashboard showing apps, installs and access",
        chrome: "appdeploy.scotitech.com/admin — Workspace",
      },
    },
    metrics: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "4.9 / 5", label: "Customer rating" },
      { value: "14 days", label: "To enterprise go-live" },
      { value: "100%", label: "Deployments on time" },
    ],
    problem: {
      title: "Private app delivery turns into manual work.",
      points: [
        "App Store review isn't designed for every internal-only app workflow.",
        "Enterprise distribution and full MDM add approval, setup, and support overhead.",
        "Apple Business purchases, codes, licences, and Managed Apple ID checks live in separate places.",
        "Employees receive scattered links while admins have limited install visibility.",
      ],
    },
    solution: {
      title: "Apple Business stays underneath. AppDeploy makes it usable.",
      points: [
        "Employees land on a branded internal apps portal instead of raw distribution mechanics.",
        "Admins sync Apps & Books content and manage app-user access in one place.",
        "Branded portal, tracking, and day-to-day rollout workflow on top of compliant distribution.",
      ],
    },
    features: [
      { icon: "Palette", title: "Branded distribution portals", body: "Give each organisation a controlled portal for private app delivery, with clear install guidance and branded presentation." },
      { icon: "Building2", title: "Apple Business delivery", body: "Apps & Books token sync for delivery, plus Apple Business user and group sync on paid plans when Managed Apple ID provisioning is enabled." },
      { icon: "MousePointerClick", title: "Simpler install journey", body: "Keep AppDeploy as the branded, employee-facing portal instead of scattered instructions and disconnected steps." },
      { icon: "Users", title: "Org-level controls", body: "Separate teams, branded pages, and admin workflows by organisation so distribution stays controlled and reviewable as you grow." },
      { icon: "GitBranch", title: "Business and Enterprise paths", body: "Start with hosted Business, or move to Enterprise for scheduled provisioning, group rules, and deeper rollout control." },
      { icon: "BarChart3", title: "Enterprise audit surface", body: "Give Enterprise workspaces a reviewable trail for admin actions, sync activity, and delivery events." },
    ],
    howItWorks: [
      { title: "Discovery", body: "Days 1–3 — kickoff, requirements review, and workspace + branding planning." },
      { title: "Deployment", body: "Days 4–7 — hosted or self-hosted setup, domain and SSL, and security hardening." },
      { title: "Configuration", body: "Days 8–12 — organisation branding, portal setup, and access controls." },
      { title: "Go-live", body: "Days 13–14 — full admin handover, live on schedule with zero downtime." },
    ],
    proof: {
      quote:
        "We replaced three different manual processes with a single AppDeploy workspace. Our IT team now ships updates to 40+ employees faster, and install-related support is much easier to manage.",
      name: "Rohit Ahlawat",
      role: "Director, Aviskaar Enterprises",
      img: "/images/solution/rohit.jpeg",
    },
    security: {
      title: "Built with enterprise security from day one",
      points: [
        "Encrypted in transit (TLS 1.3) and at rest (AES-256).",
        "Role-based access control with least-privilege admin, manager, and viewer roles.",
        "Enterprise audit logs for app uploads, user changes, and branding updates.",
        "Isolated organisation workspaces with cross-tenant access restricted.",
        "EU data residency options; GDPR-aligned and ISO 27001-ready with a published certification roadmap.",
      ],
    },
    pricing: {
      trial: "14-day free trial · no card required",
      plans: [
        {
          name: "Business",
          price: "£79",
          period: "/mo",
          note: "or £599/year — save 37%",
          tag: "Most popular",
          desc: "The complete private app distribution workspace for growing organisations — unlimited apps, unlimited users, full governance.",
          features: [
            "Branded organisation portal, live immediately",
            "Role-based access control",
            "Apple Business aligned workflow",
            "Priority email support from day one",
          ],
          cta: { label: "Start free trial", href: "https://appdeploy.scotitech.com", external: true },
        },
        {
          name: "Enterprise",
          price: "Custom",
          note: "Tailored to your organisation",
          desc: "Everything in Business, plus self-hosted deployment, Android delivery, scheduled sync, and a dedicated team to get you live.",
          features: [
            "Scheduled user & group sync",
            "Android app delivery",
            "Self-hosted deployment",
            "Dedicated implementation engineer",
            "Advanced reporting & audit export",
            "99.9% uptime SLA & compliance documentation",
          ],
          cta: { label: "Book a demo", href: "/contact" },
        },
      ],
    },
    faqs: [
      { q: "Does AppDeploy replace Apple Business?", a: "No — and that's the point. Apple Business handles the compliant distribution layer; AppDeploy adds the branded portal, user management, and rollout workflow on top." },
      { q: "Is Android included in the Business plan?", a: "Android is available on Enterprise plans. If you need iOS and Android from day one, get in touch and we'll find the right fit." },
      { q: "Can I view an app catalogue before signing up?", a: "Yes — open a sample branded workspace before requesting access to see app discovery, install guidance, and branding." },
      { q: "What happens after I start a free trial?", a: "Your branded workspace is live within minutes. Billing only starts after your 14 days, with priority email support from day one." },
    ],
    cta: {
      title: "Modernise private app delivery without full MDM overhead.",
      body: "Start a 14-day free trial — no card required — or talk to our team about an Enterprise rollout.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },

  axos: {
    slug: "axos",
    name: "AXOS",
    accent: "axos",
    status: { variant: "live", dot: true, label: "Live" },
    eyebrow: "Private AI workspace",
    tagline: "Governance-first AI, grounded in your own knowledge.",
    description:
      "AXOS is a private AI workspace trained on your documents and workflows. Ask questions across your business data, process files securely, and keep everything inside infrastructure you control — hosted, in your private cloud, or fully self-hosted.",
    hero: {
      media: { type: "placeholder", label: "Private AI workspace", icon: "/images/brand/axos-icon.png" },
    },
    problem: {
      title: "Useful AI is hard to adopt when the data is sensitive.",
      points: [
        "Repetitive work piles up across documents, email, and internal processes.",
        "Knowledge sits scattered across files, chats, and systems with no central way to ask.",
        "Public AI tools can't be trusted with confidential or regulated information.",
      ],
    },
    solution: {
      title: "Your own AI, on infrastructure you control.",
      points: [
        "A private assistant grounded in your internal documents and workflows.",
        "Ask questions across your business data and get answers sourced from your own files.",
        "Data never leaves your environment — governance-first by design.",
      ],
    },
    features: [
      { icon: "Bot", title: "Private AI assistant", body: "An assistant trained on your internal documents and workflows — not the public web." },
      { icon: "FileSearch", title: "Internal knowledge search", body: "Ask questions across your business data and get answers drawn from your own sources (RAG)." },
      { icon: "FileText", title: "Secure document processing", body: "Summarise, search, and extract insights from files, all inside your environment." },
      { icon: "ServerCog", title: "Deploy where you choose", body: "Run AXOS hosted, in your private cloud, or fully self-hosted on your own servers." },
      { icon: "Lock", title: "Secure and private", body: "Sensitive data stays in your environment, with controls suited to regulated work." },
      { icon: "Layers3", title: "Modular workspace", body: "Start with one workflow and add tools and capabilities only when you need them." },
    ],
    deployment: {
      title: "Deploy AXOS the way your data policy requires.",
      options: [
        { name: "Hosted", body: "We run AXOS for you — the fastest path to a private AI workspace." },
        { name: "Private cloud", body: "Run AXOS inside your own cloud tenancy for tighter control." },
        { name: "Self-hosted", body: "Deploy fully on-prem on your own servers — data never leaves." },
      ],
    },
    howItWorks: [
      { title: "Choose a starting workflow", body: "Pick a focused use case — document analysis, internal search, or drafting." },
      { title: "Deploy on your infrastructure", body: "Run AXOS hosted, in your private cloud, or self-hosted with full control." },
      { title: "Put AI to work internally", body: "Let your team search, summarise, and automate securely across your data." },
    ],
    proof: {
      quote:
        "AXOS gives teams a secure place to put AI to work on their own data, with far less dependence on disconnected tools.",
      name: "Vijay Rathee",
      role: "Founder, Bizztor",
      img: "/images/solution/vijay.jpeg",
    },
    security: {
      title: "Private and governed by design",
      points: [
        "Data stays inside your environment — hosted, private cloud, or self-hosted.",
        "Governance-first AI with controls suited to sensitive and regulated work.",
        "Answers are grounded in your own sources, reducing exposure to public models.",
      ],
    },
    faqs: [
      { q: "Where does our data live?", a: "Wherever you choose. AXOS runs hosted, in your private cloud, or fully self-hosted, so your data stays inside your environment." },
      { q: "What is AXOS for?", a: "A private AI assistant grounded in your own documents — internal knowledge search, secure document processing, and drafting, without sending data to public AI tools." },
      { q: "Who is it built for?", a: "Teams handling sensitive or regulated information — law firms, finance and insurance, healthcare, manufacturing, and agencies." },
    ],
    cta: {
      title: "Bring private AI to your internal knowledge.",
      body: "Book an AXOS session and we'll map a deployment that fits your data and governance needs.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },

  claritypath: {
    slug: "claritypath",
    name: "ClarityPath",
    accent: "claritypath",
    status: { variant: "supporting", label: "Included with AppDeploy" },
    eyebrow: "Guided decision support",
    tagline: "Structured support for sensitive, high-stakes journeys.",
    description:
      "A focused decision-support product for private review sessions, structured planning, and guided next-step recommendations — included with AppDeploy, for considered journeys where a generic form or chatbot isn't enough.",
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
