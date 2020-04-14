import React from 'react';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import DailyPatternChart from '../Chart/DailyPatternChart';

const Home = props => {
  const { user, sleepForDailyCycleChart } = props;

  return (
    <div>
      <Header />
      <DailyPatternChart sleep={sleepForDailyCycleChart.sleepCycle} />
      <BottomNavigation />
    </div>
  );
};

export default Home;
