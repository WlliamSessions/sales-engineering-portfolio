
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Screenshot = {
  src: string;
  title: string;
  description: string;
};

const walkthroughs: Record<string, Screenshot[]> = {
  "ai-sales-engineer-copilot": [
    {
      src: "/images/projects/ai-copilot/01-input.png",
      title: "Submit customer requirements",
      description:
        "Enter discovery notes, technical requirements, or RFP questions.",
    },
    {
      src: "/images/projects/ai-copilot/02-assessment.png",
      title: "Generate a technical assessment",
      description:
        "Review an AI-generated assessment grounded in fictional product documentation.",
    },
    {
      src: "/images/projects/ai-copilot/03-requirement-fit.png",
      title: "Evaluate requirement fit",
      description:
        "Distinguish supported capabilities from requirements needing further discovery.",
    },
    {
      src: "/images/projects/ai-copilot/04-discovery.png",
      title: "Prepare for technical discovery",
      description:
        "Review technical considerations, discovery questions, and potential risks.",
    },
  ],
  "signalbridge-integration-lab": [
    {
      src: "/images/projects/signalbridge/01-overview.png",
      title: "Understand the integration scenario",
      description:
        "Explore the fictional customer challenge, proposed solution, and live application overview.",
    },
    {
      src: "/images/projects/signalbridge/02-customers.png",
      title: "Manage persistent customer records",
      description:
        "View customer records stored in Supabase PostgreSQL and access create, edit, and delete actions.",
    },
    {
      src: "/images/projects/signalbridge/03-api-explorer.png",
      title: "Explore REST API operations",
      description:
        "Select GET, POST, PATCH, and DELETE operations through a browser-based API Explorer.",
    },
    {
      src: "/images/projects/signalbridge/04-api-response.png",
      title: "Inspect a real JSON response",
      description:
        "Execute a GET request and inspect the HTTP 200 status, response time, and customer JSON returned by the dashboard API.",
    },
  ],
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | William Sessions`,
    description: project.description,
  };
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
        {number}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          <span className="text-sm leading-7 text-slate-600">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ScreenshotWalkthrough({
  slug,
}: {
  slug: string;
}) {
  const screenshots = walkthroughs[slug];

  if (!screenshots) {
    return null;
  }

  const isCopilot = slug === "ai-sales-engineer-copilot";

  return (
    <section
      id="walkthrough"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          number="APPLICATION WALKTHROUGH"
          title="See it in action"
          description={
            isCopilot
              ? "Screenshots from the working AI application, using fictional customer requirements and product documentation."
              : "Screenshots from the working SignalBridge application, including customer management, REST operations, and a real JSON response."
          }
        />

        <div className="grid gap-8 md:grid-cols-2">
          {screenshots.map((screenshot, index) => (
            <article
              key={screenshot.src}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm"
            >
              <a
                href={screenshot.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full-size screenshot: ${screenshot.title}`}
                className="group block overflow-hidden bg-[#020617]"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  width={1600}
                  height={1000}
                  className="h-72 w-full object-contain transition duration-300 group-hover:scale-[1.02] sm:h-80"
                />
              </a>

              <div className="p-6">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                  Step {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-slate-950">
                  {screenshot.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {screenshot.description}
                </p>

                <a
                  href={screenshot.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  View full screenshot
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-sm leading-7 text-slate-500">
          This is a functional technical demonstration using fictional
          customer data. Live access will be linked after deployment.
        </p>
      </div>
    </section>
  );
}

function ArchitectureNode({
  label,
  detail,
  dark = false,
}: {
  label: string;
  detail: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 text-center ${
        dark
          ? "border-blue-500 bg-[#101d35] text-white"
          : "border-slate-200 bg-white text-slate-950"
      }`}
    >
      <h4 className="text-sm font-semibold">{label}</h4>
      <p
        className={`mt-2 text-xs leading-6 ${
          dark ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {detail}
      </p>
    </div>
  );
}

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      {label && (
        <span className="mb-1 text-center text-xs font-medium text-slate-500">
          {label}
        </span>
      )}
      <svg
        width="20"
        height="30"
        viewBox="0 0 20 30"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 1V27M4 21L10 27L16 21"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArchitectureFrame({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-slate-950">
          {title}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

function CopilotArchitecture() {
  return (
    <ArchitectureFrame
      eyebrow="Architecture Diagram"
      title="From customer requirements to technical recommendations"
      description="The application uses a server-side workflow to retrieve relevant documentation before sending context to the OpenAI API. The API key remains on the server."
    >
      <div className="mx-auto max-w-3xl">
        <ArchitectureNode
          label="Next.js Frontend"
          detail="Sales Engineer enters customer requirements in the browser"
        />

        <FlowArrow label="HTTP POST request" />

        <ArchitectureNode
          label="Next.js API Route"
          detail="Validates input and coordinates document retrieval and AI analysis"
          dark
        />

        <FlowArrow label="Retrieve relevant context" />

        <ArchitectureNode
          label="Fictional AudienceFlow Documentation"
          detail="Local product documentation provides source material for evaluating requirements"
        />

        <FlowArrow label="Relevant documentation returned to server" />

        <ArchitectureNode
          label="OpenAI API"
          detail="Receives requirements and retrieved documentation, then generates a structured technical evaluation"
          dark
        />

        <FlowArrow label="Structured response" />

        <ArchitectureNode
          label="Evaluation Results in Browser"
          detail="Requirement fit, technical considerations, discovery questions, risks, and recommendations"
        />
      </div>

      <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
        <h4 className="text-sm font-semibold text-blue-950">
          Why this architecture?
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          Retrieval-augmented generation helps keep recommendations
          grounded in available documentation. A server-side API route
          protects credentials and separates application logic from
          the browser. Undocumented capabilities can be flagged for
          discovery instead of presented as confirmed features.
        </p>
      </div>
    </ArchitectureFrame>
  );
}

function SignalBridgeArchitecture() {
  return (
    <ArchitectureFrame
      eyebrow="Architecture Diagram"
      title="From API request to persistent customer data"
      description="SignalBridge connects a browser-based customer workspace and API Explorer to Next.js server routes and a Supabase PostgreSQL database."
    >
      <div className="mx-auto max-w-3xl">
        <ArchitectureNode
          label="Browser: SignalBridge Workspace"
          detail="Overview dashboard, customer management, and interactive API Explorer"
        />

        <FlowArrow label="HTTP requests with JSON payloads where applicable" />

        <ArchitectureNode
          label="Next.js Server API Routes"
          detail="Dashboard endpoint for listing customers and versioned REST endpoints for customer-specific operations"
          dark
        />

        <FlowArrow label="Authentication and request validation" />

        <div className="grid gap-4 sm:grid-cols-2">
          <ArchitectureNode
            label="Dashboard Data Endpoint"
            detail="GET /api/dashboard returns customer-list data used by the workspace"
          />

          <ArchitectureNode
            label="Protected Customer API"
            detail="Versioned REST operations validate bearer tokens, request data, and customer identifiers"
          />
        </div>

        <FlowArrow label="Server-side database operations" />

        <ArchitectureNode
          label="Supabase PostgreSQL"
          detail="Persistent fictional customer records, including identifiers, email addresses, names, and subscription plans"
          dark
        />

        <FlowArrow label="Database result returned to the API route" />

        <ArchitectureNode
          label="HTTP Status + JSON Response"
          detail="The API returns customer data or a structured error response"
        />

        <FlowArrow label="Response displayed in the browser" />

        <ArchitectureNode
          label="Customer Dashboard / API Explorer"
          detail="Visitors can inspect records, request outcomes, response times, and JSON payloads"
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <h4 className="text-sm font-semibold text-blue-950">
            Authentication
          </h4>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            Protected customer operations use bearer-token validation.
            This demonstrates a common SaaS API pattern while keeping
            authentication logic on the server.
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <h4 className="text-sm font-semibold text-blue-950">
            Error handling
          </h4>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            The API demonstrates meaningful HTTP outcomes, including
            400 for invalid input, 401 for unauthorized requests,
            404 for missing records, and 409 for conflicts.
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-6 text-slate-500">
        Architecture is shown as a logical workflow. The customer-list
        screenshot uses GET /api/dashboard; bearer-token authentication
        applies to the protected customer API operations.
      </p>
    </ArchitectureFrame>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasWalkthrough = Boolean(walkthroughs[slug]);
  const isCopilot = slug === "ai-sales-engineer-copilot";
  const isSignalBridge = slug === "signalbridge-integration-lab";

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <Link
            href="/#projects"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="text-xs font-medium text-slate-400">
              PROJECT {project.number}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            {project.tagline}
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
            {project.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Launch Live Demo
                <ArrowIcon />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                View Source Code
                <ArrowIcon />
              </a>
            )}

            {hasWalkthrough && (
              <a
                href="#walkthrough"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                See It in Action ↓
              </a>
            )}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES AND SKILLS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              TECHNOLOGIES
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              SKILLS DEMONSTRATED
            </div>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION WALKTHROUGH */}
      {hasWalkthrough && <ScreenshotWalkthrough slug={slug} />}

      {/* BUSINESS PROBLEM */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            number="01 / THE CHALLENGE"
            title="The business problem"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Why this matters
              </h3>
              <p className="text-sm leading-8 text-slate-600">
                {project.businessProblem}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Customer scenario
              </h3>
              <p className="text-sm leading-8 text-slate-600">
                {project.customerScenario}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="border-y border-slate-200 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            number="02 / THE SOLUTION"
            title="The solution I built"
          />

          <p className="mb-12 max-w-3xl text-base leading-9 text-slate-600">
            {project.solution}
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-[#f8fafc] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="pt-1 text-sm leading-7 text-slate-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            number="03 / TECHNICAL ARCHITECTURE"
            title="How the application works"
            description="A high-level view of the components and how information moves through the system."
          />

          {isCopilot && <CopilotArchitecture />}
          {isSignalBridge && <SignalBridgeArchitecture />}

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="mb-7 text-lg font-semibold text-slate-900">
                System components
              </h3>
              <BulletList items={project.architecture.components} />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="mb-7 text-lg font-semibold text-slate-900">
                Data flow
              </h3>

              <div className="space-y-3">
                {project.architecture.dataFlow.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                        {index + 1}
                      </div>

                      {index < project.architecture.dataFlow.length - 1 && (
                        <div className="my-1 h-7 w-px bg-blue-200" />
                      )}
                    </div>

                    <p className="pt-1.5 text-sm leading-6 text-slate-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL DECISIONS */}
      <section className="border-y border-slate-200 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            number="04 / ENGINEERING JUDGMENT"
            title="Key technical decisions"
            description="The reasoning behind the technologies and approaches used."
          />

          <div className="max-w-4xl">
            <BulletList items={project.technicalDecisions} />
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            number="05 / PROBLEM SOLVING"
            title="Challenges and lessons"
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
            <BulletList items={project.challenges} />
          </div>
        </div>
      </section>

      {/* PRODUCTION CONSIDERATIONS */}
      <section className="border-y border-slate-200 bg-[#0f172a] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
            06 / LOOKING AHEAD
          </div>

          <h2 className="mb-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            What I&apos;d do differently in production
          </h2>

          <p className="mb-10 max-w-3xl text-sm leading-7 text-slate-400">
            These projects are functional technical demonstrations.
            Production deployment would require additional security,
            reliability, scalability, and operational safeguards.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {project.productionConsiderations.map(
              (consideration, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="mt-1 text-blue-400">✓</span>
                  <p className="text-sm leading-7 text-slate-300">
                    {consideration}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* BACK TO PROJECTS */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 lg:px-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Explore more technical projects
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              See other examples of my work and technical approach.
            </p>
          </div>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            All Projects
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
