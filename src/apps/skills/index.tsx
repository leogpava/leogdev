import { skillGroups } from "@/shared/data/skills";
import type { AppComponentProps } from "@/shared/types/app";

export function SkillsApp({ window }: AppComponentProps) {
  return (
    <section className="flex h-full flex-col overflow-hidden bg-[linear-gradient(160deg,_rgba(7,18,31,0.98),_rgba(9,35,46,0.96)_52%,_rgba(18,23,42,0.98))] text-slate-100">
      <div className="overflow-y-auto p-6 md:p-7">
        <div className="mx-auto flex max-w-5xl flex-col gap-7">
          <header className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-emerald-300/80">
              Capability Map
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{window.title}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-200/80">
              Competencias organizadas por dominio para mostrar profundidade tecnica,
              repertorio de integracao e ferramental de apoio.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.category}
                className="rounded-[26px] border border-white/10 bg-white/[0.05] p-5"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/80">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-100/88"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
