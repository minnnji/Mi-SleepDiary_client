import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestBody, requestGoogleFitApi } from '../lib/api/googleFit';
import setDailySleep from '../lib/helper';
import { fetchPostSleep, fetchGetSleep } from '../lib/api/sleep';
import { fetchUpdateUserInfo } from '../lib/api/user';
import Home from '../components/Home/Home';

const HomeContainer = props => {
  const { user } = props;
  const getGoogleFitData = async (userId, cb) => {
    const lastUpdate = user.sleep_last_updated_at;

    requestBody.startTimeMillis = lastUpdate ? new Date(lastUpdate).setHours(21, 0, 0, 0)
      : new Date().setHours(-(24 * 14) + 21, 0, 0, 0);
    requestBody.endTimeMillis = new Date().setHours(15, 0, 0, 0);

    const sleepResponse = await requestGoogleFitApi(requestBody);

    if (sleepResponse) {
      const sleepList = sleepResponse.data.bucket[0].dataset[0].point;

      if (sleepList.length) {
        const dailySleepList = setDailySleep(sleepList);
        fetchPostSleep(userId, dailySleepList, response => {
          if (response === 'ok') {
            fetchUpdateUserInfo(userId, { sleep_last_updated_at: new Date() });
          }
        });
      }
    }
    cb();
  };

  const getTodaySleep = async userId => {
    const today = new Date();
    fetchGetSleep(userId, today, today, false, sleep => {
      console.log(sleep);
    });
  };

  useEffect(() => {
    if (user.email) {
      getGoogleFitData(user._id, () => {
        getTodaySleep(user._id);
      });
    }
  });

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

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
