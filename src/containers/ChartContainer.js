import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Chart from '../components/Chart/Chart';
import { fetchGetSleep } from '../lib/api/sleep';

moment.locale('ko', {
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
          const { createdAt,
            sleepDuration,
            deepSleepSeconds,
            lightSleepSeconds,
            deepSleepPercentage
          } = sleep;
          const sleepDurationList = sleepDuration.split(':');
          const list = {
            createdAt,
            day: moment(createdAt).format('ddd'),
            durationHours: `${sleepDurationList[0]}시간`,
            durationMinutes: `${sleepDurationList[1]}분`,
            deep: deepSleepSeconds / 100000,
            light: lightSleepSeconds / 100000,
            deepSleepPercentage
          };

          return list;
        }));
      });
    }
  }, [user._id, user.email]);

  return (
    <Chart
      user={user}
      weeklyPatternList={weeklyPatternList}
    />
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
