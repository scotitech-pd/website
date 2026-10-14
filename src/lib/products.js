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
    operatingSystem: "iOS, iPadOS, macOS, Web",
    status: { variant: "live", dot: true, label: "Live" },
    eyebrow: "Apple device management and private apps",
    tagline: "Manage your iPhones, iPads and Macs, and give your people their own branded app store.",
    description:
      "AppDeploy puts device management, private app distribution and release controls in one workspace for iPhone, iPad and Mac. The first 5 devices are free, then £1 per device a month, with every device feature included at that one price. Your branded app store and release controls are £29 a month, with or without devices.",
    heroSpecs: [
      { label: "Devices", value: "iPhone, iPad, Mac" },
      { label: "Free", value: "First 5 devices" },
      { label: "Then", value: "£1/device/mo" },
      { label: "App store", value: "£29/mo" },
    ],
    featuresTitle: "Everything your Apple devices need, at one price.",
    howItWorksTitle: "From sign-up to a managed, audit-ready fleet.",
    statement: {
      eyebrow: "One workspace",
      title: "Set up devices, deliver apps, and prove it.",
      body: "Most teams juggle a device tool, an app portal and a spreadsheet for the auditor. AppDeploy, built and operated by ScotiTech Solutions Limited, replaces all three. Company devices set themselves up, apps arrive on the right phones and laptops, and every change leaves a record you can hand to an auditor.",
      link: {
        label: "See AppDeploy device management",
        href: "https://appdeploy.scotitech.com/device-management",
      },
      points: [
        { title: "iPhone, iPad and Mac", body: "One console and one price for every Apple device your company owns. A Mac counts as one device, the same as an iPhone." },
        { title: "Built on Apple Business", body: "Apple Business stays the source for your devices, apps and licences. AppDeploy syncs it on a schedule and does the rest." },
        { title: "People, not serial numbers", body: "See every device and who it belongs to, with a plain status: Healthy, Action required or Not reporting." },
        { title: "Evidence on tap", body: "An asset register, daily compliance history and device records for SOC 2, ISO 27001 and Cyber Essentials, ready to download or send to Vanta." },
      ],
    },
    hero: {
      media: {
        type: "image",
        src: "/images/products/appdeploy/claritypath-portal.webp",
        alt: "AppDeploy branded app store showing ClarityPath and other approved business apps",
        presentation: "showcase",
        variant: "appdeploy",
      },
    },
    metrics: [
      { value: "99.9%", label: "Availability SLO" },
      { value: "450+", label: "Apps installed" },
      { value: "~14 days", label: "Typical enterprise rollout" },
      { value: "Apple MDM Vendor", label: "Verified enterprise distribution partner", raw: true },
    ],
    problem: {
      title: "Company devices and private apps turn into manual work.",
      points: [
        "New laptops and phones are set up by hand, one at a time.",
        "Private apps reach staff through scattered links, codes and instructions.",
        "Leavers keep devices, licences and access for longer than they should.",
        "Auditors ask who owns each device and whether it is encrypted and up to date, and the answer lives in a spreadsheet.",
      ],
    },
    solution: {
      title: "Apple Business stays underneath. AppDeploy does the work.",
      points: [
        "Devices bought through Apple Business appear in AppDeploy and set themselves up the first time they are switched on.",
        "Apple Business apps, Custom Apps, App Store apps and Web Clips install on the right devices automatically.",
        "Offboarding is one flow: wipe or reissue the device, take back app licences and keep the record.",
        "Every device has an owner, a plain health status and a history an auditor can check.",
      ],
    },
    features: [
      { icon: "ServerCog", title: "Zero-touch setup", body: "Devices bought through Apple Business appear in AppDeploy on their own and set themselves up with your settings and apps. Any other iPhone, iPad or Mac enrols with a link." },
      { icon: "Lock", title: "Security baselines", body: "Ready-made security settings for iPhone, iPad and Mac, passcode rules on Apple's declarative method, an app allow-list for company phones, and compliance rules that flag any device that drifts." },
      { icon: "HardDrive", title: "FileVault and Activation Lock", body: "Turn on FileVault on company Macs and keep each recovery key in escrow. AppDeploy keeps the Activation Lock bypass code, so a leaver's Apple Account can never lock a company device." },
      { icon: "CalendarRange", title: "Updates with deadlines", body: "Set macOS, iOS and iPadOS update deadlines, and keep Mac App Store apps and the Mac packages you upload up to date by a date you choose." },
      { icon: "Palette", title: "Your brand on every device", body: "Lock-screen message and Mac login text, company wallpaper, and device names such as ACME-MAC-0042 that match your asset register, applied again automatically after an erase." },
      { icon: "Route", title: "Remote actions", body: "Lock, Lost Mode with your message, erase, restart and shut down, Return to Service, single-app kiosk mode and Mac Remote Desktop, each with a reason and an audit record. Erase can need a second admin's approval." },
      { icon: "Users", title: "People and device health", body: "Every device has an owner and one plain status: Healthy, Action required or Not reporting. Device and compliance alerts arrive in Slack, Microsoft Teams or your webhooks." },
      { icon: "FileSearch", title: "Compliance evidence", body: "Daily compliance history, an asset register download, the full software list on company-owned devices, and device records mapped to SOC 2, ISO 27001 and Cyber Essentials controls." },
      { icon: "Layers3", title: "Connected to your stack", body: "Send device records to Vanta, export them for Drata, require a managed device with Okta Verify, and sign admins in with Google or Microsoft." },
      { icon: "Building2", title: "Apps on company devices", body: "Install Apple Business apps, Custom Apps, App Store apps and Web Clips without a prompt on supervised devices, with managed app configuration, apps staff cannot delete and notifications they cannot turn off." },
      { icon: "ShieldCheck", title: "VPN, certificates and security agents", body: "Push VPN settings and certificates, and deploy your chosen security agent to company Macs with its permissions approved in advance, so it installs without prompts." },
      { icon: "Briefcase", title: "Offboarding and switching", body: "Offboard a leaver in one flow: wipe or reissue their devices, take back app licences and keep a record. Move company devices on iOS, iPadOS and macOS 26 from another tool without erasing them." },
    ],
    audiences: {
      eyebrow: "Who it's for",
      title: "Built for three kinds of team.",
      body: "AppDeploy works for any organisation with Apple devices. These three get the most from it.",
      items: [
        {
          icon: "Building2",
          title: "Companies with private apps",
          body: "Give your people a branded app store for your private and internal apps, and manage the devices they use for work.",
        },
        {
          icon: "TrendingUp",
          title: "Startups setting up company devices",
          body: "Set up company Macs, iPhones and iPads as the team grows, with the device evidence a SOC 2, ISO 27001 or Cyber Essentials audit asks for. Free for up to 5 devices.",
        },
        {
          icon: "BriefcaseBusiness",
          title: "App agencies and Apple IT firms",
          body: "Refer clients to AppDeploy or resell it with your own support. Your partner workspace is free.",
        },
      ],
    },
    howItWorks: [
      { title: "Start free", body: "Create a workspace, connect Apple Business and enrol your first 5 devices free. Every feature is open for 14 days, with no card needed." },
      { title: "Sign in your way", body: "Admins sign in with Google or Microsoft, or with a password and two-step verification. Enterprise adds SAML/OIDC single sign-on and SCIM." },
      { title: "Set your baseline once", body: "Choose security settings, update deadlines, FileVault, wallpaper and lock-screen text. Every new device gets them automatically." },
      { title: "Hand out devices", body: "Devices bought through Apple Business set themselves up out of the box. Any other device enrols with a link." },
      { title: "Deliver apps", body: "Assign apps by group, open your branded app store to staff, and ship each new build through Release Guard." },
      { title: "Prove it", body: "Download the asset register and compliance history, send device records to Vanta, and offboard leavers in one flow." },
    ],
    deliveryPaths: {
      eyebrow: "Delivery",
      title: "Three ways an app reaches a device.",
      body: "Getting an app into AppDeploy and getting it onto a phone or Mac are two separate decisions. Pick the route that matches how much control you have over the hardware, and run all three side by side.",
      routes: [
        {
          name: "Branded app store",
          summary: "Staff open your company app store, on your own web address if you want, and install what they are entitled to. Nothing is installed on the device beyond the apps themselves.",
          points: [
            "Works on personally owned devices",
            "No enrolment and no supervision required",
            "Role-based access, so people see only their apps",
            "Every install recorded in the audit trail",
          ],
        },
        {
          name: "Silent install on company devices",
          summary: "Assign an app and the device installs it on its own. No prompt, no tap and no App Store visit for the employee.",
          points: [
            "Install triggered over Apple Push Notification service",
            "Assign by group, so new joiners receive the set automatically",
            "Install state reported back for each device",
            "Apps staff cannot delete, with notifications kept on",
          ],
        },
        {
          name: "Zero-touch enrolment",
          summary: "Devices bought through Apple Business appear in AppDeploy on a schedule and pick up your default setup. The employee unboxes, joins Wi-Fi, and the device arrives configured.",
          points: [
            "Apple Automated Device Enrollment, synced automatically",
            "Setup Assistant panes skipped as you configure them",
            "Supervision with management the employee cannot remove",
            "Return to Service readies an erased device for the next person",
          ],
        },
      ],
      note: "The branded app store reaches any number of people with no enrolment and no per-device fee. Device management is £1 per device a month beyond the free 5, and it installs every app on enrolled devices, Apple Business apps included.",
      link: {
        label: "Read the full delivery guide",
        href: "https://appdeploy.scotitech.com/docs/app-delivery-paths",
      },
    },
    releaseOps: {
      eyebrow: "Release controls",
      title: "Ship apps like releases, not like emails.",
      body: "Assigning an app is the easy part. Knowing it arrived, catching a bad build before it ships, and proving all of it afterwards is what AppDeploy's release layer does.",
      items: [
        { title: "Release Guard", body: "Every artefact is preflighted before it can reach a device: identity, version, signing validity, OS support, and what changed since the last release. A failed check blocks the push, and a check we cannot perform says \"unknown\", never \"passed\"." },
        { title: "Rollout rings", body: "Ship to a first group, expand when you choose. Maintenance windows, deadlines, pause and resume, and a failure threshold that pauses the rollout by itself before more devices get a bad build." },
        { title: "Deployment answers", body: "Every device that hasn't converged tells you exactly why (not assigned, blocked release, device offline, retries exhausted) with the evidence behind it and the one action that fixes it." },
        { title: "Risk Forecast", body: "Before a rollout starts: licence shortfalls, incompatible devices, expiring certificates and stale device data, each with the number of devices affected, never a vague warning." },
        { title: "Evidence Packs", body: "One download proving what was released, to whom, and with what outcome, checksummed so an auditor can verify it independently. Included with Distribution." },
        { title: "Straight from your pipeline", body: "Ship builds from CI with the release upload API, the AppDeploy GitHub Action, Fastlane, or Zapier and Make." },
      ],
      links: [
        { label: "Release controls", href: "https://appdeploy.scotitech.com/release-controls" },
        { label: "Live service status", href: "https://appdeploy.scotitech.com/status" },
        { label: "Trust Centre", href: "https://appdeploy.scotitech.com/trust" },
      ],
    },
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
        "Encrypted in transit (TLS + HSTS) and at rest (AES-256-GCM under a separate key-encryption key).",
        "FileVault recovery keys and Activation Lock bypass codes are held in escrow under their own keys, and every reveal needs a fresh two-step check and leaves an audit record.",
        "PostgreSQL row-level security forced on every tenant table, so isolation is enforced by the database, not only by application code.",
        "Admins sign in with Google, Microsoft or two-step verification. Destructive actions need a reason, typed confirmation and step-up re-authentication, with optional two-person approval.",
        "Append-only, exportable audit trail; deterministic deployment decisions with no AI in the loop.",
        "Hosted in Glasgow, UK, with encrypted off-site backups in the EU. GDPR DPA, India DPDP and CCPA coverage published. No certification badges we do not hold.",
      ],
    },
    pricing: {
      trial: "Every plan starts with 14 days of everything, no card needed. Prices exclude VAT and other sales taxes; pay in pounds, US dollars or euros.",
      plans: [
        {
          name: "Free",
          featured: false,
          price: "£0",
          note: "Up to 5 devices, for as long as you like",
          tag: "No card needed",
          desc: "Everything a small team needs to manage its first company devices.",
          features: [
            "Up to 5 iPhone, iPad and Mac devices (a Mac counts as one device)",
            "Zero-touch setup through Apple Business, or enrol by link",
            "App installs on enrolled devices, Apple Business apps included",
            "Web Clips sent to enrolled iPhones and iPads",
            "Security settings, update deadlines, FileVault, lock and erase",
            "10 apps and 5 teammates",
            "Self-serve guides and the status page",
          ],
          cta: { label: "Start free", href: "https://appdeploy.scotitech.com/request-access", external: true },
        },
        {
          name: "AppDeploy",
          featured: true,
          price: "£1",
          period: "/device/mo",
          note: "Beyond the free 5 · or £10 per device a year · no base fee, no minimum",
          tag: "14-day trial",
          desc: "Every device feature, for as many devices as you need, at one price.",
          sections: [
            {
              label: "Everything in Free, plus",
              items: [
                "As many iPhone, iPad and Mac devices as you need",
                "People, device owners and a plain health status",
                "Asset register, daily compliance history and SOC 2, ISO 27001 and Cyber Essentials evidence",
                "Vanta, Drata, Slack, Microsoft Teams and Okta Verify connections",
                "Offboarding in one flow and Activation Lock escrow",
                "Mac app updates with deadlines and security-agent presets",
                "Admin sign-in with Google or Microsoft",
                "Unlimited apps (fair use) and email support",
              ],
            },
          ],
          footerNote: "14 days of everything, no card. Afterwards the workspace stays on Free unless you choose a plan. Monthly, no minimum, stop at any time.",
          cta: { label: "Start 14-day trial", href: "https://appdeploy.scotitech.com/request-access", external: true },
        },
        {
          name: "Distribution",
          featured: false,
          price: "£29",
          period: "/mo",
          note: "or £219 a year · $39 or €35 a month",
          tag: "With or without devices",
          desc: "Your own branded app store and release controls, the same price whether or not you manage devices.",
          features: [
            "Your branded app store at /w/your-slug, or on your own domain",
            "App Store-style browsing and install guidance for staff",
            "Release Guard, rollout rings and one-click rollback",
            "Risk Forecast and Evidence Packs",
            "Release upload API, GitHub Action, Fastlane, Zapier and Make",
            "Unlimited apps (fair use) and email support",
          ],
          cta: { label: "Start 14-day trial", href: "https://appdeploy.scotitech.com/request-access", external: true },
        },
        {
          name: "Enterprise",
          featured: false,
          price: "Custom",
          note: "Terms by agreement",
          desc: "For organisations that need company-wide identity, directory sync and contractual commitments.",
          features: [
            "Everything in AppDeploy and Distribution",
            "Enterprise SSO through SAML/OIDC with WorkOS",
            "Directory Provisioning (SCIM) for identity providers",
            "Scheduled user and group sync with Joiner / Mover / Leaver rules",
            "Android signed APK delivery",
            "Invoice / purchase-order billing",
            "Guided onboarding: named technical owner, handover, 30-day review",
            "Contractual SLA with service credits, negotiated against the published 99.9% SLO",
            "Executed DPA, quarterly sub-processor review, security questionnaire response",
          ],
          footerNote: "Custom pricing · No commitment · Live within 2 weeks",
          cta: { label: "Book a demo", type: "modal" },
        },
      ],
    },
    caseStudy: {
      eyebrow: "ClarityPath case study",
      title: "An App Store setback became a clearer, controlled route to users.",
      body: "ClarityPath's public App Store review exposed a familiar problem for specialised products: a useful app can still struggle to explain its distinction inside a crowded category. Rather than reduce the product to another public listing, AppDeploy created a branded route where its purpose, access model, and installation journey can be understood before a user begins.",
      points: [
        "The review challenge made the product-positioning and distribution problem visible early.",
        "AppDeploy presents ClarityPath inside an organisation-branded app store with clear platform and access context.",
        "Direct sharing and QR access give approved teams one consistent route instead of fragmented links and instructions.",
      ],
      image: "/images/products/appdeploy/1.jpeg",
      imageAlt: "ClarityPath App Store review challenge documented during the product launch journey",
      link: { label: "Explore ClarityPath", href: "/products/claritypath" },
    },
    faqs: [
      { q: "Does AppDeploy replace Apple Business?", a: "No. Apple Business stays the source for your devices, apps and licences, and they stay yours. AppDeploy syncs it on a schedule and adds device management, your branded app store and release controls on top." },
      { q: "Which devices does AppDeploy manage?", a: "iPhone, iPad and Mac. A Mac counts as one device, the same as an iPhone. Android app delivery, as signed APKs, is available with Enterprise." },
      { q: "Does AppDeploy make us SOC 2 or ISO 27001 compliant?", a: "No tool can do that on its own. AppDeploy gives you the device evidence those audits ask for (owners, encryption, updates, the asset register and daily history), sends it to Vanta, and exports it for Drata and your auditor." },
      { q: "Can we move from another device-management tool without wiping devices?", a: "Yes. Company devices on iOS, iPadOS and macOS 26 move to AppDeploy without being erased, using Apple's migration support." },
      { q: "Does AppDeploy include antivirus?", a: "No. AppDeploy deploys your chosen security agent to company Macs with its permissions approved in advance, and the full software list shows it is installed on every device." },
      { q: "What happens after the 14-day trial?", a: "Every feature is open for 14 days, with no card needed. Afterwards the workspace stays on Free, with up to 5 devices, unless you choose AppDeploy, Distribution or both." },
      { q: "Can I see an app store before signing up?", a: "Yes. Open ScotiTech's own branded app store at appdeploy.scotitech.com/w/scotitech-solutions to see app discovery, install guidance and branding." },
    ],
    cta: {
      title: "Run your Apple devices and private apps from one place.",
      body: "Start free with up to 5 devices, with every feature open for 14 days and no card needed, or talk to our team about a larger rollout.",
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
      "AXOS is a completed core platform currently available for private enterprise evaluation — mail, drive, calendar, chat, video, tasks, enterprise knowledge management, and private AI built in. Organisations share their business profile first, then receive private enterprise evaluation access before adopting AXOS for employees.",
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
