import { useState } from 'react';
import './TarotCards.scss';
import CardModal from '../../components/CardModal';
import { tarotCardsData } from '../../db/cardsTaro'
import lenormandCardsData, { lenormandDeck } from '../../db/lenormandDeck';
import { useTranslation } from 'react-i18next';
import { useTranslatedCards, useTranslatedDecks } from '../../hooks/useTarotCards';

const TarotCards = () => {
  const { t } = useTranslation();
  const { t: tCards } = useTranslation('tarotCards'); // Окремий t для карт
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedDeck, setSelectedDeck] = useState('rider-waite');
  const [systemType, setSystemType] = useState('tarot'); // 'tarot' or 'lenormand'
  
  // Отримуємо карти з перекладами залежно від типу системи
  const translatedTarotCards = useTranslatedCards('tarot');
  const translatedLenormandCards = useTranslatedCards('lenormand');
  const translatedDecks = useTranslatedDecks();
  
  // Створюємо об'єкт колод для зручності
  const tarotDecksMap = translatedDecks.reduce((acc, deck) => {
    acc[deck.id] = deck;
    return acc;
  }, {});

  // Для Ленорман отримуємо переклад з JSON
  const lenormandDeckTranslated = {
    id: 'lenormand',
    name: tCards('lenormand.deck.name', lenormandDeck.nameUk),
    description: tCards('lenormand.deck.description', lenormandDeck.description),
    author: tCards('lenormand.deck.author', lenormandDeck.author)
  };

  // Об'єднуємо всі колоди
  const allDecks = {
    ...tarotDecksMap,
    lenormand: lenormandDeckTranslated
  };

  // Вибираємо дані в залежності від системи
  const currentCards = systemType === 'lenormand' ? translatedLenormandCards : translatedTarotCards;
  
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
          <h1>{t('tarotCards.title')}</h1>
          <p>
            {t('tarotCards.description')}
          </p>
        </div>
      </section>

      <section className="container">
        {/* Перемикач системи ворожіння */}
        <div className="tarot-cards__system-selector">
          <h2>{t('tarotCards.chooseSystem')}</h2>
          <div className="tarot-cards__system-buttons">
            <button
              className={systemType === 'tarot' ? 'active' : ''}
              onClick={() => {
                setSystemType('tarot');
                setSelectedDeck('rider-waite');
                setFilter('all');
              }}
            >
              {t('tarotCards.tarotSystems')} (78 карт)
            </button>
            <button
              className={systemType === 'lenormand' ? 'active' : ''}
              onClick={() => {
                setSystemType('lenormand');
                setSelectedDeck('lenormand');
                setFilter('all');
              }}
            >
              {t('tarotCards.lenormandSystem')} (36 карт)
            </button>
          </div>
        </div>

        {/* Перемикач колод */}
        {systemType === 'tarot' && (
          <div className="tarot-cards__deck-selector">
            <h2>{t('tarotCards.chooseTaroDesck')}</h2>
            <div className="tarot-cards__deck-buttons">
              {translatedDecks.map((deck) => (
                <button
                  key={deck.id}
                  className={selectedDeck === deck.id ? 'active' : ''}
                  onClick={() => setSelectedDeck(deck.id)}
                >
                  {deck.name}
                </button>
              ))}
            </div>
            <div className="tarot-cards__deck-info">
              <h3>{currentDeck.name}</h3>
              <p className="deck-meta">
                <span>{currentDeck.author}</span>
              </p>
              <p className="deck-description">{currentDeck.description}</p>
            </div>
          </div>
        )}

        {systemType === 'lenormand' && (
          <div className="tarot-cards__deck-selector">
            <div className="tarot-cards__deck-info">
              <h3>{lenormandDeckTranslated.name}</h3>
              <p className="deck-meta">
                <span>{lenormandDeckTranslated.author}</span> • <span>{lenormandDeck.year}</span> • <span>{lenormandDeck.totalCards} {t('tarotCards.cards')}</span>
              </p>
              <p className="deck-description">{lenormandDeckTranslated.description}</p>
            </div>
          </div>
        )}

        {systemType === 'tarot' && (
          <div className="tarot-cards__filters">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              {t('common.allCadrs')}
            </button>
            <button 
              className={filter === 'major' ? 'active' : ''} 
              onClick={() => setFilter('major')}
            >
              {t('common.majorArcana')}
            </button>
            <button 
              className={filter === 'minor' ? 'active' : ''} 
              onClick={() => setFilter('minor')}
            >
              {t('common.minorArcana')}
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
