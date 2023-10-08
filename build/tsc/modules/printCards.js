export var printCards = function (container, array) {
    while (container === null || container === void 0 ? void 0 : container.firstChild) {
        container.removeChild(container.firstChild);
    }
    array.forEach(function (product) {
        var divCard = document.createElement('div');
        divCard.setAttribute('class', 'card h-100 shadow-sm');
        var imgCard = document.createElement('img');
        imgCard.setAttribute('src', "".concat(product.pictureUrl));
        imgCard.setAttribute('class', 'img-fluid bg-info');
        var divBody = document.createElement('div');
        divBody.setAttribute('class', 'card-body d-flex flex-column');
        var aTxt = document.createElement('a');
        aTxt.setAttribute('class', 'text-decoration-none');
        var h6Txt = document.createElement('h6');
        h6Txt.setAttribute('class', 'text-uppercase product-title');
        var txtName = document.createTextNode(product.name);
        h6Txt.appendChild(txtName);
        aTxt.appendChild(h6Txt);
        var spanTxt = document.createElement('span');
        spanTxt.setAttribute('class', 'mb-2');
        var txtPrice = document.createTextNode("$".concat(product.price.toString()));
        spanTxt.appendChild(txtPrice);
        var divControls = document.createElement('div');
        divControls.setAttribute('class', 'btn-group mt-auto');
        var btnCart = document.createElement('button');
        btnCart.setAttribute('class', 'btn btn-outline-secondary me-2 bag-btn');
        btnCart.setAttribute('data-id', "".concat(product.id));
        var txtCart = document.createTextNode('Add To Bag');
        btnCart.appendChild(txtCart);
        var btnView = document.createElement('button');
        btnView.setAttribute('class', 'btn btn-outline-secondary view');
        btnView.setAttribute('id', product.id.toString());
        var txtView = document.createTextNode('View');
        btnView.appendChild(txtView);
        divControls.appendChild(btnCart);
        divControls.appendChild(btnView);
        divBody.appendChild(aTxt);
        divBody.appendChild(spanTxt);
        divBody.appendChild(divControls);
        divCard.appendChild(imgCard);
        divCard.appendChild(divBody);
        container === null || container === void 0 ? void 0 : container.appendChild(divCard);
    });
};
