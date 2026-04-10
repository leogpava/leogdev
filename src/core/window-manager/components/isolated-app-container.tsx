"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

import type { AppIsolationMode } from "@/shared/types/app";

const BASE_SHADOW_STYLES = `
:host {
  all: initial;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  contain: layout style paint;
}

[data-isolated-app-root] {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

[data-isolated-app-root] > * {
  flex: 1 1 auto;
  min-height: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

button,
input,
textarea,
select {
  font: inherit;
}
`;

type IsolatedAppContainerProps = {
  isolation: AppIsolationMode;
  styleText?: string;
  children: ReactNode;
};

export function IsolatedAppContainer({
  isolation,
  styleText,
  children,
}: IsolatedAppContainerProps) {
  if (isolation === "shadow") {
    return <ShadowAppContainer styleText={styleText}>{children}</ShadowAppContainer>;
  }

  return <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">{children}</div>;
}

type ShadowAppContainerProps = {
  styleText?: string;
  children: ReactNode;
};

function ShadowAppContainer({ styleText, children }: ShadowAppContainerProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    if (!hostRef.current || shadowRoot) {
      return;
    }

    const nextShadowRoot =
      hostRef.current.shadowRoot ?? hostRef.current.attachShadow({ mode: "open" });

    setShadowRoot(nextShadowRoot);
  }, [shadowRoot]);

  const portalRoot = useMemo(() => {
    if (!shadowRoot) {
      return null;
    }

    let mountNode = shadowRoot.querySelector<HTMLDivElement>("[data-isolated-app-root]");

    if (!mountNode) {
      mountNode = document.createElement("div");
      mountNode.setAttribute("data-isolated-app-root", "true");
      shadowRoot.append(mountNode);
    }

    return mountNode;
  }, [shadowRoot]);

  useEffect(() => {
    if (!shadowRoot) {
      return;
    }

    let styleElement = shadowRoot.querySelector<HTMLStyleElement>("[data-isolated-app-styles]");

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.setAttribute("data-isolated-app-styles", "true");
      shadowRoot.prepend(styleElement);
    }

    styleElement.textContent = [BASE_SHADOW_STYLES, styleText].filter(Boolean).join("\n");
  }, [shadowRoot, styleText]);

  return (
    <div ref={hostRef} className="flex h-full min-h-0 w-full flex-col overflow-hidden">
      {portalRoot ? createPortal(children, portalRoot) : null}
    </div>
  );
}
