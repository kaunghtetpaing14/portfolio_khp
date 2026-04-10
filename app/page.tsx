import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionHeading } from "@/components/section-heading";
import { StarCanvas } from "@/components/star-canvas";
import { projects, techStack } from "@/data/portfolio";

const techDetails: Record<string, { color: string; desc: string; icon: string }> = {
  "Spring Boot": { color: "#22c55e", desc: "REST APIs & Microservices",   icon: "⚙️" },
  Java:          { color: "#f97316", desc: "OOP & Enterprise Patterns",   icon: "☕" },
  Neo4j:         { color: "#06b6d4", desc: "Graph DB & Cypher Queries",   icon: "🔗" },
  MySQL:         { color: "#3b82f6", desc: "Relational DB & Optimisation",icon: "🗄️" },
  React:         { color: "#38bdf8", desc: "SPA & Component-Driven UI",   icon: "⚛️" },
};

export default function Home() {
  const featuredProject  = projects.find((p) => p.featured) ?? projects[0];
  const standardProjects = projects.filter((p) => p.title !== featuredProject.title);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020a18] text-slate-100">

      {/* ── Canvas background ── */}
      <StarCanvas />

      {/* ── Deep radial glow blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full bg-purple-700/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">

        {/* ════════════════════════════════════════ HERO ══ */}
        <section
          id="home"
          className="grid min-h-screen items-center gap-14 pb-16 pt-28 lg:grid-cols-[55%_45%]"
        >
          {/* LEFT */}
          <div className="space-y-7" style={{ animation: "fadeInUp 0.7s ease both" }}>

            {/* availability pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/8 px-4 py-2 text-xs font-semibold tracking-widest text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" style={{ animation: "pulseRing 2s infinite" }} />
              OPEN TO OPPORTUNITIES
            </div>

            {/* Name */}
            <div>
              <p className="mb-1 text-base font-medium text-slate-400">Hi, I&apos;m</p>
              <h1
                className="bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl xl:text-8xl"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #c7d2fe 40%, #a855f7 100%)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                Kaung Htet<br />Paing<span className="text-indigo-400">.</span>
              </h1>
            </div>

            {/* Role badge */}
            <p className="text-xl font-semibold text-indigo-300 sm:text-2xl">
              Full-Stack Developer
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I build scalable backend systems with&nbsp;
              <span className="font-medium text-white">Spring Boot&nbsp;&amp;&nbsp;Java</span>,
              model complex relationships with&nbsp;
              <span className="font-medium text-white">Neo4j</span>, and craft
              clean, responsive interfaces with&nbsp;
              <span className="font-medium text-white">React</span>.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 border-y border-slate-800/70 py-5">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Shipped",     value: "10+" },
                { label: "Core Technologies",   value: "5"   },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-white">{value}</p>
                  <p className="text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 hover:shadow-indigo-400/40"
              >
                <span className="relative">Explore My Work →</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur transition hover:border-indigo-400/60 hover:bg-slate-800 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT — Bento Grid */}
          <div
            className="grid w-full max-w-lg grid-cols-2 grid-rows-[auto_auto_auto] gap-3 lg:ml-auto"
            style={{ animation: "fadeInUp 0.9s ease 0.2s both" }}
          >
            {/* ① Code snippet card — spans full width */}
            <div
              className="col-span-2 overflow-hidden rounded-2xl p-0"
              style={{
                background: "#050d1a",
                border: "1px solid rgba(168,85,247,0.35)",
                boxShadow: "0 0 20px rgba(168,85,247,0.1)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-1.5 px-4 py-2.5"
                style={{ borderBottom: "1px solid rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.06)" }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-[11px] text-slate-500">~/portfolio/HomeController.java</span>
              </div>
              <pre
                className="overflow-x-auto px-5 py-4 text-[12px] leading-6"
                style={{ fontFamily: "var(--font-jetbrains-mono, monospace)" }}
              >
                <code>
                  <span style={{ color: "#a855f7" }}>@RestController</span>{"\n"}
                  <span style={{ color: "#38bdf8" }}>public class </span>
                  <span style={{ color: "#f0abfc" }}>HomeController </span>
                  <span style={{ color: "#94a3b8" }}>{"{"}</span>{"\n"}
                  {"  "}<span style={{ color: "#a855f7" }}>@GetMapping</span>
                  <span style={{ color: "#94a3b8" }}>(</span>
                  <span style={{ color: "#34d399" }}>&quot;/hello&quot;</span>
                  <span style={{ color: "#94a3b8" }}>)</span>{"\n"}
                  {"  "}<span style={{ color: "#38bdf8" }}>public </span>
                  <span style={{ color: "#f97316" }}>String </span>
                  <span style={{ color: "#e2e8f0" }}>hello</span>
                  <span style={{ color: "#94a3b8" }}>() {"{"}</span>{"\n"}
                  {"    "}<span style={{ color: "#38bdf8" }}>return </span>
                  <span style={{ color: "#34d399" }}>&quot;Hello, World!&quot;</span>
                  <span style={{ color: "#94a3b8" }}>;</span>{"\n"}
                  {"  "}<span style={{ color: "#94a3b8" }}>{"}"}</span>{"\n"}
                  <span style={{ color: "#94a3b8" }}>{"}"}</span>
                </code>
              </pre>
            </div>

            {/* ② Location card */}
            <div
              className="flex flex-col justify-between rounded-2xl p-4"
              style={{
                background: "rgba(52,211,153,0.05)",
                border: "1px solid rgba(52,211,153,0.3)",
                boxShadow: "0 0 16px rgba(52,211,153,0.08)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400">Location</p>
              <div className="mt-3">
                <p className="text-base font-bold text-white">Myanmar 🇲🇲</p>
                <p className="text-[11px] text-slate-400">GMT+6:30 · Remote OK</p>
              </div>
              <p className="mt-3 text-[11px] text-emerald-300/70">Open to global teams</p>
            </div>

            {/* ③ Tools card */}
            <div
              className="flex flex-col justify-between rounded-2xl p-4"
              style={{
                background: "rgba(6,182,212,0.05)",
                border: "1px solid rgba(6,182,212,0.3)",
                boxShadow: "0 0 16px rgba(6,182,212,0.08)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#06b6d4" }}>Daily Tools</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["IntelliJ", "VS Code", "Git", "Docker", "Postman"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md px-2 py-0.5 text-[11px] font-semibold text-white"
                    style={{ background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.25)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ④ Currently building — spans full width */}
            <div
              className="col-span-2 rounded-2xl p-5"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.06) 100%)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 0 20px rgba(99,102,241,0.08)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400">Currently Building</p>
              <div className="mt-3 flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-2 w-2 shrink-0 rounded-full bg-indigo-400"
                  style={{ boxShadow: "0 0 8px rgba(99,102,241,0.8)", animation: "pulseRing 2s infinite" }}
                />
                <div>
                  <p className="text-sm font-semibold text-white">Graph-Based Knowledge System</p>
                  <p className="mt-0.5 text-[11px] leading-5 text-slate-400">
                    Neo4j · Spring Boot · React — mapping interconnected data relationships with a custom Cypher query engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════ ABOUT ══ */}
        <section id="about" className="py-24">
          <SectionHeading
            label="About Me"
            title="Building Systems That Connect Data & People"
            description="I turn complex technical requirements into clean, scalable architecture — from graph data models to React interfaces."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Left: personal card */}
            <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-8 backdrop-blur">
              <div className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-2xl border-2 border-indigo-400/40">
                <Image
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Kaung Htet Paing"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-white">Kaung Htet Paing</h3>
              <p className="mt-1 text-center text-sm text-indigo-300">Full-Stack Developer</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Location",    value: "Myanmar 🇲🇲" },
                  { label: "Experience",  value: "3+ Years"     },
                  { label: "Specialty",   value: "Graph & APIs" },
                  { label: "Available",   value: "Yes ✅"        },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-slate-950/60 p-3 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: bio + highlights */}
            <div className="space-y-6">
              <p className="text-base leading-8 text-slate-300">
                I specialize in designing and shipping production-ready applications that 
                span the full stack. My backend foundation is built on&nbsp;
                <strong className="text-white">Spring Boot and Java</strong>
                — clean service layers, RESTful APIs, and strong separation of concerns. 
                On the data side I work with both relational databases (MySQL) and 
                graph databases&nbsp;(<strong className="text-white">Neo4j</strong>) 
                for relationship-rich domains. My frontend of choice is&nbsp;
                <strong className="text-white">React</strong>, with a focus on 
                component design and user experience.
              </p>
              <p className="text-base leading-8 text-slate-400">
                I believe great software comes from understanding the problem deeply before 
                writing a single line of code — and I bring that mindset to every project I work on.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "🏗️", title: "Backend Systems",  desc: "Scalable Spring Boot APIs with clear boundaries" },
                  { icon: "🔗", title: "Graph Databases",   desc: "Neo4j modelling for complex, connected data"      },
                  { icon: "⚛️", title: "React Interfaces",  desc: "Component-driven UIs with smooth UX"              },
                  { icon: "🛢️", title: "Database Design",   desc: "Relational schemas, indexes, and optimisation"    },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 transition hover:border-indigo-400/30"
                  >
                    <span className="text-2xl">{icon}</span>
                    <p className="mt-2 text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════ TECH ══ */}
        <section id="tech" className="py-24">
          <SectionHeading
            label="Tech Stack"
            title="Core Technologies"
            description="The tools I rely on to deliver robust, performant, and maintainable software."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((tech) => {
              const { color, desc, icon } = techDetails[tech] ?? { color: "#6366f1", desc: "", icon: "🔧" };
              return (
                <div
                  key={tech}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 text-center transition duration-300 hover:-translate-y-1"
                  style={{ "--tw-hover-border": color } as React.CSSProperties}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{ boxShadow: `inset 0 0 0 1px ${color}55` }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition duration-300 group-hover:opacity-30"
                    style={{ background: color }}
                  />
                  <div className="relative">
                    <span className="text-4xl">{icon}</span>
                    <p className="mt-3 text-sm font-bold text-white">{tech}</p>
                    <p className="mt-1 text-[11px] text-slate-400">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════ PROJECTS ══ */}
        <section id="projects" className="py-24">
          <SectionHeading
            label="Projects"
            title="Selected Work"
            description="Featured build and supporting projects showcasing backend architecture, graph data modelling, and frontend craft."
          />
          <div className="mt-14">
            <ProjectShowcase project={featuredProject} />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {standardProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════ CONTACT ══ */}
        <section id="contact" className="py-24">
          <SectionHeading
            label="Contact"
            title="Let's Work Together"
            description="I'm currently open to new roles and freelance collaborations. Drop me a message."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            {/* Left info */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email</p>
                <a
                  href="mailto:youremail@example.com"
                  className="mt-2 block text-base font-medium text-indigo-300 transition hover:text-indigo-200"
                >
                  youremail@example.com
                </a>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">GitHub</p>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-base font-medium text-indigo-300 transition hover:text-indigo-200"
                >
                  github.com/your-username
                </a>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Based In</p>
                <p className="mt-2 text-base font-medium text-slate-200">Myanmar 🇲🇲</p>
              </div>
            </div>

            {/* Right form */}
            <ContactForm />
          </div>
        </section>
      </main>

      {/* ════════════════════════════════════════ FOOTER ══ */}
      <footer className="relative z-10 border-t border-slate-800/70 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Kaung Htet Paing. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="transition hover:text-indigo-300">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
