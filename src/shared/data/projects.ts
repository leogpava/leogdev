export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  architecture: string;
  role: string;
};

export const personalProjects: Project[] = [
  {
    id: "flowmetrics",
    title: "FlowMetrics",
    description:
      "Webapp de analise de saude com coleta de dados fisicos e geracao de relatorios inteligentes com IA.",
    stack: ["React", "IA", "Web App", "UX"],
    role: "Full-stack / UX / Produto",
    architecture: "Coleta de dados -> processamento -> geracao de score -> feedback visual",
    highlights: [
      "Experiencia gamificada para engajamento",
      "Geracao de relatorios com IA",
      "Pensado para uso em campo",
    ],
  },
  {
    id: "vocallica",
    title: "Vocallica",
    description:
      "Sistema de gerenciamento de karaoke com fila dinamica e dashboard em tempo real.",
    stack: ["Next.js", "Supabase", "UI/UX"],
    role: "Frontend + Arquitetura",
    architecture: "Fila reativa + painel administrativo + controle de estado",
    highlights: [
      "Sistema de fila em tempo real",
      "Dashboard administrativo",
      "UX para eventos ao vivo",
    ],
  },
];
