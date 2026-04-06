import type { AppComponentProps } from "@/shared/types/app";

const navigationItems = [
  { label: "Overview", badge: "04", active: true },
  { label: "Integrações", badge: "12" },
  { label: "Fluxos", badge: "08" },
  { label: "Logs", badge: "24" },
];

const integrationItems = [
  { name: "SAP S/4HANA Cloud", status: "Operando", detail: "Sincronização a cada 5 min" },
  { name: "SuccessFactors", status: "Fila estável", detail: "Eventos RH e aprovações" },
  { name: "Ariba Network", status: "Latência controlada", detail: "Compras e fornecedores" },
];

const automationFlows = [
  { name: "Pedidos -> faturamento", progress: 92, info: "148 execuções hoje" },
  { name: "Provisionamento de parceiros", progress: 74, info: "19 itens em validação" },
  { name: "Conciliação financeira", progress: 88, info: "Fechamento parcial concluído" },
];

const systemStatus = [
  { name: "ERP Produção", state: "Estável", variant: "success", meta: "99,98% uptime" },
  { name: "Middleware CPI", state: "Monitorando", variant: "warning", meta: "2 filas acima do normal" },
  { name: "Ambiente QA", state: "Incidente", variant: "danger", meta: "Janela de manutenção aberta" },
];

const recentLogs = [
  { title: "IDoc MATMAS sincronizado", meta: "Há 2 min · Gateway ECC -> CPI" },
  { title: "Workflow de aprovação concluído", meta: "Há 8 min · SuccessFactors" },
  { title: "Alerta de fila reprocessada", meta: "Há 11 min · Integrações SAP" },
  { title: "Carga delta de pedidos iniciada", meta: "Há 16 min · S/4HANA Cloud" },
];

export function SapApp({ window }: AppComponentProps) {
  return (
    <section className="sap-app">
      <div className="sap-shell">
        <header className="sap-shellbar">
          <div className="sap-shellbar__title">
            <p className="sap-shellbar__eyebrow">SAP Workspace</p>
            <h2 className="sap-shellbar__heading">{window.title}</h2>
            <p className="sap-shellbar__meta">
              Central de integrações, automações e visibilidade operacional
            </p>
          </div>
          <div className="sap-shellbar__actions" aria-label="Ações da aplicação">
            <span className="sap-icon-button" aria-hidden="true">
              SR
            </span>
            <span className="sap-icon-button" aria-hidden="true">
              FL
            </span>
            <span className="sap-icon-button" aria-hidden="true">
              NT
            </span>
            <span className="sap-user-pill">
              <span className="sap-user-pill__avatar" aria-hidden="true">
                LD
              </span>
              Leo Dev
            </span>
          </div>
        </header>

        <div className="sap-body">
          <aside className="sap-sidebar" aria-label="Navegação SAP">
            <p className="sap-sidebar__label">Navegação</p>
            <nav className="sap-nav">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className={`sap-nav__item${item.active ? " sap-nav__item--active" : ""}`}
                >
                  <span>{item.label}</span>
                  <span className="sap-nav__badge">{item.badge}</span>
                </div>
              ))}
            </nav>
          </aside>

          <main className="sap-content">
            <section className="sap-banner">
              <div>
                <h3 className="sap-banner__title">Landscape operacional em conformidade</h3>
                <p className="sap-banner__text">
                  Integrações críticas monitoradas, fluxos automatizados e visibilidade
                  consolidada para squads de negócio.
                </p>
              </div>
              <div className="sap-banner__status">
                <span className="sap-banner__status-dot" aria-hidden="true" />
                17 sistemas online
              </div>
            </section>

            <section className="sap-kpis" aria-label="Indicadores principais">
              <article className="sap-kpi">
                <p className="sap-kpi__label">Integrações ativas</p>
                <p className="sap-kpi__value">24</p>
                <p className="sap-kpi__hint">3 novas rotas publicadas nesta semana</p>
              </article>
              <article className="sap-kpi">
                <p className="sap-kpi__label">Fluxos automatizados</p>
                <p className="sap-kpi__value">118</p>
                <p className="sap-kpi__hint">92% dentro do SLA de execução</p>
              </article>
              <article className="sap-kpi">
                <p className="sap-kpi__label">Ocorrências abertas</p>
                <p className="sap-kpi__value">06</p>
                <p className="sap-kpi__hint">2 exigem acompanhamento do time basis</p>
              </article>
              <article className="sap-kpi">
                <p className="sap-kpi__label">Logs processados</p>
                <p className="sap-kpi__value">1.2M</p>
                <p className="sap-kpi__hint">Janela diária de auditoria concluída</p>
              </article>
            </section>

            <section className="sap-grid">
              <article className="sap-card">
                <div className="sap-card__header">
                  <div>
                    <p className="sap-card__eyebrow">Hub</p>
                    <h3 className="sap-card__title">Integrações SAP</h3>
                  </div>
                  <span className="sap-pill sap-pill--success">Saudável</span>
                </div>
                <div className="sap-list">
                  {integrationItems.map((item) => (
                    <div key={item.name} className="sap-list__item">
                      <div className="sap-list__row">
                        <p className="sap-list__title">{item.name}</p>
                        <span className="sap-pill">{item.status}</span>
                      </div>
                      <p className="sap-list__meta">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="sap-card">
                <div className="sap-card__header">
                  <div>
                    <p className="sap-card__eyebrow">Orquestração</p>
                    <h3 className="sap-card__title">Fluxos de Automação</h3>
                  </div>
                  <span className="sap-pill">Tempo real</span>
                </div>
                <div className="sap-flows">
                  {automationFlows.map((flow) => (
                    <div key={flow.name} className="sap-flow">
                      <div className="sap-flow__header">
                        <p className="sap-flow__title">{flow.name}</p>
                        <span className="sap-list__meta">{flow.progress}%</span>
                      </div>
                      <div className="sap-progress" aria-hidden="true">
                        <div
                          className="sap-progress__bar"
                          style={{ width: `${flow.progress}%` }}
                        />
                      </div>
                      <p className="sap-list__meta">{flow.info}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="sap-card">
                <div className="sap-card__header">
                  <div>
                    <p className="sap-card__eyebrow">Observabilidade</p>
                    <h3 className="sap-card__title">Status de Sistemas</h3>
                  </div>
                  <span className="sap-pill">Atualizado agora</span>
                </div>
                <div className="sap-list">
                  {systemStatus.map((item) => (
                    <div key={item.name} className="sap-list__item">
                      <div className="sap-list__row">
                        <p className="sap-list__title">{item.name}</p>
                        <span className={`sap-pill sap-pill--${item.variant}`}>{item.state}</span>
                      </div>
                      <p className="sap-list__meta">{item.meta}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="sap-card sap-card--span-2">
                <div className="sap-card__header">
                  <div>
                    <p className="sap-card__eyebrow">Auditoria</p>
                    <h3 className="sap-card__title">Logs recentes</h3>
                  </div>
                  <span className="sap-pill sap-pill--warning">Monitorando filas</span>
                </div>
                <div className="sap-log-list">
                  {recentLogs.map((log) => (
                    <div key={log.title} className="sap-log">
                      <div className="sap-log__row">
                        <p className="sap-log__title">{log.title}</p>
                        <span className="sap-list__meta">Concluído</span>
                      </div>
                      <p className="sap-log__meta">{log.meta}</p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}
