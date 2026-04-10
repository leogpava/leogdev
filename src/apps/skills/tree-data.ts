import { skillBranches, type SkillLevel } from "@/shared/data/skills";

export type TreeNodeKind = "core" | "branch" | "skill";

export type TreeNode = {
  id: string;
  parentId?: string;
  name: string;
  shortName: string;
  description: string;
  level: SkillLevel;
  accent: string;
  icon?: string;
  kind: TreeNodeKind;
  x: number;
  y: number;
};

export type TreeConnection = {
  id: string;
  from: TreeNode;
  to: TreeNode;
};

export type TreeBranch = {
  branchId: string;
  name: string;
  accent: string;
  hub?: TreeNode;
  skills: TreeNode[];
};

export const skillTreeCanvas = {
  width: 1560,
  height: 1020,
};

const branchAnchors: Record<
  string,
  {
    hub: { x: number; y: number };
    nodes: Array<{ x: number; y: number }>;
  }
> = {
  Integration: {
    hub: { x: 804, y: 452 },
    nodes: [
      { x: 1010, y: 320 },
      { x: 1148, y: 450 },
      { x: 1006, y: 600 },
    ],
  },
  "Backend / Logic": {
    hub: { x: 564, y: 288 },
    nodes: [
      { x: 374, y: 180 },
      { x: 234, y: 302 },
      { x: 394, y: 430 },
    ],
  },
  Data: {
    hub: { x: 566, y: 684 },
    nodes: [
      { x: 348, y: 594 },
      { x: 276, y: 764 },
      { x: 462, y: 878 },
    ],
  },
  Tools: {
    hub: { x: 946, y: 702 },
    nodes: [
      { x: 1180, y: 648 },
      { x: 1314, y: 760 },
      { x: 1124, y: 900 },
      { x: 916, y: 914 },
    ],
  },
  Others: {
    hub: { x: 1010, y: 208 },
    nodes: [
      { x: 1246, y: 126 },
      { x: 1350, y: 282 },
    ],
  },
};

export const levelOrder: SkillLevel[] = ["Basic", "Intermediate", "Advanced", "Expert"];

export const levelVisuals: Record<
  SkillLevel,
  {
    ring: string;
    label: string;
    textClass: string;
    diameter: number;
    opacity: number;
    glow: string;
  }
> = {
  Basic: {
    ring: "rgba(120, 130, 146, 0.22)",
    label: "Basic",
    textClass: "text-slate-500",
    diameter: 42,
    opacity: 0.58,
    glow: "none",
  },
  Intermediate: {
    ring: "rgba(133, 148, 168, 0.28)",
    label: "Intermediate",
    textClass: "text-slate-300",
    diameter: 48,
    opacity: 0.76,
    glow: "none",
  },
  Advanced: {
    ring: "rgba(232, 198, 122, 0.36)",
    label: "Advanced",
    textClass: "text-slate-100",
    diameter: 54,
    opacity: 0.92,
    glow: "0 0 18px rgba(232,198,122,0.08)",
  },
  Expert: {
    ring: "rgba(112, 224, 187, 0.48)",
    label: "Expert",
    textClass: "text-white",
    diameter: 62,
    opacity: 1,
    glow: "0 0 28px rgba(112,224,187,0.14)",
  },
};

export const coreNode: TreeNode = {
  id: "core",
  name: "Integration",
  shortName: "Integration",
  description: "Central specialization node and primary engineering branch for integration work.",
  level: "Expert",
  accent: "rgba(112, 224, 187, 0.9)",
  kind: "core",
  x: 804,
  y: 452,
};

export const skillTreeBranches: TreeBranch[] = skillBranches.map((branch) => {
  const anchor = branchAnchors[branch.category];
  const isIntegration = branch.category === "Integration";
  const hub = isIntegration
    ? undefined
    : {
        id: `branch-${branch.category}`,
        parentId: coreNode.id,
        name: branch.category,
        shortName: branch.category,
        description: branch.summary,
        level: "Advanced" as const,
        accent: branch.accent,
        kind: "branch" as const,
        x: anchor.hub.x,
        y: anchor.hub.y,
      };

  return {
    branchId: isIntegration ? coreNode.id : hub!.id,
    name: branch.category,
    accent: branch.accent,
    hub,
    skills: branch.items.map((item, index) => ({
      id: `${branch.category}-${item.name}`,
      parentId: isIntegration ? coreNode.id : hub!.id,
      name: item.name,
      shortName: item.name,
      description: item.description,
      level: item.level,
      accent: branch.accent,
      icon: item.icon,
      kind: "skill" as const,
      x: anchor.nodes[index]?.x ?? anchor.hub.x,
      y: anchor.nodes[index]?.y ?? anchor.hub.y,
    })),
  };
});

export const skillTreeNodes: TreeNode[] = [
  coreNode,
  ...skillTreeBranches.flatMap((branch) => (branch.hub ? [branch.hub, ...branch.skills] : branch.skills)),
];

const nodeMap = new Map(skillTreeNodes.map((node) => [node.id, node]));

export const skillTreeConnections: TreeConnection[] = skillTreeNodes
  .filter((node) => node.parentId)
  .map((node) => {
    const parent = nodeMap.get(node.parentId!);

    if (!parent) {
      return null;
    }

    return {
      id: `${parent.id}-${node.id}`,
      from: parent,
      to: node,
    };
  })
  .filter((connection): connection is TreeConnection => Boolean(connection));
