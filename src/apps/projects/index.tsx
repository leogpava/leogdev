"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { personalProjects, type Project } from "@/shared/data/projects";
import type { AppComponentProps } from "@/shared/types/app";

type ProjectTabId = "overview" | "product" | "architecture" | "decisions";

const DEVICON_BASE_URL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const STACK_ICON_MAP: Record<string, { path: string; alt: string }> = {
  "Next.js": {
    path: "nextjs/nextjs-original.svg",
    alt: "Next.js logo",
  },
  React: {
    path: "react/react-original.svg",
    alt: "React logo",
  },
  Supabase: {
    path: "supabase/supabase-original.svg",
    alt: "Supabase logo",
  },
  TypeScript: {
    path: "typescript/typescript-original.svg",
    alt: "TypeScript logo",
  },
};

const PROJECT_TABS: Array<{ id: ProjectTabId; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "product", label: "Product" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Decisions" },
];

function StackToken({
  label,
  size = "default",
}: {
  label: string;
  size?: "compact" | "default";
}) {
  const icon = STACK_ICON_MAP[label];
  const iconSize = size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4";
  const tokenPadding = size === "compact" ? "px-2.5 py-1" : "px-3 py-1.5";
  const textSize = size === "compact" ? "text-[11px]" : "text-xs";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 text-neutral-200",
        tokenPadding,
        textSize,
      ].join(" ")}
    >
      {icon ? (
        <img
          src={`${DEVICON_BASE_URL}/${icon.path}`}
          alt={icon.alt}
          className={`${iconSize} shrink-0 object-contain`}
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <span>{label}</span>
    </span>
  );
}

function SidebarProjectItem({
  project,
  isActive,
  onSelect,
}: {
  project: Project;
  isActive: boolean;
  onSelect: (projectId: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      className={[
        "w-full rounded-[18px] border px-4 py-4 text-left transition duration-200",
        isActive
          ? "border-white/16 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.04]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">{project.type}</p>
          <p className="mt-2 text-sm font-semibold text-neutral-100">{project.title}</p>
        </div>
        <span
          className={[
            "rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.22em]",
            project.status === "Active"
              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
              : "border-amber-300/20 bg-amber-300/10 text-amber-100",
          ].join(" ")}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-3 text-xs leading-6 text-neutral-400">{project.stackSummary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((item) => (
          <StackToken key={item} label={item} size="compact" />
        ))}
      </div>
    </button>
  );
}

