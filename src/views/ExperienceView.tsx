import { motion } from 'framer-motion';
import { profileData } from '../utils/mockData';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const ExperienceView = () => {
  const { experiences } = profileData;

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
            <span className="text-blue-400">import</span>
            <span className="text-white mx-1">{'{'}</span>
            <span className="text-green-500">Experience</span>
            <span className="text-white mx-1">{'}'}</span>
            <span className="text-blue-400">from</span>
            <span className="text-yellow-300 mx-1">'career'</span>
            <span className="text-white">;</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-6 font-mono text-sm">
            <span className="text-blue-400">interface</span>
            <span className="text-yellow-500 mx-1">ProfessionalExperience</span>
            <span className="text-white">{'{'}</span>
            <span className="text-green-500 mx-1">role: string;</span>
            <span className="text-white">{'}'}</span>
          </div>
        </motion.div>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-white">{experience.role}</h2>
                <div className="flex items-center text-blue-400">
                  <FaBriefcase className="mr-2" />
                  <span>{experience.company}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>{experience.period}</span>
              </div>
            </div>
            
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {experience.description.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="mb-2"
                >
                  <label dangerouslySetInnerHTML={{ __html: item }} />
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring" as const,
                    stiffness: 260,
                    damping: 20,
                    delay: 0.6 + (idx * 0.05)
                  }}
                  className="px-3 py-1 bg-gray-700 text-blue-300 text-sm rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div variants={itemVariants} className="text-gray-400 mt-4">
          <p>Hover over each experience card to see more details.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperienceView; 