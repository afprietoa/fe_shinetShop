// ----------------------------Product------------------------------------
export var addProductToSessionStorage = function (product) {
    sessionStorage.setItem('product', JSON.stringify(product));
};
export var removeProductFromSessionStorage = function () {
    sessionStorage.removeItem('product');
};
export var getProductFromSessionStorage = function () {
    var result = sessionStorage.getItem('product');
    var product = result ? JSON.parse(result) : null;
    return product;
};
