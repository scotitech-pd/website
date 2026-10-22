import { meetingLinks } from "@/lib/scheduling";
import { vamiqMedia } from "@/lib/company";

/**
 * Product configuration consumed by the shared ProductTemplate.
 * Keep copy customer-facing and proof-backed. Sections render only when present.
 */

export const products = {
  vamiq: {
    slug: "vamiq",
    name: "Vamiq",
    formerName: "AppDeploy",
    accent: "vamiq", // bg-vamiq / text-vamiq
    logo: "/images/brand/vamiq/vamiq-app-icon-rounded.svg",
    externalUrl: "https://vamiq.app",
    externalLabel: "Start free on vamiq.app",
    operatingSystem: "iOS, iPadOS, macOS, Web",
    status: { variant: "live", dot: true, label: "Live" },
    eyebrow: "Private apps and Apple devices",
    tagline: "Your private apps, on your team’s iPhones, iPads and Macs.",
    description:
      "A branded app store for your private apps, and Apple device management that installs them on iPhone, iPad and Mac, with build checks before each release. Formerly AppDeploy: accounts, devices, apps and billing carried over unchanged.",
    heroSpecs: [
      { label: "Free", value: "Up to 5 devices" },
      { label: "Devices", value: "£1/device/mo" },
      { label: "Distribution", value: "£29/mo" },
      { label: "Platforms", value: "iPhone · iPad · Mac" },
    ],
    featuresTitle: "One workspace for the apps, the devices and the releases.",
    howItWorksTitle: "Live in three steps.",
    statement: {
      eyebrow: "Why Vamiq exists",
      title: "Apple Business stays underneath. Vamiq is the layer teams were building themselves.",
      body: "Apple Business is excellent at app ownership, licence pools and App Store delivery. It does not try to be the day-to-day operational layer: a branded app store employees recognise, a reviewable record of app requests and install status, and clear error states. Teams with their own apps kept building that layer in-house, or bought a large device-management suite for one job. Vamiq takes the other route: one workspace handles enrolment, app installs, release checks and security settings, with the complexity kept out of view.",
      link: {
        label: "How Vamiq compares",
        href: "https://vamiq.app/compare",
      },
      points: [
        { title: "Private app distribution", body: "Your own branded app store for your company’s private and internal apps, on your own web address if you want." },
        { title: "Device management", body: "Set up company iPhones, iPads and Macs, install apps on them, and keep OS updates in view." },
        { title: "Release controls", body: "Check each new build before it reaches a device, forecast the risk of a rollout, and keep a verifiable record of what was released." },
        { title: "Use one part or all three", body: "The three parts run in the same workspace. Start with whichever one solves today’s problem." },
      ],
    },
    hero: {
      media: {
        type: "loop",
        src: vamiqMedia.loop.src,
        poster: vamiqMedia.poster.src,
        width: vamiqMedia.loop.width,
        height: vamiqMedia.loop.height,
        alt: vamiqMedia.poster.alt,
        phone: vamiqMedia.phone,
        caption: "Sample workspace",
      },
    },
    film: true,
    photoCards: [
      {
        photo: "iphone-at-work",
        eyebrow: "For your people",
        title: "Private app distribution",
        body: "Your own branded app store for your company's private and internal apps.",
        href: "https://vamiq.app/private-app-distribution",
      },
      {
        photo: "device-macbook",
        eyebrow: "For your devices",
        title: "Device management",
        body: "Enrol company iPhones, iPads and Macs, install their apps, and manage their settings and security.",
        href: "https://vamiq.app/device-management",
        position: "55% 50%",
      },
      {
        photo: "code-on-mac",
        eyebrow: "For your releases",
        title: "Release controls",
        body: "Check each new build before it reaches a device, and keep a record of what was released.",
        href: "https://vamiq.app/release-controls",
      },
    ],
    problem: {
      title: "Private apps fall between the App Store and a full MDM suite.",
      points: [
        "Test builds expire, and install steps get lost in email threads.",
        "Apple shows install states such as Pending or Failed, but not why a device didn’t converge or what to do next.",
        "Large device-management suites mean thousands of settings and a long rollout, just to put a few private apps on phones.",
        "When an auditor or customer asks what was released, to whom and when, the evidence is scattered.",
      ],
    },
    solution: {
      title: "A release-assurance layer for Apple private apps.",
      points: [
        "Release Guard checks identity, version, signing, compatibility and integrity before a build can reach a device.",
        "Risk Forecast shows licence shortfalls, incompatible devices and expiring certificates before a rollout starts, with the number of devices affected.",
        "Deployment answers give each device a reproducible cause and next action, not just a status. No AI in deployment decisions.",
        "Evidence Packs assemble release identity, targeting and outcomes into a checksummed export an auditor can verify independently.",
      ],
    },
    features: [
      { icon: "Palette", title: "Branded app store", body: "Your people find your private and internal apps in your own branded store, optionally on your own web address." },
      { icon: "Building2", title: "Built on Apple Business", body: "Apple Business Custom Apps and App Store apps, Apps and Books licence sync, Managed Apple Account mapping and directory sync. Your account, apps and licences stay yours." },
      { icon: "ServerCog", title: "Apple device management", body: "Zero-touch enrolment for devices bought through Apple Business, or enrolment by link. App installs by group, Web Clips, passcode rules, OS updates, and lock or erase for a lost iPhone or iPad." },
      { icon: "Laptop", title: "Mac management", body: "Enrol Macs on macOS 14 and later by link or zero-touch. Each Mac reports FileVault, firewall, System Integrity Protection and Secure Boot; install Apple Business apps and signed .pkg packages, and set macOS update deadlines on supervised Macs." },
      { icon: "MousePointerClick", title: "Release controls", body: "Release Guard build checks, Risk Forecast, deployment answers and checksummed Evidence Packs, plus a release upload API for CI/CD and Slack and Microsoft Teams alerts." },
      { icon: "GitBranch", title: "Enterprise identity", body: "SAML and OIDC single sign-on, SCIM provisioning, scheduled directory sync and group rules. Signed Android APK delivery is available as an Enterprise extra." },
    ],
    audiences: {
      eyebrow: "Who it's for",
      title: "Built for three kinds of team.",
      body: "Vamiq works for any organisation with Apple devices. These three get the most from it.",
      items: [
        {
          icon: "Building2",
          title: "Companies with private apps",
          body: "Give your people a branded app store for your private and internal apps, and manage the devices they use for work.",
        },
        {
          icon: "TrendingUp",
          title: "Startups setting up company devices",
          body: "Device records, a daily compliance history and an audit log you can hand to an auditor for your own SOC 2 or ISO 27001 work. Free for up to 5 devices.",
        },
        {
          icon: "BriefcaseBusiness",
          title: "App agencies and Apple IT firms",
          body: "Refer clients to Vamiq or resell it with your own support. Your partner workspace is free.",
        },
      ],
    },
    howItWorks: [
      { title: "Connect Apple Business", body: "Link your Apple Business account. Your account, apps and licences stay yours, and Vamiq builds on them." },
      { title: "Enrol your devices", body: "Send an enrolment link, or use zero-touch enrolment: devices bought through Apple Business set themselves up out of the box and appear in your device list before you hand them out." },
      { title: "Publish your apps", body: "People find them in your branded app store, and Vamiq installs them on the devices you manage, with build checks before each release." },
    ],
    releaseOps: {
      eyebrow: "What makes Vamiq different",
      title: "Ship apps like releases, not like emails.",
      body: "Established Apple-management platforms assign apps and report status. Vamiq adds a release-assurance layer around those operations: catching a bad build before it ships, explaining every device that didn’t converge, and proving all of it afterwards.",
      items: [
        { title: "Release Guard", body: "Every build is preflighted before it can reach a device: identity, version, provisioning, compatibility, privacy metadata and integrity. A failed check blocks the release, and a check that can’t be performed says “unknown”, never “passed”." },
        { title: "Risk Forecast", body: "Before a rollout starts: licence shortfalls, incompatible devices, expiring certificates and stale device data, each with the number of devices affected." },
        { title: "Deployment answers", body: "Every device that hasn’t converged gets a deterministic cause (not assigned, blocked release, offline, retries exhausted) with the evidence behind it and the action that fixes it." },
        { title: "Evidence Packs", body: "One download proving what was released, to whom and with what outcome, checksummed so an auditor can verify it independently." },
        { title: "Your own push certificate", body: "Each workspace that uses device management has its own Apple push certificate. There is no shared platform certificate." },
        { title: "Sensible defaults, fewer settings", body: "Vamiq chooses defaults for the settings most teams need and keeps the rest out of the way, so a team can run its fleet without learning a policy library." },
      ],
      links: [
        { label: "Compare Vamiq", href: "https://vamiq.app/compare" },
        { label: "Trust Centre", href: "https://vamiq.app/trust" },
        { label: "Live service status", href: "https://vamiq.app/status" },
      ],
    },
    security: {
      title: "Security on every plan, Free included",
      points: [
        "Customer data is hosted in the UK and backed up daily.",
        "Traffic over HTTPS; Apple Business credentials, integration secrets and push-certificate keys encrypted at rest with AES-256-GCM.",
        "Every signed-in request checked on the server, and queries on customer data filtered to the user’s own workspace.",
        "An audit log on every plan, Free included: app changes, roles, Apple Business sync and admin actions.",
        "Device records, a daily compliance history and the audit log are ready for your auditor or security team to review.",
      ],
    },
    pricing: {
      trial: "Up to 5 Apple devices are free, with no time limit and no card. 14 days of every feature, no card; afterwards the workspace stays on Free. Prices in GBP, excluding VAT.",
      plans: [
        {
          name: "Free",
          featured: false,
          price: "£0",
          note: "No card, no time limit",
          desc: "Manage up to 5 Apple devices with the device basics.",
          features: [
            "Enrolment by link or zero-touch",
            "App installs, including Apple Business apps",
            "Web Clips for iPhone and iPad",
            "Security settings, OS updates, lock and erase",
            "10 apps and 5 teammates",
            "Audit log",
          ],
          cta: { label: "Start free", href: "https://vamiq.app", external: true },
        },
        {
          name: "Vamiq",
          featured: false,
          price: "£1",
          period: "/device/mo",
          note: "or £10 per device per year · beyond the free 5",
          desc: "Device management for each iPhone, iPad or Mac beyond the free 5. No base fee and no minimum.",
          features: [
            "Everything in Free, for every enrolled device",
            "A Mac counts the same as an iPhone or iPad",
            "Add devices any time; reductions apply at renewal",
          ],
          cta: { label: "See pricing examples", href: "https://vamiq.app/pricing", external: true },
        },
        {
          name: "Distribution",
          featured: true,
          price: "£29",
          period: "/mo",
          note: "or £219/year · the same with or without devices",
          tag: "14-day free trial",
          desc: "Your own branded app store and release controls.",
          features: [
            "Branded app store, on your own web address if you want",
            "Release Guard, Risk Forecast and Evidence Packs",
            "Release upload API for CI/CD",
            "Slack and Microsoft Teams alerts",
          ],
          footerNote: "Example: 50 devices with your own app store is £74 a month before tax.",
          cta: { label: "Start 14-day trial", href: "https://vamiq.app", external: true },
        },
        {
          name: "Enterprise",
          featured: false,
          price: "By agreement",
          desc: "For identity integration, procurement and larger rollouts.",
          features: [
            "SAML/OIDC single sign-on and SCIM",
            "Scheduled directory sync and group rules",
            "Signed Android APK delivery",
            "Executed DPA and security questionnaire response",
          ],
          cta: { label: "Book a demo", type: "modal" },
        },
      ],
    },
    faqs: [
      { q: "What happened to AppDeploy?", a: "In October 2026 AppDeploy became Vamiq. The product, the team and the company behind it, ScotiTech Solutions Limited, are unchanged. Existing accounts, enrolled devices, apps, integrations and billing continue without any action." },
      { q: "Does Vamiq replace Apple Business?", a: "No. Apple Business stays underneath and remains the source of your apps, licences and device assignments. Vamiq is the operational layer on top: the branded app store, device management and release controls." },
      { q: "Can we run Vamiq next to our current device management?", a: "Yes. Apple Business can connect to more than one device management service and assign each device to one of them, so you can keep your current service on the devices it already manages and use Vamiq for the rest." },
      { q: "Does Vamiq manage Android devices?", a: "No. Vamiq is Apple-first. Signed Android APK delivery is available as an Enterprise extra, but Vamiq does not manage Android devices." },
      { q: "What happens after the 14-day trial?", a: "Nothing is charged and nothing is deleted. The workspace moves to Free: up to 5 devices keep working and keep receiving your apps. Your own app store and release controls pause until you add Distribution." },
    ],
    cta: {
      title: "Put your private apps on your team’s devices, with proof of every release.",
      body: "Start free with up to 5 devices, or book a demo with the founder. A free 30-minute setup call helps you connect Apple Business and enrol your first device.",
      primary: "Book a demo",
      secondary: { label: "Contact us", href: "/contact" },
    },
  },

  axos: {
    slug: "axos",
    name: "AXOS",
    accent: "axos",
    logo: "/images/brand/axos-icon-256.webp",
    externalUrl: "https://axos.scotitech.com",
    externalLabel: "Request AXOS access",
    externalNote: "Enterprise access starts at",
    status: { variant: "early", label: "Enterprise only" },
    eyebrow: "Private AI workspace",
    tagline: "Your enterprise AI platform, self-hosted.",
    description:
      "Mail, files, calendar, chat, video and tasks in one workspace, with private AI built in and enterprise knowledge search across it all. AXOS runs inside your own environment, so your data never leaves it. Enterprises start with a guided evaluation, then roll it out to their people.",
    hero: {
      media: {
        type: "window",
        src: "/images/products/axos/command-center-dashboard-1200.webp",
        width: 1200,
        height: 637,
        chrome: "axos.scotitech.com",
        alt: "AXOS Command Centre: governed AI, mail, calendar, tasks and team operations in one view",
        caption: "AXOS Command Centre",
      },
    },
    gallery: {
      eyebrow: "Inside AXOS",
      title: "One private workspace for your whole team.",
      body: "Real screens from AXOS. Everything runs in your environment, under your access rules.",
      items: [
        {
          src: "/images/products/axos/command-center-dashboard-1200.webp",
          width: 1200,
          height: 637,
          chrome: "axos.scotitech.com",
          title: "Command Centre",
          caption: "Your day at a glance: priority mail, focus meetings, work items and a morning brief from governed AI.",
          alt: "AXOS Command Centre with priority queues, meetings and a morning brief",
        },
        {
          src: "/images/products/axos/workspace-dashboard-1200.webp",
          width: 1200,
          height: 772,
          chrome: "axos.scotitech.com",
          title: "Workspace",
          caption: "Mail, drive, calendar, chat, video, tasks and contacts in one place, with recent activity and today's schedule.",
          alt: "AXOS workspace dashboard with mail, calendar, tasks and recent activity",
        },
        {
          src: "/images/products/axos/sign-in-1200.webp",
          width: 1200,
          height: 770,
          chrome: "axos.scotitech.com",
          title: "Single sign-on",
          caption: "Your people sign in with your identity provider over SAML, with biometric sign-in on mobile.",
          alt: "AXOS sign-in page with single sign-on",
        },
      ],
    },
    problem: {
      title: "Most digital workplace solutions put your data in someone else's cloud.",
      points: [
        "Mail, files, chat, and tasks scattered across external SaaS you don't control.",
        "AI features that quietly send your work to third-party models.",
        "Many collaboration suites still leave knowledge, search, and governance split across tools.",
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
      { q: "Can AXOS replace our current office suite?", a: "AXOS is an enterprise workspace for organisations that need private hosting, secure collaboration and stronger data control: mail, files, chat, video and tasks in one place, with governed AI built in." },
      { q: "Does AXOS support enterprise knowledge management?", a: "Yes. AXOS brings files, communication, tasks, and governed AI into one workspace so teams can build controlled enterprise knowledge management and enterprise search AI workflows around their own data." },
      { q: "How do people sign in?", a: "SSO (SAML) on the web, with biometric login available on mobile." },
      { q: "Can we test AXOS before adopting it?", a: "Yes. AXOS is enterprise-only, so we first review your business information and intended use case. Suitable organisations receive private enterprise evaluation access to evaluate AXOS before deciding on employee adoption." },
    ],
    cta: {
      title: "Run your entire workspace on your own terms.",
      body: "Share your business information and we'll provide the right AXOS evaluation route, including private enterprise evaluation access for qualified enterprise teams.",
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
    logo: "/images/brand/claritypath-logo-256.webp",
    externalUrl: "https://vamiq.app/w/scotitech-solutions",
    externalLabel: "Open in Vamiq",
    externalNote: "Access it in the Vamiq portal at",
    status: { variant: "supporting", label: "Accessed via Vamiq" },
    eyebrow: "Guided decision support",
    tagline: "Daily strategic focus for life's biggest decisions.",
    description:
      "ClarityPath turns big, considered decisions such as relocation, career, property and finances into a clear daily focus and a structured plan. Your people open it from your organisation's own app store in Vamiq.",
    hero: {
      media: {
        type: "phone",
        screens: [
          "/images/products/claritypath/app-insights-600.webp",
          "/images/products/claritypath/app-focus-600.webp",
        ],
        alt: "ClarityPath app showing deeper insights and today's strategic focus",
      },
    },
    gallery: {
      eyebrow: "Inside ClarityPath",
      title: "A calm daily focus, and the bigger picture.",
      frame: "phone",
      items: [
        {
          src: "/images/products/claritypath/app-focus-600.webp",
          width: 600,
          height: 1298,
          title: "Today's focus",
          caption: "A short daily read across career, finances and planning, so the day starts with one clear priority.",
          alt: "ClarityPath on iPhone showing today's strategic focus",
        },
        {
          src: "/images/products/claritypath/app-insights-600.webp",
          width: 600,
          height: 1298,
          title: "Deeper insights",
          caption: "Guided areas for relocation, career, property and financial growth, with a month-by-month roadmap.",
          alt: "ClarityPath on iPhone showing the deeper insights screen",
        },
      ],
    },
    spotlight: {
      eyebrow: "Delivered through Vamiq",
      title: "Your team finds it in your own app store.",
      body: "ClarityPath is published in your organisation's branded app store on Vamiq. People open the portal, or scan its QR code on their phone, and install it from there.",
      link: { label: "See how Vamiq works", href: "/products/vamiq" },
      image: {
        src: "/images/products/appdeploy/claritypath-portal.webp",
        width: 1357,
        height: 772,
        chrome: "vamiq.app",
        alt: "ScotiTech's organisation app store on Vamiq, listing ClarityPath",
        caption: "ScotiTech's own app store on Vamiq",
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
      title: "See ClarityPath in the Vamiq portal.",
      body: "ClarityPath is delivered through Vamiq. Talk to us about access for your team.",
      primary: "Talk to our team",
      secondary: { label: "Book a call", href: "/contact" },
    },
  },
};

export function getProduct(slug) {
  return products[slug];
}
