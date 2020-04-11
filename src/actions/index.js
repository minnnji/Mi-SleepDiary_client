import * as types from '../constants/actionTypes';
import { sleepToCamelCase } from '../lib/helper';

export const receiveSleepPending = () => ({
  type: types.FETCH_LATELY_SLEEP_PENDING
});

export const receiveSleepSuccess = sleep => ({
  type: types.FETCH_LATELY_SLEEP_SUCCESS,
  sleep: sleepToCamelCase(sleep)
});

export const receiveSleepError = () => ({
  type: types.FETCH_LATELY_SLEEP_ERROR
});
