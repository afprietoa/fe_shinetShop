import {printCard} from './modules/printCard.js';
import products from './data/products.js';
import { Product } from './interfaces/product.js';
import { getProductFromSessionStorage } from './utils/sessionStorage.js';
import { printHeader } from './modules/printHeader.js';

const headerContainer = document.getElementById('header-container') as HTMLFormElement;
const cardContainer = document.getElementById('card-container') as HTMLFormElement;

const productIdStr: string = getProductFromSessionStorage()
? JSON.parse(getProductFromSessionStorage()!)
: "";

const productId: number | null = productIdStr ? parseInt(productIdStr) : null;

document.addEventListener('DOMContentLoaded',()=>{
    try{

        printHeader( headerContainer,'Shop');

        if(productId){
            const product: Array<Product> = products.filter((item) => item.id === productId);

            printCard(cardContainer, product[0]);
        }
    }catch(error:any){
        console.log(error);
    }
})