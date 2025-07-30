import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../utils/mockData';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDownload } from 'react-icons/fa';

const ProjectsView = () => {
  const { projects } = profileData;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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

  const selectedProject = projects.find(project => project.id === selectedId);

  return (
    <div className="p-6 h-full overflow-y-auto">
      <motion.div
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <div className="flex items-center mb-1">
            <div className="flex items-center font-mono text-sm">
              <span className="text-blue-400">from</span>
              <span className="text-white mx-1">portfolio</span>
              <span className="text-blue-400">import</span>
              <span className="text-green-500 mx-1">Projects</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <div className="flex items-center mb-1">
            <div className="flex items-center font-mono text-sm">
              <span className="text-blue-400">class</span>
              <span className="text-yellow-500 mx-1">FeaturedProjects</span>
              <span className="text-white">(</span>
              <span className="text-green-500">Projects</span>
              <span className="text-white">):</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <div className="flex items-center mb-6">
            <div className="flex items-center font-mono text-sm ml-4">
              <span className="text-blue-400">def</span>
              <span className="text-yellow-300 mx-1">__init__</span>
              <span className="text-white">(self):</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              variants={cardVariants}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              {project.imageUrl && (
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-blue-300 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <FaCode className="mr-1" />
                  <span>Click to view details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.imageUrl && (
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring" as const,
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 * idx 
                      }}
                      className="px-3 py-1 bg-gray-700 text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {selectedProject.appUrl && (
                    <a
                      href={selectedProject.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white transition-colors"
                    >
                      <FaDownload />
                      <span>Download App</span>
                    </a>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedId(null)}
                  className="mt-4 text-gray-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsView; 