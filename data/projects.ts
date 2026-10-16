
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

  {
    slug: "triageiq",
    number: "03",
    category: "AI AGENTS & AUTOMATION",
    title: "TriageIQ",
    tagline: "Autonomous technical support investigation with human oversight.",
    description:
      "An AI-powered support investigation agent that autonomously selects diagnostic tools, analyzes technical evidence, identifies likely root causes, and recommends resolutions for human review.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenAI Responses API",
      "GPT-4.1 mini",
      "Function Calling",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    skills: [
      "AI Agents",
      "Tool Orchestration",
      "API Integrations",
      "Technical Troubleshooting",
      "Root Cause Analysis",
      "Human-in-the-Loop Workflows",
      "Solution Architecture",
      "AI-Assisted Development",
    ],

    github: "https://github.com/WlliamSessions/triageiq",
    demo: "https://triageiq-alpha.vercel.app/",
    status: "complete",
    featured: true,

    businessProblem:
      "Technical support teams often investigate customer issues by manually checking multiple systems, reviewing error logs, inspecting account configurations, and searching documentation. This fragmented process slows resolution, creates inconsistent investigations, and makes it difficult to communicate findings clearly to customers.",

    customerScenario:
      "A fictional SaaS platform receives support requests involving booking failures, configuration problems, and service disruptions. Support engineers need to determine whether an issue originates from customer configuration, application errors, or service availability before recommending a resolution or escalation.",

    solution:
      "TriageIQ uses an AI agent powered by the OpenAI Responses API to investigate support tickets through real function calls. The agent selects diagnostic tools based on the issue, evaluates structured technical evidence, and produces an investigation report containing its findings, confidence assessment, recommended resolution, and escalation guidance. Investigation history and human approval decisions are persisted in Supabase.",

    features: [
      "Investigate fictional customer support tickets using an AI agent",
      "Autonomously select and execute diagnostic tools",
      "Check booking status and customer configuration",
      "Retrieve error logs and service health information",
      "Search fictional product documentation",
      "Perform multi-step investigations using OpenAI function calling",
      "Display diagnostic activity and evidence gathered during investigations",
      "Generate structured reports with root cause, confidence, resolution, and escalation recommendations",
      "Review and approve or reject proposed escalations",
      "Persist investigation history and approval decisions in Supabase",
      "Retrieve saved investigations for later review",
    ],

    architecture: {
      components: [
        "Next.js and React support dashboard",
        "Server-side investigation API routes",
        "OpenAI Responses API with GPT-4.1 mini",
        "Agent orchestration and function-calling loop",
        "Five fictional diagnostic tools",
        "Structured investigation report",
        "Supabase PostgreSQL persistence",
        "Human approval and rejection workflow",
      ],

      dataFlow: [
        "User selects a fictional support ticket and starts an investigation",
        "The Next.js application sends the investigation request to a server-side API route",
        "The server invokes GPT-4.1 mini through the OpenAI Responses API with available diagnostic tool definitions",
        "The model selects one or more diagnostic functions based on the issue and available evidence",
        "The application executes those functions against fictional diagnostic systems and returns structured JSON results",
        "The agent evaluates tool responses and can request additional diagnostic calls",
        "The completed investigation produces a structured report with evidence, likely root cause, confidence, and recommended actions",
        "The application saves the investigation and diagnostic activity in Supabase",
        "A human reviewer can approve or reject an escalation recommendation",
        "The approval decision is saved and remains available in investigation history",
      ],
    },

    technicalDecisions: [
      "Used OpenAI Responses API function calling so the model can select diagnostic tools dynamically instead of following a fixed, scripted investigation sequence.",
      "Separated model decision-making from tool execution: the AI requests a function call, while application code executes the tool and returns structured results.",
      "Created five focused diagnostic tools covering booking status, error logs, customer configuration, service health, and documentation search.",
      "Used structured JSON responses to make diagnostic evidence and investigation outcomes understandable and traceable.",
      "Kept OpenAI interactions and diagnostic execution on the server rather than exposing API credentials in the browser.",
      "Used Supabase PostgreSQL to persist investigation reports, diagnostic activity, and human approval decisions.",
      "Required explicit human approval or rejection for escalation decisions rather than treating an AI recommendation as an automatically authorized action.",
      "Used independently created fictional customer data and diagnostic systems to make the public application safe to demonstrate without exposing employer information.",
    ],

    challenges: [
      "Designing a multi-step agent workflow in which the model can select different diagnostic tools based on the available evidence.",
      "Connecting tool calls, structured JSON responses, investigation reporting, and persistent history into a cohesive user experience.",
      "Balancing autonomous investigation with human oversight for escalation decisions.",
      "Diagnosed a live HTTP 400 error in the escalation approval workflow after deployment to Vercel. Used Chrome DevTools to inspect the failing Network request and JSON payload, traced the issue to an incorrect backend UUID validation regular expression, corrected the validation logic, and redeployed the fix through GitHub.",
    ],

    productionConsiderations: [
      "Implement authenticated reviewer identities and role-based authorization for investigation history and escalation approvals. The current public demo does not authenticate reviewers.",
      "Add API rate limiting, usage quotas, and cost controls to protect public investigation endpoints. The current demo does not implement API rate limiting.",
      "Integrate with real support platforms, observability systems, and customer APIs using scoped credentials and secure secret management.",
      "Introduce stricter controls around which tools an agent may invoke and require appropriate authorization before performing consequential actions.",
      "Expand monitoring, audit logging, retry handling, and safeguards against unreliable external diagnostic services.",
      "Evaluate investigation accuracy and confidence calibration using representative support cases before relying on recommendations in production.",
      "Apply customer-data isolation, retention policies, and appropriate privacy controls for real support information.",
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
