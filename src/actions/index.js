import { setHeader } from '../lib/auth';
import * as types from '../constants/actionTypes';
import { fetchAuth } from '../lib/api/user';

export const login = (res, cb) => dispatch => {
  const { accessToken, tokenId, profileObj } = res;

  localStorage.setItem('tokenId', tokenId);
  localStorage.setItem('accessToken', accessToken);
  setHeader(accessToken);

  fetchAuth(profileObj, user => {
    console.log(user);
    dispatch({ type: types.SET_CURRENT_USER, payload: user });
  });

  cb();
};

export const receiveSleepPending = () => ({
  type: types.FETCH_LATELY_SLEEP_PENDING
});

export const receiveSleepSuccess = sleep => ({
  type: types.FETCH_LATELY_SLEEP_SUCCESS,
  sleep
});

export const receiveSleepError = () => ({
  type: types.FETCH_LATELY_SLEEP_ERROR
});
