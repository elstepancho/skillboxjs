const { validateCardNumber } = require('./cardNumberValidation');

test('Пропускает корректный номер карты', () => {
  const validCardNumber = '1234567890123456';
  expect(validateCardNumber(validCardNumber)).toBe(true);
});

test('Не пропускает произвольную строку с нецифровыми символами', () => {
  const invalidCardNumber = '1234abcd567890!@#$';
  expect(validateCardNumber(invalidCardNumber)).toBe(false);
});

test('Не пропускает строку с недостаточным количеством цифр', () => {
  const shortCardNumber = '1234';
  expect(validateCardNumber(shortCardNumber)).toBe(false);
});

test('Не пропускает строку со слишком большим количеством цифр', () => {
  const longCardNumber = '1234567890123456789012345';
  expect(validateCardNumber(longCardNumber)).toBe(false);
});