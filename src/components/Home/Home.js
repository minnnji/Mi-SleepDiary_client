import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import DailyPatternChart from '../Chart/DailyPatternChart';
import styles from './Home.module.css';

const Home = props => {
  const { user, sleepForDailyCycleChart } = props;
  // const { bedTime, wakeUpTime, deepSleepPercentage, lightSleepPercentage, sleepDuration } = sleepForDailyCycleChart;

  return (
    <div>
      <Header />
      <main>
        <section className={styles.welcome}>
          <h2>
            {user.email}
            님,
            <br />
            안녕하세요.
          </h2>
        </section>
        <div className={styles.contents}>
          <div className={styles.writeButton}>
            <Link to="/write">오늘 일기쓰기 ►</Link>
          </div>
          <div className={styles.sleepCard}>
            <h3 className={styles.sleepTitle}>지난 밤, 나의 수면상태는?</h3>
            <DailyPatternChart sleep={sleepForDailyCycleChart.sleepCycle} />
            <div className={styles.sleepDetail}>
              <p>잠든 시간 : </p>
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Home;
