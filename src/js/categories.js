import cards from '../../data/cards.js';
import { createCategory, createOffcanvasMenu } from './createCategory.js';

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
  document.querySelector('h1').innerHTML = 'Train & Play';
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
}
