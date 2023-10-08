import {printCard} from './modules/printCard.js';
import products from './data/products.js';
import { Product } from './interfaces/product.js';
import { getProductFromSessionStorage } from './utils/sessionStorage.js';
import { printHeader } from './modules/printHeader.js';
import { printNavbar } from './modules/printNavbar.js';

const headerContainer = document.getElementById('header-container') as HTMLFormElement;
const cardContainer = document.getElementById('card-container') as HTMLFormElement;

const navContainer = document.getElementById('nav-container') as HTMLElement;

const alinks1: Array<string> = Array("Home","Shop","Contact");
const aLinks2: Array<string> = Array("Login","Sign Up");

const productIdStr: string = getProductFromSessionStorage()
? JSON.parse(getProductFromSessionStorage()!)
: "";

const productId: number | null = productIdStr ? parseInt(productIdStr) : null;

document.addEventListener('DOMContentLoaded',()=>{
    try{

        
        if(productId){
            const product: Array<Product> = products.filter((item) => item.id === productId);
            printNavbar(navContainer,alinks1, aLinks2);
            printHeader( headerContainer,product[0].name);
            printCard(cardContainer, product[0]);
        }
    }catch(error:any){
        console.log(error);
    }
})