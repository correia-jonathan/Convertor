import React from 'react';
import PropTypes from 'prop-types';

// Importation des styles du composant
import './styles.scss';

const Header = ({ baseAmount, amountInput }) => {
  const text = baseAmount > 1 ? 'euros' : 'euro';
  return (
    <header className="header">
      <h1 className="header__title">
        Convertor
      </h1>
      <input
        className="header__input"
        type="number"
        defaultValue={baseAmount}
        placeholder={baseAmount}
        onChange={(evt) =>{
          const string = evt.target.value;
          const number = Number(string);
          amountInput(number);
        }}
      />
      <span />
      <p className="header__amount">
        {text}
      </p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  amountInput: PropTypes.func.isRequired,
};
export default Header;
