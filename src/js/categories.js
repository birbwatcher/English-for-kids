import cards from '../../data/cards.js';
// eslint-disable-next-line import/no-cycle
import { gameToggle, checkToggle } from './script.js';
// eslint-disable-next-line import/no-cycle
import { resetGame } from './game.js';
// eslint-disable-next-line import/no-cycle
import { createCategory, createOffcanvasMenu } from './createCard.js';

class Category {
  constructor(name, id, image) {
    this.name = name;
    this.image = image;
    this.id = id;
    this.arrayNum = id + 1;
  }

  getCategoryName() {
    return this.name;
  }

  getCategoryNum() {
    return this.arrayNum;
  }

  getCategory() {
    createCategory(this.image, this.name, this.id);
  }
}

export default function createCategories() {
  gameToggle.checked = false;
  resetGame();
  document.querySelector('.cards').innerHTML = '';
  document.querySelector('.stars').innerHTML = '';
  const categories = [];
  const categoryImages = [];
  for (let i = 1; i < cards.length; i++) {
    categoryImages.push(cards[i][2].image);
  }

  cards[0].forEach((item, index) => {
    const category = new Category(item, index, categoryImages[index]);
    categories.push(category);
  });
  categories.forEach((item) => item.getCategory());
  if (document.querySelectorAll('.nav-item').length === 2) {
    categories.forEach((itm) => createOffcanvasMenu(itm.getCategoryName(), itm.getCategoryNum()));
  }
  checkToggle();
}
