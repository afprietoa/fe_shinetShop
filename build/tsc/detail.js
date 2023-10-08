import { printCard } from './modules/printCard.js';
import products from './data/products.js';
import { getProductFromSessionStorage } from './utils/sessionStorage.js';
import { printHeader } from './modules/printHeader.js';
import { printNavbar } from './modules/printNavbar.js';
var headerContainer = document.getElementById('header-container');
var cardContainer = document.getElementById('card-container');
var navContainer = document.getElementById('nav-container');
var alinks1 = Array("Home", "Shop", "Contact");
var aLinks2 = Array("Login", "Sign Up");
var productIdStr = getProductFromSessionStorage()
    ? JSON.parse(getProductFromSessionStorage())
    : "";
var productId = productIdStr ? parseInt(productIdStr) : null;
document.addEventListener('DOMContentLoaded', function () {
    try {
        if (productId) {
            var product = products.filter(function (item) { return item.id === productId; });
            printNavbar(navContainer, alinks1, aLinks2);
            printHeader(headerContainer, product[0].name);
            printCard(cardContainer, product[0]);
        }
    }
    catch (error) {
        console.log(error);
    }
});
