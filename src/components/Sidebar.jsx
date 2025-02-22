import { useTranslation } from 'react-i18next';
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { useContext, createContext, useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link, useLocation } from "react-router-dom";

const SidebarContext = createContext();
const itemStyle = `
  text-lg font-semibold w-full h-14
  relative flex items-center py-3 px-4 mb-2
  rounded-md cursor-pointer transition-colors group
`;
const tooltipStyle = `
  absolute left-full rounded-md px-2 py-1 ml-6 text-base whitespace-nowrap
  invisible opacity-20 -translate-x-3 transition-all sidebar-tooltip
  group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
`;

export default function Sidebar({ children }) {
  const { theme, toggleTheme } = useTheme();

  const { toggleLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col justify-between border-r shadow-sm sidebar-theme">
        <div>
            {/* Logo and Collapse Button */}
            <div className="flex px-3 pt-3 justify-between items-center">
                <img
                    src="/renew-break-logo.svg"
                    className={`h-10 overflow-hidden transition-all ${
                        expanded ? "w-10 ml-2" : "w-0 ml-0"
                    }`}
                    alt="RenewBreak Logo"
                />
                <span
                    className={`text-xl font-bold overflow-hidden transition-all whitespace-nowrap ${
                        expanded ? "w-38 ml-3" : "w-0"
                    }`}
                >
                    {t('sidebar.appName')}
                </span>
                <button
                    onClick={() => toggleExpanded()}
                    className={`h-14 py-3 px-4 rounded-md cursor-pointer sidebar-hover ${
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
        <div className="border-t sidebar-line pt-3 pb-1 mx-3">
            {/* Dark / Light */}
            <li
                className={`${itemStyle} sidebar-hover`}
                onClick={() => toggleTheme()}
                >
                {theme == 'dark' ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} /> }
                <div className="flex">
                    <span
                        className={`overflow-hidden transition-all whitespace-nowrap ${
                            expanded ? "w-38 ml-3" : "w-0"
                        }`}
                    >
                        {theme == 'dark' ? t('sidebar.darkMode') : t('sidebar.lightMode')}
                    </span>
                </div>
                {!expanded && <div className={tooltipStyle}>{t('sidebar.switchMode')}</div>}
            </li>
            {/* English / Traditional Chinese */}
            <li
                className={`${itemStyle} sidebar-hover`}
                onClick={() => toggleLanguage()}
                >
                <IoLanguage size={24} />
                <div className="flex">
                    <span
                        className={`overflow-hidden transition-all whitespace-nowrap ${
                            expanded ? "w-38 ml-3" : "w-0"
                        }`}
                    >
                        {t('sidebar.language')}
                    </span>
                </div>
                {!expanded && <div className={tooltipStyle}>{t('sidebar.switchLanguage')}</div>}
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
                ${location.pathname === to ? "sidebar-active" : "sidebar-hover"}
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