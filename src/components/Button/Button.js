import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';

const Button = (props) => {
  const { className, disabled, loading, text, onClick, type } = props;
  return (
    <button
      className={`button${!disabled ? ` hvr-shadow` : ''}${
        className ? ` ${className}` : ``
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {loading ? <Loading /> : text}
    </button>
  );
};

Button.propTypes = {
  // * Optional class name
  className: PropTypes.string,
  // * Optional disabled state
  disabled: PropTypes.bool,
  // * Optional loading state
  loading: PropTypes.bool,
  // * Custom onclick function
  onClick: PropTypes.func,
  // * Text to display in button
  text: PropTypes.string,
  // * Optional type
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  type: 'button',
};

export default Button;
