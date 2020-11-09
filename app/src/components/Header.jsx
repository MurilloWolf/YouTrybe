import React from 'react';
import logo from '../assests/imgs/trybe-logo.png';
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
