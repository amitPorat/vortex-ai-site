"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";

const steps = [1, 2, 3];

export function Pricing() {
  const { locale } = useLocale();
  const t = content[locale].pricing;

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8" id="pricing">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 flex flex-col gap-6 sm:flex-row sm:justify-between"
        >
          {t.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass flex flex-1 flex-col rounded-2xl p-6 text-center transition-shadow hover:shadow-glow ${
                i === 0
                  ? "border-2 border-accent-teal/60 bg-accent-teal/10 shadow-glow"
                  : ""
              }`}
            >
              <span className="text-3xl font-bold text-accent-teal">
                {steps[i]}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {step.label}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
