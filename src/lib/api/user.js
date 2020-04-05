import axios from 'axios';

export const fetchAuth = async (profile, cb) => {
  const { email, name } = profile;

  try {
    const userResponse = await axios({
      method: 'post',
      url: 'http://localhost:4000/api/auth/login',
      data: { email, name }
    });
    const user = await userResponse.data;
    cb(user);
  } catch(error) {
    console.log(error);
  }
};

export const fetchSleep = async (userId, sleepInfo, cb) => {

  try {
    const sleepResponse = await axios({
      method: 'post',
      url: `http://localhost:4000/api/users/${userId}/sleep`,
      data: sleepInfo
    });
    const sleep = await sleepResponse.data;
    cb(sleep);
  } catch(error) {
    console.log(error);
  }
};

export const fetchUpdateUserInfo = async (userId, updateInfo, cb) => {
  try {
    const userResponse = await axios({
      method: 'put',
      url: `http://localhost:4000/api/users/${userId}`,
      data: updateInfo
    });
    const user = await userResponse.data;
    cb(user);
  } catch(error) {
    console.log(error);
  }
};
