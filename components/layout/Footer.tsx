"use client";

import {useTranslations} from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-400">
        {t("text", {year})}
      </div>
    </footer>
  );
}
