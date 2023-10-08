import { Basket } from "../interfaces/basket.js";
const cartContent = document.querySelector(".cart-content") as HTMLElement;

export const printBody: (tbody: HTMLElement|null, item: Basket) => void = (tbody, item)=>{
    



    // array.forEach((item) =>{

        let tr = document.createElement('tr') as HTMLElement;
        
        if(item){

        let th = document.createElement('th') as HTMLElement;

        let divProduct = document.createElement('div') as HTMLElement;
        divProduct.setAttribute('class','p-2 d-inline-block');

        let imgProduct = document.createElement('img') as HTMLElement;
        imgProduct.setAttribute('src',`${item.pictureUrl}`);
        imgProduct.setAttribute('class','img-fluid');
        imgProduct.setAttribute('style','max-height: 50px;');

        let divDesc = document.createElement('div') as HTMLElement;
        divDesc.setAttribute('class','ms-3 d-inline-block align-middle');

        let h5Txt = document.createElement('h5') as HTMLElement;
        h5Txt.setAttribute('class','mb-0');

        let aTxt = document.createElement('a') as HTMLElement;
        aTxt.setAttribute('class','text-dark text-decoration-none');
        let txtName= document.createTextNode(item.name) as Text;
        aTxt.appendChild(txtName);

        h5Txt.appendChild(aTxt);

        let spanTxt = document.createElement('span') as HTMLElement;
        spanTxt.setAttribute('class','text-muted fst-italic');
        let txtBrand= document.createTextNode(item.productBrand) as Text;
        spanTxt.appendChild(txtBrand);

        divDesc.appendChild(h5Txt);
        divDesc.appendChild(spanTxt);

        divProduct.appendChild(imgProduct);
        divProduct.appendChild(divDesc);

        th.appendChild(divProduct);

        let tdPrice= document.createElement('td') as HTMLElement;
        tdPrice.setAttribute('class','align-middle');
        
        let strongPrice= document.createElement('strong') as HTMLElement;
        let txtPrice= document.createTextNode(`$${item.price.toString()}`) as Text;
        strongPrice.appendChild(txtPrice);

        tdPrice.appendChild(strongPrice);

        let tdQty= document.createElement('td') as HTMLElement;
        tdQty.setAttribute('class','align-middle');

        let divQty = document.createElement('div') as HTMLElement;
        divQty.setAttribute('class','d-flex align-items-center');

        let iMinus = document.createElement('i') as HTMLElement;
        iMinus.setAttribute('class','fa fa-minus-circle text-warning me-2');
        iMinus.setAttribute('style','cursor: pointer; font-size: 2em;');
        iMinus.setAttribute('data-id',`${item.id}`);

        let strongQty= document.createElement('strong') as HTMLElement;
        strongQty.setAttribute('style','font-size: 1.5em;');
        strongQty.setAttribute('class','cart-item-amount');
        let txtQty= document.createTextNode(`${item.quantity.toString()}`) as Text;
        strongQty.appendChild(txtQty);

        let iPlus = document.createElement('i') as HTMLElement;
        iPlus.setAttribute('class','fa fa-plus-circle text-warning mx-2');
        iPlus.setAttribute('style','cursor: pointer; font-size: 2em;');
        iPlus.setAttribute('data-id',`${item.id}`);

        divQty.appendChild(iMinus);
        divQty.appendChild(strongQty);
        divQty.appendChild(iPlus);

        tdQty.appendChild(divQty);

        let tdTotal= document.createElement('td') as HTMLElement;
        tdTotal.setAttribute('class','align-middle');
        
        let strongTotal= document.createElement('strong') as HTMLElement;
        strongTotal.setAttribute('class','cart-total-item');
        let txtTotal= document.createTextNode(`$${(item.price * item.quantity!).toString()}`) as Text;
        strongTotal.appendChild(txtTotal);

        tdTotal.appendChild(strongTotal);

        let tdRemove= document.createElement('td') as HTMLElement;
        tdRemove.setAttribute('class','align-middle');   
        
        let aBtn = document.createElement('a') as HTMLElement;
        aBtn.setAttribute('class','text-danger');
        
        let iTrash = document.createElement('i') as HTMLElement;
        iTrash.setAttribute('class','fa fa-trash remove-item');
        iTrash.setAttribute('style','font-size: 2em; cursor: pointer;');

        aBtn.appendChild(iTrash);
        tdRemove.appendChild(aBtn);

        tr?.appendChild(th);
        tr?.appendChild(tdPrice);
        tr?.appendChild(tdQty);
        tr?.appendChild(tdTotal);
        tr?.appendChild(tdRemove);

        tbody?.appendChild(tr)
        }else{
            let tdEmpty= document.createElement('td') as HTMLElement;
            tdEmpty.setAttribute('class','align-middle');

            let divEmpty = document.createElement('div') as HTMLElement;
            divEmpty.setAttribute('class','d-flex align-items-center');

            let pEmpty= document.createElement('p') as HTMLElement;

            let txtEmpty= document.createTextNode("There are no items in your basket") as Text;
            
            pEmpty.appendChild(txtEmpty);
            divEmpty.appendChild(pEmpty);
            tdEmpty.appendChild(divEmpty);
        }


    // });


}