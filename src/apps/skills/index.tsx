import { SkillTreeCanvas } from "./components/skill-tree-canvas";
import type { AppComponentProps } from "@/shared/types/app";

export function SkillsApp({ window }: AppComponentProps) {
  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden">
      <SkillTreeCanvas title={window.title} />
    </section>
  );
}
