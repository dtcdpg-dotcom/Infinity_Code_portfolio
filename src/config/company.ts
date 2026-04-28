export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  stack: string[];
  sourceUrl: string;
  liveUrl: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  category: "Development" | "QA" | "Outsourcing";
};

export type CompanyData = {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedIn: string;
    github: string;
  };
  web3forms: {
    accessKey: string;
    subject: string;
  };
  services: Service[];
  stats: Array<{ label: string; value: string }>;
  projects: PortfolioProject[];
};

export const companyData: CompanyData = {
  name: "Infinity Code",
  shortName: "IC",
  tagline: "Designing digital gravity for modern brands.",
  headline: "We craft web experiences that stop the scroll and start conversations.",
  description:
    "Infinity Code is a creative product studio focused on premium websites, interactive brand stories, and fast-moving product builds for startups and teams that want to stand out.",
  contact: {
    email: "hello@infinitycode.studio",
    phone: "+94 77 8985 435 ",
    location: "Colombo, Sri Lanka",
    website: "https://infinitycode.dev",
    linkedIn: "https://www.linkedin.com",
    github: "https://github.com",
  },
  web3forms: {
    accessKey:
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY",
    subject: "New message from Infinity Code portfolio",
  },
  services: [
    {
      id: "website-design",
      title: "Brand-first website design",
      description: "Custom website design tailored to your brand identity",
      category: "Development",
    },
    {
      id: "nextjs-engineering",
      title: "Next.js product engineering",
      description: "High-performance web applications with modern tech stack",
      category: "Development",
    },
    {
      id: "web-app-ui",
      title: "Web app UI systems",
      description: "Scalable design systems for enterprise applications",
      category: "Development",
    },
    {
      id: "landing-pages",
      title: "Landing pages that convert",
      description: "High-converting landing pages optimized for growth",
      category: "Development",
    },
    {
      id: "content-motion",
      title: "Content and motion direction",
      description: "Engaging animations and interactive experiences",
      category: "Development",
    },
    {
      id: "performance-seo",
      title: "Performance and SEO optimization",
      description: "Lightning-fast pages with search engine optimization",
      category: "Development",
    },
    {
      id: "qa-consultant",
      title: "QA Consultant",
      description: "Expert quality assurance strategy and implementation",
      category: "QA",
    },
    {
      id: "qa-manual",
      title: "QA Classes - Manual Testing",
      description: "Professional manual testing courses and certification training",
      category: "QA",
    },
    {
      id: "qa-automation",
      title: "QA Classes - Automation Testing",
      description: "Advanced automation testing with Selenium, Cypress, and more",
      category: "QA",
    },
    {
      id: "outsource-qa",
      title: "Outsourced QA Team",
      description: "Full-time dedicated QA engineers for your projects",
      category: "Outsourcing",
    },
    {
      id: "outsource-dev",
      title: "Outsourced Developers",
      description: "Expert developers available for contract or project-based work",
      category: "Outsourcing",
    },
  ],
  stats: [
    { label: "Projects shipped", value: "48+" },
    { label: "Client satisfaction", value: "97%" },
    { label: "Avg. Lighthouse score", value: "95" },
  ],
  projects: [
    {
      id: "Tezlaa",
      title: "Tezlaa Cafe Management System",
      category: "POS & ERP",
      summary:
        "A data-rich command center for DeFi teams to track liquidity, wallet activity, and protocol health in real time.",
      image: "/projects/chainpilot.svg",
      stack: ["Next.js", "TypeScript", "Tailwind", "ECharts"],
      sourceUrl: "https://github.com/vercel/next.js",
      liveUrl: "https://nextjs.org",
    },
    {
      id: "ledgerlens",
      title: "LedgerLens",
      category: "NFT Marketplace Experience",
      summary:
        "An immersive storefront with animated galleries, rarity-driven discovery, and checkout flows optimized for conversion.",
      image: "/projects/ledgerlens.svg",
      stack: ["React", "Framer Motion", "Node.js", "PostgreSQL"],
      sourceUrl: "https://github.com/facebook/react",
      liveUrl: "https://react.dev",
    },
    {
      id: "novanode",
      title: "NovaNode",
      category: "SaaS Growth Website",
      summary:
        "A high-performance marketing site with modular content blocks and storytelling animations across every section.",
      image: "/projects/novanode.svg",
      stack: ["Next.js", "MDX", "GSAP", "Vercel"],
      sourceUrl: "https://github.com/tailwindlabs/tailwindcss",
      liveUrl: "https://tailwindcss.com",
    },
  ],
};
