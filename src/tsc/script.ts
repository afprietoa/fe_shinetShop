import types from './data/types.js';
import brands from './data/brands.js';
import { addProductToSessionStorage } from './utils/sessionStorage.js';
import { printHeader } from './modules/printHeader.js';
import { Products } from './classes/product.js';
import { Storage } from './classes/storage.js';
import './classes/cart.js';
import { Cart } from './classes/cart.js';
import { printNavbar } from './modules/printNavbar.js';


const headerContainer = document.getElementById('header-container') as HTMLElement;
const cardsContainer = document.getElementById('cards-container') as HTMLElement;
const listContainer1 = document.getElementById('list-container-1') as HTMLElement;
const listContainer2 = document.getElementById('list-container-2') as HTMLElement;
const navContainer = document.getElementById('nav-container') as HTMLElement;
// const buttons = Array.from(document.querySelectorAll(".bag-btn"));  


const sorts: Array<string> = Array("alphabetical","lowToHigh","highToLow");
const alinks1: Array<string> = Array("Home","Shop","Contact");
const aLinks2: Array<string> = Array("Login","Sign Up");


document.addEventListener('DOMContentLoaded',()=>{
    try{
        printNavbar(navContainer,alinks1, aLinks2);
        printHeader( headerContainer,'Shop');

        const items = new Products();

        items.getProducts()
        .then(products => {
            items.displayProducts(cardsContainer, products);
            items.displayList(listContainer1, brands);
            items.displayList(listContainer2, types);
    
            items.filterProducts(types, products, cardsContainer);
            items.filterProducts(brands, products, cardsContainer);
    
            items.sortProducts(sorts, products, cardsContainer);
            Storage.saveProducts(products);

        }).then(() => {
            
          });
    }catch(error:any){
        console.log(error);
    }
})

document.addEventListener('click', (event:MouseEvent)=>{
    const cart = new Cart();
    const target = event.target as HTMLElement;
    if(target.classList.contains('view')){
        addProductToSessionStorage(target.id);
        location.href = "../src/pages/detail.html"
    }
    if(target.classList.contains('bag-btn')){
        console.log(target.dataset.id);
        cart.addToCart(target.dataset.id);
    }
});