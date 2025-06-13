import PropTypes from 'prop-types';

const Button = ({ text, type, onClick }) => {
  const classNames = ['py-4', 'border', 'border-custom1', 'fs-5'];
  switch (type) {
    case 'normal':
      classNames.push('bg-custom2');
      break;

    case 'operator':
      classNames.push('bg-custom3');
      break;

    case 'wide':
      classNames.push('bg-custom2', 'col-6');
      break;

    default:
  }

  return (
    <button type="button" className={classNames.join(' ')} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
