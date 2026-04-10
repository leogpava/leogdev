import { SkillBranch } from "./skill-branch";
import { SkillConnection } from "./skill-connection";
import { SkillNode } from "./skill-node";
import {
  coreNode,
  skillTreeBranches,
  skillTreeCanvas,
  skillTreeConnections,
} from "../tree-data";

export function SkillTreeCanvas({ title }: { title: string }) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[#020305] text-slate-100">
      <div className="flex-1 overflow-auto">
        <div className="min-h-full min-w-full p-5 md:p-6">
          <div
            className="relative mx-auto overflow-visible rounded-[28px] border border-white/6 bg-[#020305]"
            style={{
              width: skillTreeCanvas.width,
              minWidth: skillTreeCanvas.width,
              height: skillTreeCanvas.height,
              minHeight: skillTreeCanvas.height,
            }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "72px 72px",
                  maskImage: "radial-gradient(circle at center, black 52%, transparent 92%)",
                }}
              />
            </div>

            <div className="pointer-events-none absolute left-8 top-8 max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.42em] text-slate-600">Skill tree</p>
              <h2 className="mt-3 text-[2rem] font-semibold tracking-[0.02em] text-white">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Engineering progression mapped as connected nodes around a central specialty.
              </p>
            </div>

            <div className="pointer-events-none absolute bottom-8 right-8 text-right">
              <p className="text-[10px] uppercase tracking-[0.32em] text-slate-700">
                Scroll the map
              </p>
              <p className="mt-2 text-xs text-slate-600">Hover any node to inspect depth.</p>
            </div>

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox={`0 0 ${skillTreeCanvas.width} ${skillTreeCanvas.height}`}
              fill="none"
              aria-hidden="true"
            >
              {skillTreeConnections.map((connection) => (
                <SkillConnection key={connection.id} connection={connection} />
              ))}
            </svg>

            <SkillNode node={coreNode} />
            {skillTreeBranches.map((branch) => (
              <SkillBranch key={branch.branchId} branch={branch} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
