import {Type} from '../interfaces/type.js';
import {Brand} from '../interfaces/brand.js';

export const printList:(container: HTMLElement|null, array: Array<Type|Brand>) => void = (container, array) =>{

array.forEach((item)=>{
    let liTxt = document.createElement('li') as HTMLElement;
    liTxt.setAttribute('class','list-group-item cursor-pointer');
    liTxt.setAttribute('id',item.name);
    let txtName= document.createTextNode(item.name) as Text;
    liTxt.appendChild(txtName);
    

    container?.appendChild(liTxt);
});


}