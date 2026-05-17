import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
      <section className="grid min-h-screen items-center gap-14 pb-16 pt-28 lg:grid-cols-[55%_45%]">
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
            Backend Developer
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I design and ship production-grade backend systems — building&nbsp;
            <span className="font-medium text-white">REST APIs with Spring Boot & Java</span>,
            modelling connected data in&nbsp;
            <span className="font-medium text-white">Neo4j</span>, driving&nbsp;
            real-time pipelines with&nbsp;
            <span className="font-medium text-white">Kafka & CDC</span>, and
            scaling workloads with&nbsp;
            <span className="font-medium text-white">Redis, Celery & Elasticsearch</span>.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 border-y border-slate-800/70 py-5">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Shipped",     value: "10+" },
              { label: "Core Technologies",   value: "11"   },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 hover:shadow-indigo-400/40"
            >
              <span className="relative">Explore My Work →</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur transition hover:border-indigo-400/60 hover:bg-slate-800 hover:text-white"
            >
              Contact Me
            </Link>
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
            className="flex flex-col justify-start rounded-2xl p-4"
            style={{
              background: "rgba(6,182,212,0.05)",
              border: "1px solid rgba(6,182,212,0.3)",
              boxShadow: "0 0 16px rgba(6,182,212,0.08)",
            }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#06b6d4" }}>Daily Tools</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["VS Code", "Python", "Laravel", "Git", "Docker", "Postman"].map((t) => (
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
            <div className="mt-3">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-2 w-2 shrink-0 rounded-full bg-indigo-400"
                  style={{ boxShadow: "0 0 8px rgba(99,102,241,0.8)", animation: "pulseRing 2s infinite" }}
                />
                <p className="text-sm font-semibold text-white">SAAS POS System</p>
              </div>
              <p className="mt-1 pl-5 text-[11px] leading-5 text-slate-400">
                PostgreSQL · Laravel · React — a multi-tenant SaaS POS system built for freelance clients, handling tenant isolation, inventory, and real-time sales reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
