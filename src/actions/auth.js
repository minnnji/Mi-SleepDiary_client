import { setHeader } from '../lib/auth';
import { SET_CURRENT_USER } from '../constants/actionTypes';

export const login = (res, cb) => dispatch => {
  const {accessToken, tokenId, profileObj} = res;
  localStorage.setItem('tokenId', tokenId);
  localStorage.setItem('accessToken', accessToken);
  setHeader(accessToken);
  dispatch({type: SET_CURRENT_USER, payload: profileObj});
  cb();
};
