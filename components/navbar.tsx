"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/about"    },
  // { label: "Tech",     href: "/tech"     },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact"  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-fit px-5">
        <nav className="flex h-14 items-center justify-between rounded-full border border-white/[0.08] bg-black/40 px-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <button
            type="button"
            aria-label="Toggle menu"
            className="ml-auto inline-flex rounded-full text-slate-300 transition hover:text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors ${
                    pathname === item.href
                      ? "text-indigo-300"
                      : "text-slate-300 hover:text-indigo-300"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {isOpen && (
          <div className="mt-2 rounded-2xl border border-white/[0.08] bg-black/60 p-4 shadow-xl backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                      pathname === item.href ? "text-indigo-300" : "text-slate-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
