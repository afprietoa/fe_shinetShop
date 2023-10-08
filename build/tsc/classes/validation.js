;
var Validation = /** @class */ (function () {
    function Validation(type) {
        if (type == 'Login') {
            this.errorMessages = {
                email: {
                    valueMissing: "This field can not be blank",
                    tooShort: "Must be at least 3 characters",
                    tooLong: "Must be less than 30 characters",
                    typeMismatch: "The email is not valid"
                },
                password: {
                    valueMissing: "This field can not be blank",
                    tooShort: "Must be at least 3 characters",
                    tooLong: "Must be less than 30 characters",
                    patternMismatch: "Only letters are accepted"
                }
            };
        }
        else {
            this.errorMessages = {
                email: {
                    valueMissing: "This field can not be blank",
                    tooShort: "Must be at least 3 characters",
                    tooLong: "Must be less than 30 characters",
                    typeMismatch: "The email is not valid"
                },
                password: {
                    valueMissing: "This field can not be blank",
                    tooShort: "Must be at least 3 characters",
                    tooLong: "Must be less than 30 characters",
                    patternMismatch: "Only letters are accepted"
                },
                name: {
                    valueMissing: "This field can not be blank",
                    tooShort: "Must be at least 3 characters",
                    tooLong: "Must be less than 30 characters",
                    patternMismatch: "Only letters are accepted"
                }
            };
        }
        this.errorTypes = [
            "valueMissing",
            "typeMismatch",
            "tooShort",
            "tooLong",
            "patternMismatch",
            "rangeOverflow",
            "rangeUnderflow",
        ];
    }
    Validation.prototype.validate = function (input) {
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
    ;
    Validation.prototype.showErrorMessage = function (inputType, input) {
        var _this = this;
        var message = "";
        this.errorTypes.forEach(function (error) {
            var _a;
            if (input.validity[error] && inputType !== undefined) {
                message = (_a = _this.errorMessages[inputType]) === null || _a === void 0 ? void 0 : _a[error];
            }
        });
        return message;
    };
    return Validation;
}());
export { Validation };
