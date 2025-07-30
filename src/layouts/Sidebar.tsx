import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaChevronRight,
  FaFile,
  FaReact,
  FaCss3,
  FaHtml5,
  FaCode,
  FaInfoCircle,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import FaPython from "../assets/icons/python.png";
import { Link, useLocation } from "react-router-dom";

// Function to determine file icon based on file path/name
const getFileIcon = (fileName: string) => {
  if (fileName.startsWith("theme")) {
    return <FaNodeJs className="text-green-300" size={16} />;
  } else if (fileName.endsWith(".tsx") || fileName.endsWith(".jsx")) {
    return <FaReact className="text-blue-400" size={16} />;
  } else if (fileName.endsWith(".css")) {
    return <FaCss3 className="text-blue-500" size={16} />;
  } else if (fileName.endsWith(".html")) {
    return <FaHtml5 className="text-orange-500" size={16} />;
  } else if (fileName.endsWith(".sql")) {
    return <FaDatabase className="text-yellow-400" size={16} />;
  } else if (fileName.endsWith(".json")) {
    return <FaCode className="text-yellow-300" size={16} />;
  } else if (fileName.endsWith(".py")) {
    return <img src={FaPython} alt="Python" className="text-blue-300 w-4 h-4" />;
  } else if (fileName.endsWith(".md")) {
    return <FaInfoCircle className="text-blue-300" size={16} />;
  }
  return <FaFile className="text-blue-400" size={16} />;
};

interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  to?: string;
}

const SidebarItem = ({ label, icon, children, to }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const hasChildren = !!children;
  const isActive =
    to === location.pathname || (to === "/" && location.pathname === "/");

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  // Determine icon based on file name if it's a file
  const fileIcon = to && !icon ? getFileIcon(label) : icon;

  return (
    <div>
      {to ? (
        <Link
          to={to}
          className={`flex items-center gap-2 px-2 py-1 rounded ${
            isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
          }`}
        >
          <div className="flex items-center gap-2">
            {fileIcon || <FaFile className="text-blue-400" size={14} />}
            <span className={`text-sm ${isActive ? "font-medium" : ""}`}>
              {label}
            </span>
          </div>
        </Link>
      ) : (
        <div
          className="flex items-center justify-between px-2 py-1 hover:bg-gray-700 rounded cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex items-center gap-2">
            {hasChildren ? (
              isOpen ? (
                <FaChevronDown size={10} />
              ) : (
                <FaChevronRight size={10} />
              )
            ) : null}
            <span className="text-sm font-medium">{label}</span>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="ml-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="h-full w-full overflow-y-auto p-2">
      <div className="uppercase text-xs font-bold mb-2 px-2 text-gray-400">
        Explorer
      </div>

      <SidebarItem label="PORTFOLIO" icon={null}>
        <SidebarItem label="about.html" to="/" />
        <SidebarItem label="experience.tsx" to="/experience" />
        <SidebarItem label="projects.py" to="/projects" />
        <SidebarItem label="skills.sql" to="/skills" />
        <SidebarItem label="education.css" to="/education" />
        <SidebarItem label="contact.md" to="/contact" />
      </SidebarItem>

      <div className="mt-4">
        <SidebarItem label="SETTINGS" icon={null}>
          <SidebarItem label="theme.json" to="/settings" />
        </SidebarItem>
      </div>
    </div>
  );
};

export default Sidebar;
