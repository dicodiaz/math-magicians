import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import Clock from '../../components/Clock';

describe('Clock component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-03-05T00:00:00'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render as expected', () => {
    const { container } = render(<Clock updateEveryNSeconds={1} />);
    expect(container).toMatchSnapshot();
  });

  it('should update the time every second with prop: updateEveryNSeconds = 1', () => {
    const tree = render(<Clock updateEveryNSeconds={1} />);
    const timeElement = tree.getByTestId('time');
    expect(timeElement).toHaveTextContent('12:00:00 a. m.');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timeElement).toHaveTextContent('12:00:01 a. m.');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timeElement).toHaveTextContent('12:00:02 a. m.');
  });

  it('should update the time every 2 seconds with prop: updateEveryNSeconds = 2', () => {
    const tree = render(<Clock updateEveryNSeconds={2} />);
    const timeElement = tree.getByTestId('time');
    expect(timeElement).toHaveTextContent('12:00:00 a. m.');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timeElement).toHaveTextContent('12:00:00 a. m.');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timeElement).toHaveTextContent('12:00:02 a. m.');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timeElement).toHaveTextContent('12:00:02 a. m.');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timeElement).toHaveTextContent('12:00:04 a. m.');
  });
});
