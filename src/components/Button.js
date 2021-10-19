import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
    const { classes, text } = this.props;
    classes.push('py-4', 'border', 'border-custom1', 'fs-5');
    const classesString = classes.join(' ');
    return (
      <button type="button" className={classesString}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
};
