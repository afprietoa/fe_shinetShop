import { Brand } from "../interfaces/brand.js";
import { Product } from "../interfaces/product.js";
import { Type } from "../interfaces/type.js";
import { printCards } from "./printCards.js";
import types from '../data/types.js';
import brands from '../data/brands.js';

export const filterCards: (criteriaList: Array<Type|Brand>, productArray: Array<Product>, container: HTMLElement|null) => void = (criteriaList, productArray, container) =>{
    criteriaList.forEach( criteria =>{
        const option = document.getElementById(criteria.name) as HTMLElement;
   
        option.addEventListener('click', () => {
            const selection: String = option.id;

            const products: Array<Product> = types.includes(criteria) ?  productArray.filter( 
                product => product.productType == selection
            ) : brands.includes(criteria) ?  productArray.filter( 
                product => product.productBrand == selection
            ): productArray;
            
            printCards(container, products);
        });
    });
};