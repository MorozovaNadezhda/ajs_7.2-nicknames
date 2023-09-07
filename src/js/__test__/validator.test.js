import validatesPhoneNumbers from '../validator';

test('Функция должна заменить 1-ую цыфру номера на +7 и убрать пробелы, тире и скобки', () => {
  expect(validatesPhoneNumbers('8 (927) 000-00-00')).toBe('+79270000000');
});

test('Функция должна убрать пробелы у 11-значного номера, начинающегося с +7', () => {
  expect(validatesPhoneNumbers('+7 960 000 00 00')).toBe('+79600000000');
});

test('Функция должна убрать пробелы у 12-значного номера начинающегося с +86', () => {
  expect(validatesPhoneNumbers('+86 000 000 0000')).toBe('+860000000000');
});
