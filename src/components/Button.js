import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { handleClick, text } = this.props;
    handleClick(text);
  };

  render() {
    const { classes, text } = this.props;
    classes.push('py-4', 'border', 'border-custom1', 'fs-5');
    const classesString = classes.join(' ');
    return (
      <button type="button" className={classesString} onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
