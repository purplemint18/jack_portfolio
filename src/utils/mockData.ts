import type { ProfileData } from "../types";

export const profileData: ProfileData = {
  contactInfo: {
    name: "Jack Doyle",
    email: "jack.doyle19921224@gmail.com",
    location: "Dublin, Ireland",
    github: "github.com/staplesad",
    linkedin: "linkedin.com/in/jack-doyle-10bb89374",
  },
  profile:
    "LLM Specialist and Machine Learning Engineer with a robust background in building end-to-end AI solutions, including Generative AI, RAG systems, MCP and RLHF fine-tuning. Proven success deploying scalable ML pipelines, fine-tuning LLMs using QLoRA and DPO, and integrating AI with production systems on AWS. Demonstrated expertise across e-commerce, blockchain, and data analytics, with hands-on experience in MLOps, vector search, anomaly detection, and recommendation systems. Passionate about delivering intelligent, high-performance AI products that drive real-world impact and business value. ",
  experiences: [
    {
      company: "Tiger Analytics",
      role: "LLM Specialist | ML Engineer",
      period: "05/2023 - 06/2025",
      description: [
        "Spearheaded the development of multiple <b>Generative AI applications</b> using diverse tech stacks, including <b>LLMOps</b> tools, <b>Vector Databases</b>, and both proprietary and open-source <b>LLMs</b>, to enable capabilities such as <b>entity extraction, question answering, data analysis</b>, and <b>intent detection</b>.",
        "Designed and deployed a robust <b>RAG-based</b> system for a <b>multi-agent assistant</b> in <b>healthcare</b> settings, integrating external tools and services via <b>Model Context Protocol (MCP)</b> to enable dynamic, context-aware <b>decision-making</b>.",
        "Led the end-to-end deployment of <b>fine-tuned</b> LLMS on <b>AWS SageMaker</b> with <b>canary</b> deployment strategies, ensuring <b>low-risk production</b> rollouts, real-time monitoring, and continuous system stability.",
        "<b>Fine-tuned</b> an open-source LLM using <b>QLoRa</b>, achieving a 5+ point <b>BLEU</b> score improvement over <b>GPT-3.5-turbo</b>, while reducing model size by <b>95%</b>, cutting <b>inference costs</b> by <b>14x</b>, and applying post-training <b>quantization</b> via <b>llama.cpp</b> with robust hallucination mitigation.",
        "Led the automation of the vendor assessment information-gathering process using <b>LLMs</b>, significantly reducing manual workload and turnaround time through intelligent, <b>AI-driven document parsing</b> and <b>structured data</b> extraction.",
        "Evaluated <b>Retrieval-Augmented Generation (RAG)</b> pipelines using the <b>Ragas</b> framework for <b>offline benchmarking</b> and built an <b>A/B testing</b> infrastructure for <b>online evaluation</b>, diagnosing quality issues and continuously <b>optimizing</b> response accuracy.",
        "Built <b>domain-specific virtual assistants</b>, including <b>Earth Virtual Export</b> chatbots and <b>Crypto Support Agents</b>, leveraging advanced <b>prompting strategies</b> such as <b>Chain-of-Thought (COT)</b> and <b>ReAct</b> to enhance reasoning, <b>explainability</b>, and task handling.",
        "Implemented the complete <b>RLHF (Reinforcement Learning from Human Feedback)</b> lifecycle and boosted system performance by applying the <b>Direct Preference Optimization (DPO)</b> algorithm for more scalable and sample-efficient <b>fine-tuning</b>.",
      ],
      technologies: ["LLMOps", "Vector DB", "RAG", "MCP", "DPO", "LLMs"],
    },
    {
      company: "Mercari",
      role: "Data | AI Engineer",
      period: "07/2021 - 02/2023",
      description: [
        "Developed and maintained a <b>vector search-based recommendation</b> system on <b>AWS</b> using <b>Elasticsearch</b> for an <b>e-commerce</b> platform, leading to an 18% increase in customer engagement and a 12% boost in sales.",
        "Built an end-to-end <b>MLOps</b> pipeline using <b>Amazon SageMaker</b> Pipelines, and integrated <b>MLflow</b> for robust model tracking, versioning, and performance monitoring.",
        "Built the <b>ETL</b> data pipeline for an item <b>recommendation</b> system, designing and implementing the entire transform layer using <b>PySpark</b> to process and enrich raw data into structured, high-value features for downstream machine learning tasks.",
        "Collaborated with <b>cross-functional teams</b> to collect and preprocess data, <b>fine-tune</b> machine learning models, and deploy multiple models into production, including <b>client-side ML</b> solutions using <b>TensorFlow Lite</b>.",
        "<b>Visualized</b> and improved <b>customer retention</b> by developing cohort-based <b>analytics dashboards</b>, uncovering the direct impact of negative user experiences on churn, and delivering actionable insights to stakeholders for data-driven engagement strategies.",
        "Reduced <b>fraudulent activity</b> by <b>49%</b> by designing and deploying a real-time <b>anomaly detection system</b> for financial transactions, significantly improving <b>security</b> and asset protection.",
        "<b>Visualized</b> and improved <b>customer retention</b> by developing cohort-based <b>analytics dashboards</b>, uncovering the direct impact of negative user experiences on churn, and delivering actionable insights to stakeholders for data-driven engagement strategies.",
        "Re-defined marketing KPIs using SQL and Tableau, leading A/B tests that boosted client leads by 10%, enhancing marketing strategy effectiveness.",
      ],
      technologies: [
        "MLOps",
        "Amazon SageMaker",
        "MLFlow",
        "PySpark",
        "Elasticsearch",
        "TensorFlow Lite",
      ],
    },
    {
      company: "Token Metrics",
      role: "AI | Blockchain Engineer",
      period: "04/2019 - 07/2021",
      description: [
        "Designed and developed an automated <b>ETL data pipeline</b> using <b>Snowflake, Apache Spark</b>, and <b>Kafka Streams</b> APIs on <b>AWS EC2</b>, enabling efficient ingestion and processing of large-scale datasets from leading DeFi protocols including <b>Uniswap V3, Aave, Liquity</b>, and Lido.",
        "Implemented robust data quality checks and monitoring systems to ensure high integrity and reliability of data flowing into <b>crypto trading forecasting</b> models.",
        "Built a <b>crypto forecasting</b> service leveraging <b>LSTM, ARIMA</b>, and <b>Facebook Prophet</b>, enabling high-accuracy predictions based on vast volumes of historical market data.",
        "Deployed the <b>forecasting</b> model with <b>canary deployment</b> using <b>AWS SageMaker</b> and <b>CloudWatch</b>, minimizing risk and system <b>downtime</b> during rollout.",
        "Engineered a scalable <b>microservices</b> architecture using <b>Docker</b> and <b>Kubernetes</b>, significantly improving deployment velocity and operational efficiency across services",
        "Developed a real-time <b>crypto market monitoring dashboard</b>, utilizing The Graph <b>(Subgraph)</b> to fetch and visualize <b>on-chain data</b> directly from <b>smart contracts</b> for transparent and actionable market insights",
      ],
      technologies: [
        "Snowflake",
        "Apache Spark",
        "Kafka Streams",
        "AWS EC2",
        "AWS SageMaker",
        "Crypto Forecasting",
      ],
    },
    {
      company: "Cloudera",
      role: "Full Stack Developer",
      period: "05/2017 - 03/2019",
      description: [
        "Designed and developed new features for a scalable, high-performance <b>E-commerce SaaS platform</b> using <b>Node.js</b> and <b>Python</b>, collaborating with <b>cross-functional</b> teams to deliver solutions aligned with strategic business goals.",
        "Contributed to the successful migration from a monolithic to <b>microservices</b> architecture, leveraging <b>Apache Kafka</b> for inter-service <b>communication</b> to enhance system scalability, modularity, and maintainability.",
        "Designed and developed new features for a scalable, high-performance E-commerce SaaS platform using Node.js and Python, collaborating with cross-functional teams to deliver solutions aligned with strategic business goals.",
        "Contributed to the successful migration from a monolithic to microservices architecture, leveraging Apache.",
        "Kafka for inter-service communication to enhance system scalability, modularity, and maintainability.",
        "Implemented modern <b>CI/CD pipelines</b> using <b>Docker, GitHub Actions</b>, and <b>Argo CD</b> for automated deployments to <b>EKS</b>, enabling faster and more reliable release cycles.",
        "Managed infrastructure-as-code using <b>Terraform</b>, streamlining <b>AWS resource provisioning</b> and reducing deployment complexity and operational overhead.",
        "Integrated multiple global payment providers <b>(Stripe, Adyen, PayPal)</b>, ensuring full <b>PSD2</b> and <b>GDPR</b> compliance, while enabling secure, multi-currency transactions across international markets.",
      ],
      technologies: [
        "E-commerce",
        "Node.js",
        "Python",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform",
        "AWS",
        "Stripe",
        "Adyen",
        "PayPal",
        "PSD2",
      ],
    },
  ],
  education: [
    {
      degree: "Master's Degree, Computer Science",
      institution: "TU Dublin Computer Science",
      period: "04/2011 - 04/2017",
    },
  ],
  skills: [
    { name: "Python", level: 5, category: "backend" },
    { name: "PyTorch", level: 5, category: "ai" },
    { name: "TensorFlow", level: 4, category: "ai" },
    { name: "LangChain", level: 5, category: "ai" },
    { name: "RAG Systems", level: 5, category: "ai" },
    { name: "LLM Fine-tuning", level: 4, category: "ai" },
    { name: "QLoRA", level: 4, category: "ai" },
    { name: "MLOps", level: 5, category: "devops" },
    { name: "AWS", level: 4, category: "devops" },
    { name: "Docker", level: 4, category: "devops" },
    { name: "Kubernetes", level: 3, category: "devops" },
    { name: "SQL", level: 4, category: "data" },
    { name: "NoSQL", level: 3, category: "data" },
    { name: "Spark", level: 4, category: "data" },
    { name: "Kafka", level: 3, category: "data" },
    { name: "React", level: 3, category: "frontend" },
    { name: "TypeScript", level: 3, category: "frontend" },
    { name: "Git", level: 4, category: "other" },
    { name: "CI/CD", level: 3, category: "devops" },
  ],
  projects: [
    {
      id: "MindMeld-MBTI",
      title: "MindMeld-MBTI",
      description:
        "MindMeld is a comprehensive MBTI personality assessment app that helps you understand yourself and others through detailed personality profiles. Take our scientifically-designed test to identify your type, explore in-depth descriptions, and gain AI-enhanced insights to improve your relationships and personal growth.",
      technologies: ["React", "Express", "OpenAI", "Electron"],
      appUrl: "https://apps.microsoft.com/detail/9p0vbxgz029b?hl=en-US&gl=US",
      imageUrl:
        "https://store-images.s-microsoft.com/image/apps.52243.14519342421519703.b4365530-2be0-4bf4-b01f-4aebc5c54d8b.e70e325a-e30c-4dd5-9d2f-e3e8a6223583?h=253",
    },
    {
      id: "TrueEye",
      title: "TrueEye",
      description:
        "TrueEye is an advanced CV and profile analysis tool that helps verify professional credentials and detect inconsistencies. Upload resumes in PDF or DOCX format and analyze GitHub profiles to validate technical skills, project claims, and work history. Perfect for recruiters, HR professionals, and hiring managers who need to verify candidate information quickly and accurately. Features include timeline verification, skills assessment, GitHub repository analysis, commit history authentication, and project complexity evaluation. Generate comprehensive reports with inconsistency flags, gaps detection, and recommendations. TrueEye helps you make informed hiring decisions with confidence by providing an objective, AI-powered analysis of candidate profiles.",
      technologies: ["React", "Express", "OpenAI", "Electron"],
      appUrl: "https://apps.microsoft.com/detail/9n0r6r27lm2g?hl=en-US&gl=US",
      imageUrl:
        "https://store-images.s-microsoft.com/image/apps.26096.13915932595542545.dfd85a94-1e58-4471-9a7f-4a5a81e7effc.ec5c104d-5bec-4eed-b280-1262bc29f232",
    },
    {
      id: "llm-agent-research",
      title: "LLM Agent Research",
      description:
        "Research repository exploring different LLM agent architectures, focusing on multi-agent systems, tool use, and planning capabilities for complex tasks.",
      technologies: [
        "Python",
        "LangChain",
        "LlamaIndex",
        "HuggingFace",
        "OpenAI",
      ],
      githubUrl: "https://github.com/staplesad/llm-agent-research",
      liveUrl: "https://staplesad.github.io/llm-agent-research",
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    },
    {
      id: "defi-analytics",
      title: "DeFi Analytics Platform",
      description:
        "Analytics platform for decentralized finance protocols, providing insights into liquidity pools, yield farming opportunities, and risk assessment metrics.",
      technologies: [
        "Python",
        "Web3.py",
        "PostgreSQL",
        "Flask",
        "React",
        "Ethereum",
      ],
      githubUrl: "https://github.com/staplesad/defi-analytics",
      imageUrl:
        "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1932&auto=format&fit=crop",
    },
    {
      id: "vector-search-engine",
      title: "Semantic Vector Search Engine",
      description:
        "High-performance vector search engine for semantic document retrieval, supporting multiple embedding models and efficient nearest neighbor search algorithms.",
      technologies: ["Python", "FAISS", "PyTorch", "FastAPI", "Docker"],
      githubUrl: "https://github.com/staplesad/vector-search-engine",
      imageUrl:
        "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=1770&auto=format&fit=crop",
    },
    {
      id: "fine-tuning-framework",
      title: "LLM Fine-tuning Framework",
      description:
        "Comprehensive framework for fine-tuning large language models using techniques like QLoRA, DPO, and RLHF, with built-in evaluation metrics and deployment tools.",
      technologies: [
        "Python",
        "PyTorch",
        "HuggingFace",
        "PEFT",
        "TRL",
        "MLflow",
      ],
      githubUrl: "https://github.com/staplesad/fine-tuning-framework",
      liveUrl: "https://huggingface.co/staplesad",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    },
  ],
};
