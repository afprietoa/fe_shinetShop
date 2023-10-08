;
var Form = /** @class */ (function () {
    function Form(type) {
        if (type == 'Login') {
            errorMessages: any = {
                tipoIdentificacion: {
                    valueMissing: "Este campo no puede estar vacio"
                },
                numeroIdentificacion: {
                    valueMissing: "Este campo no puede estar vacio",
                    rangeUnderflow: "Debe tener al menos 3 caracteres",
                    rangeOverflow: "Debe tener menos de 30 caracteres",
                    patternMismatch: "Solo se aceptan números"
                },
                nombres: {
                    valueMissing: "Este campo no puede estar vacio",
                    tooShort: "Debe tener al menos 3 caracteres",
                    tooLong: "Debe tener menos de 30 caracteres",
                    patternMismatch: "Solo se aceptan letras"
                },
                apellidos: {
                    valueMissing: "Este campo no puede estar vacio",
                    tooShort: "Debe tener al menos 3 caracteres",
                    tooLong: "Debe tener menos de 30 caracteres",
                    patternMismatch: "Solo se aceptan letras"
                },
                correo: {
                    valueMissing: "Este campo no puede estar vacio",
                    typeMismatch: "El correo no es valido"
                },
                celular: {
                    valueMissing: "Este campo no puede estar vacio",
                    rangeUnderflow: "Debe tener al menos 10 caracteres",
                    rangeOverflow: "Debe tener menos de 13 caracteres",
                    patternMismatch: "Solo se aceptan números"
                },
                linkedin: {
                    valueMissing: "Este campo no puede estar vacio",
                    tooShort: "Debe tener al menos 10 caracteres",
                    tooLong: "Debe tener menos de 100 caracteres",
                    patternMismatch: "URL no valida"
                },
                github: {
                    valueMissing: "Este campo no puede estar vacio",
                    tooShort: "Debe tener al menos 10 caracteres",
                    tooLong: "Debe tener menos de 100 caracteres",
                    patternMismatch: "URL no valida"
                }
            };
        }
        else {
        }
    }
    Form.validateLogin = function (input) {
        var inputType = input.dataset.type;
        var parentElement = input === null || input === void 0 ? void 0 : input.parentElement;
        var errorElement = parentElement === null || parentElement === void 0 ? void 0 : parentElement.querySelector(".input-message-error");
        if (input.validity.valid && parentElement && errorElement) {
            parentElement.classList.remove("input-container--invalid");
            errorElement.innerHTML = "";
        }
        else if (parentElement && errorElement) {
            parentElement.classList.add("input-container--invalid");
            errorElement.innerHTML = this.showErrorMessage(inputType, input);
        }
    };
    Form.validateSignUp = function () {
    };
    Form.prototype.showErrorMessage = function (inputType, input) {
        var message = "";
        errorTypes.forEach(function (error) {
            var _a;
            if (input.validity[error] && inputType !== undefined) {
                message = (_a = errorMessages[inputType]) === null || _a === void 0 ? void 0 : _a[error];
            }
        });
        return message;
    };
    return Form;
}());
export { Form };
