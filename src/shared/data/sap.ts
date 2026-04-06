export type SapSectionId =
  | "overview"
  | "experience"
  | "projects"
  | "stack"
  | "architecture";

export type SapProject = {
  id: string;
  title: string;
  client: string;
  summary: string;
  highlights: string[];
};

export const sapSections: { id: SapSectionId; label: string; badge: string }[] = [
  { id: "overview", label: "Visão geral", badge: "01" },
  { id: "experience", label: "Experiência", badge: "02" },
  { id: "projects", label: "Projetos", badge: "03" },
  { id: "stack", label: "Tecnologias", badge: "04" },
  { id: "architecture", label: "Arquitetura", badge: "05" },
];

export const sapOverview = {
  role: "Consultor SAP Integration Suite (CPI)",
  summary:
    "Atuação em integrações críticas entre ERP SAP e sistemas externos, participando de definições técnicas, validação de especificações e sustentação de ambientes produtivos de alta criticidade.",
  bullets: [
    "Integrações entre ERP core SAP e sistemas externos com foco em confiabilidade operacional",
    "Participação direta na definição técnica e na validação de especificações funcionais",
    "Atuação em contextos enterprise com alto impacto em operação, fiscal e dados",
  ],
  metrics: [
    { label: "Empresa atual", value: "Lab2dev", hint: "2025 - Atual" },
    { label: "Especialidade", value: "SAP CPI", hint: "Integration Suite / BTP" },
    { label: "Cenários validados", value: "+15", hint: "Americanas / IBM" },
    { label: "Foco técnico", value: "Enterprise", hint: "Resiliência e observabilidade" },
  ],
};

export const sapExperience = {
  company: "Lab2dev",
  period: "2025 - Atual",
  title: "Consultor de Integração SAP",
  responsibilities: [
    "Definição técnica de integrações entre SAP e sistemas externos",
    "Validação de especificações funcionais e alinhamento com requisitos de negócio",
    "Atuação em ambientes produtivos críticos com foco em integridade e continuidade operacional",
    "Desenho de fluxos de integração entre ERP core, APIs, serviços e canais externos",
  ],
};

export const sapProjects: SapProject[] = [
  {
    id: "americanas-ibm",
    title: "Americanas / IBM",
    client: "Projeto enterprise de validação",
    summary:
      "Atuação na validação de cenários de integração e revisão técnica de especificações para garantir consistência funcional e aderência arquitetural.",
    highlights: [
      "Validação de mais de 15 cenários de integração",
      "Garantia de integridade de dados entre sistemas",
      "Revisão de especificações funcionais (EFS)",
      "Alinhamento com arquitetura enterprise",
    ],
  },
  {
    id: "assai-atacadista",
    title: "Assaí Atacadista",
    client: "Implementação end-to-end em SAP CPI",
    summary:
      "Desenvolvimento completo de integrações fiscais com tratamento de exceções, subprocessos de erro e transformação de payloads para uma operação robusta.",
    highlights: [
      "Desenvolvimento end-to-end em SAP CPI",
      "Integração fiscal complexa",
      "Tratamento de exceções e subprocessos de erro",
      "Transformação de payloads XML/JSON",
    ],
  },
  {
    id: "datadog-observability",
    title: "Observabilidade (Datadog)",
    client: "Monitoramento proativo de interfaces",
    summary:
      "Integração entre SAP CPI e Datadog via API para ampliar a visibilidade, antecipar incidentes e acompanhar a saúde operacional das interfaces.",
    highlights: [
      "Integração SAP CPI com Datadog via API",
      "Monitoramento proativo",
      "Visibilidade da saúde das interfaces",
    ],
  },
];

export const sapStackGroups: { category: string; items: string[] }[] = [
  {
    category: "Plataforma SAP",
    items: ["SAP BTP", "Cloud Integration (CPI)", "API Management", "Event Mesh"],
  },
  {
    category: "Protocolos e dados",
    items: ["REST", "SOAP", "OData", "JSON", "XML"],
  },
  {
    category: "Desenvolvimento e transformação",
    items: ["Groovy", "XPath", "XSLT"],
  },
  {
    category: "Conectividade e segurança",
    items: ["OAuth2", "SFTP", "HTTPS"],
  },
];

export const sapArchitecturePillars = [
  {
    title: "Contratos de integração",
    description:
      "Definição clara de payloads, responsabilidades e combinações de interface para evitar ambiguidades entre negócio e tecnologia.",
  },
  {
    title: "Mapeamento de payloads",
    description:
      "Transformações XML/JSON orientadas por consistência semântica, compatibilidade com sistemas legados e rastreabilidade.",
  },
  {
    title: "Resiliência",
    description:
      "Desenho com reprocessamento, desacoplamento e tratamento de falhas para suportar operações críticas.",
  },
  {
    title: "Tratamento de erro",
    description:
      "Subprocessos dedicados, exceções controladas e mensagens acionáveis para reduzir o tempo de análise.",
  },
  {
    title: "Governança",
    description:
      "Aderência a especificações, alinhamento com arquitetura enterprise e padronização dos fluxos.",
  },
  {
    title: "Observabilidade",
    description:
      "Monitoramento proativo com foco em visibilidade da saúde, integridade e disponibilidade das interfaces.",
  },
];
