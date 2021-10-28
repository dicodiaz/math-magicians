import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '../components/Button';
import Calculator from '../components/Calculator';
import Clock from '../components/Clock';
import Header from '../components/Header';

describe('testing components', () => {
  test('testing Button.js', () => {
    const tree = render(<Button classes={['bg-custom2']} text="AC" handleClick={(text) => text} />);
    expect(tree).toMatchSnapshot();
  });

  test('testing Calculator.js', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  test('testing Clock.js', () => {
    const tree = render(<Clock updateEveryNSeconds={2} />);
    expect(tree).toMatchSnapshot();
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
