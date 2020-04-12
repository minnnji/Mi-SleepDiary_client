import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import './Header.css';

const Header = props => {
  const { backButton } = props;

  return (
    <header>
      {backButton && <Link to="/"><span className="button-back">back</span></Link>}
      <h1>kkuljam</h1>
      <Link to="/"><span className="button-menu">menu</span></Link>
    </header>
  );
};

export default Header;
