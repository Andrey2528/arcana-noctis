import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.scss';

const Home = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="home">
      <section className="home__hero">
        <div className="container">
          <h1>{t('home.title')}</h1>
          <p>{t('home.description')}</p>
          <Link to="/about-tarot" className="cta-button">
            {t('common.learnMore')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
