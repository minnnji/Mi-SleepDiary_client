import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestBody, requestGoogleFitApi } from '../lib/api/googleFit';
import { setDailySleep } from '../lib/helper';
import { fetchSleep, fetchUpdateUserInfo } from '../lib/api/user';
import Home from '../components/Home/Home';

const HomeContainer = (props) => {
  const { user } = props;
  const fetchSleepData = async(userId) => {
    requestBody.startTimeMillis = new Date().setHours(-51, 0, 0, 0);
    requestBody.endTimeMillis = new Date().setHours(15, 0, 0, 0);

    const sleepResponse = await requestGoogleFitApi(requestBody);
    const sleepList = sleepResponse.data.bucket[0].dataset[0].point;
    const dailySleepList = setDailySleep(sleepList);
    console.log(dailySleepList);
    // fetchSleep(userId, dailySleepList, (sleep) => {
    //   console.log(sleep);
    // });

    const updateUser = Object.assign({}, user);
    updateUser.sleep_last_updated_at = new Date();

    // fetchUpdateUserInfo(userId, updateUser, (data) => {
    //   console.log(data);
    // })
  };

  useEffect(() => {
    if(user.email) fetchSleepData(user._id);
  })

  return (
    <Home user={user} />
  );
};

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
