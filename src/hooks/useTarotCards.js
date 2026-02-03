import { useTranslation } from 'react-i18next';
import { tarotCardsData } from '../db/cardsTaro';
import { lenormandCardsData } from '../db/lenormandDeck';

/**
 * Хук для отримання карти з перекладами
 * @param {number} cardId - ID карти (0-77 для Таро, 1-36 для Ленорман)
 * @param {string} type - 'tarot' або 'lenormand'
 * @returns {Object} Карта з перекладеними полями
 */
export const useTranslatedCard = (cardId, type = 'tarot') => {
  const { t } = useTranslation('tarotCards');
  
  // Вибираємо потрібний масив карт
  const cardsData = type === 'lenormand' ? lenormandCardsData : tarotCardsData;
  const namespace = type === 'lenormand' ? 'lenormand.cards' : 'cards';
  
  // Знаходимо базову карту з файлу
  const baseCard = cardsData.find(card => card.id === cardId);
  
  if (!baseCard) {
    console.warn(`Card with id ${cardId} not found in ${type}`);
    return null;
  }

  // Повертаємо карту з перекладами
  return {
    ...baseCard,
    name: t(`${namespace}.${cardId}.name`, baseCard.name),
    keywords: t(`${namespace}.${cardId}.keywords`, { 
      returnObjects: true, 
      defaultValue: baseCard.keywords 
    }),
    shortDesc: t(`${namespace}.${cardId}.shortDesc`, baseCard.shortDesc),
    description: t(`${namespace}.${cardId}.description`, baseCard.description),
    upright: t(`${namespace}.${cardId}.upright`, { 
      returnObjects: true, 
      defaultValue: baseCard.upright 
    }),
    reversed: t(`${namespace}.${cardId}.reversed`, { 
      returnObjects: true, 
      defaultValue: baseCard.reversed 
    }),
    deckDescriptions: baseCard.deckDescriptions ? 
      Object.keys(baseCard.deckDescriptions).reduce((acc, deckId) => {
        acc[deckId] = t(`${namespace}.${cardId}.deckDescriptions.${deckId}`, 
          baseCard.deckDescriptions[deckId]
        );
        return acc;
      }, {}) : {}
  };
};

/**
 * Хук для отримання всіх карт з перекладами
 * @param {string} type - 'tarot' або 'lenormand'
 * @returns {Array} Масив карт з перекладами
 */
export const useTranslatedCards = (type = 'tarot') => {
  const { t } = useTranslation('tarotCards');
  
  const cardsData = type === 'lenormand' ? lenormandCardsData : tarotCardsData;
  const namespace = type === 'lenormand' ? 'lenormand.cards' : 'cards';
  
  console.log(`[useTarotCards] Loading ${type} cards, count:`, cardsData.length);
  
  return cardsData.map(card => ({
    ...card,
    name: t(`${namespace}.${card.id}.name`, card.name),
    keywords: t(`${namespace}.${card.id}.keywords`, { 
      returnObjects: true, 
      defaultValue: card.keywords 
    }),
    shortDesc: t(`${namespace}.${card.id}.shortDesc`, card.shortDesc),
    description: t(`${namespace}.${card.id}.description`, card.description),
    upright: t(`${namespace}.${card.id}.upright`, { 
      returnObjects: true, 
      defaultValue: card.upright 
    }),
    reversed: t(`${namespace}.${card.id}.reversed`, { 
      returnObjects: true, 
      defaultValue: card.reversed 
    }),
    deckDescriptions: card.deckDescriptions ? 
      Object.keys(card.deckDescriptions).reduce((acc, deckId) => {
        acc[deckId] = t(`${namespace}.${card.id}.deckDescriptions.${deckId}`, 
          card.deckDescriptions[deckId]
        );
        return acc;
      }, {}) : {}
  }));
};

/**
 * Хук для отримання інформації про колоду з перекладами
 * @param {string} deckId - ID колоди
 * @returns {Object} Інформація про колоду
 */
export const useTranslatedDeck = (deckId) => {
  const { t } = useTranslation('tarotCards');
  
  return {
    id: deckId,
    name: t(`decks.${deckId}.name`),
    description: t(`decks.${deckId}.description`),
    author: t(`decks.${deckId}.author`)
  };
};

/**
 * Хук для отримання всіх колод з перекладами
 * @returns {Array} Масив колод
 */
export const useTranslatedDecks = () => {
  const { t } = useTranslation('tarotCards');
  const deckIds = ['rider-waite', 'marseille', 'thoth', 'wild-unknown', 'light-seers', 'mad-moon', 'nicoletta-ceccoli'];
  
  return deckIds.map(deckId => ({
    id: deckId,
    name: t(`decks.${deckId}.name`),
    description: t(`decks.${deckId}.description`),
    author: t(`decks.${deckId}.author`)
  }));
};
