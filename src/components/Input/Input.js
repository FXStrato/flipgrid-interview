import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
  const { className, id, name, type } = props;
  return (
    <input
      className={className || ''}
      id={id}
      name={name}
      type={type}
      ref={ref}
    />
  );
});

Input.propTypes = {
  // * custom class name
  className: PropTypes.string,
  // * id of input
  id: PropTypes.string,
  // * name of input
  name: PropTypes.string,
  // * input type
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
