"use client";

import {useTranslations} from "next-intl";
import Reveal from "@/components/motion/Reveal";

type ExpItem = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

export default function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExpItem[];

  return (
    <section id="experience" className="py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">{t("title")}</h2>

        <div className="mt-8 grid gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold">{it.company}</div>
                  <div className="text-zinc-300">{it.role}</div>
                </div>
                <div className="text-sm text-zinc-400">{it.date}</div>
              </div>

              <ul className="mt-4 list-disc pl-5 text-zinc-300">
                {it.bullets.map((b, i) => (
                  <li key={i} className="mt-2">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
