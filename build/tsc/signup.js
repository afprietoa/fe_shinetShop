import { printHeader } from './modules/printHeader.js';
var headerContainer = document.getElementById('header-container');
document.addEventListener('DOMContentLoaded', function () {
    try {
        printHeader(headerContainer, "Sign up");
    }
    catch (error) {
        console.log(error);
    }
});