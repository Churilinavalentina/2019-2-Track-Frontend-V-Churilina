

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe('false')
  expect(convertBytesToHuman('string')).toBe('false')
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1)).toBe('1 байт')
  expect(convertBytesToHuman(1024)).toBe('1.00 Кб')
});
