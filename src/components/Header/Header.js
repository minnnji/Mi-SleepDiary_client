import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdMenu } from 'react-icons/md';
import '../App/App.css';
import './Header.css';

const Header = props => {
  const { backButton } = props;

  return (
    <header>
      {backButton && <Link to="/"><span className="button-back"><MdArrowBack /></span></Link>}
      <h1>Mi Sleep Diary</h1>
      <Link to="/"><span className="button-menu"><MdMenu /></span></Link>
    </header>
  );
};

export default Header;
