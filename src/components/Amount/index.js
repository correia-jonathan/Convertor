import React from 'react';
import PropTypes from 'prop-types';

// Importation des styles du composant
import './styles.scss';

const Amount = ({ currency, amount }) => (
  <section className="amount">
    <p className="amount__value">{amount}</p>
    <p className="amount__currency"> {currency}</p>
  </section>
);

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  amount:   PropTypes.func.isRequired,
};

export default Amount;
