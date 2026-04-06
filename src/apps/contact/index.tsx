"use client";

import { useState } from "react";

import { contactLinks } from "@/shared/data/profile";
import type { AppComponentProps } from "@/shared/types/app";

export function ContactApp({ window }: AppComponentProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      globalThis.setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 1800);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section className="flex h-full flex-col overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_22%),linear-gradient(180deg,_rgba(5,10,21,0.98),_rgba(14,18,33,0.98))] text-slate-100">
      <div className="overflow-y-auto p-6 md:p-7">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <header className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-300/80">
              Reach Out
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{window.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-200/80">
              Canais diretos para conversa profissional, networking e acesso ao codigo.
            </p>
          </header>

          <div className="grid gap-4">
            {contactLinks.map((item) =>
              item.id === "email" ? (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-[26px] border border-white/10 bg-white/[0.05] p-5 md:flex-row md:items-center md:justify-between"
                >
                  <a
                    href={item.href}
                    className="block min-w-0 flex-1 rounded-[20px] transition hover:bg-white/[0.03]"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
                      {item.label}
                    </p>
                    <p className="mt-3 break-all text-base text-slate-50 transition hover:text-cyan-200">
                      {item.value}
                    </p>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.value)}
                    className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm text-slate-100 transition hover:border-white/20 hover:bg-black/30"
                  >
                    {copiedId === item.id ? "Copiado!" : "Copiar"}
                  </button>
                </article>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-4 rounded-[26px] border border-white/10 bg-white/[0.05] p-5 transition hover:cursor-pointer hover:border-cyan-300/20 hover:bg-white/[0.08] md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
                      {item.label}
                    </p>
                    <p className="mt-3 text-base text-slate-50 transition group-hover:text-cyan-200">
                      {item.value}
                    </p>
                  </div>
                  <span className="text-sm text-slate-300 transition group-hover:text-cyan-100">
                    Abrir
                  </span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

