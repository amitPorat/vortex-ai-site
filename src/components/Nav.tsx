"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";

const CONTACT_ID = "contact";

export function Nav() {
  const { locale, toggleLocale } = useLocale();
  const t = content[locale].nav;

  const scrollToContact = () => {
    document.getElementById(CONTACT_ID)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="text-accent-teal" aria-hidden>◈</span>
          {t.logo}
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label={locale === "en" ? "Switch to Hebrew" : "Switch to English"}
          >
            {t.langToggle}
          </button>
          <motion.button
            type="button"
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg bg-accent-teal px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400 focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {t.cta}
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
