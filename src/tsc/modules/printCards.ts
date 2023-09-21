import {Product} from '../interfaces/product.js';

export const printCards:(container: HTMLElement|null, array: Array<Product>) => void = (container, array) =>{

    while (container?.firstChild) {
        container.removeChild(container.firstChild);
    }

array.forEach((product)=>{
    let divCard = document.createElement('div') as HTMLElement;
    divCard.setAttribute('class','card h-100 shadow-sm');

    let imgCard = document.createElement('img') as HTMLElement;
    imgCard.setAttribute('src',`${product.pictureUrl}`);
    imgCard.setAttribute('class','img-fluid bg-info');

    let divBody = document.createElement('div') as HTMLElement;
    divBody.setAttribute('class','card-body d-flex flex-column');

    let aTxt = document.createElement('a') as HTMLElement;
    aTxt.setAttribute('class','text-decoration-none');


    let h6Txt = document.createElement('h6') as HTMLElement;
    h6Txt.setAttribute('class','text-uppercase');
    let txtName= document.createTextNode(product.name) as Text;
    h6Txt.appendChild(txtName);
    
    aTxt.appendChild(h6Txt);

    let spanTxt = document.createElement('span') as HTMLElement;
    spanTxt.setAttribute('class','mb-2');
    let txtPrice= document.createTextNode(`$${product.price.toString()}`) as Text;
    spanTxt.appendChild(txtPrice);

    let divControls = document.createElement('div') as HTMLElement;
    divControls.setAttribute('class','btn-group mt-auto');

    let btnCart = document.createElement('button') as HTMLElement;
    btnCart.setAttribute('class','btn btn-outline-secondary fa fa-shopping-cart me-2');

    let btnView = document.createElement('button') as HTMLElement;
    btnView.setAttribute('class','btn btn-outline-secondary view');
    btnView.setAttribute('id', product.id.toString());
    let txtView= document.createTextNode('View') as Text;
    btnView.appendChild(txtView);

    divControls.appendChild(btnCart);
    divControls.appendChild(btnView);

    divBody.appendChild(aTxt);
    divBody.appendChild(spanTxt);
    divBody.appendChild(divControls);

    divCard.appendChild(imgCard);
    divCard.appendChild(divBody);

    container?.appendChild(divCard);
});


}