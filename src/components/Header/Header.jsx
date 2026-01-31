import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <Logo size="md" />
        </Link>
        <nav className="header__nav">
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/tarot-cards">Карти таро</NavLink>
          <NavLink to="/about-tarot">Про таро</NavLink>
          <NavLink to="/day-card">Карта дня</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
