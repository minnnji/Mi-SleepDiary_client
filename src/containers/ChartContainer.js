import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Chart from '../components/Chart/Chart';
import { fetchGetSleep } from '../lib/api/sleep';

moment.lang('ko', {
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토']
});

const ChartContainer = props => {
  const { user } = props;
  const [weeklyPatternList, setWeeklyPatternList] = useState([]);

  useEffect(() => {
    if (user.email) {
      const today = moment(),
        sevenDaysAgo = moment().subtract(7, 'd');

      fetchGetSleep(user._id, sevenDaysAgo, today, true, sleepList => {
        setWeeklyPatternList(sleepList.map(sleep => {
          const { created_at, sleep_duration, deep_sleep_seconds, light_sleep_seconds, deep_sleep_percentage } = sleep;
          const sleepDurationList = sleep_duration.split(':');
          const list = {
            created_at,
            day: moment(created_at).format('ddd'),
            durationHours: `${sleepDurationList[0]}시간`,
            durationMinutes: `${sleepDurationList[1]}분`,
            deep: deep_sleep_seconds / 100000,
            light: light_sleep_seconds / 100000,
            deepSleepPercentage: deep_sleep_percentage
          };

          return list;
        }));
      });
    }
  }, [user._id, user.email]);

  return (
    <>
      {weeklyPatternList.length ? <Chart user={user} weeklyPatternList={weeklyPatternList} /> : <div>no Data!</div> }
    </>
  );
};

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
