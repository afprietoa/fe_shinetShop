export const printForm: (container: HTMLElement|null, array: Array<string>, title: string) => void = (container, array, title)=>{

   
    let form = document.createElement('form') as HTMLElement;

    let divTitle = document.createElement('div') as HTMLElement;
    divTitle.setAttribute('class','text-center mb-4');

    let h1Txt = document.createElement('h1') as HTMLElement;
    h1Txt.setAttribute('class','mb-3');
    let txtH1= document.createTextNode(title) as Text;
    h1Txt.appendChild(txtH1);

    divTitle.appendChild(h1Txt);

    form.appendChild(divTitle);
    
    array.forEach((type) =>{
        let divInput = document.createElement('div') as HTMLElement;
        divInput.setAttribute('class','form-floating mb-3');

        let input= document.createElement('input') as HTMLElement;
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', type);
        input.setAttribute('id', type);
        input.setAttribute('data-type', type);
        input.setAttribute('data-type', type);
        input.setAttribute('minlength', "3");
        input.setAttribute('maxlength', "30");
        input.setAttribute('pattern', "^[a-zA-Z ]*$");

        let label= document.createElement('label') as HTMLElement;
        label.setAttribute('for', type);
        let txtLabel = document.createTextNode(type) as Text;

        label.appendChild(txtLabel);

        let spanMsg= document.createElement('span') as HTMLElement;
        spanMsg.setAttribute('class', 'input-message-error');
        let txtMsg = document.createTextNode("his field is not valid") as Text;

        spanMsg.appendChild(txtMsg);        

        divInput.appendChild(label);
        divInput.appendChild(input);
        divInput.appendChild(spanMsg);

        form.appendChild(divInput);
    });

    if(title == 'Sign Up'){
        let divInput = document.createElement('div') as HTMLElement;
        divInput.setAttribute('class','form-floating mb-3');

        let name = 'name'; 
        let input= document.createElement('input') as HTMLElement;
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', "text");
        input.setAttribute('id', name);
        input.setAttribute('data-type', name);
        input.setAttribute('placeholder', name);
        input.setAttribute('minlength', "3");
        input.setAttribute('maxlength', "30");
        input.setAttribute('pattern', "^[a-zA-Z ]*$");

        let label= document.createElement('label') as HTMLElement;
        label.setAttribute('for', name);
        let txtLabel = document.createTextNode(name) as Text;

        label.appendChild(txtLabel);

        let spanMsg= document.createElement('span') as HTMLElement;
        spanMsg.setAttribute('class', 'input-message-error');
        let txtMsg = document.createTextNode("his field is not valid") as Text;

        spanMsg.appendChild(txtMsg); 

        divInput.appendChild(label);
        divInput.appendChild(input);
        divInput.appendChild(spanMsg);

        form.appendChild(divInput);
    }

    let divButton = document.createElement('div') as HTMLElement;
    divButton.setAttribute('class','d-grid');

    let button= document.createElement('button') as HTMLElement;
    button.setAttribute('class', 'btn btn-lg btn-primary mt-3');
    let txtButton= document.createTextNode(title) as Text;
    button.appendChild(txtButton);

    divButton.appendChild(button);
    form.appendChild(divButton);

    container?.appendChild(form);
}