import { useTranslation, Trans } from 'react-i18next';

function WhyRest() {
    const { t } = useTranslation();

    return (
      <div>
        <h1>{t('whyRest.title')}</h1>
        <p>{t('whyRest.intro')}</p>

        <h2>{t('whyRest.healthImpact.heading')}</h2>
        <h3>{t('whyRest.healthImpact.subHeadingRead')}</h3>
        <p><Trans i18nKey="whyRest.healthImpact.reducedBlink" components={{ b: <b />, sup: <sup /> }}/></p>
        <p><Trans i18nKey="whyRest.healthImpact.incompleteBlink" components={{ b: <b />, sup: <sup /> }}/></p>
        <h3>{t('whyRest.healthImpact.subHeadingSit')}</h3>
        <p><Trans i18nKey="whyRest.healthImpact.cardiovascularDisease" components={{ b: <b />, sup: <sup /> }}/></p>
        <p><Trans i18nKey="whyRest.healthImpact.obesity" components={{ b: <b />, sup: <sup /> }}/></p>
        <p><Trans i18nKey="whyRest.healthImpact.msd" components={{ b: <b />, sup: <sup /> }}/></p>

        <h2>{t('whyRest.strategies.heading')}</h2>
        <h3>{t('whyRest.strategies.subHeading202020')}</h3>
        <p><Trans i18nKey="whyRest.strategies.body202020" components={{ b: <b />, sup: <sup /> }}/></p>
        <h3>{t('whyRest.strategies.subHeading530')}</h3>
        <p><Trans i18nKey="whyRest.strategies.body530_1" components={{ b: <b />, sup: <sup /> }}/></p>
        <p><Trans i18nKey="whyRest.strategies.body530_2" components={{ b: <b />, sup: <sup /> }}/></p>
        <p><Trans i18nKey="whyRest.strategies.body530_3" components={{ b: <b />, sup: <sup /> }}/></p>

        <h2>{t('whyRest.myStory.heading')}</h2>
        <p>{t('whyRest.myStory.body_1')}</p>
        <p>{t('whyRest.myStory.body_2')}</p>

        <h2>{t('whyRest.references')}</h2>
        <ol>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/30214369/">Changes in blink rate and ocular symptoms during different reading tasks</a></li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/24413278/">Blink Patterns During Computer Use</a></li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/23770659/">Effect of incomplete blinking on tear film stability</a></li>
          <li><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2814094">Occupational Sitting Time, Leisure Physical Activity, and All-Cause and Cardiovascular Disease Mortality</a></li>
          <li><a href="https://news.harvard.edu/gazette/story/2024/11/study-finds-too-much-sitting-hurts-the-heart/">Too much sitting hurts the heart</a></li>
          <li><a href="https://news.ucr.edu/articles/2024/12/04/too-much-sitting-hurts-even-young-active-people">Too much sitting hurts even young, active people</a></li>
          <li><a href="https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2021.760533/full">Sitting for Too Long, Moving Too Little: Regular Muscle Contractions Can Reduce Muscle Stiffness During Prolonged Periods of Chair-Sitting</a></li>
          <li><a href="https://www.springerprofessional.de/the-relationship-between-fidgeting-posture-changes-physical-acti/19145142">The Relationship Between Fidgeting, Posture Changes, Physical Activity, and Musculoskeletal Discomfort in Office Workers</a></li>
          <li><a href="https://www.optometrytimes.com/view/deconstructing-20-20-20-rule-digital-eye-strain">Deconstructing the 20-20-20 Rule for digital eye strain</a></li>
          <li><a href="https://www.cuimc.columbia.edu/news/rx-prolonged-sitting-five-minute-stroll-every-half-hour">Rx for Prolonged Sitting: A Five-Minute Stroll Every Half Hour</a></li>
        </ol>
      </div>
    );
  }
  
  export default WhyRest;  