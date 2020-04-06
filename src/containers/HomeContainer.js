import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestBody, requestGoogleFitApi } from '../lib/api/googleFit';
import { setDailySleep } from '../lib/helper';
import { fetchSleep, fetchUpdateUserInfo } from '../lib/api/user';
import Home from '../components/Home/Home';

const HomeContainer = (props) => {
  const { user } = props;
  const fetchSleepData = async(userId) => {
    const lastUpdate = user.sleep_last_updated_at;

    requestBody.startTimeMillis = lastUpdate ? new Date(lastUpdate).setHours(21, 0, 0, 0)
      : new Date().setHours(-(24 * 7) + 21, 0, 0, 0);
    requestBody.endTimeMillis = new Date().setHours(15, 0, 0, 0);

    const sleepResponse = await requestGoogleFitApi(requestBody);

    if(sleepResponse) {
      const sleepList = sleepResponse.data.bucket[0].dataset[0].point;
      const dailySleepList = setDailySleep(sleepList);
      fetchSleep(userId, dailySleepList, (response) => {
        if(response === 'ok') {
          fetchUpdateUserInfo(userId, { sleep_last_updated_at: new Date() });
        }
      });
    }
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
