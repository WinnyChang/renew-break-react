import { useTranslation } from 'react-i18next';

function Timers() {
    const { t } = useTranslation();

    return (
      <div>
        <h1>{t('timers')}</h1>
        <p>This is the Home page where timers will be displayed.</p>
      </div>
    );
  }
  
  export default Timers;