import React, { useState } from 'react';
import { connect } from 'react-redux';
import Write from '../components/Write/Write';
import fetchPostDiary from '../lib/api/diary';
import { fetchUpdateUserInfo } from '../lib/api/user';
import { fetchUpdateSleepInfo } from '../lib/api/sleep';

const WriteContainer = props => {
  const { user, latelySleep } = props;
  const userId = user._id;
  const [sleep, setSleep] = useState(latelySleep);

  const saveDiary = content => fetchPostDiary(userId, content, diary => {
    const { date, _id } = diary;
    const reqBody = {};
    reqBody[date] = _id;
    fetchUpdateUserInfo(userId, { myDiaries: reqBody });
    fetchUpdateSleepInfo(userId, sleep._id, { diary: _id });
  });

  return (
    <Write
      sleep={sleep}
      saveDiary={saveDiary}
    />
  );
};

const mapStateToProps = state => {
  const { user, latelySleep } = state;
  return {
    user,
    latelySleep: latelySleep.sleeps
  };
};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);
