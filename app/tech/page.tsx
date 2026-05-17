import type { ReactNode } from "react";
import { SectionHeading } from "@/components/section-heading";
import { techStack } from "@/data/portfolio";

const techDetails: Record<string, { color: string; desc: string; icon: ReactNode }> = {
  Python:                { color: "#facc15", desc: "Scripting, APIs & Data Processing", icon: <img src="https://cdn.simpleicons.org/python/facc15" alt="Python" className="h-10 w-10" /> },
  Java:                  { color: "#f97316", desc: "OOP & Enterprise Patterns",         icon: <img src="https://cdn.simpleicons.org/openjdk/f97316" alt="Java" className="h-10 w-10" /> },
  "Spring Boot":         { color: "#22c55e", desc: "REST APIs & Microservices",          icon: <img src="https://cdn.simpleicons.org/springboot/22c55e" alt="Spring Boot" className="h-10 w-10" /> },
  Neo4j:                 { color: "#06b6d4", desc: "Graph DB & Cypher Queries",          icon: <img src="https://cdn.simpleicons.org/neo4j/06b6d4" alt="Neo4j" className="h-10 w-10" /> },
  MySQL:                 { color: "#3b82f6", desc: "Relational DB & Optimisation",       icon: <img src="https://cdn.simpleicons.org/mysql/3b82f6" alt="MySQL" className="h-10 w-10" /> },
  "Apache Kafka":        { color: "#a855f7", desc: "Event Streaming & Messaging",        icon: <img src="https://cdn.simpleicons.org/apachekafka/a855f7" alt="Apache Kafka" className="h-10 w-10" /> },
  Elasticsearch:         { color: "#f59e0b", desc: "Full-Text Search & Analytics",       icon: <img src="https://cdn.simpleicons.org/elasticsearch/f59e0b" alt="Elasticsearch" className="h-10 w-10" /> },
  Redis:                 { color: "#ef4444", desc: "In-Memory Caching & Pub/Sub",        icon: <img src="https://cdn.simpleicons.org/redis/ef4444" alt="Redis" className="h-10 w-10" /> },
  Celery:                { color: "#34d399", desc: "Distributed Task Queues",            icon: <img src="https://cdn.simpleicons.org/celery/34d399" alt="Celery" className="h-10 w-10" /> },
  "Change Data Capture": { color: "#818cf8", desc: "Real-Time DB Event Streaming",       icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
      <path d="M16 16h5v5"/>
    </svg>
  )},
  Laravel:               { color: "#f43f5e", desc: "PHP Framework & Ecosystem",          icon: <img src="https://cdn.simpleicons.org/laravel/f43f5e" alt="Laravel" className="h-10 w-10" /> },
};

export default function TechPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-16">
      <div style={{ animation: "fadeInUp 0.6s ease both" }}>
        <SectionHeading
          label="Tech Stack"
          title="Core Technologies"
          description="The tools I rely on to deliver robust, performant, and maintainable software."
        />
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 [&>*:last-child]:lg:col-start-3">
        {techStack.map((tech, i) => {
          const { color, desc, icon } = techDetails[tech] ?? { color: "#6366f1", desc: "", icon: <span className="text-4xl">🔧</span> };
          return (
            <div
              key={tech}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 text-center transition duration-300 hover:-translate-y-1"
              style={{ animation: `fadeInUp 0.5s ease ${0.1 + i * 0.05}s both` }}
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
                <div className="mx-auto flex h-10 w-10 items-center justify-center">{icon}</div>
                <p className="mt-3 text-sm font-bold text-white">{tech}</p>
                <p className="mt-1 text-[11px] text-slate-400">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
