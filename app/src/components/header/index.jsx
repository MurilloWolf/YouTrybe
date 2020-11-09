import React from 'react';
import './styles.css';
// eslint-disable-next-line import/no-unresolved
import logo from '../../assests/imgs/trybe-logo.png';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo-rybe" />
      </header>
    );
  }
}

export default Header;
