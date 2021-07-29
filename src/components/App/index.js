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

/* la class App est une façon de façon de coder qui est désuet mais importante
pour reprendre un code legacy  */
class App extends React.Component {
  state = {
    baseAmount: 1,
    isVisible: true,
    currency: 'Australian Dollar',
    filterText: '',
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

  filterCurrencies = () => {
    const { filterText } = this.state;
    const { currenciesStateList } = this.state;

    const filterResult = currenciesStateList.filter((deviseObject) => {
      // Étape intermédiare pour tout mettre en minuscule
      const nameLowerCase = deviseObject.name.toLowerCase();
      const filterLowerCase = filterText.toLowerCase();
      return nameLowerCase.includes(filterLowerCase);
    });
    // Return un nouveau tableau de currenculist filtrée
    // utiliser filter()
    // ATTENTION il faut return le nouveau tableau obtenu
    return filterResult;
  }

  handleCurrencyInput = (param) => {
    this.setState({
      filterText: param,
    });
  }

  handleBaseAmount = (inputBaseAmount) => {
    this.setState({
      baseAmount: inputBaseAmount,
    });
  }

  componentDidMount= () => {
    const {currency} = this.state;
    document.title = `convertor € -> ${currency}`;
  };

  componentDidUpdate=()=>{
    const {currency} = this.state;
    document.title = `convertor € -> ${currency}`;
  }

  render() {
    const { isVisible, currency, baseAmount, filterText } = this.state;
    return (
      <div className="convertor">
        <Header baseAmount={baseAmount} amountInput={this.handleBaseAmount} />
        <Toggle onToggleClick={this.toggle} isOpened={isVisible} stateCurrency={currency} />
        <main>
          {
            isVisible
            && (
              <Currencies
                list={this.filterCurrencies()}
                onCurrencyClick={this.handleCurrencyClick}
                currencyState={currency}
                currencyInput={this.handleCurrencyInput}
                stateInputText={filterText}
              />
            )
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

// == Export
export default App;
