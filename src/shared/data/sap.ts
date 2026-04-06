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
  { id: "overview", label: "Overview", badge: "01" },
  { id: "experience", label: "Experiencia", badge: "02" },
  { id: "projects", label: "Projetos", badge: "03" },
  { id: "stack", label: "Stack", badge: "04" },
  { id: "architecture", label: "Arquitetura", badge: "05" },
];

export const sapOverview = {
  role: "Consultor SAP Integration Suite (CPI)",
  summary:
    "Atuacao em integracoes criticas entre ERP SAP e sistemas externos, participando de definicoes tecnicas, validacao de especificacoes e sustentacao de ambientes produtivos de alta criticidade.",
  bullets: [
    "Integracoes entre ERP core SAP e sistemas externos com foco em confiabilidade operacional",
    "Participacao direta em definicao tecnica e validacao de especificacoes funcionais",
    "Atuacao em contextos enterprise com alto impacto em operacao, fiscal e dados",
  ],
  metrics: [
    { label: "Empresa atual", value: "Lab2dev", hint: "2025 - Atual" },
    { label: "Especialidade", value: "SAP CPI", hint: "Integration Suite / BTP" },
    { label: "Cenarios validados", value: "+15", hint: "Americanas / IBM" },
    { label: "Foco tecnico", value: "Enterprise", hint: "Resiliencia e observabilidade" },
  ],
};

export const sapExperience = {
  company: "Lab2dev",
  period: "2025 - Atual",
  title: "Consultor Integracao SAP",
  responsibilities: [
    "Definicao tecnica de integracoes entre SAP e sistemas externos",
    "Validacao de especificacoes funcionais e alinhamento com requisitos de negocio",
    "Atuacao em ambientes produtivos criticos com foco em integridade e continuidade operacional",
    "Desenho de fluxos de integracao entre ERP core, APIs, servicos e canais externos",
  ],
};

export const sapProjects: SapProject[] = [
  {
    id: "americanas-ibm",
    title: "Americanas / IBM",
    client: "Projeto enterprise de validacao",
    summary:
      "Atuacao na validacao de cenarios de integracao e revisao tecnica de especificacoes para garantir consistencia funcional e aderencia arquitetural.",
    highlights: [
      "Validacao de +15 cenarios de integracao",
      "Garantia de integridade de dados entre sistemas",
      "Revisao de especificacoes funcionais (EFS)",
      "Alinhamento com arquitetura enterprise",
    ],
  },
  {
    id: "assai-atacadista",
    title: "Assai Atacadista",
    client: "Implementacao end-to-end em SAP CPI",
    summary:
      "Desenvolvimento completo de integracoes fiscais com tratamento de excecoes, subprocessos de erro e transformacao de payloads para operacao robusta.",
    highlights: [
      "Desenvolvimento end-to-end em SAP CPI",
      "Integracao fiscal complexa",
      "Tratamento de excecoes e subprocessos de erro",
      "Transformacao de payloads XML/JSON",
    ],
  },
  {
    id: "datadog-observability",
    title: "Observabilidade (Datadog)",
    client: "Monitoramento proativo de interfaces",
    summary:
      "Integracao entre SAP CPI e Datadog via API para ampliar visibilidade, antecipar incidentes e acompanhar a saude operacional das interfaces.",
    highlights: [
      "Integracao SAP CPI com Datadog via API",
      "Monitoramento proativo",
      "Visibilidade da saude das interfaces",
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
    category: "Desenvolvimento e transformacao",
    items: ["Groovy", "XPath", "XSLT"],
  },
  {
    category: "Conectividade e seguranca",
    items: ["OAuth2", "SFTP", "HTTPS"],
  },
];

export const sapArchitecturePillars = [
  {
    title: "Contratos de integracao",
    description:
      "Definicao clara de payloads, responsabilidades e combinacoes de interface para evitar ambiguidades entre negocio e tecnologia.",
  },
  {
    title: "Mapeamento de payloads",
    description:
      "Transformacoes XML/JSON orientadas por consistencia semantica, compatibilidade com sistemas legados e rastreabilidade.",
  },
  {
    title: "Resiliencia",
    description:
      "Desenho com reprocessamento, desacoplamento e tratamento de falhas para suportar operacoes criticas.",
  },
  {
    title: "Tratamento de erro",
    description:
      "Subprocessos dedicados, excecoes controladas e mensagens acionaveis para reduzir tempo de analise.",
  },
  {
    title: "Governanca",
    description:
      "Aderencia a especificacoes, alinhamento com arquitetura enterprise e padronizacao dos fluxos.",
  },
  {
    title: "Observabilidade",
    description:
      "Monitoramento proativo com foco em visibilidade de saude, integridade e disponibilidade das interfaces.",
  },
];
