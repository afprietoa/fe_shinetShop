export var printTHead = function (thead, array) {
    var tr = document.createElement('tr');
    array.forEach(function (item) {
        console.log(item);
        var th = document.createElement('th');
        th.setAttribute('class', 'py-2');
        var txt = document.createTextNode(item);
        th.appendChild(txt);
        tr === null || tr === void 0 ? void 0 : tr.appendChild(th);
    });
    thead === null || thead === void 0 ? void 0 : thead.appendChild(tr);
};
