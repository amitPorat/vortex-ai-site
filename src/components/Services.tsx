"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";

const icons = [
  "◉", // audit
  "◇", // vector
  "▣", // predictive
  "⬡", // mlops
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  const { locale } = useLocale();
  const t = content[locale].services;

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8" id="services">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t.title}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.items.map((service, i) => (
            <motion.article
              key={i}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 transition hover:border-accent-teal/40 hover:shadow-glow"
            >
              <span
                className="text-2xl text-accent-teal"
                aria-hidden
              >
                {icons[i]}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{service.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
