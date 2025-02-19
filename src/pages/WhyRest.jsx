import { useTranslation } from 'react-i18next';

function WhyRest() {
    const { t } = useTranslation();

    return (
      <div>
        <h1>{t('whyRest')}</h1>
        <p>Information about the importance of taking breaks goes here.</p>
      </div>
    );
  }
  
  export default WhyRest;  