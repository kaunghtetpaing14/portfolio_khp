"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-7 backdrop-blur sm:grid-cols-2"
    >
      <label className="grid gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Your Name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30"
          placeholder="Kaung Htet Paing"
        />
      </label>

      <label className="grid gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Email Address
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30"
          placeholder="you@example.com"
        />
      </label>

      <label className="grid gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 sm:col-span-2">
        Message
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30"
          placeholder="Tell me about your project, role, or idea..."
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 hover:shadow-indigo-400/35"
        >
          Send Message →
        </button>
      </div>
    </form>
  );
}
