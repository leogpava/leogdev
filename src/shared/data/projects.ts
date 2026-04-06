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
      "Aplicação web de análise de saúde com coleta de dados físicos e geração de relatórios inteligentes com IA.",
    stack: ["React", "IA", "Web App", "UX"],
    role: "Full-stack / UX / Produto",
    architecture: "Coleta de dados -> processamento -> geração de score -> feedback visual",
    highlights: [
      "Experiência gamificada para engajamento",
      "Geração de relatórios com IA",
      "Pensado para uso em campo",
    ],
  },
  {
    id: "vocallica",
    title: "Vocallica",
    description:
      "Sistema de gerenciamento de karaokê com fila dinâmica e painel em tempo real.",
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
