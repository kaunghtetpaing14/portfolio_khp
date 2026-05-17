import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-16">
      <div style={{ animation: "fadeInUp 0.6s ease both" }}>
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="I'm currently open to new roles and freelance collaborations. Drop me a message."
        />
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        {/* Left: contact links */}
        <div className="grid grid-cols-1 gap-3" style={{ animation: "slideInLeft 0.7s ease 0.15s both" }}>
          {[
            {
              label: "Email",
              value: "kaunghtet2822@gmail.com",
              href: "mailto:kaunghtet2822@gmail.com",
              color: "rgba(99,102,241,0.3)",
              glow: "rgba(99,102,241,0.07)",
              svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-indigo-300">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm0 12H4V9l8 5 8-5v9Z"/>
                </svg>
              ),
            },
            {
              label: "GitHub",
              value: "github.com/kaunghtetpaing14",
              href: "https://github.com/kaunghtetpaing14",
              color: "rgba(255,255,255,0.15)",
              glow: "rgba(255,255,255,0.04)",
              svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/>
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              value: "kaung-htet-paing",
              href: "https://www.linkedin.com/in/kaung-htet-paing-b4b672343",
              color: "rgba(14,165,233,0.3)",
              glow: "rgba(14,165,233,0.07)",
              svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-sky-400">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-1 16v-5.5c0-1.93-1.07-2.83-2.56-2.83-1.18 0-1.7.65-2 1.1V11H11v8h2.44v-4.33c0-1.08.2-2.13 1.55-2.13 1.32 0 1.57 1.04 1.57 2.2V19H18ZM7.12 9.44A1.56 1.56 0 1 0 7.12 6.32a1.56 1.56 0 0 0 0 3.12ZM8.33 19V11H5.9v8h2.43Z"/>
                </svg>
              ),
            },
            {
              label: "Telegram",
              value: "+95 977 244 9361",
              href: "https://t.me/+959772449361",
              color: "rgba(6,182,212,0.3)",
              glow: "rgba(6,182,212,0.07)",
              svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-400">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z"/>
                </svg>
              ),
            },
            {
              label: "Viber",
              value: "+95 977 244 9361",
              href: "viber://chat?number=%2B959772449361",
              color: "rgba(124,58,237,0.3)",
              glow: "rgba(124,58,237,0.07)",
              svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-violet-400">
                  <path d="M11.4 0C5.5.1 1.7 2.1.4 7.4c-.5 2-.5 4 0 6 .8 3.4 3.2 5.8 6.6 6.7l.1 2.6c0 .4.5.6.8.3l2.7-2.4c.3 0 .6.1.9.1 5.2.1 9.6-2.8 10.3-8.1.1-.7.1-1.4.1-2.1C21.8 4.3 17.4.1 11.4 0Zm5.7 14.9c-.5 1.3-1.8 2.3-3.2 2.5-.5.1-.9.1-1.4 0-.9-.2-1.8-.6-2.6-1-1.6-.9-3-2.1-4.1-3.5C4.8 11.6 4 9.9 4 8.1c0-1.4.6-2.6 1.8-3.3.4-.3.9-.3 1.3 0l1.8 2.2c.3.4.2.9-.2 1.2l-.6.5c-.3.3-.4.7-.2 1.1.5 1 1.2 1.9 2.1 2.6.4.3.8.3 1.1 0l.6-.5c.4-.3.9-.3 1.2.1l1.9 2c.3.3.3.8.3.9Z"/>
                </svg>
              ),
            },
            {
              label: "Based In",
              value: "Yangon, Myanmar 🇲🇲",
              href: null,
              color: "rgba(52,211,153,0.25)",
              glow: "rgba(52,211,153,0.06)",
              svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-400">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
                </svg>
              ),
            },
          ].map(({ label, value, href, color, glow, svg }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl px-4 py-3 transition duration-300 hover:-translate-y-0.5"
              style={{ background: glow, border: `1px solid ${color}` }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{ background: color }}
              >
                {svg}
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("mailto") || href.startsWith("viber") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="mt-0.5 block truncate text-sm font-medium text-slate-100 transition hover:text-white"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm font-medium text-slate-100">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: form */}
        <div style={{ animation: "slideInRight 0.7s ease 0.25s both" }}>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
