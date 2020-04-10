import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import '../App/App.css';
import './Write.css';

const Write = props => {
  const { user, sleep } = props;

  console.log(user);
  const [date, setDate] = useState('어젯 밤'),
    [duration, setDuration] = useState('23:00 ~ 07:30'),
    [hours, setHours] = useState('8시간'),
    [score, setScore] = useState('점수 선택하기 ▾'),
    [reason, setReason] = useState(''),
    [color, setColor] = useState(''),
    [memo, setMemo] = useState(''),
    colors = [['#F1F1B3', '노랑'], ['#BDE4D7', '초록'], ['#D8DCEB', '보라'], ['#EFC7D6', '빨강'], ['#CCE2EE', '파랑']];

  const options = [];
  for (let i = 1; i < 11; i++) {
    options.push(<option key={i} value={i}>
      {i}
      점
    </option>);
  }
  const handleSubmit = e => {
    e.preventDefault();
    const reqBody = {
      // author: props.user._id,
      // created_at:
    };
  };

  return (
    <>
      <Header />
      <main>
        <section className="sleepInfo">
          <div className="date">{date}</div>
          <h1 className="sleepInfo-title">나의 수면시간</h1>
          <h1 className="hours">{hours}</h1>
          <div className="time">{duration}</div>
        </section>
        <div className="contents">
          <form className="diary" action="" method="post">
            <div>
              <h2 className="score-title">
                오늘 나의 말, 행동을
                <br />
                점수로 매긴다면?
              </h2>
              <select
                name="score"
                className="score-select"
                defaultValue={score}
                onChange={e => setScore(e.target.value)}
              >
                <option value="">점수 선택하기 ▾</option>
                {options}
              </select>
              <span className="subText">그 이유를 자유롭게 적어주세요.</span>
              <textarea
                defaultValue={reason}
                onChange={e => setReason(e.target.value)}
              />
            </div>
            <div>
              <h2>
                오늘 나의 기분을
                <br />
                색깔로 표현하면?
              </h2>
              <div className="color-wrapper">
                {colors.map((item, index) => (
                  <div
                    key={index * 99}
                    style={{ backgroundColor: item[0] }}
                    onClick={() => setColor(item)}
                  >
                    {item[1]}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="subText">더 남기고 싶은 이야기가 있나요?</span>
              <textarea
                defaultValue={memo}
                onChange={e => setMemo(e.target.value)}
              />
            </div>
            <input type="submit" className="submit" onClick={e => handleSubmit(e)} />
          </form>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Write;
