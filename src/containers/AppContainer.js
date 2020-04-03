import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App/App';

const AppContainer = props => {
  return (
    <App />
  );
};

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);