import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import { FaMoon, FaAdjust } from 'react-icons/fa';

const SettingsView = () => {
  const { theme, themeType, setThemeType } = useTheme();

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

  const themeOptions = [
    { value: 'dark', label: 'Dark Theme', icon: <FaMoon /> },
    { value: 'monochrome', label: 'Monochrome Theme', icon: <FaAdjust /> }
  ];

  const handleThemeChange = (theme: 'dark' | 'monochrome') => {
    setThemeType(theme);
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
            <span className="text-white">{'{'}</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-1 font-mono text-sm">
            <span className="text-white ml-4">"</span>
            <span className="text-green-500">settings</span>
            <span className="text-white">":</span>
            <span className="text-white mx-1">{'{'}</span>
            <span className="text-white">"</span>
            <span className="text-yellow-500">theme</span>
            <span className="text-white">": "</span>
            <span className="text-blue-400">portfolio</span>
            <span className="text-white">"</span>
            <span className="text-white ml-1">{'}'}</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-6 font-mono text-sm">
            <span className="text-white">{'}'}</span>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-gray-800 rounded-lg p-6 shadow-lg mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {themeOptions.map((option) => (
              <motion.div
                key={option.value}
                onClick={() => handleThemeChange(option.value as 'dark' | 'monochrome')}
                className={`p-4 rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${
                  themeType === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-xl">{option.icon}</div>
                <span>{option.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-gray-800 rounded-lg p-6 shadow-lg mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Theme Preview</h2>
          
          <div className="border border-gray-700 rounded-md overflow-hidden">
            <div 
              className="h-6 flex items-center justify-between px-2"
              style={{ backgroundColor: theme.titleBar }}
            >
              <div className="text-xs opacity-70">Theme Preview</div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="flex">
              <div 
                className="w-10 h-32"
                style={{ backgroundColor: theme.activityBar }}
              ></div>
              
              <div 
                className="w-40 h-32"
                style={{ backgroundColor: theme.sidebar }}
              ></div>
              
              <div 
                className="flex-1 h-32"
                style={{ backgroundColor: theme.editor }}
              ></div>
            </div>
            
            <div 
              className="h-4"
              style={{ backgroundColor: theme.statusBar }}
            ></div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-400 mb-1">Background</div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-md"
                  style={{ backgroundColor: theme.background }}
                ></div>
                <code className="text-xs text-gray-300">{theme.background}</code>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Foreground</div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-md"
                  style={{ backgroundColor: theme.foreground }}
                ></div>
                <code className="text-xs text-gray-300">{theme.foreground}</code>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Accent</div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-md"
                  style={{ backgroundColor: theme.accent }}
                ></div>
                <code className="text-xs text-gray-300">{theme.accent}</code>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-gray-400">
          <p>Theme settings are saved in your browser and will persist between visits.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SettingsView; 