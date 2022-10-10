import cards from '../data/cards.js';
// eslint-disable-next-line import/no-cycle
import { gameToggle } from './script.js';
// eslint-disable-next-line import/no-cycle
import { resetGame } from './game.js';

const scoreArray = [];

export default function createScore() {
  document.querySelector('.row').innerHTML = `<table class="table table-hover">
  <thead>
    <tr class="table-dark">
      <th scope="col">English</th>
      <th scope="col">Russian</th>
      <th scope="col">Success</th>
      <th scope="col">Fail</th>
      <th scope="col">Success Score</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>`;
  gameToggle.checked = false;
  resetGame();

  scoreArray.forEach((item) => {
    const table = document.querySelector('tbody');
    const row = document.createElement('tr');
    row.classList.add('table-active');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');
    const cell5 = document.createElement('td');
    cell1.innerHTML = item.word;
    cell2.innerHTML = item.translation;
    cell3.innerHTML = item.score;
    cell4.innerHTML = item.fail;
    cell5.innerHTML = item.success;
    row.append(cell1);
    row.append(cell2);
    row.append(cell3);
    row.append(cell4);
    row.append(cell5);
    table.append(row);
  });
}

class ScoreItem {
  constructor(word, translation) {
    this.word = word;
    this.translation = translation;
    this.score = 0;
    this.fail = 0;
    this.success = (this.score / this.fail);
  }
}

for (let i = 1; i < cards.length; i++) {
  cards[i].forEach((item) => {
    const score = new ScoreItem(item.word, item.translation);
    scoreArray.push(score);
  });
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