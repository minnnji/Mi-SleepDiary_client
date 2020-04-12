import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import styles from './SleepList.module.css';

const SleepList = props => {
  const { sleepList } = props;
  console.log(sleepList);

  return (
    <>
      <Header />
      <main>
        <section>
          <h2>
            수면 & 일기 리스트
          </h2>
        </section>
        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles.left}>
              <div className={styles.score}>10점</div>
              <div className={styles.color} />
            </div>
            <div className={styles.right}>
              <h3>2020.04.01</h3>
              <span className={styles.hours}>8.5시간</span>
              <span className={styles.duration}>(23:00~07:00)</span>
              <p className={styles.reason}>10점을 준 이유는이유는이유는이유는</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default SleepList;
