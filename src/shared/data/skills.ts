export type SkillLevel = "Basic" | "Intermediate" | "Advanced" | "Expert";

export type SkillNode = {
  name: string;
  level: SkillLevel;
  description: string;
  icon: string;
};

export type SkillBranch = {
  category: string;
  summary: string;
  accent: string;
  trackLabel: string;
  items: SkillNode[];
};

export const skillBranches: SkillBranch[] = [
  {
    category: "Integration",
    summary: "Orchestration, contracts, and event-driven enterprise flows.",
    accent: "rgba(61, 212, 174, 0.9)",
    trackLabel: "Core integration path",
    items: [
      {
        name: "SAP CPI",
        level: "Expert",
        description: "Design and sustain integration flows for critical business operations.",
        icon: "SC",
      },
      {
        name: "API Management",
        level: "Advanced",
        description: "Shape APIs with governance, policies, and consumer-ready contracts.",
        icon: "AP",
      },
      {
        name: "Event Mesh",
        level: "Advanced",
        description: "Connect asynchronous events across systems with reliable routing.",
        icon: "EM",
      },
    ],
  },
  {
    category: "Backend / Logic",
    summary: "Rules, transformations, and logic that keep integrations resilient.",
    accent: "rgba(93, 142, 255, 0.9)",
    trackLabel: "Execution path",
    items: [
      {
        name: "Groovy",
        level: "Advanced",
        description: "Implement custom scripts for validation, routing, and flow control.",
        icon: "GR",
      },
      {
        name: "XSLT",
        level: "Advanced",
        description: "Transform structured payloads for legacy and enterprise scenarios.",
        icon: "XS",
      },
      {
        name: "XPath",
        level: "Intermediate",
        description: "Navigate XML data for mapping, filtering, and conditional decisions.",
        icon: "XP",
      },
    ],
  },
  {
    category: "Data",
    summary: "Payload literacy across protocols, schemas, and enterprise exchange formats.",
    accent: "rgba(245, 196, 88, 0.9)",
    trackLabel: "Data contract path",
    items: [
      {
        name: "REST / SOAP",
        level: "Expert",
        description: "Work across synchronous services from modern APIs to legacy endpoints.",
        icon: "RS",
      },
      {
        name: "OData",
        level: "Advanced",
        description: "Consume and expose SAP-friendly entities with predictable contracts.",
        icon: "OD",
      },
      {
        name: "JSON / XML",
        level: "Expert",
        description: "Model, inspect, and transform payload structures with confidence.",
        icon: "JX",
      },
    ],
  },
  {
    category: "Tools",
    summary: "Operational tooling for delivery, observability, and workflow speed.",
    accent: "rgba(255, 122, 136, 0.92)",
    trackLabel: "Support tool path",
    items: [
      {
        name: "Git",
        level: "Advanced",
        description: "Manage versioned delivery with practical collaboration habits.",
        icon: "GT",
      },
      {
        name: "Postman",
        level: "Advanced",
        description: "Probe endpoints, document requests, and validate contracts quickly.",
        icon: "PM",
      },
      {
        name: "Datadog",
        level: "Intermediate",
        description: "Track behavior and production signals to shorten incident feedback loops.",
        icon: "DD",
      },
      {
        name: "n8n",
        level: "Intermediate",
        description: "Accelerate automation prototypes and operational handoffs.",
        icon: "N8",
      },
    ],
  },
  {
    category: "Others",
    summary: "Adjacent capabilities that sharpen delivery and communication.",
    accent: "rgba(191, 143, 255, 0.9)",
    trackLabel: "Expansion path",
    items: [
      {
        name: "Prompt Engineering",
        level: "Advanced",
        description: "Structure prompts and flows to improve practical AI-assisted work.",
        icon: "PE",
      },
      {
        name: "Automation",
        level: "Advanced",
        description: "Reduce repetitive work by connecting systems and repeatable actions.",
        icon: "AU",
      },
    ],
  },
];
