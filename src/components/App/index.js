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
    isVisible: true,
    /* placer dans le state la liste de currenciesList */
    currenciesStateList: currenciesList,
  };

  toggle = () => {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    });
  }

  render() {
    const { isVisible } = this.state;
    const { currenciesStateList } = this.state;
    return (
      <div className="convertor">
        <Header baseAmount={5} />
        <Toggle onToggleClick={this.toggle} isOpened={isVisible} />
        <main>
          {
            // isVisible && <Currencies list={currenciesList} />
            isVisible && <Currencies list={currenciesStateList} />
          }
          <Amount currency="gold coins" amount={1.09} />
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
