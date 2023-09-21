import { printCards } from './modules/printCards.js';
import products from './data/products.js';
import { printList } from './modules/printList.js';
import { filterCards } from './modules/filterCards.js';
import types from './data/types.js';
import brands from './data/brands.js';
import { sortCards } from './modules/sortCards.js';
var cardsContainer = document.getElementById('cards-container');
var listContainer1 = document.getElementById('list-container-1');
var listContainer2 = document.getElementById('list-container-2');
var sorts = Array("alphabetical", "lowToHigh", "highToLow");
document.addEventListener('DOMContentLoaded', function () {
    try {
        printCards(cardsContainer, products);
        printList(listContainer1, brands);
        printList(listContainer2, types);
        filterCards(types, products, cardsContainer);
        filterCards(brands, products, cardsContainer);
        sortCards(sorts, products, cardsContainer);
    }
    catch (error) {
        console.log(error);
    }
});
