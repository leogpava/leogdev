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

const LAB2DEV_LOGO_URL = "https://www.lab2dev.com/wp-content/uploads/2025/07/1938.png";
const SAP_LOGO_URL = "https://www.sap.com/aemedge/icons/sap-logo.svg";

function Lab2devLogo({ className }: { className?: string }) {
  return (
    <span className={`sap-company-logo${className ? ` ${className}` : ""}`}>
      <img src={LAB2DEV_LOGO_URL} alt="Lab2dev" className="sap-company-logo__image" />
    </span>
  );
}

function SapPageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="sap-page-header">
      <div className="sap-page-header__top">
        <div>
          <p className="sap-page-header__eyebrow">Aplicacao SAP</p>
          <h1 className="sap-page-header__title">{title}</h1>
          <p className="sap-page-header__description">{description}</p>
        </div>
      </div>
      <div className="sap-page-header__meta">
        <span className="sap-object-status sap-object-status--success">
          <span className="sap-object-status__dot" aria-hidden="true" />
          Sessao ativa
        </span>
        <span className="sap-pill">Integration Suite</span>
        <span className="sap-pill">Arquitetura enterprise</span>
      </div>
    </section>
  );
}

function SapOverviewSection() {
  return (
    <>
      <section className="sap-kpis" aria-label="Indicadores principais">
        {sapOverview.metrics.map((metric) => (
          <article key={metric.label} className="sap-kpi">
            <p className="sap-kpi__label">{metric.label}</p>
            <div className="sap-kpi__value">
              {metric.value.toLowerCase() === "lab2dev" ? (
                <Lab2devLogo className="sap-company-logo--kpi" />
              ) : (
                metric.value
              )}
            </div>
            <p className="sap-kpi__hint">{metric.hint}</p>
          </article>
        ))}
      </section>

      <section className="sap-section-grid sap-section-grid--two">
        <article className="sap-card">
          <div className="sap-card__header">
            <div>
              <p className="sap-card__eyebrow">Resumo profissional</p>
              <h3 className="sap-card__title">{sapOverview.role}</h3>
            </div>
            <span className="sap-object-status sap-object-status--success">
              <span className="sap-object-status__dot" aria-hidden="true" />
              Ativo em integracoes SAP
            </span>
          </div>
          <p className="sap-card__text">{sapOverview.summary}</p>
        </article>

        <article className="sap-card">
          <div className="sap-card__header">
            <div>
              <p className="sap-card__eyebrow">Escopo atual</p>
              <h3 className="sap-card__title">Areas de atuacao</h3>
            </div>
          </div>
          <div className="sap-list">
            <div className="sap-list__item sap-list__item--compact">
              <p className="sap-list__title">Integracao enterprise</p>
              <p className="sap-list__meta">CPI, APIs, observabilidade e sustentacao</p>
            </div>
            <div className="sap-list__item sap-list__item--compact">
              <p className="sap-list__title">Arquitetura e contratos</p>
              <p className="sap-list__meta">Validacao tecnica e consistencia de payloads</p>
            </div>
            <div className="sap-list__item sap-list__item--compact">
              <p className="sap-list__title">Operacao critica</p>
              <p className="sap-list__meta">Resiliencia, erros controlados e continuidade</p>
            </div>
          </div>
        </article>
      </section>

      <section className="sap-card sap-card--overview">
        <div className="sap-card__header">
          <div>
            <p className="sap-card__eyebrow">Atuacao</p>
            <h3 className="sap-card__title">Como eu gero valor</h3>
          </div>
          <span className="sap-pill">Ambientes criticos</span>
        </div>
        <div className="sap-bullet-list">
          {sapOverview.bullets.map((bullet) => (
            <div key={bullet} className="sap-bullet-card sap-bullet-card--overview">
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
    <section className="sap-card">
      <div className="sap-card__header">
        <div>
          <p className="sap-card__eyebrow">Experiencia</p>
          <div className="sap-card__title">
            {sapExperience.company.toLowerCase() === "lab2dev" ? (
              <Lab2devLogo className="sap-company-logo--title" />
            ) : (
              sapExperience.company
            )}
          </div>
        </div>
        <span className="sap-pill">{sapExperience.period}</span>
      </div>

      <div className="sap-timeline">
        <div className="sap-timeline__line">
          <div className="sap-timeline__point" aria-hidden="true" />
        </div>
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
              <div key={highlight} className="sap-list__item sap-list__item--compact">
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
    <section className="sap-card">
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
              <p className="sap-card__eyebrow">Tecnologias SAP</p>
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
    typeof window.props?.initialSection === "string"
      ? (window.props.initialSection as SapSectionId)
      : null;
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

  const activeSectionLabel =
    sapSections.find((item) => item.id === activeSection)?.label ?? "Visao geral";

  return (
    <section className="sap-app">
      <div className="sap-shell">
        <header className="sap-shellbar">
          <div className="sap-shellbar__brand">
            <button type="button" className="sap-shellbar__menu" aria-label="Abrir menu">
              =
            </button>
            <img src={SAP_LOGO_URL} alt="SAP" className="sap-shellbar__logo" />
            <div className="sap-shellbar__titles">
              <p className="sap-shellbar__product">{window.title}</p>
              <p className="sap-shellbar__meta">Fiori launchpad · perfil profissional SAP</p>
            </div>
          </div>
          <div className="sap-shellbar__actions" aria-label="Acoes da aplicacao">
            <button type="button" className="sap-toolbar-button" aria-label="Buscar">
              Busca
            </button>
            <button type="button" className="sap-toolbar-button" aria-label="Notificacoes">
              Alertas
            </button>
            <button type="button" className="sap-toolbar-button" aria-label="Ajuda">
              Ajuda
            </button>
            <button type="button" className="sap-avatar-button" aria-label="Perfil do usuario">
              <span className="sap-avatar-button__circle" aria-hidden="true">
                LP
              </span>
              <span className="sap-avatar-button__name">Leonardo Pavanelli</span>
            </button>
          </div>
        </header>

        <div className="sap-body">
          <aside className="sap-sidebar" aria-label="Navegacao SAP">
            <p className="sap-sidebar__label">Navegacao</p>
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
            <SapPageHeader
              title={activeSectionLabel}
              description="Experiencia profissional em integracoes SAP, arquitetura enterprise e operacao critica dentro de uma superficie visual alinhada ao Fiori."
            />

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

