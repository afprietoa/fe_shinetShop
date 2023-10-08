import { Brand } from "../interfaces/brand.js";
import { Product } from "../interfaces/product.js";
import { Type } from "../interfaces/type.js";
import { filterCards } from "../modules/filterCards.js";
import { printCards } from "../modules/printCards.js";
import { printList } from "../modules/printList.js";
import { sortCards } from "../modules/sortCards.js";

export class Products {

    public async getProducts(): Promise<any> {
        try {
            let result = await fetch("../../../build/tsc/data/products.json");
            let data = await result.json();
            let products: Array<Product> = data.items;
            console.log(products);
            return products;
        } catch (error) {
            console.log(error);
        }
    }
    
    public displayProducts(cardsContainer: HTMLElement|null, products: Array<Product>):void{
        printCards(cardsContainer, products);
    }
    
    public displayList(listContainer: HTMLElement|null, category: Array<Type|Brand>):void{
        printList(listContainer, category);
    }

    public filterProducts(category: Array<Type|Brand>, products: Array<Product>, cardsContainer: HTMLElement|null):void{
        filterCards(category, products, cardsContainer);
    }

    public sortProducts(sorts: Array<string>, products: Array<Product>, cardsContainer: HTMLElement|null):void{
        sortCards(sorts, products, cardsContainer);
    }
}