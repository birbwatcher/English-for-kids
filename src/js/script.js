import createCategories from './categories.js';
import { resetGame, checkToggle, gameToggle } from './game.js';
import createScore, { findWord } from './score.js';
import createItems, { arrayOfcards } from './arrays.js';

const cardsGrid = document.querySelector('.cards');
const offcanvasBody = document.querySelector('.offcanvas-body');
createCategories();
gameToggle.checked = false;
resetGame();
checkToggle();

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
    gameToggle.checked = false;
    checkToggle();
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
    menuItems[index + 1].classList.add('active');
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
    resetGame();
    gameToggle.checked = false;
    checkToggle();
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
