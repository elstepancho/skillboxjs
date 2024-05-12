import { btn } from "./app.js";

export function checkParams() {
    const isValidForm = [...document.querySelectorAll('input')].every((input) => input.value && !input.classList.contains('wrong'));
    btn.disabled = !isValidForm;
}

export function handleCardInputBlur(input, validatorFunc, image) {
    return function() {
        if (this.value) {
            const isValid = validatorFunc(this.value);
            isValid ? this.classList.remove('wrong') : this.classList.add('wrong');
            const cardType = valid.number(this.value).card.type;
            image.src = isValid ? cardImages[cardType] : cardImages.defaultCard;
        } else {
            this.classList.remove('wrong');
            image.src = cardImages.defaultCard;
        }
        checkParams();
    };
}