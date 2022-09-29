import cards from '../data/cards.js';
import createCard from  '../js/createCard.js'

let cardsGrid = document.querySelector('.cards');
let rotateIcons = document.querySelectorAll('.rotate');

console.log(cards[0]);

document.querySelector('.form-check-input').onclick = function() {
    let trainSwitch = document.querySelector('.switch');
    trainSwitch.classList.toggle('switch-on');
    if (trainSwitch.classList.contains('switch-on')) {
        trainSwitch.innerHTML = "Train";
    } else {
        trainSwitch.innerHTML = "Play";
    }
}

class BaseCard {
    constructor(word, translation, image, audioSrc, id) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;
        this.id = id;
    }
    getWord(){
        return this.word;
    }
    getCard(){
        createCard(this.image, this.word, this.id, this.translation)
    }
}

let clothes = [];
let emotions = [];

function createItems(cardsSet, classSet) {
    cards[cardsSet].forEach(function(item, index){
        let card = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index)
        classSet.push(card);
    })
}

createItems(5,clothes)
// createItems(6,emotions)


console.log(emotions);

// emotions.forEach(item => item.getCard())
clothes.forEach(item => item.getCard())

// cardsGrid.onclick = function (e) {

// }

cardsGrid.addEventListener('click', function(e) {
    if (e.target.classList.contains('rotate')) {
        let index = e.target.parentNode.parentNode.id;
        let cardsItems = document.querySelectorAll('.card');
        cardsItems[index].classList.add('flipped')
    }
    if (e.target.parentElement.classList.contains('card')) {
        let index = e.target.parentElement.id;
        console.log(clothes[index].getWord())
    }
})

export {cardsGrid}