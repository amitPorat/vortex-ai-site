"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";
import { useState, FormEvent } from "react";

export function Contact() {
  const { locale } = useLocale();
  const t = content[locale].contact;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };
    console.log("Contact form submission:", data);
    setSubmitted(true);
  }

  return (
    <section
      className="relative px-4 py-20 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass mt-12 rounded-2xl border-white/10 p-8"
        >
          {submitted ? (
            <p className="text-center text-accent-teal font-medium">
              {locale === "en"
                ? "Thank you. We will be in touch."
                : "תודה. נחזור אליך בהקדם."}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300">
                  {t.fields.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10"
                  placeholder={t.fields.name}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300">
                  {t.fields.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10"
                  placeholder={t.fields.email}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-slate-300">
                  {t.fields.company}
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10"
                  placeholder={t.fields.company}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300">
                  {t.fields.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10"
                  placeholder={t.fields.message}
                />
              </div>
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full rounded-lg bg-accent-teal py-3.5 font-semibold text-slate-900 shadow-glow transition hover:bg-cyan-400 hover:shadow-glow-strong focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {t.submit}
                </motion.button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  {t.privacy}
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
