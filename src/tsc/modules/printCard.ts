import {Product} from '../interfaces/product.js';

export const printCard:(container: HTMLElement|null, product: Product) => void = (container, product) =>{

    if (container?.firstChild) {
        container.removeChild(container.firstChild);
    }

    let divImg = document.createElement('div') as HTMLElement;
    divImg.setAttribute('class','col-6');

    let imgCard = document.createElement('img') as HTMLElement;
    imgCard.setAttribute('src',`${product.pictureUrl}`);
    imgCard.setAttribute('class','w-100');

    divImg.appendChild(imgCard);

    let divBody = document.createElement('div') as HTMLElement;
    divBody.setAttribute('class','col-6');

    let h2Txt = document.createElement('h2') as HTMLElement;
    let txtName= document.createTextNode(product.name) as Text;
    h2Txt.appendChild(txtName);

    let pTxt = document.createElement('p') as HTMLElement;
    let txtPrice= document.createTextNode(`$${product.price.toString()}`) as Text;
    pTxt.appendChild(txtPrice);


    let divControls = document.createElement('div') as HTMLElement;
    divControls.setAttribute('class','d-flex justify-content-start align-items-center');

    let btnMinus = document.createElement('i') as HTMLElement;
    btnMinus.setAttribute('class','fa fa-minus-circle text-warning me-2 action-counter');

    let spanTxt = document.createElement('span') as HTMLElement;
    spanTxt.setAttribute('class','font-weight-bold value-counter');
    let txtCounter= document.createTextNode((product?.quantity || 0).toString()) as Text;
    spanTxt.appendChild(txtCounter);

    let btnPlus = document.createElement('i') as HTMLElement;
    btnPlus.setAttribute('class','fa fa-plus-circle text-warning me-2 action-counter');

    let btnCart = document.createElement('button') as HTMLElement;
    btnCart.setAttribute('class','btn btn-outline-secondary');
    let txtCart= document.createTextNode('Add to cart') as Text;
    btnCart.appendChild(txtCart);

    divControls.appendChild(btnMinus);
    divControls.appendChild(spanTxt);
    divControls.appendChild(btnPlus);
    divControls.appendChild(btnCart);
    
    let divTxt = document.createElement('div') as HTMLElement;
    divTxt.setAttribute('class','row mt-4');

    let h4Txt = document.createElement('h4') as HTMLElement;
    let txtSub= document.createTextNode("Description") as Text;
    h4Txt.appendChild(txtSub);

    let p2Txt = document.createElement('p') as HTMLElement;
    let txtDescription= document.createTextNode(product.description) as Text;
    p2Txt.appendChild(txtDescription);

    divTxt.appendChild(h4Txt);
    divTxt.appendChild(p2Txt);

    divBody.appendChild(h2Txt);
    divBody.appendChild(pTxt);
    divBody.appendChild(divControls);
    divBody.appendChild(divTxt);


    container?.appendChild(divImg);
    container?.appendChild(divBody);

}