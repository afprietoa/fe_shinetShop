export interface BasketItem{
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export interface Basket{
    id: string;
    items: BasketItem;
}