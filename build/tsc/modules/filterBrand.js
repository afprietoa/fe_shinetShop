import { printCards } from "./printCards.js";
export var filterTypes = function (typesList, propertyArray, cardsContainer) {
    typesList.forEach(function (type) {
        var typeOption = document.getElementById(type);
        typeOption.addEventListener('click', function () {
            var typeDatum = typeOption.id;
            var filter = propertyArray.filter(function (property) { return property.type == typeDatum; });
            var filteredProperties = typeDatum === 'all' ? propertyArray : filter;
            printCards(cardsContainer, filteredProperties);
        });
    });
};
