import type { Project } from "@/data/portfolio";

type ProjectShowcaseProps = {
  project: Project;
};

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-indigo-500/25 bg-gradient-to-br from-slate-900/80 to-slate-950 p-7 shadow-2xl shadow-indigo-900/25 backdrop-blur sm:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-violet-500/12 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
            ⭐ Featured Project
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
            <span className="mt-0.5 text-emerald-400">✦</span>
            <p className="text-sm text-emerald-100">{project.impact}</p>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={`${project.title}-${tech}`}
                className="rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-indigo-400/60 hover:text-indigo-200"
            >
              View Source
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Launch Demo ↗
              </a>
            ) : null}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/60 bg-slate-950/50 p-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Highlights</p>
          <ul className="mt-5 space-y-3">
            {project.highlights.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200"
              >
                <span className="mt-0.5 shrink-0 font-mono text-xs font-bold text-indigo-400">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
