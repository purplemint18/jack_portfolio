import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';
import TitleBar from './TitleBar';
import { useTheme } from '../utils/ThemeContext';

const MainLayout = () => {
  const { theme, themeType } = useTheme();
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleResize = (e: React.MouseEvent, startX: number) => {
    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(200, Math.min(400, e.clientX));
      setSidebarWidth(newWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Save sidebar state to localStorage
  useEffect(() => {
    const savedSidebarState = localStorage.getItem('sidebarOpen');
    if (savedSidebarState !== null) {
      setIsSidebarOpen(savedSidebarState === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarOpen', String(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <div 
      className="flex flex-col h-screen w-screen overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
      data-theme={themeType}
    >
      <TitleBar />
      
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar toggleSidebar={toggleSidebar} />
        
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: sidebarWidth }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="h-full relative"
              style={{ backgroundColor: theme.sidebar }}
            >
              <Sidebar />
              
              {/* Resize handle */}
              <div
                className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-blue-500"
                onMouseDown={(e) => handleResize(e, e.clientX)}
              />
            </motion.div>
          </>
        )}
        
        <main className="flex-1 overflow-auto transition-colors duration-300" style={{ backgroundColor: theme.editor }}>
          <Outlet />
        </main>
      </div>
      
      <StatusBar />
    </div>
  );
};

export default MainLayout; 