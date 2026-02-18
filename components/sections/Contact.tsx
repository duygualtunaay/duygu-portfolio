"use client";

import {useTranslations} from "next-intl";
import Reveal from "@/components/motion/Reveal";

export default function Contact() {
  const t = useTranslations("contact");

  const email = "altunayduygu04@gmail.com";
  const github = "https://github.com/duygualtunaay";
  const linkedin = "https://www.linkedin.com/in/duygu-altunay-906b8b33a/";
  const instagram = "https://www.instagram.com";
  const x = "https://www.x.com";

  return (
    <section id="contact" className="py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold">{t("title")}</h2>
        <p className="mt-3 text-zinc-300">{t("subtitle")}</p>

        {/* SINGLE BOX (NO INNER CARDS) */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left side: Email */}
            <div>
              <div className="text-sm text-zinc-400">{t("email")}</div>
              <a className="mt-2 block text-zinc-100 hover:underline" href={`mailto:${email}`}>
                {email}
              </a>

              <a
                className="mt-5 inline-block rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 hover:shadow-[0_0_26px_rgba(59,130,246,0.35)]"
                href={`mailto:${email}`}
              >
                Mail at
              </a>
            </div>

            {/* Right side: Social links (still inside same box) */}
            <div className="grid gap-3">
              <a
                className="rounded-xl border border-white/10 px-4 py-3 hover:border-blue-500/40 hover:bg-blue-500/10"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {t("linkedin")}
              </a>
              <a
                className="rounded-xl border border-white/10 px-4 py-3 hover:border-blue-500/40 hover:bg-blue-500/10"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                {t("github")}
              </a>
              <a
                className="rounded-xl border border-white/10 px-4 py-3 hover:border-blue-500/40 hover:bg-blue-500/10"
                href={instagram}
                target="_blank"
                rel="noreferrer"
              >
                {t("instagram")}
              </a>
              <a
                className="rounded-xl border border-white/10 px-4 py-3 hover:border-blue-500/40 hover:bg-blue-500/10"
                href={x}
                target="_blank"
                rel="noreferrer"
              >
                {t("x")}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
