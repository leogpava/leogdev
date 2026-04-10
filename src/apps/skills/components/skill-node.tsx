import { levelVisuals, type TreeNode } from "../tree-data";

function getNodeDiameter(node: TreeNode) {
  if (node.kind === "core") {
    return 104;
  }

  if (node.kind === "branch") {
    return 72;
  }

  return levelVisuals[node.level].diameter;
}

function getNodeStyles(node: TreeNode) {
  const visuals = levelVisuals[node.level];

  if (node.kind === "core") {
    return {
      borderColor: "rgba(112, 224, 187, 0.46)",
      background: "#07110f",
      boxShadow: "0 0 0 1px rgba(112,224,187,0.12), 0 0 34px rgba(112,224,187,0.12)",
      opacity: 1,
    };
  }

  if (node.kind === "branch") {
    return {
      borderColor: "rgba(255,255,255,0.14)",
      background: "#090d14",
      boxShadow: "none",
      opacity: 0.96,
    };
  }

  return {
    borderColor: visuals.ring,
    background: "#070a10",
    boxShadow: visuals.glow,
    opacity: visuals.opacity,
  };
}

export function SkillNode({ node }: { node: TreeNode }) {
  const diameter = getNodeDiameter(node);
  const visuals = levelVisuals[node.level];
  const styles = getNodeStyles(node);

  return (
    <div
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: node.x,
        top: node.y,
        zIndex: node.kind === "core" ? 30 : node.kind === "branch" ? 20 : 10,
      }}
    >
      <div className="relative flex flex-col items-center">
        <div
          className="relative flex items-center justify-center rounded-full border transition duration-200 ease-out group-hover:scale-[1.05]"
          style={{
            width: diameter,
            height: diameter,
            borderColor: styles.borderColor,
            background: styles.background,
            boxShadow: styles.boxShadow,
            opacity: styles.opacity,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100"
            style={{
              boxShadow:
                node.kind === "skill"
                  ? "0 0 0 1px rgba(255,255,255,0.08)"
                  : "0 0 0 1px rgba(255,255,255,0.12)",
            }}
          />

          {node.kind === "core" ? (
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.36em] text-emerald-200/70">
                Expert path
              </span>
              <span className="mt-1 text-center text-sm font-semibold tracking-[0.08em] text-white">
                {node.shortName}
              </span>
            </div>
          ) : node.kind === "branch" ? (
            <span className="px-2 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-100">
              {node.shortName}
            </span>
          ) : (
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-100">
              {node.icon}
            </span>
          )}
        </div>

        {node.kind === "skill" ? (
          <span className={`mt-3 max-w-24 text-center text-[11px] leading-4 ${visuals.textClass}`}>
            {node.shortName}
          </span>
        ) : node.kind === "branch" ? (
          <span className="mt-3 text-[10px] uppercase tracking-[0.24em] text-slate-600">
            branch
          </span>
        ) : (
          <span className="mt-3 text-[10px] uppercase tracking-[0.26em] text-emerald-200/60">
            core specialization
          </span>
        )}

        <div className="pointer-events-none absolute left-1/2 top-full z-40 mt-4 w-52 -translate-x-1/2 rounded-2xl border border-white/8 bg-[#06090f] px-3 py-3 opacity-0 shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition duration-150 group-hover:opacity-100">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200">
            {node.name}
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-400">{node.description}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-slate-600">
            {visuals.label}
          </p>
        </div>
      </div>
    </div>
  );
}
