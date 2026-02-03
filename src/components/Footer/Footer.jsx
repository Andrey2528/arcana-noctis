import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <div className="header__logo">
              <Logo size="md" />
            </div>
            <p>{t("footer.description")}</p>
          </div>
          <div className="footer__section">
            <ul>
              <li>
                <Link to="/">{t("header.home")}</Link>
              </li>
              <li>
                <Link to="/tarot-cards">{t("header.tarotCards")}</Link>
              </li>
              <li>
                <Link to="/about-tarot">{t("header.aboutTarot")}</Link>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h3>{t("footer.contacts")}</h3>
            <ul>
              <li>Email: info@arcananoctis.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            &copy; {currentYear} Arcana Noctis. {t("footer.rights")}.
          </p>
          <p>{t("footer.author")} Skyntr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
