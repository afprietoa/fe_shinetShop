import { printHeader } from './modules/printHeader.js';

const headerContainer = document.getElementById('header-container') as HTMLFormElement;

document.addEventListener('DOMContentLoaded',()=>{
    try{
        printHeader( headerContainer,"Login");
    }catch(error:any){
        console.log(error);
    }
})