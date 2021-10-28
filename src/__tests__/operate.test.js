import operate from '../logic/operate';

describe('testing operate logic', () => {
  const numberOne = 3;
  const numberTwo = 2;

  test('testing add logic', () => {
    expect(operate(numberOne, numberTwo, '+')).toBe('5');
  });

  test('testing subtract logic', () => {
    expect(operate(numberOne, numberTwo, '−')).toBe('1');
  });

  test('testing multiply logic', () => {
    expect(operate(numberOne, numberTwo, '×')).toBe('6');
  });
});
