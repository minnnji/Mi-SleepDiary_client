import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import './BottomNavigation.css';

const BottomNavigation = props => (
  <nav>
    <ul>
      <Link to="/home">
        <li>홈</li>
      </Link>
      <Link to="/write">
        <li>작성하기</li>
      </Link>
      <Link to="/list">
        <li>리스트</li>
      </Link>
      <Link to="/chart">
        <li>차트</li>
      </Link>
    </ul>
  </nav>
);

export default BottomNavigation;
