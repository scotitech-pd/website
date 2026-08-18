import { meetingLinks } from "@/lib/scheduling";

/**
 * Product configuration consumed by the shared ProductTemplate.
 * Keep copy customer-facing and proof-backed. Sections render only when present.
 */

export const products = {
  appdeploy: {
    slug: "appdeploy",
    name: "AppDeploy",
    accent: "appdeploy", // bg-appdeploy / text-appdeploy
    logo: "/images/brand/appdeploy-logo-black.png",
    externalUrl: "https://appdeploy.scotitech.com",
    status: { variant: "live", dot: true, label: "Live" },
    eyebrow: "Private app distribution",
    tagline: "Private app distribution with optional remote deployment, built around Apple Business.",
    description:
      "AppDeploy turns private iOS rollout into a branded workspace. Business supports Apple Business Manager Apps & Books, iOS redemption codes, and enterprise-signed IPA delivery for up to five enrolled devices. Android signed APK upload and delivery is available with Enterprise.",
    heroSpecs: [
      { label: "Access model", value: "Entitlement-led" },
      { label: "Releases", value: "Versions + roles" },
      { label: "Business", value: "From £79/mo" },
      { label: "Enterprise", value: "Custom" },
    ],
    featuresTitle: "Publish, guide, and review app access from one place.",
    howItWorksTitle: "One path from request to release review.",
    statement: {
      eyebrow: "Rollout architecture",
      title: "Built for controlled app rollout, not a full device-management suite.",
      body: "AppDeploy combines Apple Business distribution, signed app delivery, a branded user workspace, and focused remote deployment capacity. Business includes AutoDeploy for five enrolled Apple devices, with additional capacity available on the same subscription.",
      points: [
        { title: "Entitlement-led access", body: "App availability managed per organisation and user, not per device." },
        { title: "Apple Business aligned", body: "Apps & Books token sync and Managed Apple ID workflows underneath." },
        { title: "Remote deployment capacity", body: "AutoDeploy is included for the first five enrolled Apple devices on Business." },
        { title: "Rollout audit trail", body: "App assignment, command status, sync, and delivery events stay reviewable." },
      ],
    },
    hero: {
      media: {
        type: "image",
        src: "/images/products/appdeploy/claritypath-portal.webp",
        alt: "AppDeploy organisation portal showing ClarityPath and other approved business apps",
        presentation: "showcase",
        variant: "appdeploy",
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
      { icon: "Building2", title: "Business delivery routes", body: "Use Apple Business Manager Apps & Books, iOS redemption codes, or enterprise-signed IPA delivery for up to five enrolled devices." },
      { icon: "ServerCog", title: "AutoDeploy for Apple devices", body: "Business includes remote deployment for five enrolled Apple devices, with QR enrolment and additional capacity when needed." },
      { icon: "MousePointerClick", title: "Simpler install journey", body: "Keep AppDeploy as the branded, employee-facing portal instead of scattered instructions and disconnected steps." },
      { icon: "Users", title: "Org-level controls", body: "Separate teams, branded pages, and admin workflows by organisation so distribution stays controlled and reviewable as you grow." },
      { icon: "GitBranch", title: "Business and Enterprise paths", body: "Start with hosted Business, or move to Enterprise for Android signed APK upload and delivery, scheduled provisioning, group rules, and deeper rollout control." },
    ],
    howItWorks: [
      { title: "Request a workspace", body: "Business requests move through email verification, billing, and activation; Enterprise requests move into review-led onboarding." },
      { title: "Configure the brand", body: "Set the organisation slug, display name, logo, accent colour, public-page status, and enabled platforms." },
      { title: "Add approved apps", body: "Business supports Apple Business Manager Apps & Books, iOS redemption codes, and enterprise-signed IPA delivery. Android signed APK upload and delivery is available with Enterprise." },
      { title: "Share or remotely deploy", body: "Give users one branded portal, or use QR enrolment and AutoDeploy to assign eligible Apple apps to enrolled devices." },
      { title: "Track usage", body: "Monitor installs, codes, active users, app inventory, per-device commands, and distribution activity." },
      { title: "Review operations", body: "Audit logs and member permissions give larger teams a cleaner way to review sensitive release actions." },
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
      trial: "AppDeploy Business includes AutoDeploy for the first five enrolled Apple devices. Increase remote-deployment capacity from £2/device/month.",
      plans: [
        {
          name: "Business",
          featured: true,
          price: "£79",
          period: "/mo",
          note: "or £599/year — save 37%",
          tag: "14-day free trial",
          desc: "The complete private app distribution workspace for growing organisations — unlimited apps, unlimited users, full governance.",
          sections: [
            {
              label: "Ways to add and deliver apps",
              items: [
                "Apple Business Manager Apps & Books",
                "iOS redemption codes",
                "Enterprise-signed IPA delivery for up to five enrolled devices",
              ],
            },
            {
              label: "Your 14-day free trial includes",
              boxed: true,
              items: [
                "Branded organisation portal, live immediately",
                "Reduced code handling, clearer install guidance, and fewer support requests",
                "Role-based access control",
                "Manual iOS release setup for trial validation",
                "Apple Business aligned workflow",
                "Priority email support from day one",
              ],
            },
          ],
          details: {
            label: "Trial limits",
            items: [
              { label: "Apps", value: "10 maximum" },
              { label: "Installs", value: "100 maximum" },
              { label: "User invitations", value: "5, then unlimited" },
              { label: "Team invitations", value: "Email enabled" },
            ],
            notes: [
              "Apple Business token sync and directory sync unlock after trial activation.",
            ],
          },
          footerNote: "After 14 days, all trial limits lift and full Business access continues from £79/month. Cancel before the trial ends and you will not be charged.",
          cta: { label: "Start Business trial", href: "https://appdeploy.scotitech.com/request-access", external: true },
        },
        {
          name: "AutoDeploy",
          featured: false,
          price: "+ £2",
          period: "/device/mo",
          note: "First 5 devices included · Add more from £2/device/month · Save 15% when billed annually",
          tag: "5 devices included with Business",
          desc: "Business already includes AutoDeploy for five devices. Increase the allowance when you need to enrol more iPhones or iPads, assign approved apps, and deploy them remotely. Everything stays on the same Business subscription and Stripe invoice.",
          sections: [
            {
              label: "Remote deployment capacity",
              boxed: true,
              items: [
                "Deploy eligible iPhone and iPad apps already managed in Business",
                "Shareable QR enrolment links with configurable validity",
                "Automatic app assignment when a device enrols",
                "Remote app deployment through Apple MDM and APNs",
                "Silent installation on eligible supervised devices",
                "Per-device command status and audit trail",
                "Push certificate setup and expiry reminders",
                "CMS-signed enrolment profiles",
              ],
            },
          ],
          details: {
            label: "Device rates",
            items: [
              { label: "6–25 total devices", value: "£2/device/mo" },
              { label: "26–100 total devices", value: "£1.75/device/mo" },
              { label: "101+ total devices", value: "£1.50/device/mo" },
            ],
            notes: [
              "The first five devices are included with Business. The rate for your total allowance applies only to devices above those five.",
              "Device increases are prorated immediately. Reductions take effect at the next renewal.",
            ],
          },
          cta: { label: "Start Business", href: "https://appdeploy.scotitech.com/request-access", external: true },
        },
        {
          name: "Enterprise",
          featured: true,
          price: "Custom",
          note: "Tailored to your organisation",
          desc: "Everything your IT and compliance teams need: Android signed APK upload and delivery, self-hosted deployment review, scheduled sync, advanced reporting, audit exports, and a dedicated team to get you live.",
          features: [
            "Everything in Business",
            "Scheduled user & group sync",
            "Enterprise SSO through SAML/OIDC with WorkOS",
            "Directory provisioning (SCIM) for identity providers",
            "Group-based app user provisioning",
            "Android signed APK upload and delivery",
            "Self-hosted deployment",
            "Dedicated implementation engineer",
            "Dedicated customer success manager",
            "Advanced reporting & audit export",
            "Negotiated uptime commitment",
            "Compliance documentation",
          ],
          footerNote: "Custom pricing · No commitment · Live within 2 weeks",
          cta: { label: "Book a demo", href: meetingLinks.appdeploy, external: true },
        },
      ],
    },
    caseStudy: {
      eyebrow: "ClarityPath case study",
      title: "An App Store setback became a clearer, controlled route to users.",
      body: "ClarityPath's public App Store review exposed a familiar problem for specialised products: a useful app can still struggle to explain its distinction inside a crowded category. Rather than reduce the product to another public listing, AppDeploy created a branded route where its purpose, access model, and installation journey can be understood before a user begins.",
      points: [
        "The review challenge made the product-positioning and distribution problem visible early.",
        "AppDeploy presents ClarityPath inside an organisation-branded catalogue with clear platform and access context.",
        "Direct sharing and QR access give approved teams one consistent route instead of fragmented links and instructions.",
      ],
      image: "/images/products/appdeploy/1.jpeg",
      imageAlt: "ClarityPath App Store review challenge documented during the product launch journey",
      link: { label: "Explore ClarityPath", href: "/products/claritypath" },
    },
    faqs: [
      { q: "Does AppDeploy replace Apple Business?", a: "No — and that's the point. Apple Business handles the compliant distribution layer; AppDeploy adds the branded portal, user management, and rollout workflow on top." },
      { q: "Is Android included in the Business plan?", a: "No. Android signed APK upload and delivery is available with Enterprise. Business supports Apple Business Manager Apps & Books, iOS redemption codes, and enterprise-signed IPA delivery for up to five enrolled devices." },
      { q: "Is AutoDeploy a separate plan?", a: "No. Business includes AutoDeploy for the first five enrolled Apple devices. Additional capacity is charged from device 6 using the published device-rate tiers, on the same Business subscription and invoice." },
      { q: "Can I view an app catalogue before signing up?", a: "Yes — open a sample branded workspace before requesting access to see app discovery, install guidance, and branding." },
      { q: "What happens after I start a free trial?", a: "The 14-day Business trial includes a branded portal, manual iOS release setup for validation, five user invitations, up to 10 apps, and up to 100 installs. Full limits and connected directory features unlock after activation." },
    ],
    cta: {
      title: "Give private app delivery a product-grade front door.",
      body: "Start a 14-day free trial — no card required — or talk to our team about an Enterprise rollout.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },

  axos: {
    slug: "axos",
    name: "AXOS",
    accent: "axos",
    logo: "/images/brand/axos-icon.png",
    externalUrl: "https://axos.scotitech.com",
    externalLabel: "Request AXOS access",
    externalNote: "Enterprise access starts at",
    status: { variant: "early", label: "Enterprise only" },
    eyebrow: "Private AI workspace",
    tagline: "Your enterprise AI platform, self-hosted.",
    description:
      "A completed enterprise-only AI workspace and secure collaboration platform with mail, drive, calendar, chat, video, tasks, enterprise knowledge management, and private AI built in. Organisations share their business profile first, then receive a limited testing platform before adopting AXOS for employees.",
    hero: {
      media: {
        type: "image",
        src: "/images/products/axos/command-center-dashboard.webp",
        alt: "AXOS Command Center dashboard showing governed AI, mail, calendar, tasks and team operations",
        presentation: "showcase",
        variant: "axos",
      },
    },
    problem: {
      title: "Most digital workplace solutions put your data in someone else's cloud.",
      points: [
        "Mail, files, chat, and tasks scattered across external SaaS you don't control.",
        "AI features that quietly send your work to third-party models.",
        "Many Google Workspace alternatives or Microsoft 365 alternatives still leave knowledge, search, and governance split across tools.",
      ],
    },
    solution: {
      title: "One self-hosted enterprise AI platform that never leaves your environment.",
      points: [
        "Mail, drive, calendar, chat, video, and tasks in a single private AI workspace.",
        "Secure collaboration software with enterprise knowledge management and governed enterprise search AI built in.",
        "100% on-premise AI: zero external calls and complete data sovereignty.",
      ],
    },
    features: [
      { icon: "Mail", title: "Mail & calendar", body: "Email and scheduling inside one private workspace your team owns." },
      { icon: "HardDrive", title: "Drive, storage & knowledge", body: "Files, shared storage, and enterprise knowledge management controlled end to end on your infrastructure." },
      { icon: "Video", title: "Chat & video", body: "Team messaging and calls without routing through a third-party tool." },
      { icon: "CheckSquare", title: "Tasks", body: "Plan and coordinate work alongside everything else in the suite." },
      { icon: "Bot", title: "Governance-first private AI", body: "Policy-aligned AI and enterprise search AI built into the workspace, shaped by your access rules, team policy, and data posture." },
      { icon: "ServerCog", title: "Self-hosted and on-premise", body: "Self-hosted AI or on-premise AI deployment with zero external calls and complete data sovereignty by design." },
    ],
    audiences: {
      eyebrow: "Who AXOS is for",
      title: "Built for teams that can't afford to leak.",
      body: "Regulated, sensitive, or simply serious about data ownership — these are the teams AXOS was made for. The clearer fit is usually one that already knows its current tools spread it thin.",
      items: [
        {
          icon: "HeartPulse",
          title: "Healthcare & care providers",
          body: "Approved protocols, internal guidance, and shift handovers — searchable in seconds, without sending notes to a public model.",
          example: "Summarise a discharge policy for a manager preparing the handover.",
        },
        {
          icon: "Landmark",
          title: "Financial services & accounting",
          body: "Compliance knowledge, client files, and working memos in one controlled environment — no copy-paste into someone else's chatbot.",
          example: "Pull an internal compliance check from approved policies without leaving the workspace.",
        },
        {
          icon: "Factory",
          title: "Manufacturing & logistics",
          body: "Maintenance manuals, supplier documents, and shift summaries that operators can actually find when they need them.",
          example: "Ask a maintenance log a question and get an answer with its source attached.",
        },
        {
          icon: "BriefcaseBusiness",
          title: "Legal & professional services",
          body: "Privileged work stays privileged. Internal precedent and matter notes available to your team — not to the open internet.",
          example: "Draft from a partner's matter notes without routing through a third-party drive.",
        },
        {
          icon: "Store",
          title: "Retail & multi-site operations",
          body: "One playbook across every site. Store managers ask once; the answer comes from your real, approved guidance — never scattered shared drives.",
          example: "Answer store-by-store policy questions from internal guidance, not multiple inboxes.",
        },
        {
          icon: "Truck",
          title: "Transport & field services",
          body: "Operational know-how on the road. Field teams query approved procedures, safety records, and job notes from a controlled workspace.",
          example: "Generate a field-service summary from job notes and approved safety records.",
        },
      ],
    },
    deployment: {
      eyebrow: "Deployment model",
      title: "Start lean. Mature toward deeper ownership.",
      body: "Begin where evaluation is fastest. Move to private cloud, self-hosted AI, or fully on-premise AI as your data posture demands. Same secure collaboration platform, different perimeter.",
      options: [
        {
          icon: "Cloud",
          name: "Hosted evaluation",
          body: "The fastest path to a working private evaluation. We run AXOS so your security review can start in days, not quarters.",
        },
        {
          icon: "Server",
          name: "Private cloud",
          body: "Run AXOS inside your own cloud tenancy. Same product, your perimeter, your keys.",
        },
        {
          icon: "ServerCog",
          name: "Self-hosted",
          body: "Deploy AXOS on infrastructure you operate. Zero external dependence, complete data residency.",
        },
        {
          icon: "ShieldCheck",
          name: "On-premises",
          body: "Behind your firewall, on your hardware. For teams whose policy doesn't permit anything else.",
        },
      ],
    },
    qualifying: {
      eyebrow: "Private evaluation",
      title: "Days, not months. Scoped per team.",
      body: "AXOS is in active deployment. Access is granted per team and moves at the pace of your security review — not the other way round.",
      columns: [
        {
          label: "How to qualify",
          title: "Book a 45-min strategy session",
          body: "A short call where we learn your data posture and you see whether AXOS genuinely fits before either side commits.",
        },
        {
          label: "What happens next",
          title: "We map deployment fit and next steps",
          body: "Within the same session we sketch the deployment model that fits your governance — and write the next two steps with you.",
        },
        {
          label: "Pricing",
          title: "Scoped to your deployment",
          body: "Discussed openly in the same call, based on team size and deployment model. No SKU games, no surprise tiers.",
        },
        {
          label: "Timeline",
          title: "Evaluation to access in days",
          body: "Most qualifying teams reach a private evaluation inside the first two weeks. Production follows the pace of your review.",
        },
      ],
    },
    howItWorks: [
      { title: "Share your business profile", body: "Tell us your industry, team size, workflows, data requirements, and infrastructure preferences." },
      { title: "Test AXOS for a limited time", body: "We provide a working testing platform so your decision-makers can evaluate the real product." },
      { title: "Adopt for employees", body: "If AXOS fits, we scope the employee rollout across self-hosted or private-cloud deployment." },
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
      { q: "Is AXOS really self-hosted?", a: "Yes. AXOS can run on your own infrastructure or private cloud, with zero external calls and complete data sovereignty for teams that need self-hosted AI or on-premise AI." },
      { q: "What's included in the AI workspace?", a: "Mail, drive, calendar, chat, video, and tasks, plus a governance-first AI agent built directly into the digital workspace platform." },
      { q: "Is AXOS a Google Workspace or Microsoft 365 alternative?", a: "AXOS is not positioned as a free or lightweight replacement for every team. It is an enterprise-only Google Workspace alternative or Microsoft 365 alternative for organisations that need private hosting, secure collaboration, and stronger data control." },
      { q: "Does AXOS support enterprise knowledge management?", a: "Yes. AXOS brings files, communication, tasks, and governed AI into one workspace so teams can build controlled enterprise knowledge management and enterprise search AI workflows around their own data." },
      { q: "How do people sign in?", a: "SSO (SAML) on the web, with biometric login available on mobile." },
      { q: "Can we test AXOS before adopting it?", a: "Yes. AXOS is enterprise-only, so we first review your business information and intended use case. Suitable organisations receive a limited testing platform to evaluate AXOS before deciding on employee adoption." },
    ],
    cta: {
      title: "Run your entire workspace on your own terms.",
      body: "Share your business information and we'll provide the right AXOS evaluation route, including a limited testing platform for qualified enterprise teams.",
      primary: "Request AXOS evaluation",
      secondary: { label: "Book a call", href: "/contact" },
    },
    rolloutPaths: {
      eyebrow: "AXOS rollout review",
      title: "Move from product interest to a real deployment conversation.",
      body: "Three entry points, depending on where you are right now — exploring, evaluating, or ready to talk specifics.",
      paths: [
        {
          label: "See it live",
          title: "Open the AXOS workspace",
          body: "Visit axos.scotitech.com to see how the product presents to a real team — sign-in, modules, and AI surfaced in one place.",
          action: { type: "external", href: "https://axos.scotitech.com", label: "Go to AXOS" },
        },
        {
          label: "Send a brief",
          title: "Complete a rollout brief",
          body: "Share your governance, scale, and timeline. We respond with a deployment fit and the next two steps — no scheduling required.",
          action: { type: "link", href: "/contact", label: "Brief our team" },
        },
        {
          label: "Talk to the team",
          title: "Book an AXOS session",
          body: "A 45-minute call to map your data posture, deployment model, and a private evaluation if AXOS fits.",
          action: { type: "modal", label: "Book AXOS session" },
        },
      ],
    },
  },

  claritypath: {
    slug: "claritypath",
    name: "ClarityPath",
    accent: "claritypath",
    logo: "/images/brand/claritypath-logo.png",
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
