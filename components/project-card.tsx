import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-lg hover:shadow-indigo-900/20">
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-500/8 blur-2xl transition duration-300 group-hover:bg-indigo-500/18" />

      <h3 className="relative text-lg font-bold text-white">{project.title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-400">{project.description}</p>

      <div className="relative mt-4 flex items-start gap-2 rounded-xl border border-slate-800/60 bg-slate-950/50 px-3 py-2">
        <span className="shrink-0 text-indigo-400">→</span>
        <p className="text-xs leading-5 text-slate-300">{project.impact}</p>
      </div>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={`${project.title}-${tech}`}
            className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap gap-3 pt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-indigo-400/50 hover:text-indigo-200"
        >
          View Source
        </a>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-indigo-500/20 px-4 py-2 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-500/35"
          >
            Live Demo ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
