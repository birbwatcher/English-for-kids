// eslint-disable-next-line import/no-cycle
import { gameToggle } from './script.js';
// eslint-disable-next-line import/no-cycle
import { resetGame } from './game.js';

export default function createScore() {
  gameToggle.checked = false;
  resetGame();
  document.querySelector('.row').innerHTML = '';
}
