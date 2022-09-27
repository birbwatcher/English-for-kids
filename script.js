import cards from './data/cards.js';

let cardsGrid = document.querySelector('.cards');

function createCard(cardImage, title) {
    let col = document.createElement('div');
    col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    let card = document.createElement('div');
    card.classList.add('card');
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


console.log(cards[1]);

function createCards(cardsSet) {
    cards[cardsSet].forEach(function(item){
        createCard(item.image, item.word);
    })
}

createCards(3);

document.querySelector('.form-check-input').onclick = function() {
    let trainSwitch = document.querySelector('.switch');
    trainSwitch.classList.toggle('switch-on');
    if (trainSwitch.classList.contains('switch-on')) {
        trainSwitch.innerHTML = "Train";
    } else {
        trainSwitch.innerHTML = "Play";
    }
}