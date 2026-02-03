// Приклад використання i18n в компонентах

import { useTranslation } from 'react-i18next';

// Приклад 1: Базове використання
function ExampleComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
}

// Приклад 2: Використання з параметрами
function GreetingComponent() {
  const { t } = useTranslation();
  const userName = 'Іван';
  
  // В translation.json додайте: "greeting": "Привіт, {{name}}!"
  return <h2>{t('greeting', { name: userName })}</h2>;
}

// Приклад 3: Перевірка поточної мови
function LanguageAwareComponent() {
  const { i18n } = useTranslation();
  
  return (
    <div>
      <p>Поточна мова: {i18n.language}</p>
      {i18n.language === 'ua' && <p>Ви використовуєте українську мову</p>}
    </div>
  );
}

// Приклад 4: Зміна мови програмно
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const switchToEnglish = () => {
    i18n.changeLanguage('en');
  };
  
  return <button onClick={switchToEnglish}>Switch to English</button>;
}

export { ExampleComponent, GreetingComponent, LanguageAwareComponent, LanguageSwitcher };
