"use client";

import {useTranslations} from "next-intl";
import Reveal from "@/components/motion/Reveal";

type SkillGroup = {
  name: string;
  items: string[];
};

export default function Skills() {
  const t = useTranslations("skills");
  const groups = t.raw("groups") as SkillGroup[];

  return (
    <section id="skills" className="py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">{t("title")}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {groups.map((g, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-semibold">{g.name}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-sm text-zinc-200"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
