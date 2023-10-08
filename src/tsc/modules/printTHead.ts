export const printTHead: (thead: HTMLElement|null, array: Array<string>) => void = (thead, array)=>{
    let tr = document.createElement('tr') as HTMLElement;
    array.forEach((item) =>{
        console.log(item)

        let th= document.createElement('th') as HTMLElement;
        th.setAttribute('class','py-2');
        let txt= document.createTextNode(item) as Text;
        th.appendChild(txt);
        tr?.appendChild(th);

    });
    thead?.appendChild(tr);
}