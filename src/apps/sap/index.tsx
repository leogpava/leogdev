"use client";

import { useEffect, useState } from "react";

import {
  sapArchitecturePillars,
  sapExperience,
  sapOverview,
  sapProjects,
  sapSections,
  sapStackGroups,
  type SapSectionId,
} from "@/shared/data/sap";
import type { AppComponentProps } from "@/shared/types/app";

function SapOverviewSection() {
  return (
    <>
      <section className="sap-banner">
        <div>
          <p className="sap-banner__eyebrow">Professional Overview</p>
          <h3 className="sap-banner__title">{sapOverview.role}</h3>
          <p className="sap-banner__text">{sapOverview.summary}</p>
        </div>
        <div className="sap-banner__status">
          <span className="sap-banner__status-dot" aria-hidden="true" />
          Enterprise integration focus
        </div>
      </section>

      <section className="sap-kpis" aria-label="Indicadores principais">
        {sapOverview.metrics.map((metric) => (
          <article key={metric.label} className="sap-kpi">
            <p className="sap-kpi__label">{metric.label}</p>
            <p className="sap-kpi__value">{metric.value}</p>
            <p className="sap-kpi__hint">{metric.hint}</p>
          </article>
        ))}
      </section>

      <section className="sap-card sap-card--full">
        <div className="sap-card__header">
          <div>
            <p className="sap-card__eyebrow">Atuacao</p>
            <h3 className="sap-card__title">Como eu gero valor</h3>
          </div>
          <span className="sap-pill sap-pill--success">Ambientes criticos</span>
        </div>
        <div className="sap-bullet-list">
          {sapOverview.bullets.map((bullet) => (
            <div key={bullet} className="sap-bullet-card">
              <span className="sap-bullet-card__marker" aria-hidden="true" />
              <p>{bullet}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function SapExperienceSection() {
  return (
    <section className="sap-card sap-card--full">
      <div className="sap-card__header">
        <div>
          <p className="sap-card__eyebrow">Experience</p>
          <h3 className="sap-card__title">{sapExperience.company}</h3>
        </div>
        <span className="sap-pill">{sapExperience.period}</span>
      </div>

      <div className="sap-timeline">
        <div className="sap-timeline__point" aria-hidden="true" />
        <div className="sap-timeline__content">
          <p className="sap-timeline__role">{sapExperience.title}</p>
          <div className="sap-bullet-list">
            {sapExperience.responsibilities.map((item) => (
              <div key={item} className="sap-bullet-card">
                <span className="sap-bullet-card__marker" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SapProjectsSectionContent({
  onOpenProject,
}: {
  onOpenProject: (projectId: string) => void;
}) {
  return (
    <section className="sap-grid sap-grid--projects">
      {sapProjects.map((project) => (
        <button
          key={project.id}
          type="button"
          onClick={() => onOpenProject(project.id)}
          className="sap-card sap-card--interactive"
        >
          <div className="sap-card__header">
            <div>
              <p className="sap-card__eyebrow">Projeto enterprise</p>
              <h3 className="sap-card__title">{project.title}</h3>
            </div>
            <span className="sap-pill">{project.client}</span>
          </div>
          <p className="sap-card__text">{project.summary}</p>
          <div className="sap-list">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="sap-list__item">
                <p className="sap-list__title">{highlight}</p>
              </div>
            ))}
          </div>
        </button>
      ))}
    </section>
  );
}

function SapProjectDetail({
  projectId,
  onBack,
}: {
  projectId: string;
  onBack: () => void;
}) {
  const project = sapProjects.find((entry) => entry.id === projectId) ?? null;

  if (!project) {
    return null;
  }

  return (
    <section className="sap-card sap-card--full">
      <div className="sap-card__header">
        <div>
          <p className="sap-card__eyebrow">Projeto enterprise</p>
          <h3 className="sap-card__title">{project.title}</h3>
        </div>
        <button type="button" onClick={onBack} className="sap-inline-button">
          Voltar
        </button>
      </div>

      <p className="sap-card__text">{project.summary}</p>

      <div className="sap-bullet-list">
        {project.highlights.map((highlight) => (
          <div key={highlight} className="sap-bullet-card">
            <span className="sap-bullet-card__marker" aria-hidden="true" />
            <p>{highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SapStackSection() {
  return (
    <section className="sap-grid sap-grid--stack">
      {sapStackGroups.map((group) => (
        <article key={group.category} className="sap-card">
          <div className="sap-card__header">
            <div>
              <p className="sap-card__eyebrow">Stack SAP</p>
              <h3 className="sap-card__title">{group.category}</h3>
            </div>
          </div>
          <div className="sap-tag-list">
            {group.items.map((item) => (
              <span key={item} className="sap-tag">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function SapArchitectureSection() {
  return (
    <section className="sap-grid sap-grid--architecture">
      {sapArchitecturePillars.map((pillar) => (
        <article key={pillar.title} className="sap-card">
          <div className="sap-card__header">
            <div>
              <p className="sap-card__eyebrow">Arquitetura</p>
              <h3 className="sap-card__title">{pillar.title}</h3>
            </div>
          </div>
          <p className="sap-card__text">{pillar.description}</p>
        </article>
      ))}
    </section>
  );
}

export function SapApp({ window }: AppComponentProps) {
  const [activeSection, setActiveSection] = useState<SapSectionId>("overview");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const requestedSection =
    typeof window.props?.initialSection === "string" ? (window.props.initialSection as SapSectionId) : null;
  const requestedProjectId =
    typeof window.props?.projectId === "string" ? window.props.projectId : null;

  useEffect(() => {
    if (requestedSection) {
      setActiveSection(requestedSection);
    }
  }, [requestedSection]);

  useEffect(() => {
    setSelectedProjectId(requestedProjectId);
  }, [requestedProjectId]);

  return (
    <section className="sap-app">
      <div className="sap-shell">
        <header className="sap-shellbar">
          <div className="sap-shellbar__title">
            <p className="sap-shellbar__eyebrow">SAP Professional Experience</p>
            <h2 className="sap-shellbar__heading">{window.title}</h2>
            <p className="sap-shellbar__meta">
              Experiencia profissional em integracoes SAP, arquitetura enterprise e operacao critica.
            </p>
          </div>
          <div className="sap-shellbar__actions" aria-label="Acoes da aplicacao">
            <span className="sap-icon-button" aria-hidden="true">BTP</span>
            <span className="sap-icon-button" aria-hidden="true">CPI</span>
            <span className="sap-icon-button" aria-hidden="true">API</span>
            <span className="sap-user-pill">
              <span className="sap-user-pill__avatar" aria-hidden="true">LP</span>
              Leonardo Pavanelli
            </span>
          </div>
        </header>

        <div className="sap-body">
          <aside className="sap-sidebar" aria-label="Navegacao SAP">
            <p className="sap-sidebar__label">Navegacao interna</p>
            <nav className="sap-nav">
              {sapSections.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveSection(item.id);
                    if (item.id !== "projects") {
                      setSelectedProjectId(null);
                    }
                  }}
                  className={`sap-nav__item${item.id === activeSection ? " sap-nav__item--active" : ""}`}
                >
                  <span>{item.label}</span>
                  <span className="sap-nav__badge">{item.badge}</span>
                </button>
              ))}
            </nav>
          </aside>

          <main className="sap-content">
            {activeSection === "overview" && <SapOverviewSection />}
            {activeSection === "experience" && <SapExperienceSection />}
            {activeSection === "projects" &&
              (selectedProjectId ? (
                <SapProjectDetail
                  projectId={selectedProjectId}
                  onBack={() => setSelectedProjectId(null)}
                />
              ) : (
                <SapProjectsSectionContent onOpenProject={setSelectedProjectId} />
              ))}
            {activeSection === "stack" && <SapStackSection />}
            {activeSection === "architecture" && <SapArchitectureSection />}
          </main>
        </div>
      </div>
    </section>
  );
}

