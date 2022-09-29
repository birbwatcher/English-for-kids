import {cardsGrid} from "./script.js";

export default function createCard(cardImage, title, index, translation) {
    let col = document.createElement('div');
    col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    let card = document.createElement('div');
    card.classList.add('card');
    card.id = index;
    let image = document.createElement('img');
    image.classList.add('card-img-top');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body','english');
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