import {el, setChildren} from 'redom';
import validator from 'validator';
import valid from 'card-validator';
import { createCardNumberField, createInputField } from './createForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const formDiv = el('div', {class: 'container py-5 col-8'});
export const btn = el('button', 'Отправить', {class: "btn btn-primary", disabled: true});
setChildren(formDiv, [
    createCardNumberField('Номер карты', 'cardNumber', "9{4} 9{4} 9{4} 9{4,6}", (x) => valid.number(x).isValid),
    createInputField('Дата окончания действия карты (ММ/ГГ)', 'expireDate', "99/99", (x) => valid.expirationDate(x).isValid),
    createInputField('CVC/CVV (3 цифры на обороте карты)', 'csv', "9{3}", (x) => valid.cvv(x).isValid),
    createInputField('Email', 'mail', "email", validator.isEmail),
    btn,
]);
setChildren(window.document.body, formDiv);