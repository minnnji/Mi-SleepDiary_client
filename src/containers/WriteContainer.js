import React, { useState } from 'react';
import { connect } from 'react-redux';
import Write from '../components/Write/Write';
import { sleepForDiary } from '../lib/helper';

const WriteContainer = props => {
  const { user, latelySleep } = props;

  const [sleep, setSleep] = useState(sleepForDiary(latelySleep));
  const handleDiaryDate = date => {

  };

  return (
    <Write user={user} sleep={sleep} />
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
