import { useTranslation, Trans } from 'react-i18next';

function HowToUse() {
    const { t } = useTranslation();

    return (
      <div>
        <h1>{t('howToUse.title')}</h1>
        <section>
          <h2>{t('howToUse.beforeYouStart.heading')}</h2>
          <p><Trans i18nKey="howToUse.beforeYouStart.enableBrowserNotifications" components={{ b: <b /> }}/></p>
          <button 
            // @click="requestPermission" 
            className="notification-btn"
            // :disabled="notificationPermission"
          >
            {/* {{ notificationPermission ? 'Notifications Enabled' : 'Enable Notifications' }} */}
            {t('howToUse.beforeYouStart.buttonEnable')}
          </button>
          <p><Trans i18nKey="howToUse.beforeYouStart.allowSystemNotifications" components={{ b: <b /> }}/></p>
          <details>
            <summary>{t('howToUse.beforeYouStart.showMeHow')}</summary>
            <p className="note"><Trans i18nKey="howToUse.beforeYouStart.instructionsForWindowsUsers" components={{ b: <b /> }}/></p>
            <p className="note"><Trans i18nKey="howToUse.beforeYouStart.instructionsForMacOSUsers" components={{ b: <b /> }}/></p>
          </details>
          <p>{t('howToUse.beforeYouStart.readyToTest')}</p>
          <button 
          // @click="sendTestNotification" 
          className="test-btn">{t('howToUse.beforeYouStart.buttonTest')}</button>
          <p className="note"><Trans i18nKey="howToUse.beforeYouStart.note" components={{ b: <b /> }}/></p>
        </section>

        <section>
          <h2>{t('howToUse.timers.heading')}</h2>
          <h3>{t('howToUse.timers.eyeRestTimer')}</h3>
          <ul className="bullets">
            <li className="bullet">{t('howToUse.timers.remindYouToRest')}</li>
            <li className="bullet">{t('howToUse.timers.autoRepeats')}</li>
            <li className="bullet">{t('howToUse.timers.canTurnOff')}</li>
          </ul>
          <h3>{t('howToUse.timers.standUpTimer')}</h3>
          <ul className="bullets">
            <li className="bullet">{t('howToUse.timers.focusAndBreak')}</li>
            <ul className="bullets">
              <li className="bullet">{t('howToUse.timers.focusTimer')}</li>
              <li className="bullet">{t('howToUse.timers.breakTimer')}</li>
            </ul>
          </ul>
          <h3>{t('howToUse.timers.timerPresets')}</h3>
          <p><Trans i18nKey="howToUse.timers.choosePresetOrCustom" components={{ b: <b /> }}/></p>
        </section>
        
        <section>
          <h2>{t('howToUse.feedback.heading')}</h2>
          <p>
            <Trans i18nKey="howToUse.feedback.description" 
              components={{ a: <a className="feedback" href="https://forms.gle/thmp2eGWhjhP5kur7" target="_blank" /> }}/>
          </p>
        </section>
      </div>
    );
  }
  
  export default HowToUse;  