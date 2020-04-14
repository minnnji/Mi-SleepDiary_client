import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import DailyPatternChart from '../Chart/DailyPatternChart';
import styles from './Detail.module.css';

const DetailHeader = ({ detail }) => {
  const { createdAt, wakeUpTime, bedTime, sleepDuration } = detail;

  const sleepDurationList = sleepDuration.split(':');
  const durationHours = sleepDurationList[1] >= 30 ? `${sleepDurationList[0]}.5` : sleepDurationList[0];
  const date = moment(createdAt).format('YYYY.MM.DD');
  const hours = `${durationHours}시간`;
  const duration = `${moment(bedTime).format('HH:mm')}~${moment(wakeUpTime).format('HH:mm')}`;

  return (
    <section className="sleepInfo">
      <div className="date">{date}</div>
      <h1 className="sleepInfo-title">나의 수면시간</h1>
      <h1 className="hours">{hours}</h1>
      <div className="time">{duration}</div>
    </section>
  );
};

const DetailDiary = ({ detail }) => {
  const { behaviorScore, feelingColor, behaviorScoreReason, memo } = detail;
  return (
    <>
      <div>
        <h2 className={styles.title}>
          오늘 나의 말, 행동을
          <br />
          점수로 매긴다면?
        </h2>
        <h2 className={styles.score}>
          {behaviorScore}
          점
        </h2>
        <div className={styles.subText}>{behaviorScoreReason}</div>
      </div>
      <div className={styles.colorWrapper}>
        <h2 className={styles.title}>
          오늘 나의 기분을
          <br />
          색깔로 표현하면?
        </h2>
        <div
          className={styles.color}
          style={{ backgroundColor: feelingColor[0] }}
        >
          {feelingColor[1]}
        </div>
      </div>
      {memo && (
        <div className={styles.memoWrapper}>
          <span className={styles.subTitle}>Memo</span>
          <div className={styles.subText}>{memo}</div>
        </div>
      )}
    </>
  );
};

export default function Detail(props) {
  const { sleep } = props;
  const isLoading = Object.keys(sleep).length === 0;
  const link = `/write?sleepId=${sleep._id}`;
  let diary;
  if (sleep) diary = sleep.diary;

  return (
    <div className={styles.detailWrapper}>
      <Header backButton />
      {isLoading && <div>Loading!</div>}
      {!isLoading && (
        <main>
          <DetailHeader detail={sleep} />
          <div className={styles.background}>
            <div className={styles.contents}>
              <DailyPatternChart sleep={sleep.sleepCycle} />
              {diary && <DetailDiary detail={diary} />}
              {!diary
                && (
                  <Link to={link}>
                    <div className="button fill">나의 하루 기록하기</div>
                  </Link>
                )}
            </div>
          </div>
        </main>
      )}
      <BottomNavigation />
    </div>
  );
}
