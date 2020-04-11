import React, { useState } from 'react';
import { connect } from 'react-redux';
import Write from '../components/Write/Write';
import postDiary from '../lib/api/diary';

const WriteContainer = props => {
  const { user, latelySleep } = props;
  const [sleep, setSleep] = useState(latelySleep);

  const saveDiary = diary => postDiary(user._id, diary, result => {
    console.log(result);
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
