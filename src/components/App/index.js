// == Import npm
import React from 'react';

// == Import

// == Import sous composant
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toggle from '../Toggle';

import './styles.scss';
import currenciesList from '../../data/currencies';

class App extends React.Component {
  state = {
    baseAmount: 1,
    isVisible: true,
    currency: 'Australian Dollar',
    /* placer dans le state la liste de currenciesList */
    currenciesStateList: currenciesList,
  };

  toggle = () => {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    });
  }

  makeConversion = () => {
    const { currency, baseAmount } = this.state;
    /* ma constante devise est un objet, qui est le resultat de la recherche (find) sur 
    ma list currenciesList.
    Ma recherche parcours chaque entrée désigné comme deviseObject et compare deviseObject à
    currency */
    const devise = currenciesList.find((deviseObject) => deviseObject.name === currency);

    const result = baseAmount * devise.rate;
    return Math.round(result * 100) / 100;
  }

  handleCurrencyClick = (param) => {
    this.setState({
      currency: param,
    });
  }

  render() {
    const { isVisible, currency, baseAmount } = this.state;
    const { currenciesStateList } = this.state;
    return (
      <div className="convertor">
        <Header baseAmount={baseAmount} />
        <Toggle onToggleClick={this.toggle} isOpened={isVisible} stateCurrency={currency} />
        <main>
          {
            isVisible
            && <Currencies list={currenciesStateList} 
              onCurrencyClick={this.handleCurrencyClick} currencyState={currency} />
          }
          <Amount currency={currency} amount={this.makeConversion()} />
        </main>
        <footer>
          &copy; corjo-design 2021
        </footer>
      </div>
    );
  }
}

// == Composant
/* const App = () => (
  <div className="convertor">
    <Header baseAmount={1} />
    <main>
      <Currencies list={currenciesList} />
      <Amount currency="gold coins" amount={1.09} />
    </main>
    <footer>
      &copy; corjo-design 2021
    </footer>
  </div> 
);*/

// == Export
export default App;
