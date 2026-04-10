export const sapAppStyles = `
:host {
  color: #223548;
  font-family: "72", "72full", "SAP Fiori", "Segoe UI", Arial, sans-serif;
  line-height: 1.4;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sap-app {
  --sap-brand: #0a6ed1;
  --sap-brand-strong: #085caf;
  --sap-page: #f5f6f7;
  --sap-shell: #f7f7f7;
  --sap-surface: #ffffff;
  --sap-surface-alt: #fafbfc;
  --sap-border: #d9d9d9;
  --sap-border-soft: #e5e5e5;
  --sap-text: #223548;
  --sap-text-soft: #475e75;
  --sap-text-muted: #6a6d70;
  --sap-heading: #1d2d3e;
  --sap-success: #256f3a;
  --sap-radius: 12px;
  --sap-space-2: 16px;
  display: flex;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--sap-page);
  color: var(--sap-text);
}

.sap-shell {
  display: grid;
  grid-template-rows: 3rem minmax(0, 1fr);
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--sap-page);
}

.sap-shellbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sap-space-2);
  min-height: 3rem;
  padding: 0 1rem;
  border-bottom: 1px solid #d1e8ff;
  background: linear-gradient(180deg, #f5faff 0%, #edf6ff 100%);
}

.sap-shellbar__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.sap-shellbar__menu {
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--sap-brand-strong);
  font-size: 1rem;
}

.sap-shellbar__logo {
  display: block;
  width: 3rem;
  height: 1.875rem;
  object-fit: contain;
  flex: none;
}

.sap-shellbar__titles {
  min-width: 0;
}

.sap-shellbar__product {
  margin: 0;
  color: var(--sap-heading);
  font-size: 0.9375rem;
  font-weight: 700;
}

.sap-shellbar__meta {
  margin: 0.125rem 0 0;
  color: var(--sap-text-muted);
  font-size: 0.75rem;
}

.sap-shellbar__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.sap-toolbar-button,
.sap-avatar-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  min-width: 2rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--sap-brand-strong);
  font: inherit;
}

.sap-toolbar-button {
  padding: 0 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.sap-toolbar-button:hover,
.sap-avatar-button:hover,
.sap-nav__item:hover,
.sap-inline-button:hover,
.sap-shellbar__menu:hover {
  background: rgba(10, 110, 209, 0.08);
}

.sap-avatar-button {
  gap: 0.5rem;
  padding: 0 0.625rem 0 0.375rem;
}

.sap-avatar-button__circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  background: #d5e9ff;
  color: var(--sap-brand-strong);
  font-size: 0.6875rem;
  font-weight: 700;
}

.sap-avatar-button__name {
  color: var(--sap-heading);
  font-size: 0.75rem;
  font-weight: 600;
}

.sap-body {
  display: grid;
  grid-template-columns: 15rem minmax(0, 1fr);
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.sap-sidebar {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: var(--sap-space-2);
  min-height: 0;
  overflow: hidden;
  padding: 1rem 0;
  border-right: 1px solid var(--sap-border-soft);
  background: var(--sap-shell);
}

.sap-sidebar__label {
  margin: 0;
  padding: 0 1rem;
  color: var(--sap-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
}

.sap-nav {
  display: grid;
  align-content: start;
  gap: 0.125rem;
  min-height: 0;
  overflow-y: auto;
  padding: 0 0.5rem;
}

.sap-nav__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  min-height: 2.75rem;
  padding: 0 0.75rem;
  border: 0;
  border-radius: 0.625rem;
  background: transparent;
  color: var(--sap-text);
  font: inherit;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
}

.sap-nav__item::before {
  content: "";
  position: absolute;
  left: 0.25rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 0.1875rem;
  border-radius: 999px;
  background: transparent;
}

.sap-nav__item--active {
  background: #ffffff;
  color: var(--sap-heading);
  font-weight: 600;
  box-shadow: inset 0 0 0 1px #ebebeb;
}

.sap-nav__item--active::before {
  background: var(--sap-brand);
}

.sap-nav__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.625rem;
  height: 1.5rem;
  margin-left: auto;
  padding: 0 0.375rem;
  border-radius: 999px;
  background: #eef0f2;
  color: var(--sap-text-soft);
  font-size: 0.6875rem;
  font-weight: 600;
}

.sap-content {
  display: grid;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: 1rem 1.5rem 1.5rem;
}

.sap-content__inner {
  display: grid;
  align-content: start;
  gap: var(--sap-space-2);
  min-height: min-content;
}

.sap-page-header {
  display: grid;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--sap-border-soft);
  border-radius: var(--sap-radius);
  background: var(--sap-surface);
}

.sap-page-header__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--sap-space-2);
}

.sap-page-header__eyebrow {
  margin: 0;
  color: var(--sap-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
}

.sap-page-header__title {
  margin: 0.25rem 0 0;
  color: var(--sap-heading);
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.2;
}

.sap-page-header__description {
  margin: 0.25rem 0 0;
  color: var(--sap-text-soft);
  font-size: 0.875rem;
  max-width: 54rem;
}

.sap-page-header__actions,
.sap-page-header__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.sap-object-status,
.sap-pill,
.sap-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  min-height: 1.75rem;
  padding: 0 0.625rem;
  border-radius: 999px;
  background: #f5f6f7;
  color: var(--sap-text-soft);
  font-size: 0.75rem;
  font-weight: 600;
}

.sap-object-status__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: currentColor;
}

.sap-object-status--success {
  background: #f1f9f3;
  color: var(--sap-success);
}

.sap-section-grid {
  display: grid;
  gap: var(--sap-space-2);
}

.sap-section-grid--two {
  grid-template-columns: minmax(0, 1.2fr) minmax(20rem, 0.8fr);
}

.sap-grid {
  display: grid;
  gap: var(--sap-space-2);
}

.sap-grid--projects,
.sap-grid--stack,
.sap-grid--architecture {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.sap-card,
.sap-kpi {
  border: 1px solid var(--sap-border-soft);
  border-radius: var(--sap-radius);
  background: var(--sap-surface);
  box-shadow: 0 0.125rem 0.375rem rgba(34, 53, 72, 0.04);
}

.sap-card {
  display: grid;
  gap: 1rem;
  min-height: 0;
  padding: 1rem 1.25rem;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.sap-card--interactive {
  border-color: var(--sap-border);
  text-align: left;
  cursor: pointer;
}

.sap-card--overview {
  align-self: stretch;
}

.sap-card--interactive:hover {
  border-color: #b8d6f4;
}

.sap-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.sap-card__eyebrow {
  margin: 0;
  color: var(--sap-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
}

.sap-card__title {
  margin: 0.25rem 0 0;
  color: var(--sap-heading);
  font-size: 1.0625rem;
  font-weight: 700;
}

.sap-company-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 9.5rem;
  max-width: 100%;
  height: 3rem;
  padding: 0;
}

.sap-company-logo--kpi {
  width: 10.5rem;
  height: 3.25rem;
  margin-top: 0.375rem;
}

.sap-company-logo--title {
  width: 11rem;
  height: 3.25rem;
}

.sap-company-logo__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sap-card__text {
  margin: 0;
  color: var(--sap-text-soft);
  font-size: 0.875rem;
  line-height: 1.55;
}

.sap-kpis {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--sap-space-2);
}

.sap-kpi {
  padding: 1rem;
}

.sap-kpi__label {
  margin: 0;
  color: var(--sap-text-muted);
  font-size: 0.75rem;
  font-weight: 600;
}

.sap-kpi__value {
  margin: 0.5rem 0 0;
  color: var(--sap-heading);
  font-size: 1.375rem;
  font-weight: 700;
}

.sap-kpi__hint {
  margin: 0.375rem 0 0;
  color: var(--sap-text-soft);
  font-size: 0.75rem;
}

.sap-list,
.sap-bullet-list {
  display: grid;
  gap: 0.75rem;
}

.sap-list__item,
.sap-bullet-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border: 1px solid var(--sap-border-soft);
  border-radius: 0.875rem;
  background: var(--sap-surface-alt);
  min-width: 0;
}

.sap-list__item--compact {
  display: grid;
  gap: 0.25rem;
}

.sap-list__title {
  margin: 0;
  color: var(--sap-heading);
  font-size: 0.875rem;
  font-weight: 600;
}

.sap-list__meta,
.sap-bullet-card p,
.sap-timeline__role {
  margin: 0;
  color: var(--sap-text-soft);
  font-size: 0.875rem;
}

.sap-bullet-card__marker {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.375rem;
  border-radius: 999px;
  background: var(--sap-brand);
  flex: none;
}

.sap-bullet-card--overview p {
  min-width: 0;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.sap-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.sap-tag {
  background: #f2f8fd;
  color: var(--sap-brand-strong);
}

.sap-timeline {
  display: grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  gap: 0.875rem;
}

.sap-timeline__line {
  position: relative;
  display: flex;
  justify-content: center;
}

.sap-timeline__line::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #c8d7e6;
}

.sap-timeline__point {
  position: relative;
  z-index: 1;
  width: 0.75rem;
  height: 0.75rem;
  margin-top: 0.25rem;
  border: 2px solid #ffffff;
  border-radius: 999px;
  background: var(--sap-brand);
  box-shadow: 0 0 0 2px #cfe5fb;
}

.sap-timeline__content {
  display: grid;
  gap: 1rem;
}

.sap-timeline__role {
  color: var(--sap-heading);
  font-size: 0.9375rem;
  font-weight: 700;
}

@media (max-width: 1080px) {
  .sap-section-grid--two,
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
    gap: 0.75rem;
    padding-top: 0.75rem;
    border-right: 0;
    border-bottom: 1px solid var(--sap-border-soft);
  }

  .sap-nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sap-content {
    padding: 1rem;
  }

  .sap-page-header__top {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .sap-shellbar {
    height: auto;
    padding: 0.75rem;
    align-items: flex-start;
  }

  .sap-shellbar__brand,
  .sap-shellbar__actions {
    width: 100%;
  }

  .sap-shellbar__actions {
    justify-content: flex-start;
  }

  .sap-nav,
  .sap-kpis,
  .sap-grid--projects,
  .sap-grid--stack,
  .sap-grid--architecture,
  .sap-section-grid--two {
    grid-template-columns: 1fr;
  }

  .sap-page-header__title {
    font-size: 1.25rem;
  }
}
`;

