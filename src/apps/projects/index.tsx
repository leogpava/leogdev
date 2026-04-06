"use client";

import { useEffect, useState } from "react";

import { personalProjects, type Project } from "@/shared/data/projects";
import type { AppComponentProps } from "@/shared/types/app";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.05] p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Projeto</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100">
          pessoal
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-200/82">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200/80"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-8 text-sm text-cyan-100/90 transition group-hover:text-cyan-50">
        Abrir detalhes
      </div>
    </button>
  );
}

export function ProjectsApp({ window }: AppComponentProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const requestedProjectId =
    typeof window.props?.projectId === "string" ? window.props.projectId : null;

  useEffect(() => {
    if (!requestedProjectId) {
      return;
    }

    const project = personalProjects.find((entry) => entry.id === requestedProjectId) ?? null;
    setSelectedProject(project);
  }, [requestedProjectId]);

  return (
    <section className="flex h-full flex-col overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.16),_transparent_28%),linear-gradient(135deg,_#07131f,_#12182b_45%,_#22122f)] text-slate-100">
      <div className="overflow-y-auto p-5 md:p-7">
        {selectedProject ? (
          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-cyan-300/75">
                  Personal Projects
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200/82">
                  {selectedProject.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-slate-100 transition hover:border-white/20 hover:bg-white/[0.09]"
              >
                Voltar
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.25fr_0.95fr]">
              <article className="rounded-[28px] border border-white/10 bg-black/20 p-5 transition-colors duration-200 hover:border-white/14">
                <p className="text-xs uppercase tracking-[0.28em] text-orange-200/75">
                  Arquitetura
                </p>
                <p className="mt-4 text-base leading-8 text-slate-100/90">
                  {selectedProject.architecture}
                </p>
              </article>

              <article className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 transition-colors duration-200 hover:border-white/14">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">Papel</p>
                <p className="mt-4 text-base leading-8 text-slate-100/90">
                  {selectedProject.role}
                </p>
              </article>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 transition-colors duration-200 hover:border-white/14">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
                  Highlights
                </p>
                <div className="mt-4 grid gap-3">
                  {selectedProject.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3 text-sm leading-7 text-slate-200/85"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 transition-colors duration-200 hover:border-white/14">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            <header className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-cyan-300/75">
                Personal Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">{window.title}</h2>
              <p className="mt-4 text-sm leading-8 text-slate-200/82">
                Espaco dedicado aos projetos pessoais, separados da experiencia SAP.
                Aqui a narrativa foca em produto, UX, exploracao tecnica e execucao
                full-stack aplicada a ideias autorais.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              {personalProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

