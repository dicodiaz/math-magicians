import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '../components/Button';
import Calculator from '../components/Calculator';
import Header from '../components/Header';

describe('testing components', () => {
  test('testing Button.js', () => {
    const tree = render(<Button classes={['bg-custom2']} text="AC" handleClick={(text) => text} />);
    expect(tree).toMatchSnapshot();
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('testing Calculator.js', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByTestId('screen')).toHaveTextContent('2');
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('screen')).toHaveTextContent('3');
  });

  test('testing Header.js', () => {
    const tree = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
