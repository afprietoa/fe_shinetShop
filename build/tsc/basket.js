import { printHeader } from './modules/printHeader.js';
import './classes/cart.js';
import { Cart } from './classes/cart.js';
import { printTHead } from './modules/printTHead.js';
import { printNavbar } from './modules/printNavbar.js';
var headerContainer = document.getElementById('header-container');
var tableHeader = document.querySelector('.table-head');
var columns = Array("Product", "Price", "Quantity", "Total", "Remove");
var navContainer = document.getElementById('nav-container');
var alinks1 = Array("Home", "Shop", "Contact");
var aLinks2 = Array("Login", "Sign Up");
document.addEventListener('DOMContentLoaded', function () {
    try {
        printNavbar(navContainer, alinks1, aLinks2);
        printTHead(tableHeader, columns);
        printHeader(headerContainer, "Basket");
        var cart = new Cart();
        cart.init();
    }
    catch (error) {
        console.log(error);
    }
});
