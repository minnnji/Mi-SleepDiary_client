import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import styles from './SleepList.module.css';

const SleepList = props => {
  const { sleepList } = props;
  const isLoading = sleepList.length === 0;

  const cards = sleepList.map(sleep => {
    const {
      _id,
      createdAt,
      sleepDuration,
      bedTime,
      wakeUpTime,
      diary
    } = sleep;

    const date = moment(createdAt).format('YYYY.MM.DD');
    const duration = `(${moment(bedTime).format('HH:mm')}~${moment(wakeUpTime).format('HH:mm')})`;
    const link = `/detail?sleepId=${_id}`;
    let reason = '작성한 일기가 없습니다.';
    let behaviorScore = '- 점';
    let color = 'gray';

    if (diary) {
      behaviorScore = `${diary.behaviorScore}점`;
      color = diary.feelingColor[0];
      reason = diary.behaviorScoreReason;
    }

    const sleepDurationList = sleepDuration.split(':');
    const hours = sleepDurationList[1] >= 30 ? `${sleepDurationList[0]}.5시간` : `${sleepDurationList[0]}시간`;

    return (
      <Link key={_id} to={link}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.color} style={{ backgroundColor: color }} />
            <div className={styles.score}>
              {behaviorScore}
            </div>
          </div>
          <div className={styles.right}>
            <h3>
              {date}
            </h3>
            <span className={styles.hours}>
              {hours}
            </span>
            <span className={styles.duration}>
              {duration}
            </span>
            <p className={styles.reason}>
              {reason}
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Header />
      <main>
        <section>
          <h2 className={styles.title}>
            수면 & 일기 리스트
          </h2>
        </section>
        {isLoading && <div>Loading!</div>}
        {!isLoading
          && (
            <div className={styles.list}>
              {cards}
            </div>
          )}
      </main>
      <BottomNavigation />
    </>
  );
};

export default SleepList;
