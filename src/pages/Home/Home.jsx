import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="container">
          <h1>Arcana Noctis</h1>
          <p>Відкрийте таємниці ночі та дослідіть магічний світ нескінченних можливостей</p>
          <Link to="/about-tarot" className="cta-button">
            Дізнатися більше
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
