"use client";

import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const isTR = pathname?.startsWith("/tr");
  const nextLocale = isTR ? "en" : "tr";
  const nextPath =
    pathname?.replace(/^\/(tr|en)/, `/${nextLocale}`) || `/${nextLocale}`;

  return (
    <>
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-semibold tracking-tight hover:text-white"
          >
            Duygu Altunay
          </a>

          <nav className="flex items-center gap-4 text-sm text-zinc-300">
            {[
              ["#about", t("about")],
              ["#experience", t("experience")],
              ["#education", t("education")],
              ["#skills", t("skills")],
              ["#projects", t("projects")],
              ["#contact", t("contact")]
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hover:text-white hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.35)]"
              >
                {label}
              </a>
            ))}

            <a
              href={nextPath}
              className="rounded-xl border border-white/10 px-3 py-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            >
              {nextLocale.toUpperCase()}
            </a>
          </nav>
        </div>
      </header>

      {/* NAVBAR HEIGHT OFFSET */}
      <div className="h-[72px]" />
    </>
  );
}
