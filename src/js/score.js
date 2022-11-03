import cards from '../../data/cards.js';
import { BaseCard, arrayOfcards } from './arrays.js';

// import checkToggle from './toggle.js';
// import { resetGame } from './game.js';

const scoreArray = localStorage.getItem('0') ? JSON.parse(localStorage.getItem('0')).slice(0) : [];

class ScoreItem {
  constructor(word, translation, category) {
    this.word = word;
    this.translation = translation;
    this.score = 0;
    this.fail = 0;
    this.clicks = 0;
    this.success = 0;
    this.category = category;
  }
}

function createScoreItems() {
  for (let i = 1; i < cards.length; i++) {
    cards[i].forEach((item) => {
      const score = new ScoreItem(item.word, item.translation, cards[0][i - 1]);
      scoreArray.push(score);
    });
  }
}

if (!localStorage.getItem('0')) {
  createScoreItems();
}

export function tableSort() {
  document.querySelector('h1').innerHTML = 'Score';
  document.querySelector('.stars').innerHTML = '';
  document.querySelector('.progress').classList.add('hidden');
  // document.querySelector('.col.game').classList.add('hidden');
  // checkToggle();
  const table = document.querySelector('table');
  const tbody = document.querySelector('tbody');
  const rowsArray = Array.from(tbody.rows);
  let asc = true;
  table.addEventListener('click', (e) => {
    const index = e.target.cellIndex;
    if (e.target.nodeName !== 'TH') return;
    function compare(row1, row2) {
      const rowData1 = row1.cells[index].innerHTML;
      const rowData2 = row2.cells[index].innerHTML;
      if (!Number(row1.cells[index].innerHTML)) {
        return rowData1 > rowData2 ? 1 : -1;
      }
      return rowData1 - rowData2;
    }

    function compareDesc(row1, row2) {
      const rowData1 = row1.cells[index].innerHTML;
      const rowData2 = row2.cells[index].innerHTML;
      if (!Number(row1.cells[index].innerHTML)) {
        return rowData1 > rowData2 ? -1 : 1;
      }
      return rowData2 - rowData1;
    }
    if (asc === true) {
      asc = false;
      rowsArray.sort(compare);
    } else if (asc === false) {
      asc = true;
      rowsArray.sort(compareDesc);
    }

    table.removeChild(tbody);
    rowsArray.forEach((item) => tbody.appendChild(item));
    table.appendChild(tbody);
  });
  localStorage.setItem('0', JSON.stringify(scoreArray));
}

export function findObject(word, index) {
  let x;
  for (let i = 1; i < cards.length; i++) {
    // eslint-disable-next-line no-loop-func
    cards[i].forEach((item) => {
      if (item.word === word) {
        x = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index);
      }
    });
  }
  return x;
}

export default function createScore() {
  document.querySelector('.cards').innerHTML = `<div class="table-container"><table class="table table-hover">
  <thead>
    <tr class="table-dark">
      <th scope="col">English</th>
      <th scope="col">Russian</th>
      <th scope="col">Success</th>
      <th scope="col">Fail</th>
      <th scope="col">Success Score</th>
      <th scope="col">Clicks</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table></div>`;
  document.querySelector('.form-check-input').checked = false;
  // resetGame();

  const tableContainer = document.querySelector('.table-container');
  const resetRepeatPlate = document.createElement('div');
  resetRepeatPlate.classList.add('reset-repeat-plate', 'd-inline-flex', 'justify-content-center');
  tableContainer.append(resetRepeatPlate);
  const btnRepeat = document.createElement('button');
  const btnReset = document.createElement('button');
  resetRepeatPlate.append(btnRepeat);
  resetRepeatPlate.append(btnReset);
  btnRepeat.classList.add('btn', 'btn-primary', 'btn-lg', 'repeat');
  btnReset.classList.add('btn', 'btn-primary', 'btn-lg', 'reset');
  btnRepeat.innerHTML = 'Repeat difficult words';
  btnReset.innerHTML = 'Reset';

  scoreArray.forEach((item) => {
    const table = document.querySelector('tbody');
    const row = document.createElement('tr');
    row.classList.add('table-active');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');
    const cell5 = document.createElement('td');
    const cell6 = document.createElement('td');
    const cell7 = document.createElement('td');

    function successScore() {
      if (Number(cell3.innerHTML) === 0 && Number(cell4.innerHTML) === 0) {
        return '0%';
      }
      return `${Math.round((Number(item.score) * 100) / (Number(item.score) + Number(item.fail)))}%`;
    }

    cell1.innerHTML = item.word;
    cell2.innerHTML = item.translation;
    cell3.innerHTML = item.score;
    cell4.innerHTML = item.fail;
    cell5.innerHTML = successScore();
    cell6.innerHTML = item.clicks;
    cell7.innerHTML = item.category;
    row.append(cell1);
    row.append(cell2);
    row.append(cell3);
    row.append(cell4);
    row.append(cell5);
    row.append(cell6);
    row.append(cell7);
    table.append(row);
  });
  tableSort();

  resetRepeatPlate.addEventListener('click', (e) => {
    if (e.target.classList.contains('repeat')) {
      const repeatArray = scoreArray.slice(0).sort((a, b) => (a.fail < b.fail ? 1 : -1));
      arrayOfcards.length = 0;
      for (let i = 0; i < 8; i++) {
        if (repeatArray[i].fail !== 0) {
          arrayOfcards.push(findObject(repeatArray[i].word, i));
        }
      }
      document.querySelector('.form-check-input').checked = false;
      // resetGame();
      document.querySelector('.cards').innerHTML = '';
      arrayOfcards.forEach((item) => item.getCard());
      // checkToggle();
      if (arrayOfcards.length === 0) {
        document.querySelector('.cards').innerHTML = '<div class="d-flex justify-content-center no-words"><h2>There is no difficult words ;)</h2></div>';
      }
    }
    if (e.target.classList.contains('reset')) {
      localStorage.clear();
      scoreArray.length = 0;
      createScoreItems();
      createScore();
    }
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

export { scoreArray };
