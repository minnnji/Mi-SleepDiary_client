import React from 'react';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Home = props => {
  const { user } = props;

  return (
    <div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
