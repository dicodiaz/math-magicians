import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Calculator from '../../components/Calculator';
import { click } from '../test-utils';

describe('Calculator component', () => {
  it('should render as expected', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it('should calculate as expected', async () => {
    const tree = render(<Calculator />);
    const screen = tree.getByTestId('screen');
    const equalsButton = tree.getByText('=');
    await click(tree.getByText('2'));
    expect(screen).toHaveTextContent('2');
    await click(tree.getByText('+'));
    await click(tree.getByText('1'));
    await click(equalsButton);
    expect(screen).toHaveTextContent('3');
    await click(tree.getByText('x'));
    await click(tree.getByText('5'));
    await click(equalsButton);
    expect(screen).toHaveTextContent('15');
    await click(tree.getByText('/'));
    await click(tree.getByText('3'));
    await click(equalsButton);
    expect(screen).toHaveTextContent('5');
  });
});
