"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { content } from "@/lib/content";
import Image from "next/image";

export function Founder() {
  const { locale } = useLocale();
  const t = content[locale].founder;

  const hasFounderImage = true;

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {locale === "en" ? "About the Founder" : "על המייסד"}
        </motion.h2>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass mt-16 flex flex-col items-center gap-8 rounded-2xl border-accent-teal/20 p-8 sm:flex-row sm:items-start"
        >
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent-teal/40 to-accent-blue/20 opacity-60 blur-sm" aria-hidden />
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-2 border-white/10 bg-slate-700/50">
              {hasFounderImage ? (
                <Image
                  src="/Gemini_Generated_Image_blgn0xblgn0xblgn.png"
                  alt={t.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover object-[50%_28%]"
                />
              ) : (
                <span
                  className="flex h-full w-full items-center justify-center text-4xl font-semibold text-slate-500"
                  role="img"
                  aria-label="Professional headshot placeholder"
                >
                  AP
                </span>
              )}
            </div>
          </div>
          <div className="flex-1 text-center sm:text-start">
            <h3 className="text-xl font-bold text-white">{t.name}</h3>
            <p className="mt-1 text-accent-teal">{t.role}</p>
            <motion.a
              href={t.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 inline-flex items-center gap-1 rounded text-sm text-accent-teal hover:text-cyan-400 focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              LinkedIn ↗
            </motion.a>
            <p className="mt-4 leading-relaxed text-slate-300">{t.bio}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
