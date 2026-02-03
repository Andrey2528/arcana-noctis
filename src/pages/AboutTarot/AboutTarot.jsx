import './AboutTarot.scss';
import { useTranslation } from 'react-i18next';
import TarotHistory from '../../components/TarotHistory';

const AboutTarot = () => {
      const { t } = useTranslation();
  return (
    <div className="about-tarot">
      <section className="about-tarot__hero">
        <div className="container">
          <h1>{t("aboutTarot.title")}</h1>
          <p className="about-tarot__hero-subtitle">
            {t("aboutTarot.description")}
          </p>
        </div>
      </section>

      <section className="about-tarot__timeline">
        <div className="container">
          <h2>Історія Таро</h2>
          <TarotHistory />
        </div>
      </section>

      <section className="about-tarot__meaning">
        <div className="container">
          <h2>{t("aboutTarot.structureTarot.title")}</h2>
          
          <div className="about-tarot__grid">
            <div className="about-tarot__card">
              <span className="about-tarot__card-icon">🌟</span>
              <h3>{t("common.majorArcana")}</h3>
              <ul>
                <li>{t("aboutTarot.structureTarot.majorArcanaDesc1")}</li>
                <li>{t("aboutTarot.structureTarot.majorArcanaDesc2")}</li>
                <li>{t("aboutTarot.structureTarot.majorArcanaDesc3")}</li>
                <li>{t("aboutTarot.structureTarot.majorArcanaDesc4")}</li>
              </ul>
            </div>

            <div className="about-tarot__card">
              <span className="about-tarot__card-icon">🎴</span>
              <h3>{t("common.minorArcana")}</h3>
              <ul>
                <li>{t("aboutTarot.structureTarot.minorArcanaDesc1")}</li>
                <li>{t("aboutTarot.structureTarot.minorArcanaDesc2")}</li>
                <li>{t("aboutTarot.structureTarot.minorArcanaDesc3")}</li>
                <li>{t("aboutTarot.structureTarot.minorArcanaDesc4")}</li>
                <li>{t("aboutTarot.structureTarot.minorArcanaDesc5")}</li>
              </ul>
            </div>

            <div className="about-tarot__card">
              <span className="about-tarot__card-icon">🃏</span>
              <h3>{t("common.courtCards")}</h3>
              <ul>
                <li>{t("aboutTarot.structureTarot.courtCardsDesc1")}</li>
                <li>{t("aboutTarot.structureTarot.courtCardsDesc2")}</li>
                <li>{t("aboutTarot.structureTarot.courtCardsDesc3")}</li>
                <li>{t("aboutTarot.structureTarot.courtCardsDesc4")}</li>
              </ul>
            </div>
          </div>

          <div className="about-tarot__philosophy">
            <h3>{t("aboutTarot.philosophyTarot.title")}</h3>
            <p>
              {t("aboutTarot.philosophyTarot.description1")}
            </p>
            <div className="quote">
              {t("aboutTarot.philosophyTarot.descriptionAccent")}
            </div>
            <p>
              {t("aboutTarot.philosophyTarot.description2")}
            </p>
            <p>
              {t("aboutTarot.philosophyTarot.description3")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTarot;
