import React from 'react';
import PropTypes from 'prop-types';

// Importation des styles du composant
import './styles.scss';
/* list est la props déversée dans le composant Currencies */
const Currencies = ({ list, onCurrencyClick }) => (
  <section className="currencies">
    <div className="currencies__title">Currencies</div>
    <ul className="currencies__list">
      {
        /*
        Pour manipuler ma props list je lui assigne la fonction map
        chaque entrée de list parcouru par la fonction map est désigné comme étant currencyObject
        */
        list.map((currencyObject) => (
          /*
          J'affiche le champs name de currencyObject
          le mapping requière que l'on attribue une clés à chaque <li> génére,
          sans cela une erreur apparait dans la console
          */
          <li
            key={currencyObject.name}
            onClick={() => {
              onCurrencyClick(currencyObject.name);
            }}
          >
            {currencyObject.name}
          </li>
        ))
      }
      <li>Eur</li>
    </ul>
  </section>
);

Currencies.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
};

export default Currencies;
