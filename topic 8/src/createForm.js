import { el, setChildren } from "redom";
import Inputmask from "inputmask";
import { cardImages } from "./cards.js";
import { handleCardInputBlur, checkParams } from "./isValid.js";
import valid from 'card-validator';

export function createCardNumberField(name, ownId, mask, validatorFunc) {
    const inputOptions = {
        type: "text",
        class: "form-control",
        id: ownId,
        required: true,
        onblur: function() {
            handleCardInputBlur(validatorFunc);
        }
    };
    const input = el('input', inputOptions);
    Inputmask(mask).mask(input);
    const label = el('label', name, {for: ownId});
    const inputDiv = el('div', {class: "form-floating col-6"}, [input, label]);
    const image = el('img', {class: "card-image", src: cardImages.defaultCard});
    const div = el('div', {class: "d-flex flex-row gap-3 mb-3"}, [inputDiv, image]);

    function updateCardImage(cardType) {
        image.src = cardImages[cardType] || cardImages.defaultCard;
    }

    input.addEventListener('input', function() {
        const cardType = valid.number(input.value).card ? valid.number(input.value).card.type : null;
        updateCardImage(cardType);
    });

    return div;
}

export function createInputField(name, ownId, mask, validatorFunc) {
    const inputOptions = {
        type: "text",
        class: "form-control",
        id: ownId,
        required: true,
        onblur: function() {
            handleInputBlur(validatorFunc);
        }
    };
    const input = el('input', inputOptions);
    Inputmask(mask).mask(input);
    const label = el('label', name, {for: ownId});
    const div = el('div', {class: "form-floating mb-3 col-7"}, [input, label]);
    return div;
}

function handleInputBlur(validatorFunc) {
    return function() {
        if (this.value) {
            validatorFunc(this.value)
                ? this.classList.remove('wrong')
                : this.classList.add('wrong');
        } else {
            this.classList.remove('wrong');
        }
        checkParams();
    };
}
