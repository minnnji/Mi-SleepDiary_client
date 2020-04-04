import { requestBody, requestGoogleFitApi } from '../lib/googleFitApi';

const fetchSleepData = () => async dispatch => {
  // requestBody.startTimeMillis = new Date().setHours(0, 0, 0, 0);
  requestBody.startTimeMillis = new Date().setHours(-24, 0, 0, 0);
  requestBody.endTimeMillis = new Date().setHours(23, 59, 59, 59);
  const sleepData = await requestGoogleFitApi(requestBody);
  console.log(sleepData);
};

export default fetchSleepData;
