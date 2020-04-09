import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import './Header.css';

const Header = props => {
  console.log(props);
  return (
    <header>
      <Link to="/"><span className="button-back">back</span></Link>
      {/* <a href="" className="button-back">back</a> */}
      <h1>kkuljam</h1>
      <Link to="/"><span className="button-menu">menu</span></Link>
      {/* <a href="" className="button-menu">menu</a> */}
    </header>
  );
};

export default Header;
