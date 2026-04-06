export const sapAppStyles = `
:host {
  color: #1f2a37;
  font-family: "Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.4;
}

.sap-app {
  --sap-bg: #f5f7fa;
  --sap-surface: #ffffff;
  --sap-surface-muted: #edf3f8;
  --sap-border: #d7e3ef;
  --sap-border-strong: #c3d3e4;
  --sap-text: #243447;
  --sap-text-muted: #5f7488;
  --sap-title: #13263a;
  --sap-primary: #0a6ed1;
  --sap-primary-soft: #e9f3fe;
  --sap-success: #188145;
  --sap-warning: #b95f00;
  --sap-danger: #bb0000;
  display: flex;
  height: 100%;
  min-height: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(245, 247, 250, 0.92)),
    linear-gradient(135deg, #f9fbfd 0%, #eef3f7 100%);
  color: var(--sap-text);
}

.sap-shell {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  width: 100%;
  min-height: 0;
}

.sap-shellbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 24px;
  border-bottom: 1px solid var(--sap-border);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 248, 252, 0.98));
}

.sap-shellbar__title {
  min-width: 0;
}

.sap-shellbar__eyebrow {
  margin: 0 0 4px;
  color: var(--sap-primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.sap-shellbar__heading {
  margin: 0;
  color: var(--sap-title);
  font-size: 24px;
  font-weight: 700;
}

.sap-shellbar__meta {
  margin: 6px 0 0;
  color: var(--sap-text-muted);
  font-size: 13px;
}

.sap-shellbar__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sap-icon-button,
.sap-user-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--sap-border);
  background: var(--sap-surface);
  color: var(--sap-text);
  box-shadow: 0 6px 18px rgba(20, 42, 63, 0.06);
}

.sap-icon-button {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}

.sap-user-pill {
  gap: 10px;
  padding: 0 12px;
  height: 40px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.sap-user-pill__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: var(--sap-primary-soft);
  color: var(--sap-primary);
  font-size: 11px;
}

.sap-body {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  min-height: 0;
}

.sap-sidebar {
  padding: 22px 16px 24px;
  border-right: 1px solid var(--sap-border);
  background: rgba(248, 250, 252, 0.82);
}

.sap-sidebar__label {
  margin: 0 0 12px;
  color: var(--sap-text-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.sap-nav {
  display: grid;
  gap: 8px;
}

.sap-nav__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  color: var(--sap-text);
  font-size: 14px;
  font-weight: 600;
  background: transparent;
}

.sap-nav__item--active {
  background: var(--sap-primary-soft);
  color: var(--sap-primary);
}

.sap-nav__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  margin-left: auto;
  border-radius: 999px;
  background: rgba(10, 110, 209, 0.1);
  color: var(--sap-primary);
  font-size: 11px;
  font-weight: 700;
}

.sap-content {
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
  gap: 18px;
  min-height: 0;
  padding: 22px 24px 24px;
}

.sap-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  border: 1px solid var(--sap-border);
  border-radius: 22px;
  background: linear-gradient(135deg, #ffffff 0%, #f4f8fb 100%);
  box-shadow: 0 12px 32px rgba(21, 44, 66, 0.08);
}

.sap-banner__title {
  margin: 0;
  color: var(--sap-title);
  font-size: 18px;
  font-weight: 700;
}

.sap-banner__text {
  margin: 6px 0 0;
  color: var(--sap-text-muted);
  font-size: 13px;
}

.sap-banner__status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: #eefaf2;
  color: var(--sap-success);
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.sap-banner__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
}

.sap-kpis {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.sap-kpi {
  padding: 16px 18px;
  border: 1px solid var(--sap-border);
  border-radius: 18px;
  background: var(--sap-surface);
  box-shadow: 0 10px 28px rgba(19, 39, 58, 0.05);
}

.sap-kpi__label {
  margin: 0 0 10px;
  color: var(--sap-text-muted);
  font-size: 12px;
  font-weight: 600;
}

.sap-kpi__value {
  margin: 0;
  color: var(--sap-title);
  font-size: 24px;
  font-weight: 700;
}

.sap-kpi__hint {
  margin: 8px 0 0;
  color: var(--sap-text-muted);
  font-size: 12px;
}

.sap-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  min-height: 0;
}

.sap-card {
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 20px;
  border: 1px solid var(--sap-border);
  border-radius: 22px;
  background: var(--sap-surface);
  box-shadow: 0 14px 34px rgba(17, 36, 54, 0.06);
}

.sap-card--span-2 {
  grid-column: span 2;
}

.sap-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.sap-card__eyebrow {
  margin: 0 0 6px;
  color: var(--sap-text-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.sap-card__title {
  margin: 0;
  color: var(--sap-title);
  font-size: 18px;
  font-weight: 700;
}

.sap-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--sap-surface-muted);
  color: var(--sap-text);
  font-size: 12px;
  font-weight: 700;
}

.sap-pill--success {
  background: #eefaf2;
  color: var(--sap-success);
}

.sap-pill--warning {
  background: #fff4e7;
  color: var(--sap-warning);
}

.sap-pill--danger {
  background: #fff0f0;
  color: var(--sap-danger);
}

.sap-list,
.sap-log-list {
  display: grid;
  gap: 12px;
}

.sap-list__item,
.sap-log {
  display: grid;
  gap: 6px;
  padding: 14px 16px;
  border: 1px solid var(--sap-border);
  border-radius: 16px;
  background: #fbfcfe;
}

.sap-list__row,
.sap-log__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.sap-list__title,
.sap-log__title {
  margin: 0;
  color: var(--sap-title);
  font-size: 14px;
  font-weight: 700;
}

.sap-list__meta,
.sap-log__meta {
  margin: 0;
  color: var(--sap-text-muted);
  font-size: 12px;
}

.sap-flows {
  display: grid;
  gap: 14px;
}

.sap-flow {
  display: grid;
  gap: 10px;
}

.sap-flow__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.sap-flow__title {
  margin: 0;
  color: var(--sap-title);
  font-size: 14px;
  font-weight: 700;
}

.sap-progress {
  overflow: hidden;
  height: 10px;
  border-radius: 999px;
  background: #e8eef5;
}

.sap-progress__bar {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #0a6ed1, #3da5ff);
}

.sap-log-list {
  overflow: auto;
  min-height: 0;
}

@media (max-width: 1080px) {
  .sap-kpis {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .sap-body {
    grid-template-columns: 1fr;
  }

  .sap-sidebar {
    display: none;
  }

  .sap-content {
    padding: 18px;
  }

  .sap-shellbar {
    padding: 16px 18px;
    flex-wrap: wrap;
  }

  .sap-grid {
    grid-template-columns: 1fr;
  }

  .sap-card--span-2 {
    grid-column: auto;
  }

  .sap-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .sap-kpis {
    grid-template-columns: 1fr;
  }

  .sap-shellbar__heading {
    font-size: 21px;
  }

  .sap-shellbar__actions {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
`;
