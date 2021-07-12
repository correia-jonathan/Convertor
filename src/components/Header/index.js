import React from 'react';
import PropTypes from 'prop-types';

// Importation des styles du composant
import './styles.scss';

const Header = ({ baseAmount }) => {
  const text = baseAmount > 1 ? 'euros' : 'euro' ;
  return (
    <header className="header">
      <h1 className="header__title">
        Convertor
      </h1>
      <p className="header__amount">
        {baseAmount} {text}
      </p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};
export default Header;
