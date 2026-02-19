"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale(); // ⭐ locale alıyoruz

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href={`/${locale}`}
          className="font-semibold text-lg"
        >
          Duygu Altunay
        </Link>

        {/* MENU */}
        <nav className="flex items-center gap-6 text-sm">

          <a href="#about" className="hover:text-white/70 transition">
            {t("about")}
          </a>

          <a href="#experience" className="hover:text-white/70 transition">
            {t("experience")}
          </a>

          <a href="#education" className="hover:text-white/70 transition">
            {t("education")}
          </a>

          <a href="#skills" className="hover:text-white/70 transition">
            {t("skills")}
          </a>

          <a href="#projects" className="hover:text-white/70 transition">
            {t("projects")}
          </a>

          <a href="#contact" className="hover:text-white/70 transition">
            {t("contact")}
          </a>

        </nav>
      </div>
    </header>
  );
}
