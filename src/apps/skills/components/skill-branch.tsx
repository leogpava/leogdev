import { SkillNode } from "./skill-node";
import type { TreeBranch } from "../tree-data";

export function SkillBranch({ branch }: { branch: TreeBranch }) {
  return (
    <>
      {branch.hub ? <SkillNode node={branch.hub} /> : null}
      {branch.skills.map((node) => (
        <SkillNode key={node.id} node={node} />
      ))}
    </>
  );
}
