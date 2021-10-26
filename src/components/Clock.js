import PropTypes from 'prop-types';
import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    const { updateEveryNSeconds } = this.props;
    this.timerID = setInterval(() => this.tick(), 1000 * updateEveryNSeconds);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="col-md-9">
        <div className="row text-end text-white">
          <p>{date.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  updateEveryNSeconds: PropTypes.number.isRequired,
};
