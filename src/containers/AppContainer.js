import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setHeader } from '../lib/auth';
import { fetchAuth } from '../lib/api/user';
import { SET_CURRENT_USER } from '../constants/actionTypes';
import App from '../components/App/App';

const AppContainer = ({ setUser }) => {
  if (localStorage.tokenId && localStorage.accessToken) {
    try {
      const { tokenId, accessToken } = localStorage;
      const decodedProfile = jwtDecode(tokenId);
      const isValid = (decodedProfile.exp * 1000) - Date.now() > 0;
      const profile = (isValid) ? decodedProfile : {};
      const token = (isValid) ? accessToken : null;
      console.log(`token 만료!!!! ${new Date(decodedProfile.exp * 1000)}`);

      setHeader(token);
      // setUser(profile);
      if (!isValid) localStorage.clear();
    } catch (err) {
      console.log(err);
      setHeader(null);
      localStorage.clear();
    }
  }
  return (
    <App />
  );
};

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  setUser(profile) {
    fetchAuth(profile, user => {
      dispatch({ type: SET_CURRENT_USER, payload: user });
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
