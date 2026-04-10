import type { TreeConnection } from "../tree-data";

function buildPath(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const controlX = x1 + dx / 2;
  const controlY = y1 + dy / 2 + dy * 0.12;

  return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
}

export function SkillConnection({ connection }: { connection: TreeConnection }) {
  const strokeWidth = connection.to.kind === "skill" ? 1.4 : 1.9;

  return (
    <path
      d={buildPath(connection.from.x, connection.from.y, connection.to.x, connection.to.y)}
      stroke="rgba(163, 172, 188, 0.18)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="none"
    />
  );
}
