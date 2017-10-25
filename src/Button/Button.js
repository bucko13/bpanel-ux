import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ type = 'default', children, ...otherProps }) => (
  <button className={`${type}`} {...otherProps}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};

export default Button;
