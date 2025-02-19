import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PiClockCountdown, PiListBullets, PiQuestion } from "react-icons/pi";
import Sidebar, {SidebarItem} from './components/Sidebar';
import Timers from './pages/Timers';
import HowToUse from './pages/HowToUse';
import WhyRest from './pages/WhyRest';
import './App.css'

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <hr className="border-neutral-600 my-3" />
          <SidebarItem icon={<PiClockCountdown size={24} />} text={t('timers')} to="/" />
          <SidebarItem icon={<PiListBullets size={24} />} text={t('howToUse')} to="/how-to-use" />
          <SidebarItem icon={<PiQuestion size={24} />} text={t('whyRest')} to="/why-rest" />
        </Sidebar>

        {/* Main Content */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Timers />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/why-rest" element={<WhyRest />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
