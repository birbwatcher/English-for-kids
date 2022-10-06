import cards from '../data/cards.js';
import createCard from './createCard.js';
import { createCategory } from './createCard.js';
import { createOffcanvasMenu } from './createCard.js';
import gameInit, { resetGame } from './game.js';

const cardsGrid = document.querySelector('.cards');
let offcanvasBody = document.querySelector('.offcanvas-body');
const gameToggle = document.querySelector('.form-check-input');

gameToggle.onclick = function() {
    checkToggle();
}

function checkToggle() {
    gameInit();
    let trainSwitch = document.querySelector('.switch');
    let english = document.querySelectorAll('.english');
    // trainSwitch.classList.toggle('switch-on');
    console.log(gameToggle.checked)
    if (gameToggle.checked) {
        trainSwitch.innerHTML = "Train";
        trainSwitch.classList.add('switch-on');
        english.forEach(item => item.classList.add('hidden'))
        document.querySelectorAll('.front').forEach(item => item.classList.remove('flipped'))
        document.querySelectorAll('.back').forEach(item => item.classList.remove('unflipped'))
        if (document.querySelectorAll('.category').length === 0) {
            document.querySelector('.play').classList.remove('hidden');
            document.querySelector('.progress').classList.remove('hidden');
        }
    } 
    if (!gameToggle.checked) {
        console.log('helo');
        resetGame();
        trainSwitch.innerHTML = "Play";
        trainSwitch.classList.remove('switch-on');
        english.forEach(item => item.classList.remove('hidden'))
        document.querySelector('.play').classList.add('hidden')
        document.querySelector('.progress').classList.add('hidden')
        document.querySelector('.play').innerHTML = 'Play';
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
        this.audioSrc = './data/' + audioSrc;
        this.id = id;
    }
    getWord(){
        return this.word;
    }
    getCard(){
        createCard(this.image, this.word, this.id, this.translation)
    }
    getSound(){
        // if (!gameToggle.checked) {
        new Audio(this.audioSrc).play()
        // }
    }
}

const categories = [];
const arrayOfcards = [];

function createCategories(){
    gameToggle.checked = false;
    resetGame()
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
    checkToggle()
}

function createItems(cardsSet) {
    gameToggle.checked = false;
    resetGame();
    arrayOfcards.length = 0;
    document.querySelector('.row').innerHTML = '';
    cards[cardsSet].forEach(function(item, index){
        let card = new BaseCard(item.word, item.translation, item.image, item.audioSrc, index)
        arrayOfcards.push(card);
    })
    arrayOfcards.forEach(item => item.getCard())
    checkToggle();
}

createCategories()




cardsGrid.addEventListener('click', function(e) {
    let cardsFrontItems = document.querySelectorAll('.front');
    let cardsBackItems = document.querySelectorAll('.back');
    if (e.target.classList.contains('rotate')) {
        let index = e.target.parentNode.parentNode.parentNode.id;
        cardsFrontItems[index].classList.add('flipped');
        cardsBackItems[index].classList.add('unflipped');
    }
    if (e.target.parentElement.classList.contains('front')) {
        let index = e.target.parentElement.parentElement.id;
        if (!gameToggle.checked) {
            arrayOfcards[index].getSound();
        }
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
    document.querySelectorAll('.active').forEach(item => item.classList.remove())
    e.target.classList.add('active');
    let categoryId = e.target.getAttribute('data');
    if (categoryId > 0) {
        createItems(categoryId)
    } else {
        createCategories()
    }
}

})




export {cardsGrid}
export {gameToggle}
export {arrayOfcards}