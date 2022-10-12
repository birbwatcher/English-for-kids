// eslint-disable-next-line import/no-cycle
import { cardsGrid } from './script.js';

export default function createCard(cardImage, title, index, translation) {
  const col = document.createElement('div');
  col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
  // let card = document.createElement('div');
  // card.classList.add('card');

  const front = document.createElement('div');
  front.classList.add('card', 'front');

  const back = document.createElement('div');
  back.classList.add('card', 'back');

  // col.id = index;
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
  cardsGrid.append(col);

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
  // col.append(card);
}

export function createCategory(cardImage, title, index) {
  const col = document.createElement('div');
  col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
  // col.id = index;
  col.setAttribute('data', index);

  const card = document.createElement('div');
  card.classList.add('card', 'category');

  const image = document.createElement('img');
  image.classList.add('card-img-top');

  image.src = `./data/${cardImage}`;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('title');
  cardTitle.innerHTML = title;
  cardBody.append(cardTitle);

  card.append(image);
  card.append(cardBody);

  col.append(card);
  cardsGrid.append(col);
}

export function createOffcanvasMenu(categoryName, num) {
  const menu = document.querySelector('.navbar-nav');
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.innerHTML = categoryName;
  navItem.classList.add('nav-item');
  navLink.classList.add('nav-link');
  navLink.setAttribute('data', num);
  navLink.setAttribute('data-bs-dismiss', 'offcanvas');
  navLink.href = '#';
  navItem.append(navLink);
  menu.append(navItem);
}
