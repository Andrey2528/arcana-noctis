import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '../Logo/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <Logo size="sm" />
            <p>Магічна подорож у світ нічних таємниць</p>
          </div>
          <div className="footer__section">
            <ul>
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/tarot-cards">Карти таро</Link></li>
              <li><Link to="/about-tarot">Про таро</Link></li>
            </ul>
          </div>
          <div className="footer__section">
            <h3>Контакти</h3>
            <ul>
              <li>Email: info@arcananoctis.com</li>
              <li>Телефон: +380 XX XXX XXXX</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {currentYear} Arcana Noctis. Всі права захищені.</p>
          <p>Автор Skyntr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
