import {printCards} from './modules/printCards.js';
import products from './data/products.js';

const container = document.getElementById('cards-container') as HTMLFormElement;

document.addEventListener('DOMContentLoaded',()=>{

    printCards(container, products);
})