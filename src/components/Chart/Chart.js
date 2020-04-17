import React from 'react';
import WeeklyPercentageChart from './WeeklyPercentageChart';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import '../App/App.css';
import './Chart.css';

const Chart = props => {
  const { weeklyPatternList } = props;
  const isLoading = !weeklyPatternList.length;
  const keys = ['deep', 'light'],
    colors = { deep: '#080850', light: '#471FB3' };

  return (
    <>
      <Header />
      {isLoading
        ? <Loading />
        : (
          <WeeklyPercentageChart
            sleepList={weeklyPatternList}
            keys={keys}
            colors={colors}
          />
        )}
      <BottomNavigation />
    </>
  );
};

export default Chart;
