import { printCard } from './modules/printCard.js';
import products from './data/products.js';
import { getProductFromSessionStorage } from './utils/sessionStorage.js';
var cardContainer = document.getElementById('card-container');
var productIdStr = getProductFromSessionStorage()
    ? JSON.parse(getProductFromSessionStorage())
    : "";
var productId = productIdStr ? parseInt(productIdStr) : null;
document.addEventListener('DOMContentLoaded', function () {
    try {
        if (productId) {
            var product = products.filter(function (item) { return item.id === productId; });
            printCard(cardContainer, product[0]);
        }
    }
    catch (error) {
        console.log(error);
    }
});
