
export const printHeader:(container: HTMLElement|null, title: string) => void = (container, title) =>{


    let divTitle = document.createElement('div') as HTMLElement;
    divTitle.setAttribute('class','col-9');

    let h1Txt = document.createElement('h1') as HTMLElement;
    let txtTitle= document.createTextNode(title) as Text;
    h1Txt.appendChild(txtTitle);

    divTitle.appendChild(h1Txt);

    let divBreadCrumb = document.createElement('div') as HTMLElement;
    divBreadCrumb.setAttribute('class','col-3');

    let nav = document.createElement('nav') as HTMLElement;
    nav.setAttribute('aria-label','breadcrumb');

    let ol = document.createElement('ol') as HTMLElement;
    ol.setAttribute('class','breadcrumb');

    let liTxt = document.createElement('li') as HTMLElement;
    liTxt.setAttribute('class','breadcrumb-item');
    let a = document.createElement('a') as HTMLElement;
    a.setAttribute('href','#');
    let txtHome= document.createTextNode('Home') as Text;
    a.appendChild(txtHome);
    liTxt.appendChild(a);

    let li2Txt = document.createElement('li') as HTMLElement;
    li2Txt.setAttribute('class','breadcrumb-item active');
    li2Txt.setAttribute('aria-current','page');
    let txtLib= document.createTextNode('Library') as Text;
    li2Txt.appendChild(txtLib);
    
    ol.appendChild(liTxt);
    ol.appendChild(li2Txt);

    nav.appendChild(ol);

    divBreadCrumb.appendChild(nav);

    container?.appendChild(divTitle);
    container?.appendChild(divBreadCrumb);

}