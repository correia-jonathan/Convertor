import React from 'react';
import PropTypes from 'prop-types';

// Importation des styles du composant
import './styles.scss';
/* list est la props déversée dans le composant Currencies */
const Currencies = ({ list, onCurrencyClick, currencyState, currencyInput }) => (
  <section className="currencies">
    <input
      className="currencies__search"
      type="text"
      placeholder="Rechercher"
      // value = {}
      onChange={(evt) => {
        currencyInput(evt.target.value);
        // j'utilise une fonction pour transmettre les changements de mon composant à mon state
      }}
      />
    <ul className="currencies__list">
      {
        /*
        Pour manipuler ma props list je lui assigne la fonction map
        chaque entrée de list parcouru par la fonction map est désigné comme étant currencyObject
        */
        list.map((currencyObject) => {
          const classToApply = currencyObject.name === currencyState ? '--selected' : '';
          return (
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
              className={classToApply}
            >
              {currencyObject.name}
            </li>
          )})
      }
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
  currencyState: PropTypes.string.isRequired,
  currencyInput: PropTypes.func.isRequired,
};

export default Currencies;
