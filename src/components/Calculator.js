import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (text) => {
    this.setState((state) => calculate(state, text));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="row mx-0 row-cols-4 text-center">
        <div className="bg-custom1 text-white text-end col-12 py-4 fs-5">
          {total}
          {operation}
          {next}
        </div>
        <Button classes={['bg-custom2']} text="AC" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="+/-" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="%" handleClick={this.handleClick} />
        <Button classes={['bg-custom3']} text="&divide;" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="7" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="8" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="9" handleClick={this.handleClick} />
        <Button classes={['bg-custom3']} text="&times;" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="4" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="5" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="6" handleClick={this.handleClick} />
        <Button classes={['bg-custom3']} text="&minus;" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="1" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="2" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="3" handleClick={this.handleClick} />
        <Button classes={['bg-custom3']} text="+" handleClick={this.handleClick} />
        <Button classes={['bg-custom2', 'col-6']} text="0" handleClick={this.handleClick} />
        <Button classes={['bg-custom2']} text="." handleClick={this.handleClick} />
        <Button classes={['bg-custom3']} text="=" handleClick={this.handleClick} />
      </div>
    );
  }
}
