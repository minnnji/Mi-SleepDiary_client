import React from 'react';
import dotenv from 'dotenv';
import { GoogleLogin } from 'react-google-login';
import { setHeader } from '../../lib/auth';
import { postUser } from '../../lib/api/user';

dotenv.config();

const Login = props => {
  const { setCurrentUser, history } = props;

  const setAuth = (res, cb) => {
    const { accessToken, tokenId, profileObj } = res;

    localStorage.setItem('tokenId', tokenId);
    localStorage.setItem('accessToken', accessToken);

    setHeader(accessToken);
    postUser(profileObj, user => {
      setCurrentUser(user);
    });
    cb();
  };

  const handleSuccessLogin = res => {
    setAuth(res, () => {
      history.push('/home');
    });
  };

  const handleFailureLogin = res => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        className="signin-button"
        clientId={process.env.REACT_APP_CLIENT_ID}
        scope="https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.activity.write"
        onSuccess={handleSuccessLogin}
        onFailure={handleFailureLogin}
      >
        <span>구글 아이디로 로그인</span>
      </GoogleLogin>
    </div>
  );
};

export default Login;
