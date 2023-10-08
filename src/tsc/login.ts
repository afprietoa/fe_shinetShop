import { Validation } from './classes/validation.js';
import { printForm } from './modules/printForm.js';
import { printHeader } from './modules/printHeader.js';
import { printNavbar } from './modules/printNavbar.js';

const headerContainer = document.getElementById('header-container') as HTMLFormElement;
const formContainer = document.getElementById('form-container') as HTMLFormElement;
const navContainer = document.getElementById('nav-container') as HTMLElement;

const formFields: Array<string> = Array("email","password");
const alinks1: Array<string> = Array("Home","Shop","Contact");
const aLinks2: Array<string> = Array("Login","Sign Up");

document.addEventListener('DOMContentLoaded',()=>{
    try{

        printNavbar(navContainer,alinks1, aLinks2);
        printForm(formContainer, formFields, 'Login');
        printHeader( headerContainer,"Login");

        const valid = new Validation('Login');

        const inputs:NodeList = document.querySelectorAll('input')
        console.log(inputs)

        inputs.forEach(input =>{
            console.log(input)
            input.addEventListener('blur', (input)=>{
                valid.validate(input.target)
            })
        })
    }catch(error:any){
        console.log(error);
    }
})