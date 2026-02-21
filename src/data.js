export const INIT = {
  personal: {
    name: "Manish Bharti",
    title: "Senior Software Engineer",
    email: "manishbharti.work@gmail.com",
    phone: "+91 9955262206",
    location: "Bengaluru, India, 560038",
    portfolio: 'https://manishbharti.in',
    links: [
    //   {
    //     id: "l1",
    //     label: "Website",
    //     text: "manishbharti.in",
    //     url: "https://manishbharti.in",
    //     visible: true,
    //   },
      {
        id: "l2",
        label: "LinkedIn",
        text: "https://linkedin.com/in/manish-bharti",
        url: "https://linkedin.com/in/manish-bharti",
        visible: true,
      },
      {
        id: "l3",
        label: "GitHub",
        text: "https://github.com/mbharti321",
        url: "https://github.com/mbharti321",
        visible: true,
      },
    ],
  },
  sections: [
    {
      id: "profile",
      title: "Profile Summary",
      type: "text",
      visible: true,
      content:
        "Software Engineer with 4+ years of experience building scalable backend and GenAI systems using Python, FastAPI, .NET, SQL, and Azure cloud. Proven experience delivering production-grade APIs, event-driven pipelines, and RAG-based AI platforms. Strong focus on performance, reliability, and cost optimization; experience collaborating across backend, AI, and frontend layers to deliver end-to-end production systems in high-volume logistics environments.",
    },
    {
      id: "skills",
      title: "Skills",
      type: "skills",
      visible: true,
      items: [
        {
          id: "sk1",
          label: "Programming Languages",
          value: "Python, C#, JavaScript",
          visible: true,
        },
        {
          id: "sk2",
          label: "Backend Development",
          value:
            "FastAPI, .NET, SQL, REST APIs, Microservices, Redis, SQLAlchemy, OOP",
          visible: true,
        },
        {
          id: "sk3",
          label: "AI / GenAI",
          value:
            "RAG, Vector DB, LLMs, Azure AI Search, LangChain, Agentic AI",
          visible: true,
        },
        {
          id: "sk4",
          label: "Cloud & Data",
          value:
            "Azure: Function App, ServiceBus, EventHub, Storage Account, AppConfig; AWS Foundations",
          visible: true,
        },
        {
          id: "sk5",
          label: "DevOps & Monitoring",
          value:
            "Azure DevOps, CI/CD, Pipelines, GitHub, Application Insights, Opsgenie",
          visible: true,
        },
        {
          id: "sk6",
          label: "Frontend Development",
          value: "JavaScript, React, TypeScript, HTML, CSS",
          visible: true,
        },
        {
          id: "sk7",
          label: "Tools",
          value: "Jira, Git, Linux, Azure Synapse, PySpark, Postman",
          visible: true,
        },
      ],
    },
    {
      id: "exp",
      title: "Work Experience",
      type: "experience",
      visible: true,
      items: [
        {
          id: "e1",
          title: "Senior Software Engineer",
          company: "Corestrat (Client: ACI Logistix, a logistics firm)",
          companyUrl: "",
          startDate: "Sep 2025",
          endDate: "Present",
          location: "Bengaluru",
          visible: true,
          bullets: [
            {
              id: "b1",
              text: "Delivered a production Agentic-AI chatbot (ParcelAtlas) for logistics use cases, achieving 75% CSAT.",
              visible: true,
            },
            {
              id: "b2",
              text: "Built an in-house Non-Conveyable Scan facility, replacing a third-party tool, saving ~10% in revenue, and improving data visibility.",
              visible: true,
            },
            {
              id: "b3",
              text: "Fixed duplicate order failures for 5+ carriers, clearing 1,000+ packages from the daily DLQs and stabilizing downstream workflows.",
              visible: true,
            },
            {
              id: "b4",
              text: "Built and enhanced backend services and APIs supporting high-volume logistics operations processing 50K+ packages per day.",
              visible: true,
            },
          ],
        },
        {
          id: "e2",
          title: "Software Engineer",
          company: "Corestrat (Client: ACI Logistix, a logistics firm)",
          companyUrl: "",
          startDate: "Sep 2022",
          endDate: "Aug 2025",
          location: "Bengaluru",
          visible: true,
          bullets: [
            {
              id: "b5",
              text: "Built InfoBridge AI, a RAG-based chatbot for enterprise knowledge management using LLMs (GPT-4o). Reducing information lookup time by 70%.",
              visible: true,
            },
            {
              id: "b6",
              text: "Built a robust CI/CD workflow for SQL DB objects, ensuring full version control and reliable production deployments.",
              visible: true,
            },
            {
              id: "b7",
              text: "Designed and owned production-grade REST APIs for carrier overage webhooks, automating package handling and order creation, reducing manual intervention.",
              visible: true,
            },
            {
              id: "b8",
              text: "Ensured 100% uptime for facility operations applications via proactive Raspberry Pi (RPi) log monitoring.",
              visible: true,
            },
            {
              id: "b9",
              text: "Implemented USPS parcel postage optimization logic (SSF Priority), contributing to a ~10% improvement in profit margin on 5000+ daily parcels.",
              visible: true,
            },
            {
              id: "b10",
              text: "Developed a webhook and event service for real-time package event flow between couriers and service providers.",
              visible: true,
            },
            {
              id: "b11",
              text: "Designed and implemented a real-time package tracking system (BST 2.0), eliminating manual tracking errors and providing instant status updates.",
              visible: true,
            },
            {
              id: "b12",
              text: "Automated Cainiao ticket processing, eliminating manual effort and reducing task completion time by 100%.",
              visible: true,
            },
          ],
        },
        {
          id: "e3",
          title: "Software Engineer Intern",
          company: "SysCloud & Telaverge Communications",
          companyUrl: "",
          startDate: "Dec 2021",
          endDate: "Aug 2022",
          location: "Bengaluru",
          visible: true,
          bullets: [
            {
              id: "b13",
              text: "Created Node.js scripts to generate test data automatically, saving 100+ hours/month of manual work.",
              visible: true,
            },
            {
              id: "b14",
              text: "Collaborated with a team of 6 members to troubleshoot and debug bugs, ensuring smooth product functioning.",
              visible: true,
            },
            {
              id: "b15",
              text: "Developed the company's official website from its inception to launch, contributing to 50% of the project's implementation.",
              visible: true,
            },
          ],
        },
      ],
    },
    {
      id: "proj",
      title: "Projects",
      type: "projects",
      visible: true,
      items: [
        {
          id: "p1",
          title: "ParcelAtlas",
          subtitle: "Agentic AI for Parcel Tracking",
          url: "",
          visible: true,
          bullets: [
            {
              id: "pb1",
              text: "Built an agentic RAG chatbot for parcel tracking, proof-of-delivery explanation, and logistics ticket workflows.",
              visible: true,
            },
            {
              id: "pb2",
              text: "Implemented tool-based reasoning, evaluation, and safety guardrails to reduce hallucinations and ensure secure usage.",
              visible: true,
            },
            {
              id: "pb3",
              text: "Delivered a production system and met latency performance benchmarks.",
              visible: true,
            },
          ],
        },
        {
          id: "p2",
          title: "Non-Conveyable Scan System",
          subtitle: "In-house Logistics Exception Handling Platform",
          url: "",
          visible: true,
          bullets: [
            {
              id: "pb4",
              text: "Built an end-to-end scanning system (UI + APIs + integrations) to manage non-conveyable shipments.",
              visible: true,
            },
            {
              id: "pb5",
              text: "Replaced a third-party tool, reducing operational cost by ~10% annually.",
              visible: true,
            },
            {
              id: "pb6",
              text: "Integrated with warehouse systems and carrier APIs for real-time tracking.",
              visible: true,
            },
            {
              id: "pb7",
              text: "Improved data visibility by ~80%.",
              visible: true,
            },
          ],
        },
        {
          id: "p3",
          title: "InfoBridge AI",
          subtitle: "Enterprise Knowledge Assistant (RAG)",
          url: "",
          visible: true,
          bullets: [
            {
              id: "pb8",
              text: "Built an enterprise RAG app using GPT-4o that reduced information lookup time by 70% for 100+ internal users, processing queries across 2,000+ documents.",
              visible: true,
            },
            {
              id: "pb9",
              text: "Implemented role-based access control, production monitoring via Application Insights, and cost optimization strategies, reducing LLM API costs by 20%.",
              visible: true,
            },
            {
              id: "pb10",
              text: "Built a FastAPI backend for document ingestion, embeddings, authentication, and secure API integration with LLM providers.",
              visible: true,
            },
            {
              id: "pb11",
              text: "Designed a vector search pipeline using Azure AI Search for semantic retrieval across structured and unstructured data.",
              visible: true,
            },
          ],
        },
        {
          id: "p4",
          title: "Carrier Overage Processing System",
          subtitle: "Automated Carrier Billing & Reconciliation Platform",
          url: "",
          visible: true,
          bullets: [
            {
              id: "pb12",
              text: "Developed REST APIs and webhook services to automate carrier overage handling.",
              visible: true,
            },
            {
              id: "pb13",
              text: "Integrated USPS and logistics partner systems for real-time reconciliation.",
              visible: true,
            },
            {
              id: "pb14",
              text: "Reduced manual processing by 60%+ and improved billing accuracy by 25%+ meeting SLA accuracy.",
              visible: true,
            },
          ],
        },
        {
          id: "p5",
          title: "CI/CD Pipeline for Database & SQL Object Versioning",
          subtitle: "Automating SQL Object Deployment with Version Control",
          url: "",
          visible: true,
          bullets: [
            {
              id: "pb15",
              text: "Created a Database Project to structure and manage SQL objects efficiently.",
              visible: true,
            },
            {
              id: "pb16",
              text: "Implemented automated validation to prevent errors before deployment.",
              visible: true,
            },
            {
              id: "pb17",
              text: "Developed a CI/CD pipeline to automate SQL object versioning and deployment.",
              visible: true,
            },
          ],
        },
        {
          id: "p6",
          title: "SSFPriority",
          subtitle: "Postage Calculation Optimization",
          url: "",
          visible: true,
          bullets: [
            {
              id: "pb18",
              text: "Significantly enhanced postage calculation, a critical component of the parcel business.",
              visible: true,
            },
            {
              id: "pb19",
              text: "Developed a priority model for selecting package dimensions for USPS postage calculation.",
              visible: true,
            },
            {
              id: "pb20",
              text: "Achieved a notable 10% increase in profit margin by using measured dimensions.",
              visible: true,
            },
          ],
        },
      ],
    },
    {
      id: "edu",
      title: "Education",
      type: "education",
      visible: true,
      items: [
        {
          id: "ed1",
          degree: "Master of Computer Application",
          school: "Christ University, Bangalore",
          schoolUrl: "",
          startDate: "Jul 2019",
          endDate: "Jul 2022",
          location: "Bengaluru",
          description: "",
          visible: true,
        },
        {
          id: "ed2",
          degree: "Bachelor of Computer Application",
          school: "SFS College, Electronic City, Bangalore",
          schoolUrl: "",
          startDate: "Jun 2016",
          endDate: "Jun 2019",
          location: "Bengaluru",
          description: "",
          visible: true,
        },
      ],
    },
    {
      id: "pub",
      title: "Research Publication",
      type: "publications",
      visible: true,
      items: [
        {
          id: "pu1",
          title: "Blockchain and Its Integration in IoT",
          publisher: "Springer",
          date: "Oct 2022",
          url: "https://link.springer.com/chapter/10.1007/978-981-19-3035-5_53",
          visible: true,
        },
      ],
    },
    {
      id: "cert",
      title: "Certificates & Publications",
      type: "list",
      visible: true,
      items: [
        {
          id: "c2",
          text: "AWS Academy Cloud Foundations",
          source: "AWS",
          url: "",
          visible: true,
        },
        {
          id: "c1",
          text: "Python And Django Framework For Beginners",
          source: "Udemy",
          url: "",
          visible: true,
        },
        {
          id: "c3",
          text: "Deep Learning Explained",
          source: "Microsoft | edX",
          url: "",
          visible: true,
        },
        {
          id: "c4",
          text: "The Complete 2022 Web Development Bootcamp",
          source: "Udemy",
          url: "",
          visible: false,
        },
        {
          id: "c5",
          text: "Java Programming: Solving Problems with Software",
          source: "Coursera",
          url: "",
          visible: false,
        },
        {
          id: "c6",
          text: "The Bits and Bytes of Computer",
          source: "Google | Coursera",
          url: "",
          visible: true,
        },
        {
          id: "c7",
          text: "The Unix Workbench",
          source: "Johns Hopkins University | Coursera",
          url: "",
          visible: true,
        },
      ],
    },
  ],
};

export const DFLT_CUSTOM = {
  fontFamily: "DM Sans",
  fontSize: 10,
  nameSize: 30,
  titleSize: 20,
  headingSize: 11.5,
  lineHeight: 1.45,
  bulletMargin: 12,
  marginX: 12,
  marginY: 12,
  accentColor: "#0b111b",
  linkColor: "#010d29",
  sectionLineColor: "#161e2b",
  nameColor: "#000000",
  dateColor: "#1c2127",
  bulletColor: "#1a1f28",
  headingWeight: "700",
};

export const FONTS = [
  "Plus Jakarta Sans",
  "Lora",
  "Source Serif 4",
  "IBM Plex Sans",
  "Crimson Pro",
  "DM Sans",
  "Nunito",
  "Raleway",
  "Georgia",
  "Times New Roman",
];
