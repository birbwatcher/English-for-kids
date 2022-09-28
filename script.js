import cards from './data/cards.js';

let cardsGrid = document.querySelector('.cards');
let rotateIcons = document.querySelectorAll('.rotate');

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
    let rotate = document.createElement('button');
    rotate.classList.add('rotate');
    rotate.innerHTML = '<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>'
    cardTitle.innerHTML = title;
    image.src = './data/' + cardImage;

    cardsGrid.append(col);
    card.append(image);
    cardBody.append(cardTitle);
    cardBody.append(rotate);
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

cardsGrid.onclick = function (e) {
    if (e.target.parentElement.classList.contains('card')) {
        let index = e.target.parentElement.id;
        console.log(emotions[index].getWord())
    }

}
