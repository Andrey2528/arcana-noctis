import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Тут буде логіка відправки форми
    alert('Дякуємо за повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <section className="contact__hero">
        <div className="container">
          <h1>Зв'яжіться з нами</h1>
          <p>Ми завжди раді відповісти на ваші запитання</p>
        </div>
      </section>

      <section className="container">
        <div className="contact__content">
          <div className="contact__form">
            <h2>Напишіть нам</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ім'я *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше ім'я"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Тема</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Тема повідомлення"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Повідомлення *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ваше повідомлення..."
                  required
                />
              </div>
              <button type="submit">Відправити</button>
            </form>
          </div>

          <div className="contact__info">
            <h2>Контактна інформація</h2>
            <div className="contact__info-item">
              <h3>📍 Адреса</h3>
              <p>вул. Хрещатик, 1<br />Київ, 01001<br />Україна</p>
            </div>
            <div className="contact__info-item">
              <h3>📧 Email</h3>
              <p><a href="mailto:info@arcananoctis.com">info@arcananoctis.com</a></p>
              <p><a href="mailto:support@arcananoctis.com">support@arcananoctis.com</a></p>
            </div>
            <div className="contact__info-item">
              <h3>📞 Телефон</h3>
              <p><a href="tel:+380501234567">+380 50 123 45 67</a></p>
              <p><a href="tel:+380671234567">+380 67 123 45 67</a></p>
            </div>
            <div className="contact__info-item">
              <h3>🕐 Години роботи</h3>
              <p>Пн - Пт: 9:00 - 18:00<br />Сб - Нд: Вихідний</p>
            </div>
            <div className="contact__info-social">
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Twitter">🐦</a>
              <a href="#" title="LinkedIn">💼</a>
              <a href="#" title="Instagram">📷</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
