export const contactAppStyles = `
:host {
  color: #f3ffe8;
  font-family: "Press Start 2P", "VT323", "Courier New", monospace;
  line-height: 1.4;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: auto;
}

.contact-app {
  --contact-bg: #050806;
  --contact-text: #efffe6;
  --contact-dim: #8bbd94;
  --contact-accent: #7bffa9;
  --contact-accent-strong: #d9ff68;
  --contact-selection: rgba(123, 255, 169, 0.14);
  --contact-selection-strong: rgba(123, 255, 169, 0.28);
  display: grid;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background:
    linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 100%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 100%),
    var(--contact-bg);
  background-size: 100% 3px, 3px 100%, auto;
  color: var(--contact-text);
}

.contact-screen {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 1.5rem;
  min-height: 0;
  padding: 1.2rem 1.35rem 1rem;
  outline: none;
}

.contact-hud,
.contact-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--contact-dim);
  font-size: 0.55rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-hud__title,
.contact-hud__status,
.contact-footer__hint,
.contact-footer__message {
  margin: 0;
}

.contact-menu-wrap {
  display: grid;
  align-content: center;
  min-height: 0;
  padding-inline: clamp(0rem, 4vw, 2.2rem);
}

.contact-menu {
  display: grid;
  gap: clamp(1.1rem, 4vh, 2rem);
  align-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-menu__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  min-height: 2.8rem;
  padding: 0.55rem 0.8rem 0.55rem 2.8rem;
  border: 0;
  background: transparent;
  color: var(--contact-text);
  cursor: pointer;
  font: inherit;
  font-size: clamp(1rem, 2vw, 1.45rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    color 90ms steps(2),
    background-color 90ms steps(2),
    transform 90ms steps(2);
  user-select: none;
}

.contact-menu__item::before {
  content: ">";
  position: absolute;
  left: 0.85rem;
  top: 50%;
  color: transparent;
  transform: translateY(-50%);
}

.contact-menu__item::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: transparent;
  transition: background-color 90ms steps(2);
}

.contact-menu__item:hover {
  color: var(--contact-accent);
}

.contact-menu__item.is-selected {
  color: var(--contact-accent-strong);
  transform: translateX(0.35rem);
}

.contact-menu__item.is-selected::before {
  color: var(--contact-accent-strong);
  animation: contact-blink 0.95s steps(2, end) infinite;
}

.contact-menu__item.is-selected::after {
  background:
    linear-gradient(90deg, var(--contact-selection-strong) 0 18%, var(--contact-selection) 18% 100%);
}

.contact-footer__message {
  color: var(--contact-accent);
}

.contact-footer__message.is-success {
  color: var(--contact-accent-strong);
}

@keyframes contact-blink {
  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

@media (max-width: 640px) {
  .contact-screen {
    gap: 1.1rem;
    padding: 1rem 0.95rem 0.85rem;
  }

  .contact-hud,
  .contact-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
    font-size: 0.48rem;
  }

  .contact-menu-wrap {
    padding-inline: 0;
  }

  .contact-menu__item {
    min-height: 2.4rem;
    padding-left: 2.3rem;
    font-size: 0.92rem;
  }
}
`;
