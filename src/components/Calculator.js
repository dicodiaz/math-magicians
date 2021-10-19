import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="row mx-0 row-cols-4 text-center">
        <div className="bg-custom1 text-white text-end col-12 py-4 fs-5">0</div>
        <Button classes={['bg-custom2']} text="AC" />
        <Button classes={['bg-custom2']} text="+/-" />
        <Button classes={['bg-custom2']} text="%" />
        <Button classes={['bg-custom3']} text="&divide;" />
        <Button classes={['bg-custom2']} text="7" />
        <Button classes={['bg-custom2']} text="8" />
        <Button classes={['bg-custom2']} text="9" />
        <Button classes={['bg-custom3']} text="&times;" />
        <Button classes={['bg-custom2']} text="4" />
        <Button classes={['bg-custom2']} text="5" />
        <Button classes={['bg-custom2']} text="6" />
        <Button classes={['bg-custom3']} text="&minus;" />
        <Button classes={['bg-custom2']} text="1" />
        <Button classes={['bg-custom2']} text="2" />
        <Button classes={['bg-custom2']} text="3" />
        <Button classes={['bg-custom3']} text="+" />
        <Button classes={['bg-custom2', 'col-6']} text="0" />
        <Button classes={['bg-custom2']} text="." />
        <Button classes={['bg-custom3']} text="=" />
      </div>
    );
  }
}
