import axios from 'axios';
import * as actions from '../../actions/index';

export const fetchPostSleep = async (userId, sleepList, cb) => {
  try {
    const sleepResponse = await axios({
      method: 'post',
      url: `http://localhost:4000/api/users/${userId}/sleep`,
      data: sleepList
    });
    const response = await sleepResponse.data;
    cb(response);
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetSleep = async (userId, startDate, endDate, allowEmptyValue, cb) => {
  console.log(startDate);
  try {
    const sleepResponse = await axios({
      method: 'get',
      url: `http://localhost:4000/api/users/${userId}/sleep?startDate=${startDate}&endDate=${endDate}&allowEmptyValue=${allowEmptyValue}`
    });
    const response = await sleepResponse.data;
    cb(response);
  } catch (error) {
    console.log(error);
  }
};
