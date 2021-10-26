import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [obj, setObj] = useState({ total: '0', next: null, operation: null });
  const { total, next, operation } = obj;

  const handleClick = (text) => {
    setObj(calculate(obj, text));
  };

  return (
    <div className="col-md-9">
      <div className="row mx-0 row-cols-4 text-center">
        <div className="bg-custom1 text-white text-end col-12 py-4 fs-5">
          {total}
          {operation}
          {next}
        </div>
        <Button classes={['bg-custom2']} text="AC" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="+/-" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="%" handleClick={handleClick} />
        <Button classes={['bg-custom3']} text="&divide;" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="7" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="8" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="9" handleClick={handleClick} />
        <Button classes={['bg-custom3']} text="&times;" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="4" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="5" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="6" handleClick={handleClick} />
        <Button classes={['bg-custom3']} text="&minus;" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="1" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="2" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="3" handleClick={handleClick} />
        <Button classes={['bg-custom3']} text="+" handleClick={handleClick} />
        <Button classes={['bg-custom2', 'col-6']} text="0" handleClick={handleClick} />
        <Button classes={['bg-custom2']} text="." handleClick={handleClick} />
        <Button classes={['bg-custom3']} text="=" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
