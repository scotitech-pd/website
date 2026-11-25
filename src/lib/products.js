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
    // The "Start free" buttons open Vamiq's quick sign-up directly.
    signupUrl: "https://vamiq.app/join",
    externalLabel: "Start free on vamiq.app",
    operatingSystem: "iOS, iPadOS, macOS, Windows, Web",
    status: { variant: "live", dot: true, label: "Live" },
    eyebrow: "Apple and Windows devices, private apps",
    tagline: "Your devices and your own apps, managed in one place.",
    description:
      "Set up, secure and manage your team’s iPhones, iPads, Macs and Windows PCs in one workspace, and put your private apps on your Apple devices through your own branded app store, with build checks before each release. Formerly AppDeploy: accounts, devices, apps and billing carried over unchanged.",
    heroSpecs: [
      { label: "Free", value: "Up to 5 devices" },
      { label: "Per device, monthly", value: "£1 / $1 / €1 / ₹100" },
      { label: "Distribution, monthly", value: "£29 / $29 / €29 / ₹2,900" },
      { label: "Platforms", value: "iPhone · iPad · Mac · Windows" },
    ],
    featuresTitle: "One workspace for the apps, the devices and the releases.",
    howItWorksTitle: "Up and running in three steps.",
    statement: {
      eyebrow: "Why Vamiq exists",
      title: "Apple Business stays underneath. Vamiq is the layer teams were building themselves.",
      body: "Apple Business is excellent at app ownership, licence pools and App Store delivery. It does not try to be the day-to-day operational layer: a branded app store employees recognise, a reviewable record of app requests and install status, and clear error states. Teams with their own apps kept building that layer in-house, or bought a large device-management suite for one job. Vamiq takes the other route: one workspace handles enrolment, app installs, release checks and security settings, with the complexity kept out of view.",
      links: [
        { label: "How Apple Business app distribution works", href: "https://vamiq.app/apple-business-app-distribution" },
        { label: "Internal app distribution for iPhone and iPad", href: "https://vamiq.app/internal-app-distribution" },
        { label: "Enterprise iOS app distribution guide", href: "https://vamiq.app/enterprise-ios-app-distribution-guide" },
        { label: "How Vamiq compares", href: "https://vamiq.app/compare" },
      ],
      points: [
        { title: "Private app distribution", body: "Your own branded app store for your company’s private and internal apps." },
        { title: "Device management", body: "Set up company iPhones, iPads, Macs and Windows PCs, install apps on them, and keep OS updates in view." },
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
        body: "Enrol company iPhones, iPads, Macs and Windows PCs, install their apps, and manage their settings and security.",
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
      { icon: "Palette", title: "Branded app store, built on Apple Business", body: "Your people find your private and internal apps in your own branded store, with your logo and brand colour. Apple Business Custom Apps and App Store apps, Apps and Books licence sync, Managed Apple Account mapping and directory sync. Your account, apps and licences stay yours.", href: "https://vamiq.app/enterprise-app-store", linkLabel: "Enterprise app store for iPhone and iPad" },
      { icon: "ServerCog", title: "Apple device management", body: "Zero-touch enrolment for devices bought through Apple Business, or enrolment by link. App installs by group, Web Clips, passcode rules, OS updates, and lock or erase for a lost iPhone or iPad.", href: "https://vamiq.app/device-management", linkLabel: "Apple and Windows device management" },
      { icon: "Laptop", title: "Mac management", body: "Enrol Macs on macOS 14 and later by link or zero-touch. Each Mac reports FileVault, firewall, System Integrity Protection and Secure Boot; install Apple Business apps and signed .pkg packages, and set macOS update deadlines on supervised Macs.", href: "https://vamiq.app/mac-management", linkLabel: "Mac management" },
      { icon: "Monitor", title: "Windows management", body: "Enrol Windows 11 Pro PCs with a link and a one-time code. See each PC’s model, serial number, Windows version and update status; set screen lock, Windows Update active hours and Microsoft Defender real-time protection; install apps, and restart, locate or erase a PC. No extra Microsoft licence is needed to enrol a PC.", href: "https://vamiq.app/windows-device-management", linkLabel: "Windows device management" },
      { icon: "MousePointerClick", title: "Release controls", body: "Release Guard build checks, Risk Forecast, deployment answers and checksummed Evidence Packs, plus a release upload API for CI/CD and Slack and Microsoft Teams alerts.", href: "https://vamiq.app/release-controls", linkLabel: "Release controls" },
      { icon: "GitBranch", title: "Enterprise provisioning", body: "SCIM provisioning for supported identity providers, scheduled directory sync and group rules. Signed Android APK delivery is available as an Enterprise extra.", href: "https://vamiq.app/security", linkLabel: "Security overview" },
    ],
    audiences: {
      eyebrow: "Who it's for",
      title: "Built for three kinds of team.",
      body: "Vamiq works for any organisation with company iPhones, iPads, Macs or Windows 11 Pro PCs. These three get the most from it.",
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
          title: "App agencies and IT firms",
          body: "Refer your clients to Vamiq. Your partner workspace is free.",
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
      title: "Security built in, from the free plan up",
      points: [
        "Customer data is hosted in the UK and backed up daily.",
        "Traffic over HTTPS; Apple Business credentials, integration secrets and push-certificate keys encrypted at rest with AES-256-GCM.",
        "Every signed-in request checked on the server, and queries on customer data filtered to the user’s own workspace.",
        "An audit log on every plan, Free included: app changes, roles, Apple Business sync and admin actions.",
        "Device records, a daily compliance history and the audit log are ready for your auditor or security team to review.",
      ],
    },
    pricing: {
      trial: "Up to 5 devices are free, with no time limit and no card. 14 days of every feature, no card; afterwards the workspace stays on Free. Prices in GBP, USD, EUR and INR, excluding VAT, GST and other sales taxes, which are added at checkout where they apply.",
      plans: [
        {
          name: "Free",
          featured: false,
          price: "£0",
          note: "No card, no time limit",
          desc: "Manage up to 5 devices with the device basics.",
          features: [
            "Enrolment by link or zero-touch",
            "App installs, including Apple Business apps",
            "Web Clips for iPhone and iPad",
            "Security settings, OS update status, lock and erase on eligible devices",
            "10 apps and 5 teammates",
            "Audit log",
          ],
          cta: { label: "Start free", href: "https://vamiq.app/join", external: true },
        },
        {
          name: "Vamiq",
          featured: false,
          price: "£1",
          period: "/device/mo",
          note: "$1 / €1 / ₹100 a device a month, or £10 / $10 / €10 / ₹1,000 a device a year",
          desc: "Device management for each iPhone, iPad, Mac or Windows PC beyond the free 5. No base fee and no minimum.",
          features: [
            "Everything in Free, for every enrolled device",
            "A Mac or Windows PC counts the same as an iPhone or iPad",
            "Add devices any time; reductions apply at renewal",
          ],
          cta: { label: "Vamiq pricing and examples", href: "https://vamiq.app/pricing", external: true },
        },
        {
          name: "Distribution",
          featured: true,
          price: "£29",
          period: "/mo",
          note: "$29 / €29 / ₹2,900 a month, or £219 / $219 / €219 / ₹21,900 a year",
          tag: "14-day free trial",
          desc: "Your own branded app store and release controls, the same price with or without devices.",
          features: [
            "Branded app store with your logo and brand colour",
            "Release Guard, Risk Forecast and Evidence Packs",
            "Release upload API for CI/CD",
            "Slack and Microsoft Teams alerts",
          ],
          footerNote: "Example: 50 devices with your own app store is £74 / $74 / €74 / ₹7,400 a month before tax.",
          cta: { label: "Start 14-day trial", href: "https://vamiq.app/join", external: true },
        },
        {
          name: "Enterprise",
          featured: false,
          price: "By agreement",
          desc: "For identity integration, procurement and larger rollouts.",
          features: [
            "SCIM provisioning for supported identity providers",
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
      { q: "Does Vamiq manage Windows PCs?", a: "Yes, Windows 11 Pro PCs, in the same workspace as your iPhones, iPads and Macs. Enrol a PC with a link and a one-time code, see its model, serial number, Windows version, update status and last check-in, and set screen lock, Windows Update active hours and Microsoft Defender real-time protection. Install apps, put PCs in groups with their own settings, and restart, remove or erase a PC, with a second administrator approving each erase if you choose. No extra Microsoft licence is needed to enrol a PC." },
      { q: "What counts as a device?", a: "Each iPhone, iPad, Mac or Windows PC that you enrol and manage in Vamiq counts as one device, at the same price. The first 5 devices are free." },
      { q: "Does Vamiq manage Android devices?", a: "No. Vamiq manages iPhones, iPads, Macs and Windows PCs. Signed Android APK delivery is available as an Enterprise extra, but Vamiq does not manage Android devices." },
      { q: "What happens after the 14-day trial?", a: "Nothing is charged and nothing is deleted. The workspace moves to Free: up to 5 devices keep working and keep receiving your apps. Your own app store and release controls pause until you add Distribution." },
    ],
    cta: {
      title: "Put your private apps on your team’s Apple devices, with proof of every release.",
      body: "Start free with up to 5 devices, or book a demo with the founder. Every trial includes a free 30-minute setup call to connect Apple Business and enrol your first device: email info@vamiq.app to book yours.",
      primary: "Book a demo",
      secondary: { label: "Contact us", href: "/contact" },
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
