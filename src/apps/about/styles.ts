export const aboutAppStyles = `
:host {
  color: #f5f5f5;
  font-family: "Press Start 2P", "VT323", "Courier New", monospace;
  line-height: 1.5;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: auto;
}

.about-app {
  --about-bg: #050505;
  --about-panel: #111111;
  --about-panel-alt: #0b0f0b;
  --about-border: #f5f5f5;
  --about-green: #3cff70;
  --about-yellow: #ffd54a;
  --about-blue: #5db1ff;
  --about-white: #f7f7f7;
  --about-muted: #cfcfcf;
  --about-shadow: #000000;
  display: flex;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background:
    linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 100%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 100%),
    var(--about-bg);
  background-size: 100% 4px, 4px 100%, auto;
  color: var(--about-white);
}

.about-shell {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.about-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1rem;
  border-bottom: 4px solid var(--about-border);
  background: #0e0e0e;
  color: var(--about-green);
  text-transform: uppercase;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
}

.about-topbar__title,
.about-topbar__status {
  margin: 0;
}

.about-content {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: 1rem;
}

.about-layout {
  display: grid;
  gap: 1rem;
  align-content: start;
  min-height: min-content;
}

.about-card {
  position: relative;
  border: 4px solid var(--about-border);
  background: var(--about-panel);
  box-shadow: 8px 8px 0 var(--about-shadow);
  overflow: visible;
}

.about-card::before {
  content: "";
  position: absolute;
  inset: 6px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  pointer-events: none;
}

.about-hero {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.about-avatar-panel {
  display: grid;
  gap: 0.75rem;
  align-content: start;
}

.about-avatar-frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  border: 4px solid var(--about-border);
  background:
    linear-gradient(180deg, rgba(93, 177, 255, 0.2) 0%, rgba(93, 177, 255, 0.08) 100%),
    #091019;
  image-rendering: pixelated;
}

.about-avatar-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  image-rendering: pixelated;
}

.about-avatar-fallback {
  display: grid;
  place-items: center;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  border: 4px solid var(--about-yellow);
  background:
    repeating-linear-gradient(
      0deg,
      rgba(60, 255, 112, 0.08) 0 8px,
      rgba(60, 255, 112, 0.18) 8px 16px
    ),
    #0f160f;
  color: var(--about-yellow);
  font-size: 2.4rem;
  letter-spacing: 0.14em;
}

.about-avatar-caption,
.about-block__eyebrow,
.about-list__label,
.about-story__label,
.about-footer__label {
  margin: 0;
  color: var(--about-yellow);
  text-transform: uppercase;
  font-size: 0.58rem;
  letter-spacing: 0.12em;
}

.about-avatar-caption {
  color: var(--about-blue);
}

.about-hero-body {
  display: grid;
  gap: 1rem;
  min-width: 0;
}

.about-identity {
  display: grid;
  gap: 0.65rem;
  align-content: start;
}

.about-name {
  margin: 0;
  color: var(--about-white);
  font-size: clamp(1.1rem, 2vw, 1.55rem);
  line-height: 1.35;
  text-transform: uppercase;
}

.about-role,
.about-title,
.about-description,
.about-story__body,
.about-list__value,
.about-footer__text,
.about-side-item__text {
  margin: 0;
  font-size: 0.72rem;
}

.about-role {
  color: var(--about-green);
}

.about-title {
  color: var(--about-white);
}

.about-description,
.about-story__body,
.about-footer__text {
  color: var(--about-muted);
  line-height: 1.9;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.about-stat {
  display: grid;
  gap: 0.4rem;
  padding: 0.85rem;
  border: 3px solid var(--about-border);
  background: var(--about-panel-alt);
}

.about-stat__value {
  margin: 0;
  color: var(--about-green);
  font-size: 0.72rem;
  line-height: 1.7;
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(240px, 0.8fr);
  gap: 1rem;
  align-items: start;
}

.about-panel {
  display: grid;
  gap: 0.9rem;
  padding: 1rem;
  align-content: start;
}

.about-panel__title {
  margin: 0;
  color: var(--about-white);
  font-size: 0.84rem;
  text-transform: uppercase;
}

.about-story-list,
.about-list,
.about-footer {
  display: grid;
  gap: 0.8rem;
}

.about-story-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
}

.about-story {
  display: grid;
  gap: 0.5rem;
  padding: 0.9rem;
  border: 3px solid var(--about-border);
  background: #0c0c0c;
}

.about-story__title {
  margin: 0;
  color: var(--about-blue);
  font-size: 0.76rem;
  line-height: 1.5;
  text-transform: uppercase;
}

.about-list-item {
  display: grid;
  gap: 0.4rem;
  padding: 0.8rem;
  border: 3px solid var(--about-border);
  background: var(--about-panel-alt);
  transition: background-color 80ms steps(2), color 80ms steps(2), border-color 80ms steps(2);
}

.about-list-item:hover {
  background: #18241a;
  border-color: var(--about-green);
}

.about-list-item:hover .about-list__value {
  color: var(--about-white);
}

.about-story__body,
.about-list__value,
.about-footer__text {
  overflow-wrap: anywhere;
}

.about-side-items {
  display: grid;
  gap: 0.55rem;
}

.about-side-item {
  display: grid;
  gap: 0.35rem;
  padding: 0.55rem 0.7rem;
  border: 3px solid var(--about-border);
  background: #121212;
}

.about-side-item__text {
  color: var(--about-yellow);
  line-height: 1.45;
}

.about-footer {
  padding: 1rem;
}

.about-footer__label {
  color: var(--about-green);
}

@media (max-width: 860px) {
  .about-hero,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-story-list {
    grid-template-columns: 1fr;
  }

  .about-avatar-panel {
    max-width: 260px;
  }
}

@media (max-width: 560px) {
  .about-topbar {
    align-items: flex-start;
    flex-direction: column;
    font-size: 0.55rem;
  }

  .about-content {
    padding: 0.75rem;
  }

  .about-hero,
  .about-panel,
  .about-footer {
    padding: 0.75rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .about-avatar-frame {
    min-height: 180px;
  }

  .about-name {
    font-size: 0.98rem;
  }

  .about-role,
  .about-title,
  .about-description,
  .about-story__body,
  .about-list__value,
  .about-footer__text,
  .about-side-item__text,
  .about-stat__value {
    font-size: 0.65rem;
  }
}
`;
