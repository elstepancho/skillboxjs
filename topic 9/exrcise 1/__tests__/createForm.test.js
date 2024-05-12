const { createForm } = require('./createForm');

test('Возвращает DOM-элемент с четырьмя полями ввода и правильными плейсхолдерами', () => {
  const formElement = createForm();
  const inputFields = formElement.querySelectorAll('input');
  expect(inputFields.length).toBe(4);

  expect(inputFields[0].placeholder).toBe('Номер карты');
  expect(inputFields[1].placeholder).toBe('ММ/ГГ');
  expect(inputFields[2].placeholder).toBe('CVV/CVC');
  expect(inputFields[3].placeholder).toBe('Email');
});