// eslint-disable-next-line import/no-cycle
import { arrayOfcards } from './script.js';
// import {cardsGrid} from "./script.js";
import {findWord} from "./score.js";

let gameArray = [];
let gameStarted = false;
let card;

const cardsGrid = document.querySelector('.cards');
const progress = document.querySelector('.progress-bar');

// let myModal = new bootstrap.Modal(document.querySelector('.modal'))

// myModal.show()

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
      new Audio('./data/audio/error.mp3').play();
      findWord(card.word).fail += 1;
    }
    if (arrayOfcards[index].word === card.word) {
      card = gameArray.pop();
      new Audio('./data/audio/correct.mp3').play();
      progress.style.width = `${parseNumber(progress.style.width) + 12.5}%`;
      card.getSound();
      findWord(card.word).score += 1;
    }
  }
});

export function resetGame() {
//   console.log('reset');
  gameStarted = false;
}
