import { FaGithub, FaLinkedin, FaBell, FaCheck } from 'react-icons/fa';
import { useTheme } from '../utils/ThemeContext';
import { profileData } from '../utils/mockData';

const StatusBar = () => {
  const { theme } = useTheme();
  const { contactInfo } = profileData;
  
  return (
    <div 
      className="h-6 flex items-center justify-between px-4 text-xs"
      style={{ backgroundColor: theme.statusBar, color: '#fff' }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <FaCheck size={10} />
          <span>Ready</span>
        </div>
        
        <div className="flex items-center gap-1">
          <FaBell size={10} />
          <span>0</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href={`https://${contactInfo.github}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <FaGithub size={12} />
          <span>{contactInfo.github.split('/').pop()}</span>
        </a>
        
        <a 
          href={`https://${contactInfo.linkedin}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <FaLinkedin size={12} />
          <span>LinkedIn</span>
        </a>
        
        <div>
          TypeScript
        </div>
        
        <div>
          Ln 1, Col 1
        </div>
      </div>
    </div>
  );
};

export default StatusBar; 