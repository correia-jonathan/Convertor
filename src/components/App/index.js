// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';

// == Import sous composant
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';

import './styles.scss';
import currenciesList from '../../data/currencies';

// == Composant
const App = () => (
  <div className="convertor">
    <Header />
    <main>
      <Currencies list={currenciesList} />
      <Amount />
    </main>
    <footer>
      &copy; corjo-design 2021
    </footer>
  </div>
);

// == Export
export default App;
