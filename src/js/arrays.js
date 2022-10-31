// eslint-disable-next-line import/no-cycle
import createCard from './createCard.js';
import cards from '../../data/cards';
// eslint-disable-next-line import/no-cycle
import ScoreItem from './score.js';

const arrayOfcards = [];
const scoreArray = [];
localStorage.getItem['0'] ? scoreArray.push(JSON.parse(localStorage.getItem('0'))?.slice(0)) : createScoreItems();

export function createScoreItems() {
  for (let i = 1; i < cards.length; i++) {
    cards[i].forEach((item) => {
      const score = new ScoreItem(item.word, item.translation, cards[0][i - 1]);
      scoreArray.push(score);
    });
  }
  localStorage.setItem('0', JSON.stringify(score));
}

export class BaseCard {
  constructor(word, translation, image, audioSrc, id) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = `./data/${audioSrc}`;
    this.id = id;
  }

  getWord() {
    return this.word;
  }

  getCard() {
    createCard(this.image, this.word, this.id, this.translation);
  }

  getSound() {
    new Audio(this.audioSrc).play();
  }
}

export function findWord(word) {
  let x;
  scoreArray.forEach((item) => {
    if (item.word === word) {
      x = item;
    }
  });
  return x;
}

export { arrayOfcards };
// export { BaseCard };
export { scoreArray };
