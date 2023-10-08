export class Storage {

static saveProducts(products: any):void{
        localStorage.setItem("products", JSON.stringify(products));
    }
      
    static getProduct(id: string):string | null {
        const productString = localStorage.getItem("products");
        if (!productString) {
            // Puedes retornar un valor por defecto o manejar de otra manera
            return null; 
        }
        let products = JSON.parse(productString);
        return products.find(product => product.id === id);
    }
      
    static setItem(name, item):void {
        localStorage.setItem(name, JSON.stringify(item));
    }
      
    static getItem(item): any {
        const cartString = localStorage.getItem(item);
        if (!cartString) {
            return null;
        }
        return JSON.parse(cartString);
    }

    static findProduct = (id) =>{
        let products = this.getItem('products');
        let product = products.find((product) => product.id == id);
        return product;
    }
}