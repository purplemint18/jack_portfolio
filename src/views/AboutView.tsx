import { motion } from 'framer-motion';
import { profileData } from '../utils/mockData';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const AboutView = () => {
  const { contactInfo, profile } = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

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
            <span className="text-blue-400">&lt;html&gt;</span>
            <span className="text-white mx-1">import</span>
            <span className="text-green-500">Developer</span>
            <span className="text-white mx-1">from</span>
            <span className="text-yellow-300">'portfolio'</span>
            <span className="text-blue-400">&lt;/html&gt;</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-4 font-mono text-sm">
            <span className="text-blue-400">&lt;h1&gt;</span>
            <span className="text-yellow-500 mx-1">About Me</span>
            <span className="text-blue-400">&lt;/h1&gt;</span>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-2 text-white">{contactInfo.name}</h1>
          <div className="flex items-center mb-2 text-gray-300">
            <FaMapMarkerAlt className="mr-2" />
            <span>{contactInfo.location}</span>
          </div>
          <div className="flex items-center mb-4 text-gray-300">
            <FaEnvelope className="mr-2" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="text-gray-300 leading-relaxed">
            {profile}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-1 font-mono text-sm">
            <span className="text-blue-400">&lt;ul</span>
            <span className="text-green-500 mx-1">class</span>
            <span className="text-white">=</span>
            <span className="text-yellow-300">"interests"</span>
            <span className="text-blue-400">&gt;</span>
          </div>
        </motion.div>

        {['Machine Learning', 'LLM Development', 'RAG Systems', 'AI Research', 'MLOps'].map((interest, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex items-center mb-1 ml-8 font-mono text-sm">
              <span className="text-blue-400">&lt;li&gt;</span>
              <span className="text-green-500 mx-1">{interest}</span>
              <span className="text-blue-400">&lt;/li&gt;</span>
            </div>
          </motion.div>
        ))}

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-4 font-mono text-sm">
            <span className="text-blue-400">&lt;/ul&gt;</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <div className="text-gray-400">
            <p>Welcome to my portfolio! I'm a Machine Learning Engineer specializing in LLM-based solutions and AI systems. Feel free to explore my projects and experience using the sidebar navigation.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutView; 