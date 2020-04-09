import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';
import './BottomNavigation.css';

const BottomNavigation = props => {
  console.log(123);
  return (
    <nav>
      <ul>
        <Link to="/"><li>홈</li></Link>
        <Link to="/write"><li>작성하기</li></Link>
        <Link to="/"><li>캘린더</li></Link>
        <Link to="/chart"><li>차트</li></Link>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
