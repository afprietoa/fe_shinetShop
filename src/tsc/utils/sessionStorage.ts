// ----------------------------Product------------------------------------
export const addProductToSessionStorage = (product:any) =>{
    sessionStorage.setItem('product',JSON.stringify(product));
};

export const removeProductFromSessionStorage = () =>{
    sessionStorage.removeItem('product');
};

export const getProductFromSessionStorage = () =>{
    const result = sessionStorage.getItem('product');
    const product = result ? JSON.parse(result) : null;
    return product;
}