import { printHeader } from './modules/printHeader.js';
var headerContainer = document.getElementById('header-container');
document.addEventListener('DOMContentLoaded', function () {
    try {
        printHeader(headerContainer, "Login");
    }
    catch (error) {
        console.log(error);
    }
});
