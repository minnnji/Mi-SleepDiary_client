import React from 'react';
import { connect } from 'react-redux';
import Write from '../components/Write/Write';

const WriteContainer = props => {
  console.log(123);
  return (
    <Write />
  );
};

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);
