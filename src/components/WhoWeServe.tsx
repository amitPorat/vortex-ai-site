"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";

const icons = ["🛡", "🏢", "🏭"];

export function WhoWeServe() {
  const { locale } = useLocale();
  const t = content[locale].whoWeServe;

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8" id="who-we-serve">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {t.title}
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              className="glass rounded-2xl border-white/10 p-7 transition-shadow hover:border-accent-teal/30 hover:shadow-glow"
            >
              <div className="text-3xl text-accent-teal" aria-hidden>
                {icons[i]}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
