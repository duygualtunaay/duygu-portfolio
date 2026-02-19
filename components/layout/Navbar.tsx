"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href={`/${locale}`} className="font-semibold text-lg">
          Duygu Altunay
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <a href="#about">{t("about")}</a>
          <a href="#experience">{t("experience")}</a>
          <a href="#education">{t("education")}</a>
          <a href="#skills">{t("skills")}</a>
          <a href="#projects">{t("projects")}</a>
          <a href="#contact">{t("contact")}</a>

        </nav>

        {/* ===== MOBILE BUTTON ===== */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2">

          <div className="flex flex-col gap-3">

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {t("about")}
            </a>

            <a
              href="#experience"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {t("experience")}
            </a>

            <a
              href="#education"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {t("education")}
            </a>

            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {t("skills")}
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {t("projects")}
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {t("contact")}
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
