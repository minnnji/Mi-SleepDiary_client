import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import Detail from '../components/Detail/Detail';
import { fetchGetSleepById } from '../lib/api/sleep';

const DetailContainer = props => {
  const { location, user } = props;
  const { sleepId } = queryString.parse(location.search);
  const [sleepDetail, setSleepDetail] = useState({});

  const getSleepForDailyChart = sleepList => {
    const latestSleep = sleepList;
    const { sleepCycle } = latestSleep;
    const sleepCycleForChart = [];
    const sleep = {};

    for (let i = 0; i < sleepCycle.length; i++) {
      const startTime = sleepCycle[i][0];
      const sleepType = sleepCycle[i][2];

      sleep[sleepType + i] = startTime;
    }
    sleepCycleForChart.push(sleep);

    setSleepDetail({
      ...latestSleep,
      sleepCycle: sleepCycleForChart
    });
    console.log(sleepCycleForChart);
  };

  const onLoad = async () => {
    const resSleep = await fetchGetSleepById(user._id, sleepId);
    getSleepForDailyChart(resSleep);
  };

  useEffect(() => {
    if (user._id) {
      onLoad();
    }
  }, [user._id]);

  return (
    <Detail sleep={sleepDetail} />
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
