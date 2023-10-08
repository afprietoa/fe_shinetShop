;
export class Validation {
    public errorMessages: any;
    public errorTypes: any;

    constructor(type:string){
        if(type == 'Login'){
            this.errorMessages = {
                email: {
                  valueMissing: "This field can not be blank",
                  tooShort: "Must be at least 3 characters",
                  tooLong: "Must be less than 30 characters",
                  typeMismatch: "The email is not valid",
                },
                password: {
                  valueMissing: "This field can not be blank",
                  tooShort: "Must be at least 3 characters",
                  tooLong: "Must be less than 30 characters",
                  patternMismatch: "Only letters are accepted",
                },
              };
        }
        else{
          this.errorMessages = {
            email: {
              valueMissing: "This field can not be blank",
              tooShort: "Must be at least 3 characters",
              tooLong: "Must be less than 30 characters",
              typeMismatch: "The email is not valid",
            },
            password: {
              valueMissing: "This field can not be blank",
              tooShort: "Must be at least 3 characters",
              tooLong: "Must be less than 30 characters",
              patternMismatch: "Only letters are accepted",
            },
            name: {
              valueMissing: "This field can not be blank",
              tooShort: "Must be at least 3 characters",
              tooLong: "Must be less than 30 characters",
              patternMismatch: "Only letters are accepted",
            },
          };
        }
        this.errorTypes =  [
          "valueMissing",
          "typeMismatch",
          "tooShort",
          "tooLong",
          "patternMismatch",
          "rangeOverflow",
          "rangeUnderflow",
        ];
    }

    public validate(input: any):void{
        const inputType = input.dataset.type;
        const parentElement = input?.parentElement;
        const errorElement = parentElement?.querySelector(".input-message-error");
      
        if (input.validity.valid && parentElement && errorElement) {
          parentElement.classList.remove("input-container--invalid");
          errorElement.innerHTML = "";
        } else if (parentElement && errorElement) {
          parentElement.classList.add("input-container--invalid");
          errorElement.innerHTML = this.showErrorMessage(inputType, input);
        }
      };

    public showErrorMessage(inputType:any, input:any): string {
    let message:string = "";
  
    this.errorTypes.forEach((error) => {
      if (input.validity[error] && inputType !== undefined) {
        message = this.errorMessages[inputType]?.[error];
      }
    });
  
    return message;
  }
}