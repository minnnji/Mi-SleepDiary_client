import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Write from '../components/Write/Write';
import fetchPostDiary from '../lib/api/diary';
import { fetchUpdateUserInfo } from '../lib/api/user';
import { fetchUpdateSleepInfo, fetchGetSleepById } from '../lib/api/sleep';

const WriteContainer = props => {
  const { location, user, latelySleep } = props;
  const { sleepId } = queryString.parse(location.search);
  const userId = user._id;

  const [sleep, setSleep] = useState({});

  const getSleepById = async () => {
    const currentSleep = await fetchGetSleepById(userId, sleepId);
    return setSleep(currentSleep);
  };

  useEffect(() => {
    if (userId && sleepId) {
      getSleepById();
    } else {
      setSleep(latelySleep);
    }
  }, [userId]);

  const saveDiary = content => fetchPostDiary(userId, content, diary => {
    const { date, _id } = diary;
    const reqBody = {};
    reqBody[date] = _id;
    fetchUpdateUserInfo(userId, { myDiaries: reqBody });
    fetchUpdateSleepInfo(userId, sleep._id, { diary: _id });
  });

  return (
    <>
      {!Object.keys(sleep).length && <div>Loading!</div>}
      {Object.keys(sleep).length && (
        <Write
          sleep={sleep}
          saveDiary={saveDiary}
        />
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { user, latelySleep } = state;
  return {
    user,
    latelySleep: latelySleep.sleeps
  };
};

export default connect(mapStateToProps)(WriteContainer);
