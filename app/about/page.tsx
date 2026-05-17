import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-16">
      <div style={{ animation: "fadeInUp 0.6s ease both" }}>
        <SectionHeading
          label="About Me"
          title="Building Systems That Connect Data & People"
          description="I turn complex technical requirements into clean, scalable architecture — from graph data models to React interfaces."
        />
      </div>

      <div className="mt-10 space-y-3">
        {/* Row 1: profile card + bio */}
        <div className="grid gap-4 lg:grid-cols-[210px_1fr]">
          {/* Profile card */}
          <div
            className="overflow-hidden rounded-2xl backdrop-blur"
            style={{
              background: "linear-gradient(160deg, rgba(6,182,212,0.07) 0%, rgba(168,85,247,0.07) 100%)",
              border: "1px solid rgba(6,182,212,0.3)",
              boxShadow: "0 0 24px rgba(6,182,212,0.08)",
              animation: "slideInLeft 0.7s ease 0.1s both",
            }}
          >
            <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #06b6d4, #a855f7)" }} />
            <div className="flex flex-col items-center p-5">
              <div
                className="relative h-20 w-20 overflow-hidden rounded-xl"
                style={{ boxShadow: "0 0 0 2px #06b6d4, 0 0 14px rgba(6,182,212,0.4)" }}
              >
                <Image
                  src="/khp_photo.jpg"
                  alt="Kaung Htet Paing"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  sizes="80px"
                />
              </div>
              <h3 className="mt-3 text-base font-bold text-white">Kaung Htet Paing</h3>
              <p className="mt-0.5 text-[11px] font-semibold" style={{ color: "#06b6d4" }}>Backend Developer</p>
              <div
                className="mt-3 flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                <span className="text-[10px] font-semibold text-emerald-300">Open to Work</span>
              </div>
              <div className="mt-4 w-full space-y-1.5">
                {[
                  { label: "Location",   value: "Myanmar 🇲🇲" },
                  { label: "Experience", value: "2 Years"     },
                  { label: "Specialty",  value: "Backend"     },
                  { label: "Response",   value: "< 24 hrs ⚡"  },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5"
                    style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.1)" }}
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-500">{label}</span>
                    <span className="text-[11px] font-semibold text-slate-100">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div
            className="rounded-2xl p-5 h-full flex flex-col justify-between"
            style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.2)", animation: "slideInRight 0.7s ease 0.2s both" }}
          >
            <p className="text-sm leading-6 text-slate-300">
              I graduated in 2024 with two bachelor&apos;s degrees —&nbsp;
              <span className="font-semibold text-white">BSc Computing</span> (University of Greenwich, studied at KMD Institute, Myanmar) and&nbsp;
              <span className="font-semibold text-white">BA Geography</span> (Dagon University, Yangon).
              After graduating I joined <span className="font-semibold text-white">My Day Thu Kywal</span> as a backend developer,
              building APIs with <span className="font-semibold text-white">Spring Boot, Java</span>, and <span className="font-semibold text-white">MySQL</span>.
              I later moved to the recommendation team where I work in&nbsp;
              <span className="font-semibold text-white">Python</span>,
              modelling connected data in <span className="font-semibold text-white">Neo4j</span>, and running distributed workloads with&nbsp;
              <span className="font-semibold text-white">Redis, Celery</span>, and <span className="font-semibold text-white">Apache Kafka</span>.
              I also contributed to search features using&nbsp;
              <span className="font-semibold text-white">Elasticsearch</span> and <span className="font-semibold text-white">Change Data Capture</span>.
              Alongside my full-time role I freelance with&nbsp;
              <span className="font-semibold text-white">Laravel</span> (Filament, Inertia, Livewire) and <span className="font-semibold text-white">React</span>.
            </p>
            <div className="my-4 h-px w-full" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.3), transparent)" }} />
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🎓 BSc Computing",    color: "rgba(6,182,212,0.15)",  border: "rgba(6,182,212,0.3)"  },
                { label: "🎓 BA Geography",     color: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.3)" },
                { label: "🏢 My Day Thu Kywal", color: "rgba(34,197,94,0.12)",  border: "rgba(34,197,94,0.3)"  },
                { label: "🟡 2+ yrs backend",   color: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.3)" },
                { label: "🔵 Rec. team",        color: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.3)" },
                { label: "🌐 Freelancer",       color: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.3)" },
              ].map(({ label, color, border }) => (
                <span
                  key={label}
                  className="rounded-full px-3 py-1 text-[11px] font-medium text-slate-200"
                  style={{ background: color, border: `1px solid ${border}` }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: 4 highlight cards */}
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "🏗️", title: "Backend Systems", desc: "Spring Boot APIs & microservices",  color: "rgba(99,102,241,0.3)", glow: "rgba(99,102,241,0.07)" },
            { icon: "🔗", title: "Graph Databases", desc: "Neo4j & Cypher for connected data", color: "rgba(6,182,212,0.3)",  glow: "rgba(6,182,212,0.07)"  },
            { icon: "📨", title: "Event Streaming", desc: "Kafka, CDC & real-time pipelines",  color: "rgba(168,85,247,0.3)", glow: "rgba(168,85,247,0.07)" },
            { icon: "🛢️", title: "Data Storage",   desc: "MySQL, Redis, Elasticsearch",       color: "rgba(251,146,60,0.3)", glow: "rgba(251,146,60,0.07)" },
          ].map(({ icon, title, desc, color, glow }, i) => (
            <div
              key={title}
              className="rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5"
              style={{ background: glow, border: `1px solid ${color}`, boxShadow: `0 0 14px ${glow}`, animation: `scaleIn 0.5s ease ${0.35 + i * 0.08}s both` }}
            >
              <span className="text-xl">{icon}</span>
              <p className="mt-2 text-sm font-bold text-white">{title}</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
