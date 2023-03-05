import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Clock from '../../components/Clock';

describe('Clock component', () => {
  const mockDate = new Date('2023-03-05T00:00:00');
  const spy = jest.spyOn(global, 'Date').mockImplementationOnce(() => mockDate);

  afterAll(() => {
    spy.mockRestore();
  });

  it('should render as expected', async () => {
    const { container } = render(<Clock updateEveryNSeconds={1} />);
    expect(container).toMatchSnapshot();
  });
});
