import type { AppComponentProps } from "@/shared/types/app";

export function AboutApp({ window }: AppComponentProps) {
  return (
    <section className="flex h-full flex-col justify-between bg-[linear-gradient(135deg,_rgba(61,35,13,0.97),_rgba(16,11,9,0.96))] p-6 text-amber-50">
      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">
            Identity
          </p>
          <h2 className="mt-2 text-2xl font-semibold">{window.title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-amber-50/80">
          Espaço reservado para narrativa pessoal, stack, experiência e
          posicionamento profissional dentro do portfólio gamificado.
        </p>
      </div>
      <p className="text-xs uppercase tracking-[0.28em] text-amber-200/55">
        Web Operating System Foundation
      </p>
    </section>
  );
}
