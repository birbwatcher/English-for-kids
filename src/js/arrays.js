import cards from '../../data/cards.js';

const arrayOfcards = [];

function createCard(cardImage, title, index, translation) {
  const col = document.createElement('div');
  col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');

  const front = document.createElement('div');
  front.classList.add('card', 'front');

  const back = document.createElement('div');
  back.classList.add('card', 'back');

  front.id = index;
  const image = document.createElement('img');
  image.classList.add('card-img-top');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'english');
  const cardBodyRotated = document.createElement('div');
  cardBodyRotated.classList.add('card-body', 'card-body-rotated');

  const cardTitle = document.createElement('h5');
  const cardTranslation = document.createElement('h5');
  const rotate = document.createElement('img');
  rotate.classList.add('rotate');
  rotate.src = './data/img/rotate.svg';
  cardTitle.innerHTML = title;
  cardTranslation.innerHTML = translation;
  image.src = `./data/${cardImage}`;
  document.querySelector('.cards').append(col);

  const imageFlipped = image.cloneNode(true);

  front.append(image);
  cardBody.append(cardTitle);
  cardBody.append(rotate);

  front.append(cardBody);

  back.append(imageFlipped);
  cardBodyRotated.append(cardTranslation);
  back.append(cardBodyRotated);

  col.append(front);
  col.append(back);
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

export default function createItems(cardsSet) {
  arrayOfcards.length = 0;
  document.querySelector('.cards').innerHTML = '';
  document.querySelector('.stars').innerHTML = '';
  cards[cardsSet].forEach((item, index) => {
    const card = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index);
    arrayOfcards.push(card);
  });
  arrayOfcards.forEach((item) => item.getCard());
  document.querySelector('h1').innerHTML = cards[0][cardsSet - 1];
}

export { arrayOfcards };
