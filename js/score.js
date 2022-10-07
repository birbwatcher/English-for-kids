// eslint-disable-next-line import/no-cycle
import { gameToggle } from './script.js';
// eslint-disable-next-line import/no-cycle
import { resetGame } from './game.js';

export default function createScore() {
  document.querySelector('.row').innerHTML = '';
  gameToggle.checked = false;
  resetGame();
}
