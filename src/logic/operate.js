import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  switch (operation) {
    case '+':
      return one.plus(two).toString();

    case '-':
      return one.minus(two).toString();

    case 'x':
      return one.times(two).toString();

    case '/':
      try {
        return one.div(two).toString();
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        return "Can't divide by 0";
      }

    case '%':
      return one.mod(two).toString();

    default:
      throw Error(`Unknown operation '${operation}'`);
  }
};

export default operate;
