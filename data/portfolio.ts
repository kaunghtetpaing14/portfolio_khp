export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  impact: string;
  highlights: string[];
};

export const techStack = [
  "Python",
  "Java",
  "Spring Boot",
  "Neo4j",
  "MySQL",
  "Laravel",
  "Apache Kafka",
  "Elasticsearch",
  "Redis",
  "Celery",
  "Change Data Capture",
] as const;

export const projects: Project[] = [
  {
    title: "SaaS POS System",
    description:
      "A multi-tenant, cloud-based point-of-sale platform for retail businesses — handling products, orders, inventory, and reporting across multiple branches from a single dashboard.",
    techStack: ["Laravel", "PostgreSQL"],
    githubUrl: "https://github.com/kaunghtetpaing14",
    featured: true,
    impact: "Enables retail businesses to manage multiple branches under one system with isolated tenant data.",
    highlights: [
      "Multi-tenancy architecture with fully isolated branch data",
      "Real-time inventory tracking and low-stock alerts",
      "Sales reporting and daily revenue summaries per branch",
    ],
  },
  {
    title: "MyDay Social Commerce API",
    description:
      "Backend REST API for MyDay Thu Kywal's social commerce platform, handling user feeds, product listings, orders, and authentication for mobile and web clients.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/kaunghtetpaing14",
    impact: "Served as the core API layer powering MyDay's social commerce features in production.",
    highlights: [
      "Designed relational MySQL schemas for users, products, and orders",
      "Built and versioned REST endpoints consumed by mobile clients",
      "Collaborated across multiple sprint cycles in a production environment",
    ],
  },
  {
    title: "Newsfeed Recommendation Engine",
    description:
      "A graph-powered recommendation system for MyDay's social newsfeed, using Neo4j to model user-content relationships and Kafka to stream real-time interaction events.",
    techStack: ["Python", "FastAPI", "Neo4j", "Apache Kafka", "Redis", "Celery"],
    githubUrl: "https://github.com/kaunghtetpaing14",
    impact: "Personalised the MyDay newsfeed by surfacing relevant content based on user interaction graphs.",
    highlights: [
      "Graph traversal in Neo4j with Cypher to score content relevance",
      "Event-driven ingestion pipeline via Apache Kafka",
      "Async task processing with Celery and Redis as broker/result store",
    ],
  },
  {
    title: "Full-Text Search Pipeline",
    description:
      "A real-time search indexing pipeline using Elasticsearch and Change Data Capture to keep search indexes in sync with the production database automatically.",
    techStack: ["Elasticsearch", "Change Data Capture", "Python"],
    githubUrl: "https://github.com/kaunghtetpaing14",
    impact: "Delivered sub-second full-text search over MyDay's product and content catalogue.",
    highlights: [
      "CDC pipeline captures DB changes and pushes to Elasticsearch without manual re-indexing",
      "Custom index mappings and analyzers for relevance tuning",
      "Zero-downtime index updates using alias-based index swapping",
    ],
  },
  {
    title: "IrraDigital CMS",
    description:
      "A content management website for IrraDigital, built with Laravel and PostgreSQL, featuring an admin panel for managing pages, media, and content sections.",
    techStack: ["Laravel", "PostgreSQL"],
    githubUrl: "https://github.com/kaunghtetpaing14",
    impact: "Gave the IrraDigital team full control over their website content without developer intervention.",
    highlights: [
      "Custom CMS with page builder and media library",
      "Role-based admin access for content editors",
      "PostgreSQL with optimised queries for content retrieval",
    ],
  },
  {
    title: "Rest Space Backend",
    description:
      "Backend API for Rest Space, a freelance project, built with Laravel and MySQL to manage workspace bookings, availability, and user reservations.",
    techStack: ["Laravel", "MySQL"],
    githubUrl: "https://github.com/kaunghtetpaing14",
    impact: "Provided a clean REST API for the Rest Space booking platform used by clients.",
    highlights: [
      "Booking and availability management with conflict detection",
      "RESTful API design with Laravel resource controllers",
      "MySQL schema designed for flexible workspace slot configuration",
    ],
  },
  {
    title: "Banking System",
    description:
      "A university capstone project — a web-based banking system supporting account management, fund transfers, and transaction history for retail bank customers.",
    techStack: ["PHP", "MySQL"],
    githubUrl: "https://github.com/kaunghtetpaing14",
    impact: "Demonstrated core banking workflows as a fully functional university project.",
    highlights: [
      "Account creation, deposit, withdrawal, and fund transfer flows",
      "Transaction history with date-range filtering",
      "Session-based authentication and basic role management",
    ],
  },
];

