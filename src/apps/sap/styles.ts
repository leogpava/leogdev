export const sapAppStyles = `
:host {
  color: #1f2a37;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.45;
}

.sap-app {
  --sap-surface: #ffffff;
  --sap-surface-muted: #f3f7fb;
  --sap-border: #d6e3ef;
  --sap-text: #243447;
  --sap-text-muted: #607486;
  --sap-title: #13263a;
  --sap-primary: #0a6ed1;
  --sap-primary-soft: #eaf3fd;
  --sap-success: #1b8a4c;
  display: flex;
  height: 100%;
  min-height: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(244, 248, 252, 0.96)),
    linear-gradient(135deg, #f8fbfe 0%, #eaf1f7 100%);
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
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(246, 250, 253, 0.98));
}

.sap-shellbar__title {
  min-width: 0;
}

.sap-shellbar__eyebrow,
.sap-sidebar__label,
.sap-card__eyebrow,
.sap-banner__eyebrow {
  margin: 0 0 6px;
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

.sap-shellbar__meta,
.sap-banner__text,
.sap-card__text,
.sap-kpi__hint,
.sap-list__title,
.sap-timeline__role,
.sap-bullet-card p {
  margin: 0;
  color: var(--sap-text-muted);
}

.sap-shellbar__meta {
  margin-top: 6px;
  font-size: 13px;
}

.sap-shellbar__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.sap-icon-button,
.sap-user-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--sap-border);
  background: var(--sap-surface);
  color: var(--sap-text);
  box-shadow: 0 8px 22px rgba(20, 42, 63, 0.06);
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

.sap-icon-button {
  min-width: 44px;
  height: 38px;
  padding: 0 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}

.sap-icon-button:hover,
.sap-user-pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(20, 42, 63, 0.1);
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
  background: rgba(249, 251, 253, 0.82);
}

.sap-sidebar__label {
  color: var(--sap-text-muted);
}

.sap-nav {
  display: grid;
  gap: 8px;
}

.sap-nav__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: var(--sap-text);
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.sap-nav__item:hover {
  background: rgba(10, 110, 209, 0.08);
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
  gap: 18px;
  min-height: 0;
  overflow-y: auto;
  padding: 22px 24px 24px;
}

.sap-banner,
.sap-card,
.sap-kpi {
  border: 1px solid var(--sap-border);
  background: var(--sap-surface);
  box-shadow: 0 12px 32px rgba(18, 40, 60, 0.06);
}

.sap-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  border-radius: 22px;
}

.sap-banner__title,
.sap-card__title,
.sap-kpi__value {
  margin: 0;
  color: var(--sap-title);
}

.sap-banner__title {
  font-size: 20px;
  font-weight: 700;
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

.sap-banner__status-dot,
.sap-bullet-card__marker,
.sap-timeline__point {
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
  border-radius: 18px;
}

.sap-kpi__label {
  margin: 0 0 10px;
  color: var(--sap-text-muted);
  font-size: 12px;
  font-weight: 600;
}

.sap-kpi__value {
  font-size: 24px;
  font-weight: 700;
}

.sap-kpi__hint {
  margin-top: 8px;
  font-size: 12px;
}

.sap-grid {
  display: grid;
  gap: 16px;
}

.sap-grid--projects,
.sap-grid--stack,
.sap-grid--architecture {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.sap-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
  padding: 20px;
  border-radius: 22px;
}

.sap-card--interactive {
  text-align: left;
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.sap-card--interactive:hover {
  transform: translateY(-2px);
  border-color: rgba(10, 110, 209, 0.3);
  box-shadow: 0 18px 36px rgba(18, 40, 60, 0.1);
}

.sap-card--full {
  width: 100%;
}

.sap-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.sap-card__title {
  font-size: 18px;
  font-weight: 700;
}

.sap-card__text {
  font-size: 14px;
  line-height: 1.7;
}

.sap-pill,
.sap-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--sap-surface-muted);
  color: var(--sap-text);
  font-size: 12px;
  font-weight: 700;
}

.sap-inline-button {
  border: 1px solid var(--sap-border);
  background: var(--sap-surface-muted);
  color: var(--sap-text);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 700;
  transition: background-color 160ms ease, border-color 160ms ease;
}

.sap-inline-button:hover {
  background: #edf4fb;
  border-color: #bfd5ea;
}

.sap-pill--success {
  background: #eefaf2;
  color: var(--sap-success);
}

.sap-list,
.sap-bullet-list {
  display: grid;
  gap: 12px;
}

.sap-list__item,
.sap-bullet-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--sap-border);
  border-radius: 16px;
  background: #fbfcfe;
}

.sap-list__title {
  color: var(--sap-title);
  font-size: 14px;
  font-weight: 600;
}

.sap-bullet-card {
  color: var(--sap-primary);
}

.sap-bullet-card p {
  color: var(--sap-text);
  font-size: 14px;
  line-height: 1.7;
}

.sap-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sap-tag {
  background: var(--sap-primary-soft);
  color: var(--sap-primary);
}

.sap-timeline {
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
}

.sap-timeline__point {
  margin-top: 8px;
  color: var(--sap-primary);
  box-shadow: 0 0 0 6px rgba(10, 110, 209, 0.12);
}

.sap-timeline__content {
  display: grid;
  gap: 16px;
}

.sap-timeline__role {
  color: var(--sap-title);
  font-size: 16px;
  font-weight: 700;
}

@media (max-width: 1080px) {
  .sap-kpis,
  .sap-grid--projects,
  .sap-grid--stack,
  .sap-grid--architecture {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .sap-body {
    grid-template-columns: 1fr;
  }

  .sap-sidebar {
    border-right: 0;
    border-bottom: 1px solid var(--sap-border);
  }

  .sap-nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sap-shellbar {
    padding: 16px 18px;
  }

  .sap-content {
    padding: 18px;
  }

  .sap-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .sap-nav,
  .sap-kpis,
  .sap-grid--projects,
  .sap-grid--stack,
  .sap-grid--architecture {
    grid-template-columns: 1fr;
  }

  .sap-shellbar__heading {
    font-size: 21px;
  }

  .sap-shellbar__actions {
    width: 100%;
    justify-content: flex-start;
  }
}
`;
