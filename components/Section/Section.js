import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.scss';

const Section = ({ className, children, ...props }) => {
  return (
    <div className={`${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
