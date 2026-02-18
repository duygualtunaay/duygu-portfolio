"use client";

import {useTranslations} from "next-intl";
import Reveal from "@/components/motion/Reveal";

export default function Education() {
  const t = useTranslations("education");

  return (
    <section id="education" className="py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">{t("title")}</h2>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">{t("school")}</div>
          <div className="text-zinc-300">{t("dept")}</div>
          <div className="mt-2 text-sm text-zinc-400">{t("date")}</div>
        </div>
      </Reveal>
    </section>
  );
}
