import type { AppComponentProps } from "@/shared/types/app";

export function ProjetosApp({ window }: AppComponentProps) {
  return (
    <section className="flex h-full flex-col gap-5 bg-[linear-gradient(135deg,_rgba(19,25,42,0.98),_rgba(39,17,52,0.94))] p-6 text-slate-100">
      <header>
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/75">
          Projects Grid
        </p>
        <h2 className="mt-2 text-2xl font-semibold">{window.title}</h2>
      </header>
      <div className="grid flex-1 gap-3 md:grid-cols-3">
        {["Sistema operacional web", "Experimentos UI", "Apps em produ&ccedil;&atilde;o"].map(
          (item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-sm text-slate-200/80">{item}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
}
