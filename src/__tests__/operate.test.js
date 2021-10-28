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

  test('testing divide logic', () => {
    expect(operate(numberOne, numberTwo, '÷')).toBe('1.5');
  });

  test('testing divide logic', () => {
    expect(operate(numberOne, 0, '÷')).toBe('Can\'t divide by 0.');
  });

  test('testing modulo logic', () => {
    expect(operate(numberTwo, numberOne, '%')).toBe('2');
  });

  test('testing fail logic', () => {
    const operation = '#';
    expect(() => (operate(numberOne, numberTwo, operation))).toThrow(`Unknown operation '${operation}'`);
  });
});
