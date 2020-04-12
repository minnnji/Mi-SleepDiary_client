import React from 'react';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Home = props => {
  const { user } = props;

  return (
    <div>
      <Header />
      <BottomNavigation />
    </div>
  );
};

export default Home;
