import React from 'react';
import PropTypes from 'prop-types';

import style from './Section.module.scss';

const Section = ({ className, children, background , ...props }) => {
  return (
    <div style={{backgroundBlendMode: 'hard-light', backgroundImage: `linear-gradient(288deg, rgb(0, 0, 0) 0%, rgb(20, 33, 61) 100%), url(${background})`}} className={`${style.section} ${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
