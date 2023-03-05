import PropTypes from 'prop-types';

const Button = ({ text, type, onClick }) => {
  const classNameArray = ['py-4', 'border', 'border-custom1', 'fs-5'];
  switch (type) {
    case 'normal':
      classNameArray.push('bg-custom2');
      break;
    case 'operator':
      classNameArray.push('bg-custom3');
      break;
    case 'wide':
      classNameArray.push('bg-custom2', 'col-6');
      break;
    default:
  }
  const className = classNameArray.join(' ');

  return (
    <button type="button" className={className} onClick={onClick}>
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
