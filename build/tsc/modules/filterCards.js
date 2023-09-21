import { printCards } from "./printCards.js";
import types from '../data/types.js';
import brands from '../data/brands.js';
export var filterCards = function (criteriaList, productArray, container) {
    criteriaList.forEach(function (criteria) {
        var option = document.getElementById(criteria.name);
        option.addEventListener('click', function () {
            var selection = option.id;
            var products = types.includes(criteria) ? productArray.filter(function (product) { return product.productType == selection; }) : brands.includes(criteria) ? productArray.filter(function (product) { return product.productBrand == selection; }) : productArray;
            printCards(container, products);
        });
    });
};
