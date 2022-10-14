import cards from '../data/cards.js';
// eslint-disable-next-line import/no-cycle
import createCategories from './categories.js';
// eslint-disable-next-line import/no-cycle
import gameInit, { resetGame } from './game.js';
// eslint-disable-next-line import/no-cycle
import createCard from './createCard.js';
// eslint-disable-next-line import/no-cycle
import createScore from './score.js';
import { findWord } from './score.js';

const cardsGrid = document.querySelector('.cards');
const offcanvasBody = document.querySelector('.offcanvas-body');
const gameToggle = document.querySelector('.form-check-input');

export function checkToggle() {
  gameInit();
  const trainSwitch = document.querySelector('.switch');
  const english = document.querySelectorAll('.english');
  // trainSwitch.classList.toggle('switch-on');console.log(gameToggle.checked);
  if (gameToggle.checked) {
    trainSwitch.innerHTML = 'Train';
    trainSwitch.classList.add('switch-on');
    english.forEach((item) => item.classList.add('hidden'));
    document.querySelectorAll('.front').forEach((item) => item.classList.remove('flipped'));
    document.querySelectorAll('.back').forEach((item) => item.classList.remove('unflipped'));
    if (document.querySelectorAll('.category').length === 0 && document.querySelectorAll('table').length === 0 && !document.querySelector('.no-words')) {
      document.querySelector('.play').classList.remove('hidden');
      document.querySelector('.progress').classList.remove('hidden');
    }
  }
  if (!gameToggle.checked) {
    // console.log('helo');
    resetGame();
    trainSwitch.innerHTML = 'Play';
    trainSwitch.classList.remove('switch-on');
    english.forEach((item) => item.classList.remove('hidden'));
    document.querySelector('.play').classList.add('hidden');
    document.querySelector('.progress').classList.add('hidden');
    document.querySelector('.play').innerHTML = 'Play';
  }
}

gameToggle.onclick = function toggle() {
  checkToggle();
};

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
    // if (!gameToggle.checked) {
    new Audio(this.audioSrc).play();
    // }
  }
}

// const categories = [];
const arrayOfcards = [];

function createItems(cardsSet) {
  gameToggle.checked = false;
  resetGame();
  arrayOfcards.length = 0;
  document.querySelector('.row').innerHTML = '';
  cards[cardsSet].forEach((item, index) => {
    const card = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index);
    arrayOfcards.push(card);
  });
  arrayOfcards.forEach((item) => item.getCard());
  checkToggle();
}

createCategories();

cardsGrid.addEventListener('click', (e) => {
  const cardsFrontItems = document.querySelectorAll('.front');
  const cardsBackItems = document.querySelectorAll('.back');
  if (e.target.classList.contains('rotate')) {
    const index = e.target.parentNode.parentNode.id;
    cardsFrontItems[index].classList.add('flipped');
    cardsBackItems[index].classList.add('unflipped');
  }
  if (e.target.parentElement.classList.contains('front')) {
    const index = e.target.parentElement.id;
    if (!gameToggle.checked) {
      arrayOfcards[index].getSound();
      findWord(arrayOfcards[index].getWord()).clicks += 1;
    }
  }
  if (e.target.parentElement.classList.contains('category')) {
    const index = Number(e.target.parentNode.parentNode.getAttribute('data')) + 1;
    createItems(index);
  }
});

cardsGrid.addEventListener('mouseout', (e) => {
  const cardsFrontItems = document.querySelectorAll('.front');
  const cardsBackItems = document.querySelectorAll('.back');
  if (e.target.firstChild !== null) {
    const index = e.target.firstChild;
    if (e.target.firstChild.nextSibling !== null && e.target.firstChild.nextSibling.classList.contains('back')) {
      cardsFrontItems[index.id].classList.remove('flipped');
      cardsBackItems[index.id].classList.remove('unflipped');
    }
  }
});

offcanvasBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    document.querySelectorAll('.active').forEach((item) => item.classList.remove('active'));
    e.target.classList.add('active');
    const categoryId = Number(e.target.getAttribute('data'));
    if (categoryId < 0) {
      createScore();
    }
    if (categoryId > 0) {
      createItems(categoryId);
    }
    if (categoryId === 0) {
      createCategories();
    }
  }
});
export { cardsGrid };
export { gameToggle };
export { arrayOfcards };
