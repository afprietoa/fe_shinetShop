import { Validation } from './classes/validation.js';
import { printForm } from './modules/printForm.js';
import { printHeader } from './modules/printHeader.js';
import { printNavbar } from './modules/printNavbar.js';
var headerContainer = document.getElementById('header-container');
var formContainer = document.getElementById('form-container');
var navContainer = document.getElementById('nav-container');
var formFields = Array("email", "password");
var alinks1 = Array("Home", "Shop", "Contact");
var aLinks2 = Array("Login", "Sign Up");
document.addEventListener('DOMContentLoaded', function () {
    try {
        printNavbar(navContainer, alinks1, aLinks2);
        printHeader(headerContainer, "Sign up");
        printForm(formContainer, formFields, 'Sign Up');
        var valid_1 = new Validation('Login');
        var inputs = document.querySelectorAll('input');
        inputs.forEach(function (input) {
            //console.log(input)
            input.addEventListener('blur', function (input) {
                valid_1.validate(input.target);
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
