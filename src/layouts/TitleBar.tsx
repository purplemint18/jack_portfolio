import { FaCircle, FaMinus, FaRegWindowMaximize, FaTimes, FaMoon, FaAdjust } from 'react-icons/fa';
import { useTheme } from '../utils/ThemeContext';

const TitleBar = () => {
  const { theme, themeType, setThemeType } = useTheme();
  
  const handleThemeChange = () => {
    // Toggle between dark and monochrome only
    setThemeType(themeType === 'dark' ? 'monochrome' : 'dark');
  };
  
  return (
    <div 
      className="h-8 flex items-center justify-between px-4 select-none"
      style={{ backgroundColor: theme.titleBar }}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <FaCircle className="text-red-500" size={12} />
          <FaCircle className="text-yellow-500" size={12} />
          <FaCircle className="text-green-500" size={12} />
        </div>
        
        <div className="ml-4 text-sm opacity-70">
          Jack Doyle - Portfolio
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={handleThemeChange}
          className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
          title={`Switch to ${themeType === 'dark' ? 'monochrome' : 'dark'} theme`}
        >
          {themeType === 'dark' ? (
            <FaMoon size={16} />
          ) : (
            <FaAdjust size={16} />
          )}
        </button>
        
        <div className="flex items-center gap-4">
          <FaMinus className="opacity-70 hover:opacity-100 cursor-pointer" />
          <FaRegWindowMaximize className="opacity-70 hover:opacity-100 cursor-pointer" />
          <FaTimes className="opacity-70 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TitleBar; 