var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.saveProducts = function (products) {
        localStorage.setItem("products", JSON.stringify(products));
    };
    Storage.getProduct = function (id) {
        var productString = localStorage.getItem("products");
        if (!productString) {
            // Puedes retornar un valor por defecto o manejar de otra manera
            return null;
        }
        var products = JSON.parse(productString);
        return products.find(function (product) { return product.id === id; });
    };
    Storage.setItem = function (name, item) {
        localStorage.setItem(name, JSON.stringify(item));
    };
    Storage.getItem = function (item) {
        var cartString = localStorage.getItem(item);
        if (!cartString) {
            return null;
        }
        return JSON.parse(cartString);
    };
    var _a;
    _a = Storage;
    Storage.findProduct = function (id) {
        var products = _a.getItem('products');
        var product = products.find(function (product) { return product.id == id; });
        return product;
    };
    return Storage;
}());
export { Storage };
