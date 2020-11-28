import PropTypes from 'prop-types';
import Loading from './Loading';

const Button = (props) => {
  const { className, disabled, loading, text, onClick } = props;
  return (
    <button
      className={`button hvr-shadow${className ? ` ${className}` : ``}`}
      onClick={onClick}
      disabled={disabled}
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
};

Button.defaultProps = {
  disabled: false,
  loading: false,
};

export default Button;
