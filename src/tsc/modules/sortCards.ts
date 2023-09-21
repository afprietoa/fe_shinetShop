import { Product } from "../interfaces/product.js";
import { printCards } from "./printCards.js";

export const sortCards: (criteriaList: Array<string>, productArray: Array<Product>, container: HTMLElement|null) => void = (criteriaList, productArray, container) =>{
    criteriaList.forEach( criteria =>{
        const option = document.getElementById(criteria) as HTMLElement;
   
        option.addEventListener('click', () => {
            const selection: String = option.id;

            const products: Array<Product> = "alphabetical" == selection ? 
            productArray.sort((a,b) => a.name.localeCompare(b.name)): "lowToHigh" == selection ?
            productArray.sort((a,b) => a.price - b.price) : "highToLow" == selection ?
            productArray.sort((a,b) => b.price - a.price) :
            productArray;
            
            printCards(container, products);
        });
    });
};