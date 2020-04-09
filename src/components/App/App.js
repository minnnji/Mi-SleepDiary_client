import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { checkAuth } from '../../lib/auth';
import Entrance from '../Entrance/Entrance';
import LoginContainer from '../../containers/LoginContainer';
import HomeContainer from '../../containers/HomeContainer';
import ChartContainer from '../../containers/ChartContainer';
import WriteContainer from '../../containers/WriteContainer';
// import PropTypes from 'prop-types';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => checkAuth(<Entrance {...props} />, true)} />
        <Route exact path="/login" render={props => <LoginContainer {...props} />} />
        <Route exact path="/home" render={props => checkAuth(<HomeContainer {...props} />)} />
        <Route exact path="/chart" render={props => checkAuth(<ChartContainer {...props} />)} />
        <Route exact path="/write" render={props => checkAuth(<WriteContainer {...props} />)} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}
