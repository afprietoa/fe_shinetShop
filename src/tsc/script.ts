import {printCards} from './modules/printCards.js';
import products from './data/products.js';
import { printList } from './modules/printList.js'
import { filterCards } from './modules/filterCards.js';
import types from './data/types.js';
import brands from './data/brands.js';
import { sortCards } from './modules/sortCards.js';
import { addProductToSessionStorage } from './utils/sessionStorage.js';

const cardsContainer = document.getElementById('cards-container') as HTMLFormElement;
const listContainer1 = document.getElementById('list-container-1') as HTMLFormElement;
const listContainer2 = document.getElementById('list-container-2') as HTMLFormElement;

const sorts: Array<string> = Array("alphabetical","lowToHigh","highToLow");

document.addEventListener('DOMContentLoaded',()=>{
    try{
        printCards(cardsContainer, products);
        printList(listContainer1, brands);
        printList(listContainer2, types);

        filterCards(types, products, cardsContainer);
        filterCards(brands, products, cardsContainer);

        sortCards(sorts, products, cardsContainer);
    }catch(error:any){
        console.log(error);
    }
})

document.addEventListener('click', (event:MouseEvent)=>{
    const target = event.target as HTMLElement;
    if(target.classList.contains('view')){
        addProductToSessionStorage(target.id);
        location.href = "../pages/detail.html"
    }
});