import { printCards } from "./printCards.js";
export var sortCards = function (criteriaList, productArray, container) {
    criteriaList.forEach(function (criteria) {
        var option = document.getElementById(criteria);
        option.addEventListener('click', function () {
            var selection = option.id;
            var products = "alphabetical" == selection ?
                productArray.sort(function (a, b) { return a.name.localeCompare(b.name); }) : "lowToHigh" == selection ?
                productArray.sort(function (a, b) { return a.price - b.price; }) : "highToLow" == selection ?
                productArray.sort(function (a, b) { return b.price - a.price; }) :
                productArray;
            printCards(container, products);
        });
    });
};
