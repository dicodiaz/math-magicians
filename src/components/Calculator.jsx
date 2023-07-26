import { useState } from 'react';
import buttons from '../data/buttons';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [obj, setObj] = useState({ total: '0', next: null, operation: null });
  const { total, next, operation } = obj;

  const handleClick = (e) => {
    setObj(calculate(obj, e.target.textContent));
  };

  return (
    <div className="col-md-9 pt-5">
      <div className="row mx-0 g-0 row-cols-4 text-center">
        <div data-testid="screen" className="bg-custom1 text-white text-end col-12 p-4 fs-5">
          {total}
          {operation}
          {next}
        </div>
        {buttons.map((button) => {
          const { id, text, type } = button;
          return <Button key={id} text={text} type={type} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default Calculator;
