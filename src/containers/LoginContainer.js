import React from 'react';
import { connect } from 'react-redux';
import dotenv from 'dotenv';
import { GoogleLogin } from 'react-google-login';
import { login } from '../actions/auth';

dotenv.config();

const LoginContainer = (props) => {
  const handleSuccessLogin = (res) => {
    console.log(res);
    props.login(res, () => {
      props.history.push('/home');
    });
  };

  const handleFailureLogin = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        className='signin-button'
        clientId={process.env.REACT_APP_CLIENT_ID}
        scope='https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.activity.write'
        onSuccess={handleSuccessLogin}
        onFailure={handleFailureLogin}>
        <span>구글 아이디로 로그인</span>
      </GoogleLogin>
    </div>
  );
};

export default connect(null, { login })(LoginContainer);
