"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import type { AppComponentProps } from "@/shared/types/app";

function openExternalLink(url: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.referrerPolicy = "no-referrer";
  anchor.style.display = "none";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
}

const CONTACT_MENU_ITEMS = [
  {
    id: "github",
    label: "GitHub",
    action: () => openExternalLink("https://github.com/leogpava"),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    action: () => openExternalLink("https://www.linkedin.com/in/leopavanelli/"),
  },
  {
    id: "email",
    label: "Email",
    action: async () => {
      try {
        await navigator.clipboard.writeText("leonardogpavanelli@gmail.com");
        return "COPIED!";
      } catch {
        globalThis.location.href = "mailto:leonardogpavanelli@gmail.com";
        return "MAILTO OPENED";
      }
    },
  },
] as const;

export function ContactApp({ window }: AppComponentProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const clearMessageTimeoutRef = useRef<ReturnType<typeof globalThis.setTimeout> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [message, setMessage] = useState("PRESS ENTER");

  const setTemporaryMessage = (nextMessage: string) => {
    setMessage(nextMessage);

    if (clearMessageTimeoutRef.current) {
      globalThis.clearTimeout(clearMessageTimeoutRef.current);
    }

    clearMessageTimeoutRef.current = globalThis.setTimeout(() => {
      setMessage("PRESS ENTER");
      clearMessageTimeoutRef.current = null;
    }, 1600);
  };

  const triggerSelection = async (index: number) => {
    const item = CONTACT_MENU_ITEMS[index];
    const result = await item.action();

    if (typeof result === "string") {
      setTemporaryMessage(result);
      return;
    }

    setMessage(`OPENING ${item.label.toUpperCase()}`);
  };

  useEffect(() => {
    rootRef.current?.focus();

    return () => {
      if (clearMessageTimeoutRef.current) {
        globalThis.clearTimeout(clearMessageTimeoutRef.current);
      }
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((current) =>
        current === 0 ? CONTACT_MENU_ITEMS.length - 1 : current - 1
      );
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((current) =>
        current === CONTACT_MENU_ITEMS.length - 1 ? 0 : current + 1
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      void triggerSelection(selectedIndex);
    }
  };

  return (
    <section className="contact-app">
      <section
        ref={rootRef}
        className="contact-screen"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label={`${window.title} game menu`}
      >
        <header className="contact-hud" aria-hidden="true">
          <p className="contact-hud__title">CONTACT.EXE</p>
          <p className="contact-hud__status">SELECT CHANNEL</p>
        </header>

        <div className="contact-menu-wrap">
          <ul className="contact-menu" role="menu" aria-label="Contact actions">
            {CONTACT_MENU_ITEMS.map((item, index) => (
              <li
                key={item.id}
                role="menuitem"
                aria-selected={selectedIndex === index}
                className={`contact-menu__item${selectedIndex === index ? " is-selected" : ""}`}
                onMouseMove={() => setSelectedIndex(index)}
                onClick={() => {
                  setSelectedIndex(index);
                  void triggerSelection(index);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <footer className="contact-footer">
          <p className="contact-footer__hint">UP/DOWN TO MOVE - ENTER TO SELECT</p>
          <p
            className={`contact-footer__message${message === "COPIED!" ? " is-success" : ""}`}
            aria-live="polite"
          >
            {message}
          </p>
        </footer>
      </section>
    </section>
  );
}
