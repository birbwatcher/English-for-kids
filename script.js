import cards from './data/cards.js';

let cardsGrid = document.querySelector('.cards');
let cardsItems = document.querySelectorAll('.card-body');

function createCard(cardImage, title, index) {
    let col = document.createElement('div');
    col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    let card = document.createElement('div');
    card.classList.add('card');
    card.id = index;
    let image = document.createElement('img');
    image.classList.add('card-img-top');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardTitle = document.createElement('h5');

    cardTitle.innerHTML = title;
    image.src = './data/' + cardImage;

    cardsGrid.append(col);
    card.append(image);
    cardBody.append(cardTitle);
    card.append(cardBody);
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
        createCard(this.image, this.word, this.id)
    }
}

let emotions = [];

function createItems(cardsSet, classSet) {
    cards[cardsSet].forEach(function(item, index){
        let card = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index)
        classSet.push(card);
    })
}

createItems(1,emotions)

console.log(emotions);

emotions.forEach(item => item.getCard())

cardsGrid.onclick = function (e) {
    console.log(this.id)
}