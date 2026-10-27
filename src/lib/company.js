/**
 * Company facts, services, founder and recognition shown across the site.
 *
 * Every line here is a statement ScotiTech can stand behind. Services are the
 * founder-approved list of 22 Oct 2026: add or remove one only on the
 * founder's word. The setup offer is presented as included with Vamiq, with
 * no customer cap or deadline (founder, 22 Oct 2026). App development is deliberately not a service.
 */

export const VAMIQ_URL = "https://vamiq.app";

export const vamiqLinks = {
  home: "https://vamiq.app",
  privateApps: "https://vamiq.app/private-app-distribution",
  devices: "https://vamiq.app/device-management",
  releases: "https://vamiq.app/release-controls",
  mac: "https://vamiq.app/mac-management",
  pricing: "https://vamiq.app/pricing",
  partners: "https://vamiq.app/partners",
  security: "https://vamiq.app/security",
  docs: "https://vamiq.app/docs",
};

/**
 * Vamiq's product media, copied from the Vamiq site (Release J, 21 Oct 2026).
 * The 75-second film streams from vamiq.app, where it is published; its music
 * is Mixkit, licensed for online video.
 */
export const vamiqMedia = {
  loop: { src: "/media/vamiq/vamiq-hero-loop-20261021.mp4", width: 1600, height: 1000 },
  poster: {
    src: "/media/vamiq/vamiq-hero-poster-20261021.webp",
    width: 1600,
    height: 1000,
    alt: "Vamiq sample workspace: the deployment table as one app installs on company iPhones and iPads",
  },
  phone: {
    src: "/media/vamiq/vamiq-hero-phone-20261021.webp",
    width: 780,
    height: 1688,
    alt: "The sample company's branded app store on an iPhone",
  },
  film: {
    src: "https://vamiq.app/media/vamiq-film-75s-20261022.mp4",
    poster: "/media/vamiq/vamiq-film-poster-20261021.webp",
    title: "Vamiq in 75 seconds",
    durationLabel: "75 s",
    description:
      "A 75-second tour of Vamiq in a sample workspace: each release checked before it ships, released to the right team, published in your own branded app store and ready on a new starter's iPhone. Music only, no narration.",
    uploadDate: "2026-10-21",
    duration: "PT1M15S",
  },
};

export const services = [
  {
    id: "vamiq-setup",
    icon: "Rocket",
    title: "Guided setup and three months' support",
    body: "Every new paid Vamiq customer gets a guided setup (Apple Business, first devices, first apps) and three months of hands-on support from the team that builds it. No extra charge.",
    tag: "Included with Vamiq",
    href: "/contact",
    linkLabel: "Get started",
  },
  {
    id: "apple-business",
    icon: "Building2",
    title: "Apple Business account set-up",
    body: "Starting from zero? We help you create and verify your Apple Business account and link company device purchases to it, ready for zero-touch enrolment.",
    href: "/contact",
    linkLabel: "Talk to us",
  },
  {
    id: "app-publishing",
    icon: "Send",
    title: "Private app publishing",
    body: "We take your in-house apps through Apple's custom app route and App Review, and into your team's own app store.",
    tag: "On request",
    href: "/contact",
    linkLabel: "Ask about publishing",
  },
  {
    id: "managed-readiness",
    icon: "ShieldCheck",
    title: "Managed-device readiness",
    body: "A review of your existing iPhone and iPad apps so they work cleanly on managed devices: app configuration, data protection and certificate handling.",
    href: "/contact",
    linkLabel: "Book a review",
  },
  {
    id: "axos-deployment",
    icon: "Server",
    title: "AXOS private deployment",
    body: "We install and configure AXOS, our self-hosted AI workspace, inside your own environment, then hand it over to your team.",
    href: "/products/axos",
    linkLabel: "About AXOS",
  },
  {
    id: "private-ai",
    icon: "Cpu",
    title: "Private AI set-up",
    body: "We help you run AI on your own servers, so your business data stays with you.",
    href: "/private-ai",
    linkLabel: "Explore private AI",
  },
  {
    id: "partners",
    icon: "Handshake",
    title: "Partner programme",
    body: "For app agencies and Apple IT firms: refer your clients to Vamiq, or resell it with your own support.",
    href: vamiqLinks.partners,
    linkLabel: "The partner offer",
    external: true,
  },
];

export const founder = {
  name: "Pradeep Dahiya",
  title: "Founder & Software Architect",
  portrait: {
    src: "/images/company/pradeep-dahiya-800.webp",
    width: 800,
    height: 1096,
    alt: "Pradeep Dahiya, Founder & Software Architect of ScotiTech Solutions",
  },
  linkedin: "https://www.linkedin.com/in/pradeepkumar2411/",
  bio: "Pradeep founded ScotiTech and architects its products, Vamiq and AXOS. He sets the company's product direction and works directly with customers, so the people who use the software talk to the person who builds it.",
};

export const director = {
  name: "Daniel Chapman",
  title: "Co-founder and Director",
  img: "/images/aboutus/daniel.jpeg",
  linkedin: "https://www.linkedin.com/in/daniel-chapman-755098327/",
};

export const recognition = [
  {
    title: "UK StartUp Awards 2026",
    detail: "Scotland Regional Finalist, Digital StartUp of the Year",
    image: {
      src: "/images/company/startup-awards-2026-event-1-1600.webp",
      srcSmall: "/images/company/startup-awards-2026-event-1-800.webp",
      alt: "The Scotland StartUp Awards 2026 regional final, where ScotiTech was a finalist",
    },
  },
  {
    title: "Forttuna Global Excellence Awards 2025",
    detail: "NextGen Innovator of the Year, awarded to Pradeep Dahiya",
    image: {
      src: "/images/company/forttuna-2025-award-800.webp",
      srcSmall: "/images/company/forttuna-2025-award-800.webp",
      alt: "Pradeep Dahiya with the NextGen Innovator of the Year award, Forttuna Global Excellence Awards 2025",
    },
  },
];

export const companyFacts = [
  { label: "Founded", value: "2024" },
  { label: "Apple MDM vendor", value: "Approved by Apple" },
  { label: "Vamiq customer data", value: "Hosted in the UK" },
  { label: "UK company number", value: "SC829021" },
];

export const contact = {
  email: "info@scotitech.com",
  phone: "01698 609091",
  phoneHref: "tel:+441698609091",
  office: "Maxim 1, 2 Parklands Way, Eurocentral, Motherwell ML1 4WR",
};
