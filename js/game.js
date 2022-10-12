// eslint-disable-next-line import/no-cycle
import { arrayOfcards } from './script.js';
// import {cardsGrid} from "./script.js";
// eslint-disable-next-line import/no-cycle
import { findWord } from './score.js';
// eslint-disable-next-line import/no-cycle
import createCategories from './categories.js';


let gameArray = [];
let gameStarted = false;
let card;
const resultWindow = {};

resultWindow.rightAns = 0;
resultWindow.mistakes = 0;

const cardsGrid = document.querySelector('.cards');
const progress = document.querySelector('.progress-bar');

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

function shuffleArray(array) {
  const newArray = array.slice(0);
  return newArray.sort(() => Math.random() - 0.5);
}

export default function gameInit() {
  gameArray = shuffleArray(arrayOfcards).slice(0);
  progress.style.width = '0%';
}

export function gameStart() {
  document.querySelector('.play').innerHTML = 'Repeat word';
  gameStarted = true;
  card = gameArray.pop();
}

document.querySelector('.game').addEventListener('click', (e) => {
  if (e.target.classList.contains('play')) {
    if (!gameStarted) {
      gameStart();
    }
    card.getSound();
  }
});

function parseNumber(number) {
  return Number(number.replace(/[^0-9.-]+/g, ''));
}

cardsGrid.addEventListener('click', (e) => {
  if (gameStarted) {
    const index = e.target.parentNode.parentNode.id;
    if (arrayOfcards[index].word !== card.word) {
      findWord(card.word).fail += 1;
      resultWindow.mistakes += 1;
      new Audio('./data/audio/error.mp3').play();
    }
    if (arrayOfcards[index].word === card.word) {
      findWord(card.word).score += 1;
      resultWindow.rightAns += 1;
      card = gameArray.pop();
      new Audio('./data/audio/correct.mp3').play();
      progress.style.width = `${parseNumber(progress.style.width) + 12.5}%`;
      if (progress.style.width === '100%') {
        myModal.show();
        if (resultWindow.mistakes === 0) {
          document.querySelector('.result-img').src = './data/img/success.jpg';
          new Audio('./data/audio/success.mp3').play();
        }
        if (resultWindow.mistakes > 0) {
          document.querySelector('.result-img').src = './data/img/failure.jpg';
          new Audio('./data/audio/failure.mp3').play();
        }
        document.querySelector('.mistakes').innerHTML = `Mistakes ${resultWindow.mistakes}`;
        createCategories();
      }
      if (card) {
        card.getSound();
      }
    }
  }
});




export function resetGame() {
//   console.log('reset');
  gameStarted = false;
  resultWindow.rightAns = 0;
  resultWindow.mistakes = 0;
}
