import React from 'react';
import WeeklyPercentageChart from './WeeklyPercentageChart';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import '../App/App.css';
import './Chart.css';

const Chart = props => {
  const { weeklyPatternList } = props;
  const keys = ['deep', 'light'],
    colors = { deep: '#080850', light: '#471FB3' };

  return (
    <>
      <WeeklyPercentageChart sleepList={weeklyPatternList} keys={keys} colors={colors} />
      <BottomNavigation />
    </>
  );
};

export default Chart;
