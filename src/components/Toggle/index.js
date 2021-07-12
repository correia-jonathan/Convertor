import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Toggle = ({ onToggleClick, isOpened }) => {
  const classToUse = isOpened ? 'toggler toggler--open' : 'toggler';
  return (
    <button 
      type="button"
      className={classToUse}
      onClick={onToggleClick}
    >
      =
    </button>
  );
};

Toggle.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default Toggle;
