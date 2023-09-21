import {printCards} from './modules/printCards.js';
import products from './data/products.js';
import { printList } from './modules/printList.js'
import { filterCards } from './modules/filterCards.js';
import types from './data/types.js';
import brands from './data/brands.js';

const cardsContainer = document.getElementById('cards-container') as HTMLFormElement;
const listContainer1 = document.getElementById('list-container-1') as HTMLFormElement;
const listContainer2 = document.getElementById('list-container-2') as HTMLFormElement;

document.addEventListener('DOMContentLoaded',()=>{
    try{
        printCards(cardsContainer, products);
        printList(listContainer1, brands);
        printList(listContainer2, types);

        filterCards(types, products, cardsContainer);
        filterCards(brands, products, cardsContainer);
    }catch(error:any){
        console.log(error);
    }
})