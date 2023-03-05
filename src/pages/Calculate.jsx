import Calculator from '../components/Calculator';
import Clock from '../components/Clock';

const Calculate = () => (
  <>
    <Calculator />
    <Clock updateEveryNSeconds={1} />
  </>
);

export default Calculate;
