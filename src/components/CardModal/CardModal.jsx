import { useEffect } from 'react';
import './CardModal.scss';
import { useTranslation } from 'react-i18next';

const CardModal = ({ card, onClose, selectedDeck }) => {
      const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  useEffect(() => {
    // Блокуємо скролл body коли модалка відкрита
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!card) return null;

  return (
    <div className="card-modal-overlay" onClick={onClose}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        <button className="card-modal__close" onClick={onClose}>
          ✕
        </button>
        
        <div className="card-modal__content">
          <div className="card-modal__image">
            <img src={card.image} alt={card.name} />
          </div>
          
          <div className="card-modal__info">
            <div className="card-modal__header">
              <span className="card-modal__number">{card.number}</span>
              <h2 className="card-modal__title">{card.name}</h2>
            </div>
            
            <p className="card-modal__short-desc">
              {selectedDeck && card.deckDescriptions?.[selectedDeck] 
                ? card.deckDescriptions[selectedDeck] 
                : card.shortDesc}
            </p>
            
            <div className="card-modal__description">
              <p>{card.description}</p>
            </div>
            
            <div className="card-modal__keywords">
              <h3>{t("modal.keyMeanings")}:</h3>
              <div className="keywords-list">
                {card.keywords.map((keyword, index) => (
                  <span key={index} className="keyword-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card-modal__meanings">
              <div className="meaning-section">
                <h3>{t("modal.uprightPosition")}:</h3>
                <ul>
                  {card.upright.map((meaning, index) => (
                    <li key={index}>{meaning}</li>
                  ))}
                </ul>
              </div>
              
              <div className="meaning-section">
                <h3>{t("modal.reversedPosition")}:</h3>
                <ul>
                  {card.reversed.map((meaning, index) => (
                    <li key={index}>{meaning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
