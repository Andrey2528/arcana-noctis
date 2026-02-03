import { useState, useEffect } from 'react';
import tarotCardsData from '../../db/cardsTaro';
import CardModal from '../../components/CardModal';
import { useTranslation } from 'react-i18next';
import './DayCard.scss';

const DayCard = () => {
    const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalCard, setModalCard] = useState(null);
  const [canSelect, setCanSelect] = useState(true);

  // Перевіряємо чи вже вибрана карта сьогодні
  useEffect(() => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem("dayCardData");
    
    if (savedData) {
      const { date, cardIndex, cards } = JSON.parse(savedData);
      
      if (date === today) {
        // Вже вибрана карта сьогодні
        setSelectedCards(cards);
        setSelectedIndex(cardIndex);
        setCanSelect(false);
        return;
      }
    }
    
    // Генеруємо нові карти для нового дня
    const shuffled = [...tarotCardsData].sort(() => 0.5 - Math.random());
    setSelectedCards(shuffled.slice(0, 3));
    setCanSelect(true);
  }, []);

  const handleCardClick = (index) => {
    if (!canSelect || selectedIndex !== null) return;

    // Зберігаємо вибір в localStorage
    const today = new Date().toDateString();
    const dataToSave = {
      date: today,
      cardIndex: index,
      cards: selectedCards
    };
    localStorage.setItem('dayCardData', JSON.stringify(dataToSave));

    // Встановлюємо вибрану карту
    setSelectedIndex(index);
    setCanSelect(false);

    // Відкриваємо модалку через невелику затримку для анімації
    setTimeout(() => {
      setModalCard(selectedCards[index]);
    }, 300);
  };

  const handleCloseModal = () => {
    setModalCard(null);
  };

  return (
    <div className="day-card">
      <div className="container">
        <div className="day-card__header">
          <h1 className="day-card__title">{t("dayCard.title")}</h1>
          <p className="day-card__subtitle">
            {canSelect 
              ? t("dayCard.description")
              : t("dayCard.alreadySelected")}
          </p>
        </div>

        <div className="day-card__cards">
          {selectedCards.length > 0 && selectedCards.map((card, index) => (
            <div
              key={card.id}
              className={`tarot-card ${selectedIndex === index ? 'flipped' : ''} ${
                !canSelect && selectedIndex !== index ? 'locked' : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="tarot-card__inner">
                <div className="tarot-card__back">
                  <img 
                    src="/assets/cards/backgoud-card.jpg" 
                    alt="Card back" 
                  />
                  {!canSelect && selectedIndex !== index && (
                    <div className="tarot-card__lock">🔒</div>
                  )}
                </div>
                <div className="tarot-card__front">
                  <img 
                    src={card.image} 
                    alt={card.name} 
                  />
                  <div className="tarot-card__name">{card.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="day-card__info">
            <p>{t("dayCard.selectCard")}: <strong>{selectedCards[selectedIndex]?.name}</strong></p>
            <button 
              className="day-card__view-details" 
              onClick={() => setModalCard(selectedCards[selectedIndex])}
            >
              {t("common.viewDetails")}
            </button>
          </div>
        )}
      </div>

      {modalCard && (
        <CardModal card={modalCard} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default DayCard;
