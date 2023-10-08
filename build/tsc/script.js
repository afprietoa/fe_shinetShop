import types from './data/types.js';
import brands from './data/brands.js';
import { addProductToSessionStorage } from './utils/sessionStorage.js';
import { printHeader } from './modules/printHeader.js';
import { Products } from './classes/product.js';
import { Storage } from './classes/storage.js';
import './classes/cart.js';
import { Cart } from './classes/cart.js';
import { printNavbar } from './modules/printNavbar.js';
var headerContainer = document.getElementById('header-container');
var cardsContainer = document.getElementById('cards-container');
var listContainer1 = document.getElementById('list-container-1');
var listContainer2 = document.getElementById('list-container-2');
var navContainer = document.getElementById('nav-container');
// const buttons = Array.from(document.querySelectorAll(".bag-btn"));  
var sorts = Array("alphabetical", "lowToHigh", "highToLow");
var alinks1 = Array("Home", "Shop", "Contact");
var aLinks2 = Array("Login", "Sign Up");
document.addEventListener('DOMContentLoaded', function () {
    try {
        printNavbar(navContainer, alinks1, aLinks2);
        printHeader(headerContainer, 'Shop');
        var items_1 = new Products();
        items_1.getProducts()
            .then(function (products) {
            items_1.displayProducts(cardsContainer, products);
            items_1.displayList(listContainer1, brands);
            items_1.displayList(listContainer2, types);
            items_1.filterProducts(types, products, cardsContainer);
            items_1.filterProducts(brands, products, cardsContainer);
            items_1.sortProducts(sorts, products, cardsContainer);
            Storage.saveProducts(products);
        }).then(function () {
        });
    }
    catch (error) {
        console.log(error);
    }
});
document.addEventListener('click', function (event) {
    var cart = new Cart();
    var target = event.target;
    if (target.classList.contains('view')) {
        addProductToSessionStorage(target.id);
        location.href = "../src/pages/detail.html";
    }
    if (target.classList.contains('bag-btn')) {
        console.log(target.dataset.id);
        cart.addToCart(target.dataset.id);
    }
});
