import { motion } from "framer-motion";
import { profileData } from "../utils/mockData";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const EducationView = () => {
  const { education } = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            <span className="text-blue-400">.education</span>
            <span className="text-white mx-1">{"{"}</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-1 font-mono text-sm">
            <span className="text-white ml-4">display:</span>
            <span className="text-yellow-500 mx-1">flex;</span>
            <span className="text-white ml-4">background:</span>
            <span className="text-green-500 mx-1">academic;</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-6 font-mono text-sm">
            <span className="text-white mx-1">{"}"}</span>
          </div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />

              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-400 text-2xl mr-4" />
                <h2 className="text-xl font-bold text-white">{edu.degree}</h2>
              </div>

              <div className="ml-10 space-y-2">
                <div className="flex items-center text-gray-300">
                  <FaUniversity className="mr-2" />
                  <span>{edu.institution}</span>
                </div>

                <div className="flex items-center text-gray-400">
                  <FaCalendarAlt className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <motion.div
                className="mt-6 ml-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-white font-medium mb-2">
                  Relevant Coursework:
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
                  <li>Machine Learning</li>
                  <li>Deep Learning</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>Distributed Systems</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Database Systems</li>
                  <li>Software Engineering</li>
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-8">
          <div className="flex items-center mb-1 font-mono text-sm">
            <span className="text-blue-400">.certifications</span>
            <span className="text-white mx-1">{"{"}</span>
          </div>

          {[
            "AWS Certified Machine Learning - Specialty",
            "TensorFlow Developer Certificate",
            "Deep Learning Specialization - Coursera",
            "MLOps Specialization - Coursera",
          ].map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex items-center mb-1 ml-8">
                <span className="text-green-500">'{cert}'</span>
                <span className="text-white">,</span>
              </div>
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-1 font-mono text-sm">
              <span className="text-white mx-1">{'}'}</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationView;
