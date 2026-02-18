"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative py-28 overflow-hidden">
      {/* animated blue blobs */}
      <div className="blue-blob -top-40 -left-40" />
      <div className="blue-blob-2 -bottom-44 -right-36" />

      <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {t("name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mt-4 text-zinc-400 text-lg"
        >
          {t("role")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-6 max-w-2xl text-zinc-300 leading-relaxed"
        >
          {t("tagline")}
        </motion.p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
            href="#projects"
          >
            {t("projectsBtn")}
          </a>

          <a
            className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-medium transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            href="/files/Duygu-Altunay-CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {t("downloadCvBtn")}
          </a>

          <a
            className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-medium transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            href="#contact"
          >
            {t("contactBtn")}
          </a>
        </div>
      </div>
    </section>
  );
}
