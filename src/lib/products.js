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
    externalUrl: "https://axos.scotitech.com",
    status: { variant: "early", label: "Enterprise" },
    eyebrow: "Private AI workspace",
    tagline: "Your entire workspace — self-hosted.",
    description:
      "An enterprise-grade productivity suite with an AI agent built in: mail, drive, calendar, chat, video, and tasks, running 100% on your own infrastructure with zero external calls and complete data sovereignty.",
    hero: {
      media: {
        type: "image",
        src: "/images/products/axos/workspace.png",
        alt: "AXOS self-hosted workspace sign-in with mail, drive, calendar, chat, video and tasks",
        chrome: "axos.scotitech.com",
      },
    },
    problem: {
      title: "Modern productivity suites put your data in someone else's cloud.",
      points: [
        "Mail, files, chat, and tasks scattered across external SaaS you don't control.",
        "AI features that quietly send your work to third-party models.",
        "Sovereignty and compliance hard to guarantee on public platforms.",
      ],
    },
    solution: {
      title: "One self-hosted suite — with AI — that never leaves your environment.",
      points: [
        "Mail, drive, calendar, chat, video, and tasks in a single private workspace.",
        "NexaAgent, an AI agent built in and running on your own infrastructure.",
        "100% on-premise: zero external calls and complete data sovereignty.",
      ],
    },
    features: [
      { icon: "Mail", title: "Mail & calendar", body: "Email and scheduling inside one private workspace your team owns." },
      { icon: "HardDrive", title: "Drive & storage", body: "Files and shared storage, controlled end to end on your infrastructure." },
      { icon: "Video", title: "Chat & video", body: "Team messaging and calls without routing through a third-party tool." },
      { icon: "CheckSquare", title: "Tasks", body: "Plan and coordinate work alongside everything else in the suite." },
      { icon: "Bot", title: "NexaAgent — AI built in", body: "An integrated AI agent that runs entirely on your own infrastructure." },
      { icon: "ServerCog", title: "100% on-premise", body: "Zero external calls and complete data sovereignty by design." },
    ],
    deployment: {
      title: "Deploy AXOS the way your data policy requires.",
      options: [
        { name: "Hosted", body: "We run a dedicated AXOS instance for you — the fastest way to start." },
        { name: "Private cloud", body: "Run AXOS inside your own cloud tenancy for tighter control." },
        { name: "Self-hosted", body: "Deploy fully on-prem on your own servers — data never leaves." },
      ],
    },
    howItWorks: [
      { title: "Deploy on your infrastructure", body: "Stand up AXOS self-hosted, in your private cloud, or hosted by us." },
      { title: "Connect your team", body: "Onboard with SSO (SAML) on web and biometric login on mobile." },
      { title: "Work with AI built in", body: "Use mail, drive, chat, video, and tasks — with NexaAgent alongside." },
    ],
    proof: {
      quote:
        "AXOS gives teams a secure place to put AI to work on their own data, with far less dependence on disconnected tools.",
      name: "Vijay Rathee",
      role: "Founder, Bizztor",
      img: "/images/solution/vijay.jpeg",
    },
    security: {
      title: "Enterprise security, complete sovereignty",
      points: [
        "100% on-premise — zero external calls; your data never leaves your environment.",
        "End-to-end encrypted, with SSO (SAML) on web and biometric login on mobile.",
        "Multi-tenant isolation for separate teams, departments, or clients.",
      ],
    },
    faqs: [
      { q: "Is AXOS really self-hosted?", a: "Yes. AXOS runs 100% on your own infrastructure (or private cloud), with zero external calls and complete data sovereignty." },
      { q: "What's included in the suite?", a: "Mail, drive, calendar, chat, video, and tasks — plus NexaAgent, an AI agent built directly into the workspace." },
      { q: "How do people sign in?", a: "SSO (SAML) on the web, with biometric login available on mobile." },
    ],
    cta: {
      title: "Run your entire workspace on your own terms.",
      body: "Book an AXOS session and we'll map a self-hosted, private-cloud, or hosted deployment to fit your data and compliance needs.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },

  claritypath: {
    slug: "claritypath",
    name: "ClarityPath",
    accent: "claritypath",
    externalUrl: "https://appdeploy.scotitech.com/w/scotitech-solutions",
    externalLabel: "Open in AppDeploy",
    externalNote: "Access it in the AppDeploy portal at",
    status: { variant: "supporting", label: "Accessed via AppDeploy" },
    eyebrow: "Guided decision support",
    tagline: "Daily strategic focus for life's biggest decisions.",
    description:
      "A mobile decision-support companion that turns considered, high-stakes choices — relocation, career, property, and finances — into a clear daily focus and a structured plan. Accessed through the AppDeploy portal.",
    hero: {
      media: {
        type: "phone",
        screens: [
          "/images/products/claritypath/app-insights.png",
          "/images/products/claritypath/app-focus.png",
        ],
        alt: "ClarityPath app showing deeper insights and today's strategic focus",
      },
    },
    problem: {
      title: "Big decisions rarely come with a clear plan.",
      points: [
        "High-stakes choices — relocating, changing careers, buying property — handled ad hoc.",
        "Generic advice that ignores your own situation and timing.",
        "No daily sense of where to focus, or how this month fits the year ahead.",
      ],
    },
    solution: {
      title: "A clear daily focus, and a plan for the year.",
      points: [
        "Tailored insight across relocation, career, property, and finances.",
        "A daily strategic focus that tells you where to put your attention.",
        "A month-by-month roadmap so each decision fits the bigger picture.",
      ],
    },
    features: [
      { icon: "Compass", title: "Daily strategic focus", body: "A daily read on where to put your attention, with practical, grounded tips." },
      { icon: "Route", title: "Relocation planning", body: "Tailored insight to relocate or settle abroad with confidence." },
      { icon: "BarChart3", title: "Career success", body: "Spot upcoming opportunities for promotion, growth, or going out on your own." },
      { icon: "Building2", title: "Property planning", body: "Plan home and property moves with clarity and long-term stability." },
      { icon: "Sparkles", title: "Financial growth", body: "Understand where to save, invest, and build financial momentum." },
      { icon: "Calendar", title: "Yearly roadmap", body: "A month-by-month roadmap to guide the year ahead." },
    ],
    cta: {
      title: "See ClarityPath in the AppDeploy portal.",
      body: "ClarityPath is delivered through AppDeploy. Talk to us about access for your team.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },
};

export function getProduct(slug) {
  return products[slug];
}
