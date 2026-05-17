import { ProjectCard } from "@/components/project-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  const featuredProject  = projects.find((p) => p.featured) ?? projects[0];
  const standardProjects = projects.filter((p) => p.title !== featuredProject.title);

  return (
    <main className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-16">
      <div style={{ animation: "fadeInUp 0.6s ease both" }}>
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="Featured build and supporting projects showcasing backend architecture, graph data modelling, and frontend craft."
        />
      </div>
      <div className="mt-14" style={{ animation: "fadeInUp 0.7s ease 0.15s both" }}>
        <ProjectShowcase project={featuredProject} />
      </div>
      <div className="mt-6">
        {standardProjects.map((project, i) => (
          <div key={project.title} style={{ animation: `fadeInUp 0.6s ease ${0.25 + i * 0.12}s both` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  );
}
