import './About.scss';

const About = () => {
  return (
    <div className="about">
      <section className="about__hero">
        <div className="container">
          <h1>Про нас</h1>
        </div>
      </section>

      <section className="container">
        <div className="about__content">
          <p>
            Arcana Noctis - це команда творчих професіоналів, які захоплені створенням 
            унікальних цифрових рішень. Ми поєднуємо мистецтво і технології, щоб 
            втілювати в життя найсміливіші ідеї наших клієнтів.
          </p>
          <p>
            Наша місія - створювати продукти, які не лише відповідають вимогам сучасності, 
            але й випереджають їх. Ми віримо, що кожен проект - це можливість зробити 
            світ трохи кращим і зручнішим.
          </p>
          <p>
            З роками досвіду та сотнями успішних проектів, ми продовжуємо рости і 
            розвиватися, завжди прагнучи досконалості в кожній деталі нашої роботи.
          </p>
        </div>
      </section>

      <section className="about__team">
        <div className="container">
          <h2>Наша команда</h2>
          <div className="about__grid">
            <div className="about__member">
              <h3>Олександр Петренко</h3>
              <div className="role">CEO & Founder</div>
              <p>Візіонер і стратег з 15-річним досвідом у tech-індустрії</p>
            </div>
            <div className="about__member">
              <h3>Марія Коваленко</h3>
              <div className="role">Lead Designer</div>
              <p>Створює візуальні шедеври, що захоплюють і надихають</p>
            </div>
            <div className="about__member">
              <h3>Дмитро Сидоренко</h3>
              <div className="role">Tech Lead</div>
              <p>Архітектор складних систем та ентузіаст новітніх технологій</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
