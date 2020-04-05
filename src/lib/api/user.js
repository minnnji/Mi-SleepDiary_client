import axios from 'axios';

export const fetchAuth = async (profile, cb) => {
  const { email, name } = profile;

  const userResponse = await axios({
    method: 'post',
    url: 'http://localhost:4000/api/auth/login',
    data: { email, name }
  });
  const user = await userResponse.data;
  cb(user);
};
