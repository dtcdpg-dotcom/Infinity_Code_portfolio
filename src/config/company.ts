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
  category: "System Development" | "QA" | "Outsourcing";
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
  name: "NT GO 360",
  shortName: "NT",
  tagline: "Designing digital gravity for modern brands.",
  headline: "We engineer powerful software solutions that accelerate your business and start conversations.",
  description:
    "NT GO 360 is a creative software studio focused on premium digital solutions, scalable applications, and fast-moving product builds for teams that want to stand out.",
  contact: {
    email: "tnathasha@gmail.com",
    phone: "+94 77 8985 435 ",
    location: "Colombo, Sri Lanka",
    website: "https://infinitycode.dev",
    linkedIn: "https://www.linkedin.com",
    github: "https://github.com",
  },
  web3forms: {
    accessKey:
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY",
    subject: "New message from NT GO 360 portfolio",
  },
  services: [
    {
      id: "enterprise-erp",
      title: "Enterprise ERP Solutions",
      description: "Scalable resource planning systems tailored for complex business workflows",
      category: "System Development",
    },
    {
      id: "cloud-pos",
      title: "Cloud POS & Retail Systems",
      description: "Full-stack Point of Sale architectures with offline-first capabilities",
      category: "System Development",
    },
    {
      id: "ai-pipelines",
      title: "AI-Integrated Pipelines",
      description: "Automated machine learning workflows and visual inspection systems",
      category: "System Development",
    },
    {
      id: "custom-crm",
      title: "Custom CRM Architecture",
      description: "Bespoke customer relationship management platforms",
      category: "System Development",
    },
    {
      id: "performance-optimization",
      title: "High-Performance Architectures",
      description: "Distributed systems and scalable cloud infrastructure",
      category: "System Development",
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
        "A complete, cloud-synchronized point-of-sale and enterprise management system featuring real-time inventory, hardware receipt printing, and robust offline support.",
      image: "/projects/chainpilot.svg",
      stack: ["Next.js", "React", "Node.js", "SQLite"],
      sourceUrl: "https://github.com/",
      liveUrl: "https://tezlaa.com",
    },
    {
      id: "ai-inspection",
      title: "Industrial AI Inspection Station",
      category: "Computer Vision Pipeline",
      summary:
        "A production-ready AI pipeline using YOLOv8 to automate factory quality control, integrated directly with Verification Dashboards.",
      image: "/projects/ledgerlens.svg",
      stack: ["Python", "FastAPI", "YOLOv8", "MongoDB"],
      sourceUrl: "https://github.com/",
      liveUrl: "https://ai-inspection.demo",
    },
    {
      id: "inventory-command",
      title: "Global Inventory Command Center",
      category: "Distributed System",
      summary:
        "A distributed tracking system handling millions of SKUs across multi-region warehouses with predictive supply chain analytics.",
      image: "/projects/novanode.svg",
      stack: ["Next.js", "PostgreSQL", "Redis", "Kubernetes"],
      sourceUrl: "https://github.com/",
      liveUrl: "https://inventory.demo",
    },
  ],
};
