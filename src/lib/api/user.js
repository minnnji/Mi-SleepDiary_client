import axios from 'axios';

export const postUser = async (profile, cb) => {
  const { email, name } = profile;
  try {
    const userResponse = await axios({
      method: 'post',
      url: 'http://localhost:4000/api/auth/login',
      data: { email, name }
    });
    const user = await userResponse.data;
    cb(user);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpdateUserInfo = async (userId, updateInfo) => {
  try {
    await axios({
      method: 'put',
      url: `http://localhost:4000/api/users/${userId}`,
      data: updateInfo
    });
  } catch (error) {
    console.log(error);
  }
};
