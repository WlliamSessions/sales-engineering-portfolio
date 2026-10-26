
import Link from "next/link";

const highlights = [
  {
    value: "15%",
    label: "Higher win rates",
    detail: "Associated with standardized technical request intake",
  },
  {
    value: "10%",
    label: "Faster time to close",
    detail: "Associated with improved presales coordination",
  },
  {
    value: "25+",
    label: "RFI/RFP evaluations",
    detail: "Supported by AI-assisted requirements workflows",
  },
  {
    value: "10+",
    label: "Technical playbooks",
    detail: "Created for emerging products and Sales enablement",
  },
];

const initiatives = [
  {
    number: "01",
    title: "Building a Sales Engineering function",
    description:
      "As PulsePoint's Founding Sales Engineer, I helped establish scalable processes, technical enablement resources, and cross-functional workflows to support customer-facing technical engagements.",
    tags: ["Presales Operations", "Enablement", "Cross-functional Leadership"],
  },
  {
    number: "02",
    title: "Applying AI to technical evaluations",
    description:
      "Developed AI-assisted RFI/RFP evaluation workflows that use documentation and prior responses to assess technical requirements, identify potential gaps, and highlight areas requiring further discovery. These workflows supported more than 25 evaluations and automated approximately 70% of the evaluation process.",
    tags: ["Applied AI", "Requirements Analysis", "RFI/RFP"],
  },
  {
    number: "03",
    title: "Improving technical request management",
    description:
      "Designed a standardized Jira intake process for discovery, POC, and demo requests across Sales and Account Management. The process improved coordination and preparation, with associated improvements in win rates and time to close.",
    tags: ["Jira", "Process Design", "Technical Discovery"],
  },
  {
    number: "04",
    title: "Connecting customer needs to product development",
    description:
      "Established feedback loops between customer-facing teams, Product, and Engineering. Customer insights helped shape enhancements to Next Best Action campaign capabilities and improvements to social advertising offerings.",
    tags: ["Voice of Customer", "Product Feedback", "Solution Strategy"],
  },
];

const career = [
  {
    company: "PulsePoint",
    role: "Founding Sales Engineer, Programmatic",
    period: "2022 – Present",
    description:
      "Technical discovery, solution design, demonstrations, integrations, POCs, and the development of scalable Sales Engineering processes and resources.",
  },
  {
    company: "Innovid",
    role: "Associate Director, Client Support – Self Service",
    period: "2021 – 2022",
    description:
      "Led global technical support operations and built customer onboarding, training, and enablement programs for a self-service advertising platform.",
  },
  {
    company: "Innovid",
    role: "Client Support Team Lead – Self Service",
    period: "2019 – 2021",
    description:
      "Delivered 100+ technical walkthroughs and demonstrations, developed onboarding workflows, and supported customer adoption.",
  },
  {
    company: "Innovid",
    role: "Senior Technical Account Manager",
    period: "2017 – 2019",
    description:
      "Owned complex technical escalations and integrations, implementing workflow improvements that reduced trafficking time by 30% and error rates by 25%.",
  },
  {
    company: "Amnet (Dentsu)",
    role: "Associate Director / Senior Account Manager",
    period: "2014 – 2017",
    description:
      "Led client relationships, programmatic strategy, and account teams while managing complex advertising programs.",
  },
  {
    company: "Doner",
    role: "Trading Desk Manager",
    period: "2013 – 2014",
    description:
      "Managed technical advertising operations, campaign integrations, troubleshooting, and internal enablement.",
  },
  {
    company: "Self-Employed",
    role: "Professional Online Poker Player",
    period: "2008 – 2013",
    description:
      "Built a 17-cent starting bankroll into six figures, competing professionally in online poker while coaching other players and staking World Series of Poker participants. Developed a foundation in probability, strategic decision-making, and risk management.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            Professional Experience
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Building solutions.
            <br />
            Improving how teams work.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            My career has centered on understanding complex technology,
            solving customer problems, and making technical knowledge more
            accessible. As a Founding Sales Engineer, I&apos;ve also had the
            opportunity to build the processes and resources that help
            technical teams scale.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/resume"
              className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View my resume →
            </Link>
            <Link
              href="/#projects"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Explore technical projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            Selected Impact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Outcomes, not just responsibilities.
          </h2>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-4xl font-semibold tracking-tight text-blue-700">
                  {item.value}
                </p>
                <h3 className="mt-4 text-base font-semibold text-slate-950">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            Beyond the Job Description
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Things I&apos;ve helped build.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            A few examples of how I approach technical leadership,
            operational improvements, and connecting customer requirements
            with practical solutions.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {initiatives.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-8"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-blue-700">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            Career Progression
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            The path to Sales Engineering.
          </h2>

          <div className="mt-12 space-y-5">
            {career.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-7 md:grid-cols-[180px_1fr] md:gap-10 md:p-8"
              >
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    {item.period}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {item.company}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.role}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Read the story behind my career →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#101d35] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
            Explore Further
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Want the full picture?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Browse my resume for a complete overview of my experience,
            technical skills, and certifications.
          </p>

          <Link
            href="/resume"
            className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          >
            View resume →
          </Link>
        </div>
      </section>
    </main>
  );
}
