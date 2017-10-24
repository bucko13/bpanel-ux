import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ type = 'default', children }) => (
  <button className={`${type}`}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};

export default Button;
