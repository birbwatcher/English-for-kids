import {cardsGrid} from "./script.js";

export default function createCard(cardImage, title, index, translation) {
    let col = document.createElement('div');
    col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    // let card = document.createElement('div');
    // card.classList.add('card');

    let front = document.createElement('div');
    front.classList.add('card','front');

    let back = document.createElement('div');
    back.classList.add('card','back');

    col.id = index;
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

    let imageFlipped = image.cloneNode(true);
    
    front.append(image);
    cardBody.append(cardTitle);
    cardBody.append(rotate);

    front.append(cardBody);

    back.append(imageFlipped);
    cardBodyRotated.append(cardTranslation);
    back.append(cardBodyRotated);

    col.append(front);
    col.append(back);
    // col.append(card);
}


export function createCategory(cardImage, title, index) {
    let col = document.createElement('div');
    col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    col.id = index;

    let card = document.createElement('div');
    card.classList.add('card','category');

    let image = document.createElement('img');
    image.classList.add('card-img-top');

    image.src = './data/' + cardImage;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body','english');
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('title')
    cardTitle.innerHTML = title;
    cardBody.append(cardTitle);

    card.append(image);
    card.append(cardBody);


    col.append(card);
    cardsGrid.append(col);
}