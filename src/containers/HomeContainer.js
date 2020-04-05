import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchSleepData from '../actions/sleep';
import Home from '../components/Home/Home';

const HomeContainer = (props) => {
  const { user, fetchSleepData } = props;

  useEffect(() => {
    fetchSleepData();
  })

  return (
    <Home user={user} />
  );
};

const mapStateToProps = state => {
  console.log(state);
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStateToProps, { fetchSleepData })(HomeContainer);
