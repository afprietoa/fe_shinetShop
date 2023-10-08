import { Basket } from "../interfaces/basket.js";
import { printBody } from "../modules/printTBody.js";
import { Storage } from "./storage.js";


const cartSubtotal = document.querySelector(".cart-subtotal") as HTMLElement;
const cartTotal = document.querySelector(".cart-total") as HTMLElement;
const tableContent = document.querySelector(".table-body") as HTMLElement;

// const clearCartBtn = document.querySelector(".clear-cart") as HTMLElement;

export class Cart {

  public cart:Array<Basket>;

  constructor(){
    this.cart = Storage.getItem('cart') ? Storage.getItem('cart'): [];
  }

   public addCartItem(item){
    printBody(tableContent, item);
   }
   
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
  public   addToCart(id) {
    this.cart = Storage.getItem('cart') ? Storage.getItem('cart'): [];
    console.log(this.cart);
    let item = this.cart.length !== 0 ? this.cart.find((cartItem) => cartItem.id === id) : null;
    if (!item) {
      let product = Storage.findProduct(id);
      // add item to the the
      product = { ...product, quantity: 1 };
      this.cart = [...this.cart, product];
      // add item to the DOM;
      // this.addCartItem(product);
    } else {
      // update values
      const amount = this.increaseAmount(id);
      const nodeList = tableContent.querySelectorAll('.cart-item-amount');
      const items: Array<HTMLElement> = Array.from(nodeList).map(item => item as HTMLElement);
      const newAmount = items.find((value: HTMLElement) => value.dataset.id === id);
      newAmount!.textContent = amount.toString();
    }
    // // add one to the item count
    // this.displayCartItemCount();
    // // display cart totals
    // this.displayCartTotal();
    // // set cart in local storage
    Storage.setItem('cart', this.cart);

  }

  public removeItem(id) {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== id);
  }
  public increaseAmount(id) {
    let newAmount:number = 0;
    this.cart = this.cart.map((cartItem) => {
      if (cartItem.id === id) {
        newAmount = cartItem.quantity + 1;
        cartItem = { ...cartItem, quantity: newAmount };
      }
      return cartItem;
    });
    return newAmount;
  }
  public decreaseAmount(id) {
    let newAmount:number = 0;
    this.cart = this.cart.map((cartItem:Basket) => {
      if (cartItem.id === id) {
        newAmount = cartItem.quantity - 1;
        cartItem = { ...cartItem, quantity: newAmount };
      }
      return cartItem;
    });
    return newAmount;
  }

  public displayCartItemCount() {
    const cartItems = document.querySelector(".cart-items") as HTMLElement;
    const amount:number = this.cart.reduce((total:number, cartItem:Basket) => {
      return (total += cartItem.quantity);
    }, 0);
    cartItems.textContent = amount.toString();
  }
  public displayCartSubtotal() {
    let subtotal = this.cart.reduce((total, cartItem) => {
      return (total += cartItem.price * cartItem.quantity);
    }, 0);
    cartSubtotal.textContent = `$ ${subtotal} `;
  }
  public displayCartTotal() {
    let subtotal = this.cart.reduce((total, cartItem) => {
      return (total += cartItem.price * cartItem.quantity);
    }, 0);
    cartTotal.textContent = `$ ${subtotal + 330}`;
  }
  public displayCartTotalItem(id) {
    const cartTotalItem = document.querySelector(".cart-total-item") as HTMLElement;

    let totalItem = 0;
    let item = this.cart.find((cartItem) => cartItem.id === id);
    totalItem = item!.price * item!.quantity;
    cartTotalItem.textContent = `$${totalItem}`;
  }
  public displayCartItems() {
    this.cart.forEach((cartItem) => {
      this.addCartItem(cartItem);
    });
  }

  public setupCart() {
    let cart = Storage.getItem('cart');
    tableContent.addEventListener('click', function (e) {
      const element = e.target as HTMLElement;
      const parent = (e.target as HTMLElement).parentElement as HTMLElement;
      const id = parseInt((e.target as HTMLElement).dataset.id!);
      // const parentID = parent.dataset.id;
     
      // remove
      if (element?.classList.contains('remove-item')) {
        this.removeItem(id);
        parent?.parentElement?.parentElement?.remove();
      }
      // increase
      if (element?.classList.contains('fa-plus-circle')) {
        let addAmount = e.target;
        const newAmount = this.increaseAmount(id);
        this.displayCartTotalItem(id);
        addAmount.previousElementSibling.textContent = newAmount.toString();
      }
      // decrease
      if (element?.classList.contains('fa-minus-circle')) {
        let removeAmount = e.target;
        console.log(id);
        const newAmount = this.decreaseAmount(id);
        this.displayCartTotalItem(id);
        if (newAmount === 0) {
          this.removeItem(id);
          parent?.parentElement?.parentElement?.remove();
        } else {
          removeAmount.nextElementSibling.textContent = newAmount.toString();
        }
      }
      this.displayCartItemCount();
      this.displayCartSubtotal();
      this.displayCartTotal();
      Storage.setItem('cart', cart);
    }.bind(this));
  }
  public init = () => {
     let cart = Storage.getItem('cart');
    // // display amount of cart items
    // this.displayCartItemCount();
    // // display total
    // this.displayCartTotal();
    // // add all cart items to the dom
    this.displayCartItems();
    // setup cart functionality
    this.setupCart();
  };

}