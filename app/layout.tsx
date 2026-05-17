import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { StarCanvas } from "@/components/star-canvas";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KHP | Full-Stack Developer",
  description:
    "Modern portfolio of a full-stack developer specializing in Spring Boot, Java, Neo4j, MySQL, and React.",
  keywords: [
    "Full-Stack Developer",
    "Spring Boot",
    "Java",
    "Neo4j",
    "MySQL",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#020a18] text-slate-100">
        <StarCanvas />
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
          <div className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full bg-purple-700/10 blur-[120px]" />
        </div>
        <Navbar />
        {children}
        <footer className="relative z-10 border-t border-slate-800/70 py-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:px-8">
            <p>© {new Date().getFullYear()} Kaung Htet Paing. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="https://github.com/kaunghtetpaing14" target="_blank" rel="noreferrer" className="transition hover:text-indigo-300">GitHub</a>
              <a href="https://www.linkedin.com/in/kaung-htet-paing-b4b672343" target="_blank" rel="noreferrer" className="transition hover:text-indigo-300">LinkedIn</a>
              <a href="mailto:kaunghtet2822@gmail.com" className="transition hover:text-indigo-300">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
