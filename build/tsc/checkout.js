import { printHeader } from './modules/printHeader.js';
import { printNavbar } from './modules/printNavbar.js';
var navContainer = document.getElementById('nav-container');
var headerContainer = document.getElementById('header-container');
var alinks1 = Array("Home", "Shop", "Contact");
var aLinks2 = Array("Login", "Sign Up");
document.addEventListener('DOMContentLoaded', function () {
    try {
        printNavbar(navContainer, alinks1, aLinks2);
        printHeader(headerContainer, "Checkout");
    }
    catch (error) {
        console.log(error);
    }
});
