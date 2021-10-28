import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import Calculator from '../components/Calculator';

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
});
