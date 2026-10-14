
export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  skills: string[];
  github: string | null;
  demo: string | null;
  status: "complete" | "in-progress" | "planned";
  featured: boolean;

  businessProblem: string;
  customerScenario: string;
  solution: string;
  features: string[];
  architecture: {
    components: string[];
    dataFlow: string[];
  };
  technicalDecisions: string[];
  challenges: string[];
  productionConsiderations: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-sales-engineer-copilot",
    number: "01",
    category: "AI & SOLUTION DESIGN",
    title: "AI Sales Engineer Copilot",
    tagline: "Turning customer requirements into technical recommendations.",
    description:
      "An AI-powered application that analyzes customer requirements against fictional product documentation and generates grounded technical recommendations.",

    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "RAG",
    ],

    skills: [
      "AI Applications",
      "Technical Discovery",
      "Requirements Analysis",
      "Solution Design",
      "AI-Assisted Development",
    ],

    github: "https://github.com/WlliamSessions/se-copilot",
    demo: "https://se-copilot-tan.vercel.app/",
    status: "complete",
    featured: true,

    businessProblem:
      "Sales Engineers frequently need to evaluate customer requirements against extensive product documentation. Manually identifying relevant capabilities, integration considerations, and potential gaps can be time-consuming.",

    customerScenario:
      "A fictional SaaS company needs a faster way for its Sales Engineering team to evaluate prospect requirements and prepare for technical discovery conversations.",

    solution:
      "An AI-powered assistant that retrieves relevant fictional product documentation and uses an LLM to generate technical recommendations grounded in that documentation.",

    features: [
      "Accepts customer technical requirements",
      "Retrieves relevant product documentation",
      "Generates AI-powered technical recommendations",
      "Connects recommendations to relevant documentation",
    ],

    architecture: {
      components: [
        "Next.js frontend",
        "Server-side API route",
        "Document retrieval logic",
        "OpenAI API",
        "Fictional product documentation",
      ],
      dataFlow: [
        "User submits customer requirements",
        "Application retrieves relevant documentation",
        "Requirements and documentation are sent to the OpenAI API",
        "AI generates technical recommendations",
        "Application displays the results",
      ],
    },

    technicalDecisions: [
      "Used retrieval-augmented generation to ground recommendations in product documentation rather than relying exclusively on general model knowledge.",
      "Used a server-side API route to protect the OpenAI API key.",
      "Used fictional documentation to demonstrate the workflow without exposing confidential information.",
    ],

    challenges: [
      "Designing a retrieval process that selects relevant documentation.",
      "Structuring AI responses so technical recommendations are understandable and useful.",
    ],

    productionConsiderations: [
      "Implement user authentication and more comprehensive usage controls.",
      "Improve retrieval quality and document management.",
      "Add monitoring, logging, and evaluation of AI-generated recommendations.",
      "Implement stronger controls for handling customer information.",
    ],
  },

  {
    slug: "signalbridge-integration-lab",
    number: "02",
    category: "APIS & INTEGRATIONS",
    title: "SignalBridge Integration Lab",
    tagline: "Exploring real-world SaaS integration workflows.",
    description:
      "A fictional SaaS integration platform featuring authenticated REST APIs, persistent customer records, and an interactive API explorer.",

    technologies: [
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "Bearer Authentication",
    ],

    skills: [
      "REST APIs",
      "JSON",
      "Authentication",
      "Database Operations",
      "API Troubleshooting",
      "Solution Architecture",
      "Technical Documentation",
    ],

    github:
      "https://github.com/WlliamSessions/signalbridge-lab",
    demo: "https://signalbridge-lab.vercel.app/",
    status: "complete",
    featured: true,

    businessProblem:
      "Customers integrating SaaS platforms need to understand API authentication, request formats, response structures, data persistence, and error handling before moving into production.",

    customerScenario:
      "A fictional SaaS customer wants to integrate its internal customer management system with an external platform using REST APIs.",

    solution:
      "A functional integration lab that demonstrates authenticated customer-management APIs, persistent storage, and an interactive interface for exploring requests and responses.",

    features: [
      "Create customer records",
      "Retrieve individual customers",
      "List customer records",
      "Update customer records",
      "Delete customer records",
      "Authenticate versioned API requests using bearer tokens",
      "Explore API requests and JSON responses",
      "Inspect HTTP status codes and response times",
      "Review API documentation and Postman collection",
    ],

    architecture: {
      components: [
        "Next.js dashboard",
        "REST API routes",
        "Bearer-token authentication for versioned endpoints",
        "Supabase PostgreSQL database",
        "Interactive API Explorer",
      ],
      dataFlow: [
        "User performs an action through the dashboard or API Explorer",
        "Application sends an HTTP request to a Next.js API route",
        "Versioned REST endpoints validate bearer tokens; the public dashboard uses a separate demo endpoint",
        "The server processes the request against Supabase PostgreSQL",
        "The API returns a JSON response and HTTP status code",
        "The interface displays the result",
      ],
    },

    technicalDecisions: [
      "Used REST APIs to demonstrate common SaaS integration patterns.",
      "Used bearer-token authentication to demonstrate protected versioned endpoints.",
      "Used Supabase PostgreSQL to persist records beyond individual browser sessions.",
      "Built an API Explorer to make technical behavior visible during demonstrations.",
      "Enabled a public demo dashboard with fictional, disposable customer records while keeping the versioned API authenticated.",
    ],

    challenges: [
      "Connecting API routes to persistent database operations.",
      "Handling authentication and HTTP errors consistently.",
      "Presenting API requests and responses in an understandable interface.",
    ],

    productionConsiderations: [
      "Replace the demonstration authentication approach with production-grade identity and authorization.",
      "Expand rate limiting and abuse prevention beyond the existing dashboard firewall rule.",
      "Review database access policies and permissions.",
      "Add automated API tests, monitoring, and audit logging.",
      "Restrict destructive operations and isolate customer data in a production environment.",
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
