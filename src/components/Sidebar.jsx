import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { useContext, createContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarContext = createContext();
const itemStyle = `
  text-lg font-semibold text-neutral-200 w-full h-14
  relative flex items-center py-3 px-4 mb-2
  rounded-md cursor-pointer transition-colors group
`;
const tooltipStyle = `
  absolute left-full rounded-md px-2 py-1 ml-6
  bg-blue-200 text-blue-900 text-base whitespace-nowrap
  invisible opacity-20 -translate-x-3 transition-all
  group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
`;

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleExpanded = () => setExpanded(!expanded);
  const toggleMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setIsEnglish(!isEnglish);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col justify-between bg-neutral-800 border-r border-neutral-600 shadow-sm">
        <div>
            {/* Logo and Collapse Button */}
            <div className="flex px-3 pt-3 justify-between items-center">
                <img
                    src="/renew-break-logo.svg"
                    className={`h-10 overflow-hidden transition-all ${
                        expanded ? "w-10" : "w-0"
                    }`}
                    alt="RenewBreak Logo"
                />
                <span
                    className={`text-neutral-200 text-xl font-bold overflow-hidden transition-all ${
                        expanded ? "w-38 ml-3" : "w-0"
                    }`}
                >
                    RenewBreak
                </span>
                <button
                    onClick={() => toggleExpanded()}
                    className={`h-14 py-3 px-4 text-neutral-200 
                        rounded-md cursor-pointer hover:bg-neutral-700 ${
                        expanded ? "w-14" : "w-full"
                    }`}
                >
                    {expanded ? <LuChevronFirst size={24} /> : <LuChevronLast size={24} />}
                </button>
            </div>

            {/* Sidebar Items */}
            <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>
        </div>
        
        {/* Switching Modes */}
        <div className="border-t border-neutral-600 pt-3 pb-1 mx-3">
            {/* Dark / Light */}
            <li
                className={`${itemStyle} hover:bg-neutral-700`}
                onClick={() => toggleMode()}
                >
                {isDarkMode ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} /> }
                <div className="flex">
                    <span
                        className={`overflow-hidden transition-all whitespace-nowrap ${
                            expanded ? "w-38 ml-3" : "w-0"
                        }`}
                    >
                        {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </span>
                </div>
                {!expanded && <div className={tooltipStyle}>Switch Mode</div>}
            </li>
            {/* English / Traditional Chinese */}
            <li
                className={`${itemStyle} hover:bg-neutral-700`}
                onClick={() => toggleLanguage()}
                >
                <IoLanguage size={24} />
                <div className="flex">
                    <span
                        className={`overflow-hidden transition-all whitespace-nowrap ${
                            expanded ? "w-38 ml-3" : "w-0"
                        }`}
                    >
                        {isEnglish ? "English" : "繁體中文"}
                    </span>
                </div>
                {!expanded && <div className={tooltipStyle}>Switch Language</div>}
            </li>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, to }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();

  return (
    <Link to={to} className="flex">
        <li
            className={`
                ${itemStyle}
                ${location.pathname === to ? "bg-neutral-700" : "hover:bg-neutral-700"}
            `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all whitespace-nowrap ${
                    expanded ? "w-38 ml-3" : "w-0"
                }`}
                >
                {text}
            </span>
            {!expanded && <div className={tooltipStyle}>{text}</div>}
        </li>
    </Link>
  );
}