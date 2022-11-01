// eslint-disable-next-line import/no-cycle
import gameInit, { resetGame } from './game.js';

const gameToggle = document.querySelector('.form-check-input');

export default function checkToggle() {
  gameInit();
  const trainSwitch = document.querySelector('.switch');
  const english = document.querySelectorAll('.english');
  if (gameToggle.checked) {
    trainSwitch.innerHTML = 'Train';
    trainSwitch.classList.add('switch-on');
    english.forEach((item) => item.classList.add('hidden'));
    document.querySelectorAll('.front').forEach((item) => item.classList.remove('flipped'));
    document.querySelectorAll('.back').forEach((item) => item.classList.remove('unflipped'));
    if (document.querySelectorAll('.category').length === 0 && document.querySelectorAll('table').length === 0 && !document.querySelector('.no-words')) {
      document.querySelector('.play').classList.remove('hidden');
      document.querySelector('.progress').classList.remove('hidden');
    }
  }
  if (!gameToggle.checked) {
    resetGame();
    trainSwitch.innerHTML = 'Play';
    trainSwitch.classList.remove('switch-on');
    english.forEach((item) => item.classList.remove('hidden'));
    document.querySelector('.play').classList.add('hidden');
    document.querySelector('.progress').classList.add('hidden');
    document.querySelector('.play').innerHTML = 'Play';
    document.querySelectorAll('.solved').forEach((item) => item.classList.remove('solved'));
    document.querySelector('.stars').innerHTML = '';
  }
}

gameToggle.onclick = function toggle() {
  checkToggle();
};

export { gameToggle };
