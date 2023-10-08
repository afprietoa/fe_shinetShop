var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { printBody } from "../modules/printTBody.js";
import { Storage } from "./storage.js";
var cartSubtotal = document.querySelector(".cart-subtotal");
var cartTotal = document.querySelector(".cart-total");
var tableContent = document.querySelector(".table-body");
// const clearCartBtn = document.querySelector(".clear-cart") as HTMLElement;
var Cart = /** @class */ (function () {
    function Cart() {
        var _this = this;
        this.init = function () {
            var cart = Storage.getItem('cart');
            // // display amount of cart items
            // this.displayCartItemCount();
            // // display total
            // this.displayCartTotal();
            // // add all cart items to the dom
            _this.displayCartItems();
            // setup cart functionality
            _this.setupCart();
        };
        this.cart = Storage.getItem('cart') ? Storage.getItem('cart') : [];
    }
    Cart.prototype.addCartItem = function (item) {
        printBody(tableContent, item);
    };
    //  public setCartValues(cart, cartTotal, cartItems){
    //   let tempTotal = 0;
    //   let itemsTotal = 0;
    //   cart.map(item => {
    //     tempTotal += item.price * item.quantity;
    //     itemsTotal += item.quantity;
    //   });
    //   cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    //   cartItems.innerText = itemsTotal;
    // }
    Cart.prototype.addToCart = function (id) {
        this.cart = Storage.getItem('cart') ? Storage.getItem('cart') : [];
        console.log(this.cart);
        var item = this.cart.length !== 0 ? this.cart.find(function (cartItem) { return cartItem.id === id; }) : null;
        if (!item) {
            var product = Storage.findProduct(id);
            // add item to the the
            product = __assign(__assign({}, product), { quantity: 1 });
            this.cart = __spreadArray(__spreadArray([], this.cart, true), [product], false);
            // add item to the DOM;
            // this.addCartItem(product);
        }
        else {
            // update values
            var amount = this.increaseAmount(id);
            var nodeList = tableContent.querySelectorAll('.cart-item-amount');
            var items = Array.from(nodeList).map(function (item) { return item; });
            var newAmount = items.find(function (value) { return value.dataset.id === id; });
            newAmount.textContent = amount.toString();
        }
        // // add one to the item count
        // this.displayCartItemCount();
        // // display cart totals
        // this.displayCartTotal();
        // // set cart in local storage
        Storage.setItem('cart', this.cart);
    };
    Cart.prototype.removeItem = function (id) {
        this.cart = this.cart.filter(function (cartItem) { return cartItem.id !== id; });
    };
    Cart.prototype.increaseAmount = function (id) {
        var newAmount = 0;
        this.cart = this.cart.map(function (cartItem) {
            if (cartItem.id === id) {
                newAmount = cartItem.quantity + 1;
                cartItem = __assign(__assign({}, cartItem), { quantity: newAmount });
            }
            return cartItem;
        });
        return newAmount;
    };
    Cart.prototype.decreaseAmount = function (id) {
        var newAmount = 0;
        this.cart = this.cart.map(function (cartItem) {
            if (cartItem.id === id) {
                newAmount = cartItem.quantity - 1;
                cartItem = __assign(__assign({}, cartItem), { quantity: newAmount });
            }
            return cartItem;
        });
        return newAmount;
    };
    Cart.prototype.displayCartItemCount = function () {
        var cartItems = document.querySelector(".cart-items");
        var amount = this.cart.reduce(function (total, cartItem) {
            return (total += cartItem.quantity);
        }, 0);
        cartItems.textContent = amount.toString();
    };
    Cart.prototype.displayCartSubtotal = function () {
        var subtotal = this.cart.reduce(function (total, cartItem) {
            return (total += cartItem.price * cartItem.quantity);
        }, 0);
        cartSubtotal.textContent = "$ ".concat(subtotal, " ");
    };
    Cart.prototype.displayCartTotal = function () {
        var subtotal = this.cart.reduce(function (total, cartItem) {
            return (total += cartItem.price * cartItem.quantity);
        }, 0);
        cartTotal.textContent = "$ ".concat(subtotal + 330);
    };
    Cart.prototype.displayCartTotalItem = function (id) {
        var cartTotalItem = document.querySelector(".cart-total-item");
        var totalItem = 0;
        var item = this.cart.find(function (cartItem) { return cartItem.id === id; });
        totalItem = item.price * item.quantity;
        cartTotalItem.textContent = "$".concat(totalItem);
    };
    Cart.prototype.displayCartItems = function () {
        var _this = this;
        this.cart.forEach(function (cartItem) {
            _this.addCartItem(cartItem);
        });
    };
    Cart.prototype.setupCart = function () {
        var cart = Storage.getItem('cart');
        tableContent.addEventListener('click', function (e) {
            var _a, _b, _c, _d;
            var element = e.target;
            var parent = e.target.parentElement;
            var id = parseInt(e.target.dataset.id);
            // const parentID = parent.dataset.id;
            // remove
            if (element === null || element === void 0 ? void 0 : element.classList.contains('remove-item')) {
                this.removeItem(id);
                (_b = (_a = parent === null || parent === void 0 ? void 0 : parent.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
            }
            // increase
            if (element === null || element === void 0 ? void 0 : element.classList.contains('fa-plus-circle')) {
                var addAmount = e.target;
                var newAmount = this.increaseAmount(id);
                this.displayCartTotalItem(id);
                addAmount.previousElementSibling.textContent = newAmount.toString();
            }
            // decrease
            if (element === null || element === void 0 ? void 0 : element.classList.contains('fa-minus-circle')) {
                var removeAmount = e.target;
                console.log(id);
                var newAmount = this.decreaseAmount(id);
                this.displayCartTotalItem(id);
                if (newAmount === 0) {
                    this.removeItem(id);
                    (_d = (_c = parent === null || parent === void 0 ? void 0 : parent.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.remove();
                }
                else {
                    removeAmount.nextElementSibling.textContent = newAmount.toString();
                }
            }
            this.displayCartItemCount();
            this.displayCartSubtotal();
            this.displayCartTotal();
            Storage.setItem('cart', cart);
        }.bind(this));
    };
    return Cart;
}());
export { Cart };
