import React from 'react';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import '../App/App.css';
import './Write.css';

const Write = props => {
  console.log(123);
  return (
    <>
      <Header />
      <main>
        <section className="sleepInfo">
          <div className="date">어젯 밤</div>
          <h1 className="sleepInfo-title">나의 수면시간</h1>
          <h1 className="hours">8시간</h1>
          <div className="time">23:00 ~ 07:30</div>
        </section>
        <div className="contents">
          <form className="diary" action="" method="post">
            <div>
              <h2 className="score-title">
                오늘 나의 말, 행동을
                <br />
                점수로 매긴다면?
              </h2>
              <select name="score" className="score-select">
                <option value="">점수 선택하기</option>
                <option value="1">1점</option>
                <option value="2">2점</option>
                <option value="3">3점</option>
                <option value="4">4점</option>
                <option value="5">5점</option>
                <option value="6">6점</option>
                <option value="7">7점</option>
                <option value="8">8점</option>
                <option value="9">9점</option>
                <option value="10">10점</option>
              </select>
              <textarea placeholder="그 이유를 자유롭게 적어주세요." />
            </div>
            <div>
              <h2>
                오늘 나의 기분을
                <br />
                색깔로 표현하면?
              </h2>
              <div className="color-wrapper">
                <div>빨</div>
                <div>주</div>
                <div>노</div>
                <div>초</div>
                <div>파</div>
              </div>
            </div>
            <div>
              <textarea placeholder="더 남기고 싶은 이야기가 있나요?" />
            </div>
            <input type="submit" className="submit" />
          </form>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Write;
