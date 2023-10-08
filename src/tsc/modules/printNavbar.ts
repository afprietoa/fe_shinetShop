export const printNavbar: (container: HTMLElement|null, array1: Array<string>,array2: Array<string>) => void = (container, array1, array2)=>{

    let img = document.createElement('img') as HTMLElement;
    img.setAttribute('src','../../build/assets/images/logo.png');
    img.setAttribute('style','max-height: 70px;');
    img.setAttribute('alt','logo');

    let nav = document.createElement('nav') as HTMLElement;
    nav.setAttribute('class','my-2 text-uppercase fs-4');

    array1.forEach((link) =>{

        let aLink = document.createElement('a') as HTMLElement;
        aLink.setAttribute('class','p-2 text-dark text-decoration-none');
        aLink.setAttribute('href', `${link == 'Shop' ? '../../../index.html': 
                                      link == 'Home' ? '../../src/pages/home.html': 
                                                       '../../src/pages/contact.html'}`);
        let aLinkTxt= document.createTextNode(link) as Text;
        aLink.appendChild(aLinkTxt);

        nav.appendChild(aLink);

    });

    let divLinks = document.createElement('div') as HTMLElement;
    divLinks.setAttribute('class','d-flex align-items-center');

    let aCart = document.createElement('a') as HTMLElement;
    aCart.setAttribute('class','position-relative');
    aCart.setAttribute('href', '../../src/pages/basket.html');

    let iCart = document.createElement('i') as HTMLElement;
    iCart.setAttribute('class','fa fa-shopping-cart fa-2x me-5 text-dark');

    let divCart = document.createElement('div') as HTMLElement;
    divCart.setAttribute('class','cart-no cart-items');

    let accountTxt= document.createTextNode("0") as Text;
    divCart.appendChild(accountTxt);

    aCart.appendChild(iCart);
    aCart.appendChild(divCart);

    divLinks.appendChild(aCart);

    array2.forEach((link) =>{

        let aLink2 = document.createElement('a') as HTMLElement;
        aLink2.setAttribute('class','btn btn-outline-secondary me-2');
        aLink2.setAttribute('href', `${link == 'Login' ? '../../src/pages/login.html':
                                                         '../../src/pages/signup.html' }`);
        let aLinkTxt2= document.createTextNode(link) as Text;
        aLink2.appendChild(aLinkTxt2);

        divLinks.appendChild(aLink2);
    });


    container?.appendChild(img);
    container?.appendChild(nav);
    container?.appendChild(divLinks);
}