import React from 'react';
import PropTypes from 'prop-types';

import style from './Section.module.scss';

const Section = ({ className, children, background , ...props }) => {
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
