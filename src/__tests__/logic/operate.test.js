import operate from '../../logic/operate';

describe('testing operate logic', () => {
  const numberOne = 3;
  const numberTwo = 2;

  it('testing add logic', () => {
    expect(operate(numberOne, numberTwo, '+')).toBe('5');
  });

  it('testing subtract logic', () => {
    expect(operate(numberOne, numberTwo, '-')).toBe('1');
  });

  it('testing multiply logic', () => {
    expect(operate(numberOne, numberTwo, 'x')).toBe('6');
  });

  it('testing divide logic', () => {
    expect(operate(numberOne, numberTwo, '/')).toBe('1.5');
  });

  it('testing dividing by 0 logic', () => {
    expect(operate(numberOne, 0, '/')).toBe("Can't divide by 0");
  });

  it('testing module logic', () => {
    expect(operate(numberTwo, numberOne, '%')).toBe('2');
  });

  it('testing fail logic', () => {
    const operation = '#';
    expect(() => operate(numberOne, numberTwo, operation)).toThrow(
      `Unknown operation '${operation}'`,
    );
  });
});
