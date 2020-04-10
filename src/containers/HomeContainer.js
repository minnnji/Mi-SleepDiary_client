import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestBody, requestGoogleFitApi } from '../lib/api/googleFit';
import { setDailySleep } from '../lib/helper';
import { fetchPostSleep, fetchGetSleep } from '../lib/api/sleep';
import { fetchUpdateUserInfo } from '../lib/api/user';
import * as actions from '../actions/index';
import Home from '../components/Home/Home';

const HomeContainer = props => {
  const { user, getLatelySleep } = props;
  const getGoogleFitData = async cb => {
    const lastUpdate = user.sleep_last_updated_at;

    requestBody.startTimeMillis = lastUpdate ? new Date(lastUpdate).setHours(21, 0, 0, 0)
      : new Date().setHours(-(24 * 14) + 21, 0, 0, 0);
    requestBody.endTimeMillis = new Date().setHours(15, 0, 0, 0);

    const sleepResponse = await requestGoogleFitApi(requestBody);

    cb(sleepResponse);
  };

  const postSleeps = async (userId, sleepResponse, cb) => {
    if (!sleepResponse) return cb();

    const sleepList = sleepResponse.data.bucket[0].dataset[0].point;
    if (!sleepList.length) return cb();

    const dailySleepList = setDailySleep(sleepList);
    const response = await fetchPostSleep(userId, dailySleepList);
    if (response === 'ok') {
      fetchUpdateUserInfo(userId, { sleep_last_updated_at: new Date() });
    }

    cb();
  };

  const getTodaySleep = async userId => {
    const today = new Date();
    actions.receiveSleepPending();
    fetchGetSleep(userId, today, today, false, sleep => {
      console.log(sleep[0]);
      getLatelySleep(sleep[0]);
    });
  };

  useEffect(() => {
    if (user.email) {
      getGoogleFitData(sleepResponse => {
        postSleeps(user._id, sleepResponse, () => {
          getTodaySleep(user._id);
        });
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
  getLatelySleep(sleep) {
    dispatch(actions.receiveSleepSuccess(sleep));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
