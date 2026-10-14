
import Link from "next/link";

const resumeUrl = "/resume/William%20Sessions%20-%20Resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            Resume
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Experience at a glance.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            A complete overview of my professional experience, technical
            skills, and background across Sales Engineering, technical
            enablement, integrations, and customer-facing technology roles.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Open PDF ↗
            </a>

            <a
              href={resumeUrl}
              download="William-Sessions-Sales-Engineer-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Download resume ↓
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  William Sessions
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Sales Engineering Resume · PDF
                </p>
              </div>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Full-screen view ↗
              </a>
            </div>

            <iframe
              src={resumeUrl}
              title="William Sessions Sales Engineering Resume"
              className="h-[700px] w-full bg-white md:h-[950px]"
            />
          </div>

          <p className="mt-5 text-center text-sm text-slate-500">
            If the preview does not display in your browser, use the Open PDF
            button above.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5 text-sm font-semibold">
            <Link
              href="/experience"
              className="text-blue-700 transition hover:text-blue-900"
            >
              Explore professional experience →
            </Link>
            <Link
              href="/#projects"
              className="text-slate-600 transition hover:text-blue-700"
            >
              View technical projects →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
