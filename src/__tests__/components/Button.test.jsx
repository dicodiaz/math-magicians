import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from '../../components/Button';
import { click } from '../test-utils';

describe('Button component', () => {
  const onClick = jest.fn();

  it('should render as expected', () => {
    const { container } = render(<Button text="1" type="normal" onClick={onClick} />);
    expect(container).toMatchSnapshot();
  });

  it('should customize inner text from prop: text', () => {
    const tree = render(<Button text="2" type="normal" onClick={onClick} />);
    const button = tree.getByRole('button', { name: '2' });
    expect(button).toBeVisible();
  });

  it('should customize classes from prop: type = operator', () => {
    const tree = render(<Button text="1" type="operator" onClick={onClick} />);
    const button = tree.getByRole('button', { name: '1' });
    expect(button).not.toHaveClass('bg-custom2');
    expect(button).toHaveClass('bg-custom3');
  });

  it('should customize classes from prop: type = wide', () => {
    const tree = render(<Button text="1" type="wide" onClick={onClick} />);
    const button = tree.getByRole('button', { name: '1' });
    expect(button).toHaveClass('bg-custom2');
    expect(button).toHaveClass('col-6');
  });

  it('should run onClick when clicked', async () => {
    const tree = render(<Button text="1" type="wide" onClick={onClick} />);
    const button = tree.getByRole('button', { name: '1' });
    await click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
