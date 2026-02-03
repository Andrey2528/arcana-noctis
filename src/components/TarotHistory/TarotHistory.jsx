import { useTranslation } from 'react-i18next';
import { historyTaro } from '../../db/historyTaro';
import './TarotHistory.scss';

const TarotHistory = () => {
  const { t } = useTranslation();

  return (
    <div className="tarot-history">
      <div className="tarot-history__timeline">
        {historyTaro.map((period) => (
          <div key={period.id}className="about-tarot__event">
            <div className="about-tarot__event-dot"></div>
            <div className="about-tarot__event-content">
              <div className="about-tarot__event-year">{t(`aboutTarot.history.${period.id}.year`)}</div>
              <h3 className="about-tarot__event-title">{t(`aboutTarot.history.${period.id}.title`)}</h3>
              <p className="about-tarot__event-description">
                {t(`aboutTarot.history.${period.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotHistory;
