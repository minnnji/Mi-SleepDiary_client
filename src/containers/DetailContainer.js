import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import Detail from '../components/Detail/Detail';
import { fetchGetSleepById } from '../lib/api/sleep';

const DetailContainer = props => {
  const { location, user } = props;
  const { sleepId } = queryString.parse(location.search);
  const [sleep, setSleep] = useState({});

  const onLoad = async () => {
    const resSleep = await fetchGetSleepById(user._id, sleepId);
    return setSleep(resSleep);
  };

  useEffect(() => {
    if (user._id) {
      onLoad();
    }
  }, [user._id]);

  return (
    <Detail sleep={sleep} />
  );
};

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
