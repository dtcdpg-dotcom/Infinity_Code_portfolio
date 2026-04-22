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
  services: string[];
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
    phone: "+94 77 123 4567",
    location: "Colombo, Sri Lanka",
    website: "https://zyvo.dev",
    linkedIn: "https://www.linkedin.com",
    github: "https://github.com",
  },
  web3forms: {
    accessKey: "3d7550fb-5ea3-4058-aff4-6fc51b34659c",
    subject: "New message from Infinity Code portfolio",
  },
  services: [
    "POS Systems",
    "ERP Solutions",
    "Portfolio Websites",
    "Custom Websites",
    "Mobile Applications",
    "Web Applications",
    "Business Automation",
    "UI/UX Design",
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
    {
      id: "shopflow",
      title: "ShopFlow Mobile",
      category: "Mobile POS System",
      summary:
        "Cross-platform mobile POS application for retail stores with real-time inventory tracking, payment processing, and analytics dashboard.",
      image: "/projects/shopflow.svg",
      stack: ["React Native", "TypeScript", "Firebase", "Redux"],
      sourceUrl: "https://github.com",
      liveUrl: "https://shopflow-demo.app",
    },
    {
      id: "erpsync",
      title: "ERPSync Next",
      category: "ERP Integration",
      summary:
        "Enterprise resource planning system with seamless Next.js integration, automated workflows, supply chain management, and real-time reporting.",
      image: "/projects/erpsync.svg",
      stack: ["Next.js", "PostgreSQL", "Node.js", "REST APIs"],
      sourceUrl: "https://github.com",
      liveUrl: "https://erpsync-platform.io",
    },
    {
      id: "nextecom",
      title: "NextCart Pro",
      category: "E-Commerce Platform",
      summary:
        "Full-featured e-commerce platform with product catalog, shopping cart, payment gateway integration, order management, and customer analytics.",
      image: "/projects/nextecom.svg",
      stack: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      sourceUrl: "https://github.com",
      liveUrl: "https://nextcart-demo.shop",
    },
    {
      id: "brandpulse",
      title: "BrandPulse Marketing",
      category: "Marketing Analytics",
      summary:
        "Comprehensive marketing automation platform with campaign management, social media integration, email marketing, and performance metrics dashboard.",
      image: "/projects/brandpulse.svg",
      stack: ["Next.js", "TypeScript", "Chart.js", "AWS"],
      sourceUrl: "https://github.com",
      liveUrl: "https://brandpulse-marketing.com",
    },
  ],
};
