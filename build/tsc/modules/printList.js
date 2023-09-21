export var printList = function (container, array) {
    array.forEach(function (item) {
        var liTxt = document.createElement('li');
        liTxt.setAttribute('class', 'list-group-item cursor-pointer');
        liTxt.setAttribute('id', item.name);
        var txtName = document.createTextNode(item.name);
        liTxt.appendChild(txtName);
        container === null || container === void 0 ? void 0 : container.appendChild(liTxt);
    });
};
