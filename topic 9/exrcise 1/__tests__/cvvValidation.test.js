const { validateCvv } = require('./cvvValidation');

test('Пропускает строку с тремя цифрами', () => {
  const validCvv = '123';
  expect(validateCvv(validCvv)).toBe(true);
});

test('Не пропускает строки с 1-2 цифрами', () => {
  const shortCvv1 = '1';
  const shortCvv2 = '12';
  expect(validateCvv(shortCvv1)).toBe(false);
  expect(validateCvv(shortCvv2)).toBe(false);
});

test('Не пропускает строки с 4+ цифрами', () => {
  const longCvv = '1234';
  expect(validateCvv(longCvv)).toBe(false);
});

test('Не пропускает строки с тремя нецифровыми символами', () => {
  const invalidCvv = 'abc';
  expect(validateCvv(invalidCvv)).toBe(false);
});