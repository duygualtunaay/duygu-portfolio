"use client";

import {useEffect, useMemo, useState} from "react";
import {useTranslations} from "next-intl";
import Reveal from "@/components/motion/Reveal";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

export default function Projects() {
  const t = useTranslations("projects");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("bad");
        const data = await res.json();
        if (mounted) setRepos(data.repos || []);
      } catch {
        if (mounted) setErr(true);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  const countText = useMemo(() => {
    if (loading) return "";
    if (err) return "";
    return `(${repos.length})`;
  }, [loading, err, repos.length]);

  return (
    <section id="projects" className="py-16">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold">{t("title")} {countText}</h2>
            <p className="mt-2 text-sm text-zinc-400">{t("subtitle")}</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="rounded-2xl border border-white/10 px-4 py-2 text-sm hover:border-blue-500/40 hover:bg-blue-500/10"
          >
            {open ? t("collapse") : t("expand")}
          </button>
        </div>

        {loading && (
          <p className="mt-6 text-zinc-300">{t("loading")}</p>
        )}

        {err && (
          <p className="mt-6 text-zinc-300">{t("error")}</p>
        )}

        {/* Collapsible list */}
        {!loading && !err && open && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-2">
            <ul className="divide-y divide-white/10">
              {repos.map((r) => (
                <li key={r.id} className="p-4 hover:bg-blue-500/5 rounded-xl">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold">{r.name}</div>
                      {r.description && (
                        <p className="mt-1 text-sm text-zinc-300">{r.description}</p>
                      )}
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                        {r.language && (
                          <span className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1">
                            {r.language}
                          </span>
                        )}
                        <span>★ {r.stargazers_count}</span>
                        <span>Updated: {new Date(r.updated_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <a
                      className="shrink-0 rounded-xl border border-white/10 px-4 py-2 text-sm hover:border-blue-500/40 hover:bg-blue-500/10"
                      href={r.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("viewOnGitHub")}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Reveal>
    </section>
  );
}
