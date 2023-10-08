import { printNavbar } from './modules/printNavbar.js';

const navContainer = document.getElementById('nav-container') as HTMLElement;

const alinks1: Array<string> = Array("Home","Shop","Contact");
const aLinks2: Array<string> = Array("Login","Sign Up");


document.addEventListener('DOMContentLoaded',()=>{
    try{

    printNavbar(navContainer,alinks1, aLinks2);
        
    }catch(error:any){
        console.log(error);
    }
})