function ProjectTabs({
  activeTab,
  onChange,
}: {
  activeTab: ProjectTabId;
  onChange: (tabId: ProjectTabId) => void;
}) {
  return (
    <nav className="flex flex-wrap gap-2 border-b border-white/8 px-4 pb-3 pt-4 md:px-6">
      {PROJECT_TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={[
            "rounded-full px-3.5 py-2 text-sm transition",
            activeTab === tab.id
              ? "bg-white/[0.08] text-white"
              : "text-neutral-400 hover:bg-white/[0.04] hover:text-neutral-200",
          ].join(" ")}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

function OverviewTab({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-[24px] border border-white/8 bg-black/20 p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Project scope</p>
        <p className="mt-4 text-sm leading-7 text-neutral-100">{project.overview.summary}</p>
      </section>

      <section className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Role</p>
        <p className="mt-4 text-sm leading-7 text-neutral-200">{project.role}</p>
      </section>

      <section className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Problem</p>
        <p className="mt-4 text-sm leading-7 text-neutral-200">{project.overview.problem}</p>
      </section>

      <section className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Creation context</p>
        <p className="mt-4 text-sm leading-7 text-neutral-200">{project.overview.context}</p>
      </section>
    </div>
  );
}

function ProductTab({ project }: { project: Project }) {
  const primaryPreview = project.product.previews[0];
  const secondaryPreviews = project.product.previews.slice(1);

  return (
    <div className="space-y-4">
      <section className="rounded-[26px] border border-white/8 bg-[#101010] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Product preview</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300">{project.product.summary}</p>
          </div>
          {project.links?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-neutral-200 transition hover:border-white/18 hover:bg-white/[0.08]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <figure className="overflow-hidden rounded-[20px] border border-white/8 bg-[#0b0b0b]">
          <Image
            src={primaryPreview.src}
            alt={primaryPreview.alt}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </figure>
        <figcaption className="pt-3 text-xs leading-6 text-neutral-500">
          {primaryPreview.caption}
        </figcaption>
      </section>

      {secondaryPreviews.length ? (
        <section className="grid gap-4 md:grid-cols-2">
          {secondaryPreviews.map((preview) => (
            <figure
              key={preview.src}
              className="overflow-hidden rounded-[24px] border border-white/8 bg-[#101010] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="overflow-hidden rounded-[16px] border border-white/8">
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="pt-3 text-xs leading-6 text-neutral-500">
                {preview.caption}
              </figcaption>
            </figure>
          ))}
        </section>
      ) : null}
    </div>
  );
}

function ArchitectureTab({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
      <section className="rounded-[24px] border border-white/8 bg-black/20 p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">System structure</p>
        <p className="mt-4 text-sm leading-7 text-neutral-200">{project.architecture.summary}</p>

        <div className="mt-5 space-y-3">
          {project.architecture.systemLayers.map((layer) => (
            <div
              key={layer}
              className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-neutral-300"
            >
              {layer}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Stack</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <StackToken key={item} label={item} />
          ))}
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-neutral-500">Technical decisions</p>
        <div className="mt-4 space-y-3">
          {project.architecture.technicalChoices.map((choice) => (
            <div key={choice} className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-3 text-sm leading-7 text-neutral-300">
              {choice}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 lg:col-span-2">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Data flow</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {project.architecture.dataFlow.map((step, index) => (
            <div
              key={step}
              className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-4"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                Step {index + 1}
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-200">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DecisionsTab({ project }: { project: Project }) {
  return (
    <div className="space-y-4">
      {project.decisions.map((decision, index) => (
        <section
          key={decision.title}
          className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                Decision {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{decision.title}</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">Context</p>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{decision.context}</p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">Trade-off</p>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{decision.tradeoff}</p>
            </div>
            <div className="rounded-[18px] border border-white/8 bg-black/20 px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">Outcome</p>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{decision.outcome}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function ProjectTabContent({
  project,
  activeTab,
}: {
  project: Project;
  activeTab: ProjectTabId;
}) {
  if (activeTab === "product") {
    return <ProductTab project={project} />;
  }

  if (activeTab === "architecture") {
    return <ArchitectureTab project={project} />;
  }

  if (activeTab === "decisions") {
    return <DecisionsTab project={project} />;
  }

  return <OverviewTab project={project} />;
}

export function ProjectsApp({ window }: AppComponentProps) {
  const requestedProjectId =
    typeof window.props?.projectId === "string" ? window.props.projectId : null;

  const initialProjectId = requestedProjectId ?? personalProjects[0]?.id ?? "";

  const [selectedProjectId, setSelectedProjectId] = useState(initialProjectId);
  const [activeTab, setActiveTab] = useState<ProjectTabId>("overview");

  useEffect(() => {
    if (!requestedProjectId) {
      return;
    }

    const hasRequestedProject = personalProjects.some((entry) => entry.id === requestedProjectId);
    if (!hasRequestedProject) {
      return;
    }

    setSelectedProjectId(requestedProjectId);
    setActiveTab("overview");
  }, [requestedProjectId]);

  const selectedProject = useMemo(
    () =>
      personalProjects.find((project) => project.id === selectedProjectId) ?? personalProjects[0],
    [selectedProjectId],
  );

  if (!selectedProject) {
    return null;
  }

  return (
    <section className="flex h-full flex-col overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_18%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.03),_transparent_28%),linear-gradient(180deg,_#0c0c0d_0%,_#111111_100%)] text-neutral-100">
      <div className="grid h-full min-h-0 md:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="flex min-h-0 flex-col border-b border-white/8 bg-[#090909] md:border-b-0 md:border-r">
          <div className="border-b border-white/8 px-5 py-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Project Lab</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{window.title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Workspace técnico para leitura de produto, arquitetura e decisões de engenharia.
            </p>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
            <div className="space-y-2">
              {personalProjects.map((project) => (
                <SidebarProjectItem
                  key={project.id}
                  project={project}
                  isActive={project.id === selectedProject.id}
                  onSelect={(projectId) => {
                    setSelectedProjectId(projectId);
                    setActiveTab("overview");
                  }}
                />
              ))}
            </div>
          </div>
        </aside>

        <div className="flex min-h-0 flex-col">
          <header className="border-b border-white/8 bg-white/[0.02] px-4 py-5 md:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neutral-300">
                    {selectedProject.type}
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                    {selectedProject.status}
                  </span>
                </div>
                <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                  {selectedProject.title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.links?.length ? (
                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {selectedProject.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-neutral-200 transition hover:border-white/18 hover:bg-white/[0.08]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.stack.map((item) => (
                <StackToken key={item} label={item} />
              ))}
            </div>
          </header>

          <ProjectTabs activeTab={activeTab} onChange={setActiveTab} />

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-5">
            <div
              key={`${selectedProject.id}-${activeTab}`}
              className="animate-[window-fade-in_180ms_ease-out]"
            >
              <ProjectTabContent project={selectedProject} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
