import { useTranslation } from 'react-i18next';

function HowToUse() {
    const { t } = useTranslation();

    return (
      <div>
        <h1>{t('howToUse')}</h1>
        <p>Instructions on how to use the app go here.</p>
      </div>
    );
  }
  
  export default HowToUse;  