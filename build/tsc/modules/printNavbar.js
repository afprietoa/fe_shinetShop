export var printNavbar = function (container, array1, array2) {
    var img = document.createElement('img');
    img.setAttribute('src', '../../build/assets/images/logo.png');
    img.setAttribute('style', 'max-height: 70px;');
    img.setAttribute('alt', 'logo');
    var nav = document.createElement('nav');
    nav.setAttribute('class', 'my-2 text-uppercase fs-4');
    array1.forEach(function (link) {
        var aLink = document.createElement('a');
        aLink.setAttribute('class', 'p-2 text-dark text-decoration-none');
        aLink.setAttribute('href', "".concat(link == 'Shop' ? '../../../index.html' :
            link == 'Home' ? '../../src/pages/home.html' :
                '../../src/pages/contact.html'));
        var aLinkTxt = document.createTextNode(link);
        aLink.appendChild(aLinkTxt);
        nav.appendChild(aLink);
    });
    var divLinks = document.createElement('div');
    divLinks.setAttribute('class', 'd-flex align-items-center');
    var aCart = document.createElement('a');
    aCart.setAttribute('class', 'position-relative');
    aCart.setAttribute('href', '../../src/pages/basket.html');
    var iCart = document.createElement('i');
    iCart.setAttribute('class', 'fa fa-shopping-cart fa-2x me-5 text-dark');
    var divCart = document.createElement('div');
    divCart.setAttribute('class', 'cart-no cart-items');
    var accountTxt = document.createTextNode("0");
    divCart.appendChild(accountTxt);
    aCart.appendChild(iCart);
    aCart.appendChild(divCart);
    divLinks.appendChild(aCart);
    array2.forEach(function (link) {
        var aLink2 = document.createElement('a');
        aLink2.setAttribute('class', 'btn btn-outline-secondary me-2');
        aLink2.setAttribute('href', "".concat(link == 'Login' ? '../../src/pages/login.html' :
            '../../src/pages/signup.html'));
        var aLinkTxt2 = document.createTextNode(link);
        aLink2.appendChild(aLinkTxt2);
        divLinks.appendChild(aLink2);
    });
    container === null || container === void 0 ? void 0 : container.appendChild(img);
    container === null || container === void 0 ? void 0 : container.appendChild(nav);
    container === null || container === void 0 ? void 0 : container.appendChild(divLinks);
};
