import cards from './data/cards.js';

let cardsGrid = document.querySelector('.cards');
let rotateIcons = document.querySelectorAll('.rotate');

function createCard(cardImage, title, index, translation) {
    let col = document.createElement('div');
    col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    let card = document.createElement('div');
    card.classList.add('card');
    card.id = index;
    let image = document.createElement('img');
    image.classList.add('card-img-top');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardBodyRotated = document.createElement('div');
    cardBodyRotated.classList.add('card-body', 'card-body-rotated');

    let cardTitle = document.createElement('h5');
    let cardTranslation = document.createElement('h5');
    let rotate = document.createElement('img');
    rotate.classList.add('rotate');
    rotate.src = './data/img/rotate.svg';
    cardTitle.innerHTML = title;
    cardTranslation.innerHTML = translation;
    image.src = './data/' + cardImage;
    cardsGrid.append(col);
    card.append(image);
    cardBody.append(cardTitle);
    cardBody.append(rotate);
    cardBodyRotated.append(cardTranslation);
    card.append(cardBody);
    card.append(cardBodyRotated);
    col.append(card);
}


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