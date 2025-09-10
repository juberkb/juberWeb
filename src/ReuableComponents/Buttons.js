import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className, link }) => {
  // const handleClick = (e) => {
  //   if (link) {
  //     window.open(link, '_blank');
  //   } else {
  //     onClick && onClick(e);
  //   }
  // };
const handleClick = (e) => {
    if (link) {
      if (link.startsWith('mailto:')) {
        window.location.href = link; // ✅ Use location.href for mailto
      } else {
        window.open(link, '_blank');
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
