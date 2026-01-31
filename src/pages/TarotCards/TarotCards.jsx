import { useState } from 'react';
import './TarotCards.scss';

import tarotCardsData from '../../db/cardsTaro'


const TarotCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredCards = filter === 'all' 
    ? tarotCardsData 
    : tarotCardsData.filter(card => card.category === filter);

  return (
    <div className="tarot-cards">
      <section className="tarot-cards__hero">
        <div className="container">
          <h1>Карти Таро</h1>
          <p>
            Дослідіть містичний світ Таро. Кожна карта - це ключ до розуміння 
            себе та свого шляху. Виберіть карту, щоб дізнатися її значення.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="tarot-cards__filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Усі карти
          </button>
          <button 
            className={filter === 'major' ? 'active' : ''} 
            onClick={() => setFilter('major')}
          >
            Старші Аркани
          </button>
          <button 
            className={filter === 'minor' ? 'active' : ''} 
            onClick={() => setFilter('minor')}
          >
            Молодші Аркани
          </button>
        </div>

        <div className="tarot-cards__grid">
          {filteredCards.map((card) => (
            <div 
              key={card.id} 
              className="tarot-cards__card"
              onClick={() => setSelectedCard(card)}
            >
              <img className="tarot-cards__card-icon" src={card.image} alt={card.name} />
              <div className="tarot-cards__card-number">{card.number}</div>
              <h3>{card.name}</h3>
              <div className="tarot-cards__card-subtitle">{card.nameEn}</div>
              <p>{card.shortDesc}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedCard && (
        <div className="tarot-cards__modal" onClick={() => setSelectedCard(null)}>
          <div className="tarot-cards__modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="tarot-cards__modal-close"
              onClick={() => setSelectedCard(null)}
            >
              ×
            </button>
            
            <div className="tarot-cards__modal-header">
              <img 
                src={selectedCard.image} 
                alt={selectedCard.name}
                className="tarot-cards__modal-image"
                style={{ 
                  maxWidth: '300px', 
                  height: 'auto', 
                  marginBottom: '1rem',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                }}
              />
              <h2>{selectedCard.number}. {selectedCard.name}</h2>
              <div className="subtitle">{selectedCard.nameEn}</div>
            </div>

            <div className="tarot-cards__modal-body">
              <p>{selectedCard.description}</p>

              <h3>Ключові слова</h3>
              <ul>
                {selectedCard.keywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>

              <h3>Пряме положення</h3>
              <ul>
                {selectedCard.upright.map((meaning, index) => (
                  <li key={index}>{meaning}</li>
                ))}
              </ul>

              {selectedCard.reversed && (
                <>
                  <h3>Перевернуте положення</h3>
                  <ul>
                    {selectedCard.reversed.map((meaning, index) => (
                      <li key={index}>{meaning}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TarotCards;
