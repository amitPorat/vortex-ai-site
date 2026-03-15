"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export function ProblemSolution() {
  const { locale } = useLocale();
  const t = content[locale].problemSolution;

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8" id="why-us">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t.title}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2"
        >
          <motion.div
            variants={item}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass rounded-2xl border-red-500/20 p-8 transition-shadow hover:shadow-lg hover:shadow-red-500/5"
          >
            <h3 className="text-lg font-semibold text-red-400">
              {t.traditional.title}
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {t.traditional.items.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-500/80">×</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass rounded-2xl border-accent-teal/30 p-8 transition-shadow hover:shadow-glow"
          >
            <h3 className="text-lg font-semibold text-accent-teal">
              {t.vortex.title}
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {t.vortex.items.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent-teal">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
