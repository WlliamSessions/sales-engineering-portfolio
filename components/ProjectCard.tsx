
import Link from "next/link";
import type { Project } from "@/data/projects";

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

function VisualBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#111d33] sm:h-64">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {children}
    </div>
  );
}

function CopilotVisual() {
  return (
    <VisualBackground>
      <div className="relative w-[82%] max-w-sm rounded-xl border border-white/15 bg-[#192941] p-4 shadow-2xl">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-semibold text-white">
            SE Copilot
          </span>
          <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
            AI Powered
          </span>
        </div>

        <div className="mb-3 h-2 w-[75%] rounded bg-slate-500/40" />
        <div className="mb-3 h-2 w-[55%] rounded bg-slate-500/30" />

        <div className="mt-5 rounded-lg border border-blue-400/20 bg-blue-400/10 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-[10px] font-medium text-blue-200">
              Technical Recommendation
            </span>
          </div>
          <div className="mb-2 h-1.5 w-[90%] rounded bg-blue-300/30" />
          <div className="h-1.5 w-[65%] rounded bg-blue-300/20" />
        </div>
      </div>
    </VisualBackground>
  );
}

function SignalBridgeVisual() {
  return (
    <VisualBackground>
      <div className="relative w-[85%] max-w-sm overflow-hidden rounded-xl border border-white/15 bg-[#192941] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="text-xs font-semibold text-white">
            API Explorer
          </span>
          <span className="rounded bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
            200 OK
          </span>
        </div>

        <div className="p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded bg-emerald-400/15 px-2 py-1 text-[10px] font-bold text-emerald-300">
              GET
            </span>
            <span className="font-mono text-[11px] text-slate-300">
              /api/v1/customers
            </span>
          </div>

          <div className="rounded-lg bg-[#0c1729] p-3 font-mono text-[10px] leading-5">
            <div className="text-slate-400">{"{"}</div>
            <div className="pl-3">
              <span className="text-blue-300">
                &quot;customers&quot;
              </span>
              <span className="text-slate-300">: [</span>
            </div>
            <div className="pl-6 text-slate-300">
              {"{ "}
              <span className="text-blue-300">&quot;id&quot;</span>
              : 1,{" "}
              <span className="text-blue-300">
                &quot;status&quot;
              </span>
              :{" "}
              <span className="text-emerald-300">
                &quot;active&quot;
              </span>
              {" }"}
            </div>
            <div className="pl-3 text-slate-300">]</div>
            <div className="text-slate-400">{"}"}</div>
          </div>
        </div>
      </div>
    </VisualBackground>
  );
}

function TriageIQVisual() {
  const diagnosticTools = [
    { name: "Booking Status", status: "Complete" },
    { name: "Error Logs", status: "Complete" },
    { name: "Service Health", status: "Complete" },
  ];

  return (
    <VisualBackground>
      <div className="relative w-[85%] max-w-sm overflow-hidden rounded-xl border border-cyan-400/20 bg-[#0d192c] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400/10 text-cyan-300">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
              </svg>
            </span>
            <span className="text-xs font-semibold text-white">
              Agent Investigation
            </span>
          </div>

          <span className="rounded bg-cyan-400/10 px-2 py-1 text-[10px] font-medium text-cyan-300">
            AI Agent
          </span>
        </div>

        <div className="space-y-2 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-medium text-slate-400">
              Diagnostic Tool Execution
            </span>
            <span className="text-[10px] text-cyan-300">
              3 tools executed
            </span>
          </div>

          {diagnosticTools.map((tool, index) => (
            <div
              key={tool.name}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-[#14243a] px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10 text-[10px] font-semibold text-cyan-300">
                  {index + 1}
                </span>
                <span className="text-[11px] font-medium text-slate-200">
                  {tool.name}
                </span>
              </div>

              <span className="flex items-center gap-1 text-[10px] text-emerald-300">
                <span>✓</span>
                {tool.status}
              </span>
            </div>
          ))}

          <div className="mt-3 flex items-center justify-between rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2.5">
            <div>
              <div className="text-[10px] font-semibold text-emerald-300">
                Investigation Complete
              </div>
              <div className="mt-1 text-[10px] text-slate-400">
                Root cause identified
              </div>
            </div>

            <span className="rounded bg-emerald-400/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
              High Confidence
            </span>
          </div>
        </div>
      </div>
    </VisualBackground>
  );
}

function ProjectVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "ai-sales-engineer-copilot":
      return <CopilotVisual />;

    case "signalbridge-integration-lab":
      return <SignalBridgeVisual />;

    case "triageiq":
      return <TriageIQVisual />;

    default:
      return (
        <VisualBackground>
          <div className="relative text-sm font-semibold text-white">
            Technical Project
          </div>
        </VisualBackground>
      );
  }
}

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      <ProjectVisual slug={project.slug} />

      <div className="p-7 sm:p-9">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
          {project.category}
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
          {project.title}
        </h3>

        <p className="mt-4 min-h-24 text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 border-t border-slate-100 pt-6">
          <div className="mb-6 text-xs text-slate-500">
            {project.skills.slice(0, 3).join(" · ")}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
            >
              View Case Study
              <ArrowIcon />
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
              >
                GitHub ↗
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
