import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <Logo size="md" />
        </Link>
        
        <button className="header__burger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>{t('header.home')}</NavLink>
          <NavLink to="/tarot-cards" onClick={() => setMobileMenuOpen(false)}>{t('header.tarotCards')}</NavLink>
          <NavLink to="/about-tarot" onClick={() => setMobileMenuOpen(false)}>{t('header.aboutTarot')}</NavLink>
          <NavLink to="/day-card" onClick={() => setMobileMenuOpen(false)}>{t('header.dayCard')}</NavLink>
        </nav>
        <div className="header__lang">
          <button 
            className={i18n.language === 'ua' ? 'active' : ''} 
            onClick={() => changeLanguage('ua')}
          >
            UA
          </button>
          <button 
            className={i18n.language === 'en' ? 'active' : ''} 
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button 
            className={i18n.language === 'ru' ? 'active' : ''} 
            onClick={() => changeLanguage('ru')}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
