import { LanguageProvider } from './contexts/LanguageContext';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { useTheme } from './contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

import { PiClockCountdown, PiListBullets, PiQuestion } from "react-icons/pi";

import Sidebar, {SidebarItem} from './components/Sidebar';
import Timers from './pages/Timers';
import HowToUse from './pages/HowToUse';
import WhyRest from './pages/WhyRest';

import './App.css'

const AppProviders = ({ children }) => (
  <LanguageProvider>
    {children}
  </LanguageProvider>
);

function App() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <AppProviders>
      <Router>
        <div className={`flex w-full ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
          <Sidebar>
            <hr className="sidebar-line my-3" />
            <SidebarItem icon={<PiClockCountdown size={24} />} text={t('sidebar.timers')} to="/" />
            <SidebarItem icon={<PiListBullets size={24} />} text={t('sidebar.howToUse')} to="/how-to-use" />
            <SidebarItem icon={<PiQuestion size={24} />} text={t('sidebar.whyRest')} to="/why-rest" />
          </Sidebar>

          {/* Main Content */}
          <main className={`flex-grow flex flex-col items-center p-12 main-theme`}>
            <div className="w-full max-w-3xl">
              <Routes>
                <Route path="/" element={<Timers />} />
                <Route path="/how-to-use" element={<HowToUse />} />
                <Route path="/why-rest" element={<WhyRest />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </AppProviders>
  );
}

export default App
