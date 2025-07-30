import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaTools,
  FaCog,
  FaCloud,
  FaDocker,
  FaGithub,
  FaReact,
  FaPython,
  FaStripe,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiApacheairflow,
  SiApachespark,
  SiAmazon,
  SiKubernetes,
  SiTensorflow,
  SiSnowflake,
  SiMlflow,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";

type SkillCategory =
  | "all"
  | "frontend"
  | "backend"
  | "data"
  | "ai"
  | "devops"
  | "cloud"
  | "other";

const categoryIcons = {
  frontend: <FaCode />,
  backend: <FaServer />,
  data: <FaDatabase />,
  ai: <FaBrain />,
  devops: <FaTools />,
  cloud: <FaCloud />,
  other: <FaCog />,
};

const categoryColors: Record<string, string> = {
  frontend: "bg-blue-500",
  backend: "bg-green-500",
  data: "bg-yellow-500",
  ai: "bg-purple-500",
  devops: "bg-red-500",
  cloud: "bg-cyan-500",
  other: "bg-gray-500",
};

// Define skills with their categories and icons
const skillsData = [
  { name: "RAG", level: 5, category: "ai", icon: <FaBrain /> },
  { name: "LLMs", level: 5, category: "ai", icon: <FaBrain /> },
  {
    name: "Apache Airflow",
    level: 4,
    category: "devops",
    icon: <SiApacheairflow />,
  },
  { name: "Apache Kafka", level: 4, category: "data", icon: <SiApachekafka /> },
  { name: "Apache Spark", level: 4, category: "data", icon: <SiApachespark /> },
  { name: "ARIMA", level: 3, category: "ai", icon: <FaBrain /> },
  { name: "AWS", level: 4, category: "cloud", icon: <SiAmazon /> },
  { name: "AWS EC2", level: 4, category: "cloud", icon: <SiAmazon /> },
  { name: "AWS Lambda", level: 4, category: "cloud", icon: <SiAmazon /> },
  { name: "AWS SageMaker", level: 4, category: "cloud", icon: <SiAmazon /> },
  { name: "AWS CloudWatch", level: 3, category: "cloud", icon: <SiAmazon /> },
  {
    name: "AWS ElasticSearch",
    level: 3,
    category: "cloud",
    icon: <SiAmazon />,
  },
  { name: "Big Data", level: 4, category: "data", icon: <FaDatabase /> },
  { name: "Blockchain", level: 3, category: "other", icon: <FaCog /> },
  { name: "C/C++", level: 3, category: "backend", icon: <FaCode /> },
  { name: "Deep Learning", level: 4, category: "ai", icon: <FaBrain /> },
  { name: "DeFi Protocol", level: 3, category: "other", icon: <FaCog /> },
  { name: "Docker", level: 4, category: "devops", icon: <FaDocker /> },
  { name: "ECommerce", level: 3, category: "other", icon: <FaCog /> },
  { name: "ETL", level: 4, category: "data", icon: <FaDatabase /> },
  { name: "GitHub", level: 4, category: "devops", icon: <FaGithub /> },
  { name: "Google Firebase", level: 3, category: "cloud", icon: <FaCloud /> },
  { name: "Kubernetes", level: 4, category: "devops", icon: <SiKubernetes /> },
  { name: "LSTM", level: 4, category: "ai", icon: <FaBrain /> },
  { name: "MLFlow", level: 4, category: "ai", icon: <SiMlflow /> },
  { name: "MLOps", level: 4, category: "devops", icon: <FaTools /> },
  { name: "NLP", level: 4, category: "ai", icon: <FaBrain /> },
  { name: "PySpark", level: 4, category: "data", icon: <SiApachespark /> },
  { name: "Python", level: 5, category: "backend", icon: <FaPython /> },
  { name: "React", level: 4, category: "frontend", icon: <FaReact /> },
  { name: "Serverless", level: 4, category: "cloud", icon: <FaCloud /> },
  { name: "Snowflake", level: 4, category: "data", icon: <SiSnowflake /> },
  { name: "SQL", level: 4, category: "data", icon: <FaDatabase /> },
  { name: "Stripe", level: 3, category: "other", icon: <FaStripe /> },
  { name: "Tensorflow", level: 4, category: "ai", icon: <SiTensorflow /> },
  { name: "Terraform", level: 4, category: "devops", icon: <SiTerraform /> },
  {
    name: "Github Actions",
    level: 4,
    category: "devops",
    icon: <SiGithubactions />,
  },
];

const SkillsView = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const categories: SkillCategory[] = [
    "all",
    "frontend",
    "backend",
    "data",
    "ai",
    "devops",
    "cloud",
    "other",
  ];

  return (
    <div className="p-6 h-full overflow-y-auto">
      <motion.div
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-1 font-mono text-sm">
            <span className="text-blue-400">SELECT</span>
            <span className="text-white mx-2"> * </span>
            <span className="text-blue-400">FROM</span>
            <span className="text-green-500 mx-2">expertise</span>
            <span className="text-blue-400">WHERE</span>
            <span className="text-white mx-2">type</span>
            <span className="text-white">=</span>
            <span className="text-yellow-300 ml-2">'Skills'</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-6 font-mono text-sm">
            <span className="text-blue-400">ORDER BY</span>
            <span className="text-yellow-500 mx-2">proficiency</span>
            <span className="text-blue-400">DESC</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category !== "all" && categoryIcons[category]}
                <span className="capitalize">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-gray-800 p-4 rounded-lg"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-lg text-gray-300">{skill.icon}</div>
                  <h3 className="font-medium text-white">{skill.name}</h3>
                </div>
                <span className="text-xs text-gray-400 capitalize">
                  {skill.category}
                </span>
              </div>

              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${categoryColors[skill.category]}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level * 20}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>

              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-gray-400 mt-8">
          <p>Skills are rated on a scale from 1 (Beginner) to 5 (Expert).</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsView;
