import { setHeader } from '../lib/auth';
import { SET_CURRENT_USER } from '../constants/actionTypes';
import { fetchAuth } from '../lib/api/user';

const login = (res, cb) => dispatch => {
  const { accessToken, tokenId, profileObj } = res;

  localStorage.setItem('tokenId', tokenId);
  localStorage.setItem('accessToken', accessToken);
  setHeader(accessToken);

  fetchAuth(profileObj, user => {
    dispatch({ type: SET_CURRENT_USER, payload: user });
  });

  cb();
};

export default login;
