import { printCards } from './modules/printCards.js';
import products from './data/products.js';
var container = document.getElementById('cards-container');
document.addEventListener('DOMContentLoaded', function () {
    printCards(container, products);
});
