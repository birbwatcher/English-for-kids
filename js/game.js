import {arrayOfcards} from "./script.js";
// import {cardsGrid} from "./script.js";

let gameArray = [];
let gameStarted = false;
let card;

let cardsGrid = document.querySelector('.cards');
let progress = document.querySelector('.progress-bar');

export default function gameInit() {
    gameArray = shuffleArray(arrayOfcards).slice(0);
    // console.log(gameArray);

}

export function gameStart() {
    document.querySelector('.play').innerHTML = 'Repeat word';
    gameStarted = true;
    card = gameArray.pop();
}

document.querySelector('.game').addEventListener('click', function(e) {
    console.log(gameStarted)
    if (e.target.classList.contains('play')) {
        if (!gameStarted) {
            gameStart();
        }
        card.getSound();
    }
})

cardsGrid.addEventListener('click', function(e) {
    if (gameStarted) {
        let index = e.target.parentNode.parentNode.id;
        console.log(arrayOfcards[index].word)
        if (arrayOfcards[index].word !== card.word) {
            console.log('nooo')
            new Audio('./data/audio/error.mp3').play()
        }
        if (arrayOfcards[index].word === card.word) {
            console.log('yes!')
            card = gameArray.pop();
            new Audio('./data/audio/correct.mp3').play()
            progress.style.width = parseNumber(progress.style.width) + 12.5 + '%';
            card.getSound();
        }
    }
})

function shuffleArray(array) {
    let newArray = array.slice(0)
    return newArray.sort( ()=>Math.random()-0.5 );
 }

export function resetGame() {
    console.log('reset');
    gameStarted = false;
}


function parseNumber(number) {
    return Number(number.replace(/[^0-9\.-]+/g,""))
  }