import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import Calculator from '../components/Calculator';
import Clock from '../components/Clock';
import Header from '../components/Header';


describe('testing components', () => {
  test('testing Button.js', () => {
    const tree = renderer
      .create(<Button classes={['bg-custom2']} text="AC" handleClick={(text) => text} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('testing Calculator.js', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('testing Clock.js', () => {
    const tree = renderer.create(<Clock updateEveryNSeconds={2}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('testing Header.js', () => {
    const tree = renderer.create(<Router> <Header /> </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
