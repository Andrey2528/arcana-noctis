import { useState } from 'react';
import './TarotCards.scss';
import CardModal from '../../components/CardModal';
import tarotCardsData, { tarotDecks } from '../../db/cardsTaro'
import lenormandCardsData, { lenormandDeck } from '../../db/divination';


const TarotCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedDeck, setSelectedDeck] = useState('rider-waite');
  const [systemType, setSystemType] = useState('tarot'); // 'tarot' or 'lenormand'

  // Об'єднуємо всі колоди
  const allDecks = {
    ...tarotDecks,
    lenormand: lenormandDeck
  };

  // Вибираємо дані в залежності від системи
  const currentCards = systemType === 'lenormand' ? lenormandCardsData : tarotCardsData;
  
  const filteredCards = systemType === 'lenormand' 
    ? currentCards // Ленорман не має фільтрів major/minor
    : (filter === 'all' 
        ? currentCards 
        : currentCards.filter(card => card.category === filter));

  const currentDeck = allDecks[selectedDeck];

  return (
    <div className="tarot-cards">
      <section className="tarot-cards__hero">
        <div className="container">
          <h1>Карти Таро та Ленорман</h1>
          <p>
            Дослідіть містичний світ ворожіння на картах. Кожна карта - це ключ до розуміння 
            себе та свого шляху. Виберіть карту, щоб дізнатися її значення.
          </p>
        </div>
      </section>

      <section className="container">
        {/* Перемикач системи ворожіння */}
        <div className="tarot-cards__system-selector">
          <h2>Оберіть систему ворожіння</h2>
          <div className="tarot-cards__system-buttons">
            <button
              className={systemType === 'tarot' ? 'active' : ''}
              onClick={() => {
                setSystemType('tarot');
                setSelectedDeck('rider-waite');
                setFilter('all');
              }}
            >
              Таро (78 карт)
            </button>
            <button
              className={systemType === 'lenormand' ? 'active' : ''}
              onClick={() => {
                setSystemType('lenormand');
                setSelectedDeck('lenormand');
                setFilter('all');
              }}
            >
              Ленорман (36 карт)
            </button>
          </div>
        </div>

        {/* Перемикач колод */}
        {systemType === 'tarot' && (
          <div className="tarot-cards__deck-selector">
            <h2>Оберіть колоду Таро</h2>
            <div className="tarot-cards__deck-buttons">
              {Object.values(tarotDecks).map((deck) => (
                <button
                  key={deck.id}
                  className={selectedDeck === deck.id ? 'active' : ''}
                  onClick={() => setSelectedDeck(deck.id)}
                >
                  {deck.nameUk}
                </button>
              ))}
            </div>
            <div className="tarot-cards__deck-info">
              <h3>{currentDeck.nameUk} ({currentDeck.name})</h3>
              <p className="deck-meta">
                <span>{currentDeck.author}</span> • <span>{currentDeck.year}</span>
              </p>
              <p className="deck-description">{currentDeck.description}</p>
            </div>
          </div>
        )}

        {systemType === 'lenormand' && (
          <div className="tarot-cards__deck-selector">
            <div className="tarot-cards__deck-info">
              <h3>{lenormandDeck.nameUk} ({lenormandDeck.name})</h3>
              <p className="deck-meta">
                <span>{lenormandDeck.author}</span> • <span>{lenormandDeck.year}</span> • <span>{lenormandDeck.totalCards} карт</span>
              </p>
              <p className="deck-description">{lenormandDeck.description}</p>
            </div>
          </div>
        )}

        {systemType === 'tarot' && (
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
        )}

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
        <CardModal 
          card={selectedCard} 
          onClose={() => setSelectedCard(null)} 
          selectedDeck={selectedDeck}
        />
      )}
    </div>
  );
};

export default TarotCards;
