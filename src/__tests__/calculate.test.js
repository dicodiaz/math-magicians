import calculate from '../logic/calculate';

describe('testing calculate logic', () => {
  let obj = {
    total: '0',
    next: null,
    operation: null,
  };

  test('testing the "1" button', () => {
    Object.assign(obj, calculate(obj, '1'));
    expect(obj).toEqual({ total: null, next: '1', operation: null });
  });

  test('testing the "2" button', () => {
    Object.assign(obj, calculate(obj, '2'));
    expect(obj).toEqual({ total: null, next: '12', operation: null });
  });

  test('testing the "3" button', () => {
    Object.assign(obj, calculate(obj, '3'));
    expect(obj).toEqual({ total: null, next: '123', operation: null });
  });

  test('testing the "+" button', () => {
    Object.assign(obj, calculate(obj, '+'));
    expect(obj).toEqual({ total: '123', next: null, operation: '+' });
  });

  test('testing the "4" button', () => {
    Object.assign(obj, calculate(obj, '4'));
    expect(obj).toEqual({ total: '123', next: '4', operation: '+' });
  });

  test('testing the "5" button', () => {
    Object.assign(obj, calculate(obj, '5'));
    expect(obj).toEqual({ total: '123', next: '45', operation: '+' });
  });

  test('testing the "6" button', () => {
    Object.assign(obj, calculate(obj, '6'));
    expect(obj).toEqual({ total: '123', next: '456', operation: '+' });
  });

  test('testing the "−" button', () => {
    Object.assign(obj, calculate(obj, '−'));
    expect(obj).toEqual({ total: '579', next: null, operation: '−' });
  });

  test('testing the "7" button', () => {
    Object.assign(obj, calculate(obj, '7'));
    expect(obj).toEqual({ total: '579', next: '7', operation: '−' });
  });

  test('testing the "8" button', () => {
    Object.assign(obj, calculate(obj, '8'));
    expect(obj).toEqual({ total: '579', next: '78', operation: '−' });
  });

  test('testing the "9" button', () => {
    Object.assign(obj, calculate(obj, '9'));
    expect(obj).toEqual({ total: '579', next: '789', operation: '−' });
  });

  test('testing the "×" button', () => {
    Object.assign(obj, calculate(obj, '×'));
    expect(obj).toEqual({ total: '-210', next: null, operation: '×' });
  });

  test('testing the "+/-" button', () => {
    Object.assign(obj, calculate(obj, '+/-'));
    expect(obj).toEqual({ total: '210', next: null, operation: '×' });
  });

  test('testing the "%" button', () => {
    Object.assign(obj, calculate(obj, '%'));
    expect(obj).toEqual({ total: '210', next: null, operation: '%' });
  });

  test('testing the "÷" button', () => {
    Object.assign(obj, calculate(obj, '÷'));
    expect(obj).toEqual({ total: '210', next: null, operation: '÷' });
  });

  test('testing the "0" button', () => {
    Object.assign(obj, calculate(obj, '0'));
    expect(obj).toEqual({ total: '210', next: '0', operation: '÷' });
  });

  test('testing the "." button', () => {
    Object.assign(obj, calculate(obj, '.'));
    expect(obj).toEqual({ total: '210', next: '0.', operation: '÷' });
  });

  test('testing the "=" button', () => {
    Object.assign(obj, calculate(obj, '='));
    expect(obj).toEqual({ total: 'Can\'t divide by 0.', next: null, operation:null });
  });

  test('testing the "AC" button', () => {
    Object.assign(obj, calculate(obj, 'AC'));
    expect(obj).toEqual({ total: '0', next: null, operation: null });
  });
});
