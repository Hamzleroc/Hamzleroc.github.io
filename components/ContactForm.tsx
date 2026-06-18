"use client";

import { useState } from "react";

const inputBase =
  "w-full bg-cream border border-beige text-brown font-sans text-sm px-4 py-3.5 placeholder:text-muted/60 focus:outline-none focus:border-amber transition-colors duration-200";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="text-center py-14">
        <div className="inline-flex items-center justify-center w-14 h-14 border border-amber mb-6">
          <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-brown mb-3">Message received</h3>
        <p className="font-sans text-sm text-muted">We'll be in touch within 2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
            Full Name
          </label>
          <input id="name" type="text" required value={form.name} onChange={set("name")}
            className={inputBase} placeholder="Sophie Dubois" />
        </div>
        <div>
          <label htmlFor="email" className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
            Email
          </label>
          <input id="email" type="email" required value={form.email} onChange={set("email")}
            className={inputBase} placeholder="sophie@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
          Subject
        </label>
        <input id="subject" type="text" value={form.subject} onChange={set("subject")}
          className={inputBase} placeholder="Product enquiry" />
      </div>

      <div>
        <label htmlFor="message" className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2">
          Message
        </label>
        <textarea id="message" required rows={6} value={form.message} onChange={set("message")}
          className={`${inputBase} resize-none`} placeholder="Tell us how we can help…" />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="font-sans text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer disabled:opacity-60 w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-amber"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
