"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative py-20 overflow-hidden">
      {/* animated blue blobs */}
      <div className="blue-blob -top-40 -left-40" />
      <div className="blue-blob-2 -bottom-44 -right-36" />

      <div className="relative grid items-center gap-10 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.h1
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.55, ease: "easeOut"}}
            className="text-4xl font-semibold tracking-tight md:text-6xl"
          >
            {t("name")}
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.65, delay: 0.05}}
            className="mt-3 text-zinc-300"
          >
            {t("role")}
          </motion.p>

          <motion.p
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.65, delay: 0.1}}
            className="mt-4 max-w-2xl text-zinc-300"
          >
            {t("tagline")}
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              href="#projects"
            >
              {t("projectsBtn")}
            </a>

            <a
              className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
              href="/files/Duygu-Altunay-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t("downloadCvBtn")}
            </a>

            <a
              className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
              href="#contact"
            >
              {t("contactBtn")}
            </a>
          </div>
        </div>

        {/* RIGHT PHOTO */}
        <motion.div
          initial={{opacity: 0, scale: 0.96}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.65, delay: 0.12}}
          className="relative mx-auto aspect-square w-72 md:w-96"
        >
          {/* blue glow behind photo */}
          <div className="absolute -inset-6 rounded-[28px] bg-blue-500/10 blur-2xl" />

          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/images/profile.jpeg"
              alt="Duygu Altunay"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
