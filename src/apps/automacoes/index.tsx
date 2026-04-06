import type { AppComponentProps } from "@/shared/types/app";

export function AutomacoesApp({ window }: AppComponentProps) {
  return (
    <section className="flex h-full flex-col gap-4 bg-[linear-gradient(180deg,_rgba(8,16,32,0.98),_rgba(4,8,18,0.95))] p-6 text-blue-50">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-sky-300/70">
          Painel de automações
        </p>
        <h2 className="mt-2 text-2xl font-semibold">{window.title}</h2>
      </div>
      <div className="space-y-3">
        {["Pipelines", "Agentes", "Integrações"].map((item, index) => (
          <div
            key={item}
            className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4"
          >
            <p className="text-sm text-sky-50/85">
              {index + 1}. {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
