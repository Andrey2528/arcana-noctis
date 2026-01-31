import './Services.scss';

const Services = () => {
  return (
    <div className="services">
      <section className="services__hero">
        <div className="container">
          <h1>Наші послуги</h1>
          <p>Комплексні рішення для вашого бізнесу від професіоналів своєї справи</p>
        </div>
      </section>

      <section className="container">
        <div className="services__grid">
          <div className="services__card">
            <span className="services__card-icon">💻</span>
            <h3>Web Розробка</h3>
            <p>Створюємо сучасні веб-додатки з використанням найновіших технологій</p>
            <ul>
              <li>React, Vue, Angular</li>
              <li>Node.js, Python, PHP</li>
              <li>Адаптивний дизайн</li>
              <li>SEO оптимізація</li>
            </ul>
          </div>

          <div className="services__card">
            <span className="services__card-icon">📱</span>
            <h3>Mobile Розробка</h3>
            <p>Нативні та кросплатформні мобільні додатки для iOS та Android</p>
            <ul>
              <li>React Native</li>
              <li>Flutter</li>
              <li>iOS (Swift)</li>
              <li>Android (Kotlin)</li>
            </ul>
          </div>

          <div className="services__card">
            <span className="services__card-icon">🎨</span>
            <h3>UI/UX Дизайн</h3>
            <p>Створюємо інтуїтивні та привабливі інтерфейси для ваших користувачів</p>
            <ul>
              <li>Прототипування</li>
              <li>Дизайн систем</li>
              <li>Брендинг</li>
              <li>Тестування юзабіліті</li>
            </ul>
          </div>

          <div className="services__card">
            <span className="services__card-icon">☁️</span>
            <h3>Cloud рішення</h3>
            <p>Міграція та оптимізація вашої інфраструктури в хмарі</p>
            <ul>
              <li>AWS, Azure, Google Cloud</li>
              <li>DevOps автоматизація</li>
              <li>Контейнеризація</li>
              <li>Моніторинг та логування</li>
            </ul>
          </div>

          <div className="services__card">
            <span className="services__card-icon">🔒</span>
            <h3>Кібербезпека</h3>
            <p>Захист ваших даних та інфраструктури від сучасних загроз</p>
            <ul>
              <li>Аудит безпеки</li>
              <li>Пентестинг</li>
              <li>Шифрування даних</li>
              <li>Compliance (GDPR, ISO)</li>
            </ul>
          </div>

          <div className="services__card">
            <span className="services__card-icon">📊</span>
            <h3>Data Analytics</h3>
            <p>Аналітика та візуалізація даних для прийняття обґрунтованих рішень</p>
            <ul>
              <li>Big Data обробка</li>
              <li>Machine Learning</li>
              <li>Business Intelligence</li>
              <li>Дашборди та звіти</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
