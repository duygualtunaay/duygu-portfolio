"use client";

import {useTranslations} from "next-intl";
import Reveal from "@/components/motion/Reveal";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">{t("title")}</h2>
        <p className="mt-4 max-w-3xl text-zinc-300 leading-relaxed">
          {t("body")}
        </p>
      </Reveal>
    </section>
  );
}
