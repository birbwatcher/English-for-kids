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

class Category {
    constructor(name, id) {
        this.name = name;
        // this.image = image;
        this.id = id;
    }
    getCategory() {
        createCategory(this.image, this.name, this.id);
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


function createCategory(cardImage, title, index) {
    let col = document.createElement('div');
    col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    col.id = index;

    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body','english');
    let cardTitle = document.createElement('h5');
    cardTitle.innerHTML = title;
    cardBody.append(cardTitle);

    card.append(cardBody);

    col.append(card);
    cardsGrid.append(col);
}

let categories = [];
let clothes = [];
let emotions = [];
let setA = [];
let setC = [];

function createCategories(){
    cards[0].forEach(function(item, index){
        let category = new Category(item, index)
        categories.push(category)
    })
}

function createItems(cardsSet, classSet) {
    cards[cardsSet].forEach(function(item, index){
        let card = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index)
        classSet.push(card);
    })
}

createItems(5,clothes)
createItems(6,emotions)
createItems(3,setC)


console.log(emotions);
createCategories()
categories.forEach(item => item.getCategory())

// emotions.forEach(item => item.getCard())
// setC.forEach(item => item.getCard())

// cardsGrid.onclick = function (e) {

// }

let cardsFrontItems = document.querySelectorAll('.front');
let cardsBackItems = document.querySelectorAll('.back');


cardsGrid.addEventListener('click', function(e) {
    console.log(e.target.parentNode.parentNode.id)
    if (e.target.classList.contains('rotate')) {
        let index = e.target.parentNode.parentNode.parentNode.id;

        cardsFrontItems[index].classList.add('flipped');
        cardsBackItems[index].classList.add('unflipped');
    }
    if (e.target.parentElement.classList.contains('front')) {
        let index = e.target.parentElement.parentElement.id;
        console.log(clothes[index].getWord())
    }
})

cardsGrid.addEventListener('mouseout', function(e) {
    // console.log(e.target.parentNode.parentNode.id);
    let index = e.target.parentNode.parentNode.id;
    if (e.target.parentElement.classList.contains('back')) {
        cardsFrontItems[index].classList.remove('flipped');
        cardsBackItems[index].classList.remove('unflipped');
    }
})

export {cardsGrid}