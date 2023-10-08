import { printHeader } from './modules/printHeader.js';
import './classes/cart.js';
import { Cart } from './classes/cart.js';
import { printTHead } from './modules/printTHead.js';
import { printNavbar } from './modules/printNavbar.js';

const headerContainer = document.getElementById('header-container') as HTMLFormElement;
const tableHeader = document.querySelector('.table-head') as HTMLFormElement;
const columns: Array<string> = Array("Product","Price","Quantity","Total", "Remove");

const navContainer = document.getElementById('nav-container') as HTMLElement;
const alinks1: Array<string> = Array("Home","Shop","Contact");
const aLinks2: Array<string> = Array("Login","Sign Up");

document.addEventListener('DOMContentLoaded',()=>{
    try{
        printNavbar(navContainer,alinks1, aLinks2);
        printTHead(tableHeader,columns);
        printHeader( headerContainer,"Basket");
        const cart = new Cart();
        cart.init();
        
    }catch(error:any){
        console.log(error);
    }
})