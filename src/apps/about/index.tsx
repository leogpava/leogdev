import { profile } from "@/shared/data/profile";
import type { AppComponentProps } from "@/shared/types/app";

export function AboutApp({ window }: AppComponentProps) {
  return (
    <section className="flex h-full flex-col overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_24%),linear-gradient(135deg,_rgba(50,26,10,0.98),_rgba(18,10,8,0.98))] text-amber-50">
      <div className="overflow-y-auto p-6 md:p-7">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <header className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/75">
              Perfil profissional
            </p>
            <h2 className="mt-3 text-3xl font-semibold">{profile.name}</h2>
            <p className="mt-2 text-lg text-amber-100/90">{profile.title}</p>
          </header>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">
              {window.title}
            </p>
            <p className="mt-4 text-sm leading-8 text-amber-50/82">{profile.summary}</p>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">
              Trajetória
            </p>
            <p className="mt-4 text-sm leading-8 text-amber-50/82">{profile.about}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
