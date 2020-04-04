import axios from 'axios';

export const requestBody = {
  "startTimeMillis": 1585926000000,
  "endTimeMillis": 1586012340000,
  "aggregateBy": [
    {
      "dataTypeName": "com.google.activity.segment",
			"dataSourceId":"derived:com.google.activity.segment:com.google.fitkit:apple:iphone:hm.wristband:session_activity_segment"
    }
  ]
}

export const requestGoogleFitApi = (requestBody) => {
  console.log(123);
  console.log(axios['post']('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', requestBody));
  return axios['post']('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', requestBody);
};
