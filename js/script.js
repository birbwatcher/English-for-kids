import cards from '../data/cards.js';
import createCard from  '../js/createCard.js'
import {createCategory} from  '../js/createCard.js'
import {createOffcanvasMenu} from  '../js/createCard.js'

let cardsGrid = document.querySelector('.cards');
let offcanvasBody = document.querySelector('.offcanvas-body');

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
    constructor(name, id, image) {
        this.name = name;
        this.image = image;
        this.id = id;
        this.arrayNum = id + 1;
    }
    getCategoryName() {
        return this.name;
    }
    getCategoryNum(){
        return this.arrayNum
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

const categories = [];
const arrayOfcards = [];

function createCategories(){
    document.querySelector('.row').innerHTML = '';
    const categories = [];
    const categoryImages = [];
    for(let i=1;i<cards.length;i++) {
        categoryImages.push(cards[i][2].image)
    }

    cards[0].forEach(function(item, index){
        let category = new Category(item, index, categoryImages[index])
        categories.push(category)
    })
    categories.forEach(item => item.getCategory())
    if (document.querySelectorAll('.nav-item').length === 1) {
        categories.forEach(item => createOffcanvasMenu(item.getCategoryName(), item.getCategoryNum()))
    }
}

function createItems(cardsSet) {
    arrayOfcards.length = 0;
    document.querySelector('.row').innerHTML = '';
    cards[cardsSet].forEach(function(item, index){
        let card = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index)
        arrayOfcards.push(card);
    })
    arrayOfcards.forEach(item => item.getCard())
}

createCategories()




cardsGrid.addEventListener('click', function(e) {
    let cardsFrontItems = document.querySelectorAll('.front');
    let cardsBackItems = document.querySelectorAll('.back');
    // console.log(e.target.parentNode.parentNode.id)
    if (e.target.classList.contains('rotate')) {
        let index = e.target.parentNode.parentNode.parentNode.id;
        console.log(cardsFrontItems)
        cardsFrontItems[index].classList.add('flipped');
        cardsBackItems[index].classList.add('unflipped');
    }
    if (e.target.parentElement.classList.contains('front')) {
        let index = e.target.parentElement.parentElement.id;
        console.log(arrayOfcards[index].getWord())
    }
    if (e.target.parentElement.classList.contains('category')) {
        let index = Number(e.target.parentNode.parentNode.id)+1;
        createItems(index)
    }
})

cardsGrid.addEventListener('mouseout', function(e) {
    let cardsFrontItems = document.querySelectorAll('.front');
    let cardsBackItems = document.querySelectorAll('.back');
    let index = e.target.parentNode.parentNode.id;
    if (e.target.parentElement.classList.contains('back')) {
        cardsFrontItems[index].classList.remove('flipped');
        cardsBackItems[index].classList.remove('unflipped');
    }
})

offcanvasBody.addEventListener('click', function(e) {
if (e.target.classList.contains('nav-link')) {
    let categoryId = e.target.getAttribute('data');
    if (categoryId > 0) {
        createItems(categoryId)
    } else {
        createCategories()
    }
}

})

export {cardsGrid}