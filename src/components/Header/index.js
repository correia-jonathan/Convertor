import React from 'react';

// Importation des styles du composant
import './styles.scss';

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      Convertor
    </h1>
    <p className="header__amount">
      1 euro
    </p>
  </header>
);

export default Header;
