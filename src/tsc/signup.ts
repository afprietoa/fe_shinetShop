import { printHeader } from './modules/printHeader.js';

const headerContainer = document.getElementById('header-container') as HTMLFormElement;

document.addEventListener('DOMContentLoaded',()=>{
    try{
        printHeader( headerContainer,"Sign up");
    }catch(error:any){
        console.log(error);
    }
})