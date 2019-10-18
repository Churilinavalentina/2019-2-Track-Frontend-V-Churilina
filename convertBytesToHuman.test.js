

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe('false')
  expect(convertBytesToHuman('string')).toBe('false')
  expect(convertBytesToHuman('null')).toBe('false')
  expect(convertBytesToHuman('undefined')).toBe('false')
  expect(convertBytesToHuman('Infinity')).toBe('false')
  expect(convertBytesToHuman('-Infinity')).toBe('false')
  expect(convertBytesToHuman({})).toBe('false')
  expect(convertBytesToHuman([])).toBe('false')
  expect(convertBytesToHuman({some: 'non empty obj'})).toBe('false')
  expect(convertBytesToHuman(['a', 'r', 'r', 'a', 'y'])).toBe('false')
  expect(convertBytesToHuman(function(a) {return a})).toBe('false')
  expect(convertBytesToHuman(new Date())).toBe('false')
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1)).toBe('1 байт')
  expect(convertBytesToHuman(1024)).toBe('1.00 Кб')
  expect(convertBytesToHuman(10244567)).toBe('9.77 Гб')
  expect(convertBytesToHuman(10249908654)).toBe('9.55 Мб')
  expect(convertBytesToHuman(10249999999999)).toBe('9.32 Тб')

});
