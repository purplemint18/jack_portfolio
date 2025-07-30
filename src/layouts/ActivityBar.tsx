import { motion } from 'framer-motion';
import { FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaCog } from 'react-icons/fa';
import { useTheme } from '../utils/ThemeContext';

interface ActivityBarProps {
  toggleSidebar: () => void;
}

const ActivityBar = ({ toggleSidebar }: ActivityBarProps) => {
  const { theme } = useTheme();
  
  const iconVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 }
  };

  // Dynamic classes based on theme
  const iconBaseClass = "p-2 text-gray-400 hover:text-white";
  const borderClass = "border-gray-800";

  return (
    <div 
      className={`w-12 h-full flex flex-col items-center py-4 border-r ${borderClass} transition-colors duration-300`}
      style={{ backgroundColor: theme.activityBar }}
    >
      <motion.div
        className="flex flex-col gap-6 items-center"
      >
        <motion.button
          onClick={toggleSidebar}
          className={iconBaseClass}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaUser size={20} />
        </motion.button>
        
        <motion.button
          className={iconBaseClass}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaCode size={20} />
        </motion.button>
        
        <motion.button
          className={iconBaseClass}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaBriefcase size={20} />
        </motion.button>
        
        <motion.button
          className={iconBaseClass}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaGraduationCap size={20} />
        </motion.button>
        
        <motion.button
          className={iconBaseClass}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaEnvelope size={20} />
        </motion.button>
      </motion.div>
      
      <div className="mt-auto">
        <motion.button
          className={iconBaseClass}
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaCog size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default ActivityBar; 