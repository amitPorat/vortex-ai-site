"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";
import { useState, FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "d8add564-85a7-47ab-a4ad-e2c69e5aa5ce";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const successMessage = {
  en: "Message sent successfully! We will get back to you soon.",
  he: "הודעתך נשלחה בהצלחה! נחזור אליך בהקדם.",
};

const errorMessage = {
  en: "Something went wrong. Please try again or contact us directly.",
  he: "משהו השתבש. נא לנסות שוב או ליצור קשר ישירות.",
};

const sendingLabel = {
  en: "Sending...",
  he: "שולח...",
};

export function Contact() {
  const { locale } = useLocale();
  const t = content[locale].contact;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name,
      email,
      company,
      message,
      from_name: name,
      subject: `Vortex Contact: ${name}${company ? ` (${company})` : ""}`,
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Submission failed");
        setLoading(false);
        return;
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoading(false);
    }
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
          {success ? (
            <p className="text-center text-accent-teal font-medium">
              {successMessage[locale]}
            </p>
          ) : (
            <>
              {error && (
                <p className="mb-4 rounded-lg bg-red-500/15 border border-red-500/30 px-4 py-3 text-sm text-red-300">
                  {errorMessage[locale]}
                </p>
              )}
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
                    disabled={loading}
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    disabled={loading}
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    disabled={loading}
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    disabled={loading}
                    className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent-teal focus:bg-white/10 disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder={t.fields.message}
                  />
                </div>
                <div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? undefined : { scale: 1.01 }}
                    whileTap={loading ? undefined : { scale: 0.99 }}
                    className="w-full rounded-lg bg-accent-teal py-3.5 font-semibold text-slate-900 shadow-glow transition hover:bg-cyan-400 hover:shadow-glow-strong focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-accent-teal"
                  >
                    {loading ? sendingLabel[locale] : t.submit}
                  </motion.button>
                  <p className="mt-3 text-center text-xs text-slate-500">
                    {t.privacy}
                  </p>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
