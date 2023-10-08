import { filterCards } from "../modules/filterCards.js";
import { printCards } from "../modules/printCards.js";
import { printList } from "../modules/printList.js";
import { sortCards } from "../modules/sortCards.js";
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.displayProducts = function (cardsContainer, products) {
        printCards(cardsContainer, products);
    };
    UI.prototype.displayList = function (listContainer, category) {
        printList(listContainer, category);
    };
    UI.prototype.filterProducts = function (category, products, cardsContainer) {
        filterCards(category, products, cardsContainer);
    };
    UI.prototype.sortProducts = function (sorts, products, cardsContainer) {
        sortCards(sorts, products, cardsContainer);
    };
    return UI;
}());
export { UI };
