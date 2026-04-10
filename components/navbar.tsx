"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-fit px-5">
        <nav className="flex h-14 items-center justify-between rounded-full border border-white/[0.08] bg-black/40 px-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <a
            href="#home"
            className="mr-8 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:text-indigo-300"
          >
            KHP
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="ml-auto inline-flex rounded-full text-slate-300 transition hover:text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] font-medium tracking-wide text-slate-300 transition-colors hover:text-indigo-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {isOpen ? (
          <div className="mt-2 rounded-2xl border border-white/[0.08] bg-black/60 p-4 shadow-xl backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
