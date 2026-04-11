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
    title: "Graph-Based Recommendation Platform",
    description:
      "A recommendation engine that models relationships in a graph and serves personalized suggestions through a REST API.",
    techStack: ["Spring Boot", "Java", "Neo4j", "React"],
    githubUrl: "https://github.com/your-username/graph-recommendation-platform",
    demoUrl: "https://your-demo-link.vercel.app",
    featured: true,
    impact: "Increased recommendation relevance with graph-based relationship scoring.",
    highlights: [
      "Relationship traversal optimized for lower latency queries",
      "REST API design with clean service boundaries",
      "React UI for transparent recommendation insights",
    ],
  },
  {
    title: "Inventory Intelligence Dashboard",
    description:
      "A dashboard for tracking stock movement, reorder thresholds, and operational KPIs with role-based views.",
    techStack: ["Spring Boot", "MySQL", "React"],
    githubUrl: "https://github.com/your-username/inventory-intelligence-dashboard",
    impact: "Reduced stockout risk with clearer visibility into reorder actions.",
    highlights: [
      "Automated threshold alerts for low-stock products",
      "Role-based views for operations and management",
      "KPI widgets for daily performance monitoring",
    ],
  },
  {
    title: "Knowledge Graph Explorer",
    description:
      "An interactive web app for exploring entities and relationships from a graph data model with dynamic filtering.",
    techStack: ["Java", "Neo4j", "React"],
    githubUrl: "https://github.com/your-username/knowledge-graph-explorer",
    demoUrl: "https://your-graph-explorer.vercel.app",
    impact: "Improved understanding of graph-connected domain data for stakeholders.",
    highlights: [
      "Interactive node and relationship filtering",
      "Progressive loading for larger graph views",
      "UI patterns for navigating dense connected data",
    ],
  },
];
