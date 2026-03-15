"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";

const CONTACT_ID = "contact";

export function Hero() {
  const { locale } = useLocale();
  const t = content[locale].hero;

  const scrollToContact = () => {
    document.getElementById(CONTACT_ID)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      {/* Background: gradient + grid + optional hero image (replace src with Gemini image) */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" aria-hidden />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-xl opacity-25 hidden lg:block pointer-events-none">
        <Image src="/hero-visual.png" alt="" width={600} height={400} className="object-contain" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent-teal/30 bg-accent-teal/10 px-4 py-1.5 text-sm text-accent-teal mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-accent-teal animate-pulse" />
          Data & AI · Enterprise
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {t.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto"
        >
          {t.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <motion.button
            type="button"
            onClick={scrollToContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg bg-accent-teal px-8 py-4 text-lg font-semibold text-slate-900 shadow-glow animate-soft-glow transition hover:bg-cyan-400 hover:shadow-glow-strong focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {t.cta}
          </motion.button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-sm text-slate-500"
        >
          {t.socialProof}
        </motion.p>
      </div>
    </section>
  );
}
