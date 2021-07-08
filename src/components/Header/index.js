import React from 'react';

// Importation des styles du composant
import './styles.scss';

const Header = () => (
  <header className="header">
    <h1 className="header--title">
      Convertor
    </h1>
    <p className="header--amount">
      1 euro
    </p>
  </header>
);

export default Header;
