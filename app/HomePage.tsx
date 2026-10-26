
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const capabilities = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand customer goals, uncover technical requirements, and translate business challenges into actionable solutions.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Develop solution architectures, evaluate integration options, and align technical recommendations with business outcomes.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Build proof-of-concepts, demonstrate product capabilities, and troubleshoot technical challenges.",
  },
  {
    number: "04",
    title: "Enable",
    description:
      "Create documentation, share technical knowledge, and help customers and internal teams achieve successful outcomes.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
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
  ) : (
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
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden border-b border-slate-200 bg-white"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                FOUNDING SALES ENGINEER
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[72px]">
                Bridging business
                <br />
                challenges and
                <br />
                <span className="text-blue-600">
                  technical solutions.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                I help organizations turn complex requirements into
                practical solutions through technical discovery,
                solution design, integrations, and hands-on
                proof-of-concepts.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Explore My Work
                  <ArrowIcon />
                </a>

                <a
                  href="#approach"
                  className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  How I Work
                  <ArrowIcon diagonal />
                </a>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-5 rounded-3xl bg-blue-50" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-slate-400">
                    SOLUTION ENGINEERING
                  </span>
                  <span className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  </span>
                </div>

                <div className="mb-7 text-2xl font-semibold tracking-tight text-slate-900">
                  From challenge to outcome.
                </div>

                {[
                  ["01", "Understand the problem", "Discovery"],
                  ["02", "Design the solution", "Architecture"],
                  ["03", "Prove the value", "POC & Demo"],
                  ["04", "Drive the outcome", "Enablement"],
                ].map((item, index) => (
                  <div
                    key={item[0]}
                    className={`flex items-center gap-4 py-4 ${
                      index !== 3
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                      {item[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-900">
                        {item[1]}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {item[2]}
                      </div>
                    </div>
                    <span className="text-blue-500">
                      <ArrowIcon />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE STRIP */}
        <section className="border-b border-slate-200 bg-[#f8fafc]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-12 gap-y-5 px-6 py-9 lg:px-10">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              Core Expertise
            </span>

            {[
              "Technical Discovery",
              "Solution Architecture",
              "APIs & Integrations",
              "AI Applications",
              "POCs & Demos",
            ].map((skill) => (
              <span
                key={skill}
                className="text-sm font-semibold text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section
          id="projects"
          className="scroll-mt-24 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Selected Work
                </div>

                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                  Technical projects.
                  <br />
                  Real solutions.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  Hands-on applications demonstrating how I approach
                  customer problems, evaluate technologies, and build
                  practical technical solutions.
                </p>
              </div>

              <span className="text-sm font-medium text-slate-500">
                {String(featuredProjects.length).padStart(2, "0")}{" "}
                Featured Projects
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* HOW I WORK */}
        <section
          id="approach"
          className="scroll-mt-20 bg-[#0f172a] py-24 text-white lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-3xl">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                How I Work
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Technology is the tool.
                <br />
                Customer outcomes are the goal.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Great Sales Engineering starts with understanding the
                problem, not jumping straight into a product demo.
                My approach combines business context, technical
                depth, and clear communication.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.number}
                  className="rounded-xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
                >
                  <div className="mb-10 text-sm font-semibold text-blue-400">
                    {capability.number}
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">
                    {capability.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-24 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Beyond the Technology
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Technical curiosity.
                <br />
                Customer focus.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-slate-600">
                My career has centered on helping customers navigate
                complex technology and turn ambitious ideas into
                practical outcomes. As a Founding Sales Engineer,
                I&apos;ve helped establish technical sales processes,
                support complex integrations, and bridge the gap
                between customer needs and product capabilities.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                I enjoy learning new technologies, building useful
                prototypes, and finding better ways to explain
                complicated concepts. This portfolio is a collection
                of that curiosity put into practice.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Get in Touch
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Let&apos;s build something valuable.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600">
              Interested in discussing Sales Engineering, technical
              solutions, or potential opportunities? I&apos;d love
              to connect.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:Bds15@albion.edu"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Email Me
                <ArrowIcon diagonal />
              </a>

              <a
                href="https://www.linkedin.com/in/billy-s-045b4264/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                LinkedIn
                <ArrowIcon diagonal />
              </a>
            </div>

            <a
              href="mailto:Bds15@albion.edu"
              className="mt-6 inline-block text-sm text-slate-500 transition hover:text-blue-600"
            >
              Bds15@albion.edu
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-8 lg:px-10">
          <div className="text-sm font-semibold text-slate-900">
            William Sessions
            <span className="text-blue-600">.</span>
          </div>

          <p className="text-xs text-slate-500">
            Sales Engineering · Technical Solutions · AI & Integrations
          </p>

          <span className="text-xs text-slate-400">
            © {new Date().getFullYear()} William Sessions
          </span>
        </div>
      </footer>
    </div>
  );
}
