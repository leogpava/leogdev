export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectPreview = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectDecision = {
  title: string;
  context: string;
  tradeoff: string;
  outcome: string;
};

export type ProjectArchitecture = {
  summary: string;
  systemLayers: string[];
  dataFlow: string[];
  technicalChoices: string[];
};

export type ProjectOverview = {
  summary: string;
  problem: string;
  context: string;
};

export type ProjectProduct = {
  summary: string;
  previews: ProjectPreview[];
};

export type Project = {
  id: string;
  title: string;
  type: "Product" | "System";
  status: "Active" | "Experimental";
  description: string;
  stack: string[];
  stackSummary: string;
  role: string;
  overview: ProjectOverview;
  product: ProjectProduct;
  architecture: ProjectArchitecture;
  decisions: ProjectDecision[];
  links?: ProjectLink[];
};

export const personalProjects: Project[] = [
  {
    id: "flowmetrics",
    title: "FlowMetrics",
    type: "Product",
    status: "Active",
    description:
      "Workspace de triagem de saúde que transforma uma coleta curta em leitura acionável, score e retorno visual imediato.",
    stack: ["Next.js", "Supabase", "TypeScript", "Groq"],
    stackSummary: "Next.js + Supabase + TypeScript + Groq",
    role: "Produto, full stack e experiência de uso",
    overview: {
      summary:
        "FlowMetrics organiza uma avaliação de saúde em poucos minutos e devolve um retrato legível para quem está em campo ou precisa orientar a próxima ação.",
      problem:
        "A coleta de dados de saúde costuma ser lenta, dispersa e difícil de traduzir em um feedback simples para a pessoa usuária. O produto resolve isso com uma jornada curta, progressiva e orientada à decisão.",
      context:
        "O projeto nasceu da vontade de unir UX guiada, leitura de dados e resposta inteligente em um produto leve, sem depender de onboarding complexo.",
    },
    product: {
      summary:
        "A interface prioriza foco, leitura rápida e confiança. O preview destaca a entrada principal do produto, onde mensagem, CTA e atmosfera trabalham como uma única composição.",
      previews: [
        {
          src: "/projects/flowmetrics.png",
          alt: "Tela inicial do FlowMetrics",
          caption: "Landing principal com onboarding direto, atmosfera suave e CTA central.",
        },
      ],
    },
    architecture: {
      summary:
        "A estrutura foi pensada como um pipeline compacto: coleta orientada, transformação de respostas, cálculo de sinais e retorno visual claro para apoiar leitura humana.",
      systemLayers: [
        "Camada de interface guiando o preenchimento sem sobrecarga visual.",
        "Camada de processamento consolidando respostas e sinais derivados.",
        "Camada de feedback transformando o resultado em score, contexto e próximos passos.",
      ],
      dataFlow: [
        "Entrada de dados físicos e comportamentais.",
        "Normalização das respostas e agrupamento por critério.",
        "Geração de score e interpretação assistida.",
        "Entrega de retorno visual e relatório acionável.",
      ],
      technicalChoices: [
        "Fluxo orientado por etapas para reduzir abandono e manter ritmo.",
        "IA usada como camada de enriquecimento, não como artifício central de interface.",
        "Comunicação visual leve para deixar o produto acessível mesmo em contexto de uso rápido.",
      ],
    },
    decisions: [
      {
        title: "UX primeiro, diagnóstico depois",
        context:
          "Uma avaliação longa ou burocrática faria o produto parecer clínico demais e reduziria adesão.",
        tradeoff:
          "Ganhei velocidade e clareza de uso, mas precisei condensar perguntas e estruturar melhor o processamento.",
        outcome:
          "O produto comunica valor rapidamente e cria uma base mais forte para evoluir a análise.",
      },
      {
        title: "IA como suporte de leitura",
        context:
          "A camada inteligente precisava agregar interpretação sem roubar a confiança do fluxo principal.",
        tradeoff:
          "Optei por limitar protagonismo da IA e investir mais em estrutura de dados e explicabilidade.",
        outcome:
          "O resultado final fica mais técnico, mais útil e menos dependente de efeito de novidade.",
      },
      {
        title: "Atmosfera visual calma",
        context:
          "A sensação do produto precisava sugerir cuidado e fluidez, não dashboard clínico frio.",
        tradeoff:
          "A composição visual exigiu mais refinamento para manter contraste e legibilidade.",
        outcome:
          "A interface passa confiança sem parecer corporativa ou pesada.",
      },
    ],
    links: [
      {
        label: "Live",
        href: "https://flow-metrics-peach.vercel.app/",
      },
    ],
  },
  {
    id: "vocallica",
    title: "Vocallica",
    type: "System",
    status: "Experimental",
    description:
      "Sistema de operação para karaokê com fila viva, painel de chamada e leitura imediata do que está acontecendo no palco.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    stackSummary: "Next.js + TypeScript + Supabase",
    role: "Arquitetura de interface, experiência e operação",
    overview: {
      summary:
        "Vocallica transforma a fila de um karaokê em um painel operacional claro, com prioridade para timing, status e quem entra em seguida.",
      problem:
        "Em eventos ao vivo, a fila costuma ficar informal e sujeita a ruído. O sistema organiza a sequência, reduz atrito operacional e melhora a percepção de ordem.",
      context:
        "O projeto foi pensado como uma ferramenta de uso real, com linguagem visual noturna, leitura rápida e foco em estados vivos em vez de páginas estáticas.",
    },
    product: {
      summary:
        "O preview evidencia o produto como uma interface de palco: agora, próximos e status são a narrativa principal, sem depender de navegação complexa.",
      previews: [
        {
          src: "/projects/vocallica.png",
          alt: "Painel principal do Vocallica",
          caption: "Painel em tempo real com música atual, fila ativa e próximas chamadas.",
        },
      ],
    },
    architecture: {
      summary:
        "A aplicação se organiza como um sistema de fila reativa: uma fonte central de estado alimenta os painéis, mantendo sincronia entre operação e exibição.",
      systemLayers: [
        "Camada de entrada para cadastro e ordenação da fila.",
        "Camada de estado sincronizado para refletir mudanças em tempo real.",
        "Camada de exibição para o painel de chamada e contexto de palco.",
      ],
      dataFlow: [
        "Cadastro de participantes e músicas.",
        "Persistência e atualização de ordem no backend.",
        "Sincronização das alterações para os painéis conectados.",
        "Renderização imediata de quem está no palco e quem vem depois.",
      ],
      technicalChoices: [
        "Supabase como base para sincronização em tempo real com menor atrito operacional.",
        "Layout pensado como console de uso ao vivo, com elementos grandes e leitura direta.",
        "Separação entre lógica de fila e superfície visual para permitir evolução sem reescrever a experiência.",
      ],
    },
    decisions: [
      {
        title: "Interface feita para escanear, não para explorar",
        context:
          "Em uso ao vivo, a pessoa operadora precisa bater o olho e entender o estado atual sem navegar.",
        tradeoff:
          "Abri mão de mais detalhes em tela para garantir ritmo e leitura imediata.",
        outcome:
          "O produto funciona melhor como ferramenta operacional e comunica prioridade com clareza.",
      },
      {
        title: "Estado em tempo real como fundamento",
        context:
          "Fila de karaokê perde valor rápido se a informação atrasa alguns segundos ou depende de refresh.",
        tradeoff:
          "A arquitetura exige mais cuidado com persistência e consistência de eventos.",
        outcome:
          "A experiência final se comporta como sistema vivo, não como CRUD estilizado.",
      },
      {
        title: "Visual noturno com contraste controlado",
        context:
          "A identidade precisava conversar com palco e evento ao vivo sem cair em glow excessivo.",
        tradeoff:
          "Trabalhei com uma paleta curta e pouca cor de destaque, o que exige disciplina forte de hierarquia.",
        outcome:
          "A interface parece ferramenta real de operação e ainda preserva personalidade própria.",
      },
    ],
    links: [
      {
        label: "Live",
        href: "https://vocallica.vercel.app/",
      },
    ],
  },
];
