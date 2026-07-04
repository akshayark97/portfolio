// ---------------------------------------------------------------------------
// EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO.
// Every section of the site reads from here — no component edits needed.
// ---------------------------------------------------------------------------

export const site = {
  name: "Akshaya R K",
  firstName: "Akshaya",
  initials: "AK",
  role: "Senior Software Engineer",
  // Shown in the hero under your name. Keep it one strong sentence.
  headline:
    "6+ years shipping production-grade web and mobile experiences for millions of users — React, Next.js, React Native, Node.js, and AI-powered product flows.",
  email: "akshayark97.ar@gmail.com",
  location: "Bengaluru, India",
  timezone: "IST (UTC+5:30)",
  available: true,
  availableText: "Open to opportunities",
  resumeUrl: "/resume.pdf",
  year: new Date().getFullYear(),
  socials: [
    { label: "GitHub", href: "https://github.com/akshayark97" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akshay-rk-702331129/",
    },
  ],
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Scrolling ticker in the hero — short, punchy phrases.
export const marqueeItems = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "AI-Powered UX",
  "Accessibility",
  "Design Systems",
  "FinTech & E-Commerce",
];

export const stats = [
  { value: "6+", label: "Years building for web & mobile" },
  { value: "3", label: "Global enterprises shipped for" },
  { value: "1M+", label: "Users served by my interfaces" },
  { value: "4", label: "Languages spoken (incl. German B1)" },
];

export type Project = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  // Omit href for proprietary/NDA work — the row renders with a lock
  // instead of a link.
  href?: string;
  // Tailwind gradient classes for the preview art.
  art: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Post-Purchase AI",
    tagline: "AI-powered service scheduling · Best Buy",
    description:
      "Owned end-to-end design and delivery of an AI-powered post-purchase experience that lets customers self-schedule service appointments — shipped across web and mobile, on schedule.",
    tags: ["Next.js", "React Native", "GraphQL", "Node.js"],
    year: "2025",
    art: "from-lime-300 via-emerald-500 to-teal-900",
  },
  {
    index: "02",
    title: "Crore",
    tagline: "Local-first net-worth tracker",
    description:
      "A privacy-first PWA for tracking a ₹1Cr investment journey. Works fully offline, syncs when it can, and turns a spreadsheet habit into a product.",
    tags: ["PWA", "Local-first", "IndexedDB", "Charts"],
    year: "2026",
    art: "from-amber-200 via-orange-500 to-rose-900",
  },
  {
    index: "03",
    title: "Credential Platform",
    tagline: "Secure auth for millions · Accenture",
    description:
      "A credential-management platform serving millions of customers — secure authentication and authorization flows, engineered to stay fast on low-power devices and older phones.",
    tags: ["React", "Security", "WCAG", "Performance"],
    year: "2024",
    art: "from-sky-300 via-blue-600 to-indigo-950",
  },
  {
    index: "04",
    title: "Parts Portal",
    tagline: "Global ticketing · Mercedes-Benz",
    description:
      "A multi-country ticketing portal for reporting automotive part issues — localized across international markets on a reusable, component-based React architecture.",
    tags: ["React", "i18n", "Component Systems", "Enterprise"],
    year: "2024",
    art: "from-fuchsia-300 via-purple-600 to-violet-950",
  },
  {
    index: "05",
    title: "Seasonal Fruits",
    tagline: "React Native produce guide",
    description:
      "A native-quality mobile app educating users about fruit varieties, practical uses, and how to source fresh produce — built end-to-end with React Native.",
    tags: ["React Native", "iOS", "Android", "Open Source"],
    year: "2023",
    href: "https://github.com/akshayark97/SeasonalFruits",
    art: "from-emerald-200 via-green-500 to-lime-900",
  },
  {
    index: "06",
    title: "ShopPay",
    tagline: "Full-stack e-commerce",
    description:
      "An online shopping application with browsing, cart, checkout, and authentication — Next.js with Redux Toolkit, NextAuth, and MongoDB behind it.",
    tags: ["Next.js", "Redux Toolkit", "MongoDB", "Open Source"],
    year: "2022",
    href: "https://github.com/akshayark97/shoppay",
    art: "from-rose-200 via-pink-500 to-purple-950",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React.js & Next.js",
      "TypeScript",
      "Redux / Zustand",
      "Styled Components",
      "Storybook",
      "Accessibility (WCAG / ARIA)",
    ],
  },
  {
    label: "Mobile",
    skills: [
      "React Native",
      "Expo & RN CLI",
      "Swift (iOS integration)",
      "Cross-platform delivery",
      "Metro & NX monorepos",
      "App performance tuning",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js & Express",
      "GraphQL",
      "REST API design",
      "SQL",
      "Python",
      "Microservices integration",
    ],
  },
  {
    label: "AI & Quality",
    skills: [
      "AI-powered product features",
      "GenAI application flows",
      "Jest & React Testing Library",
      "Test-Driven Development",
      "CI/CD (GitHub Actions)",
      "Azure fundamentals",
    ],
  },
];

export const experience = [
  {
    period: "Dec 2024 — Now",
    role: "Software Engineer",
    company: "Best Buy India",
    description:
      "Owning end-to-end delivery of an AI-powered post-purchase experience for self-scheduling service appointments — React Native, Next.js, and GraphQL on Node.js, with Swift for native iOS integration.",
  },
  {
    period: "May — Dec 2024",
    role: "Senior Software Engineer",
    company: "Mercedes-Benz R&D (via Capgemini)",
    description:
      "Delivered a multi-country ticketing portal for automotive part issues with localization across international markets; architected reusable, component-based React UI for a global enterprise platform.",
  },
  {
    period: "2022 — 2024",
    role: "Senior Software Engineer",
    company: "Accenture",
    description:
      "Built a credential-management platform serving millions of customers — secure authentication and authorization flows, responsive React interfaces optimized for low-power devices, and React Native mobile apps.",
  },
  {
    period: "2020 — 2022",
    role: "Software Engineer",
    company: "Accenture",
    description:
      "Led end-to-end migration of a legacy insurance portal to a modern React front end, automated customer-specific PDF policy reports at scale, and shipped cross-platform React Native apps.",
  },
  {
    period: "2019 — 2020",
    role: "Associate Software Engineer",
    company: "Accenture",
    description:
      "Delivered features for a React + TypeScript menu-planner dashboard integrated with Microsoft Dynamics 365 via REST APIs, improving stability and user experience.",
  },
];

export const about = {
  statement:
    "Great software feels inevitable — like it couldn't have been built any other way.",
  paragraphs: [
    "I'm a senior engineer with 6+ years across digital banking, insurance, automotive, and e-commerce — shipping customer-facing products for Best Buy, Mercedes-Benz, and Accenture that serve millions of users in regulated, high-stakes domains.",
    "I work across the whole React ecosystem — web, React Native, and the Node.js and GraphQL services behind them — with a bias for accessibility, test-driven quality, and the AI-powered product experiences I'm building today. Off the clock I'm learning German (B1 and counting).",
  ],
};
