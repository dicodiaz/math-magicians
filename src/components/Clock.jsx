import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Clock = ({ updateEveryNSeconds }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000 * updateEveryNSeconds);
    return () => clearInterval(timerID);
  }, [updateEveryNSeconds]);

  return (
    <div className="col-md-9">
      <div className="row text-end text-white">
        <p data-testid="time">{date.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

Clock.propTypes = {
  updateEveryNSeconds: PropTypes.number.isRequired,
};

export default Clock;
