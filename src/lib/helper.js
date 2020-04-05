import moment from 'moment';

function getTimes(timeNanos) {
  return Number(timeNanos.slice(0, 13));
}

function getDiff(startTime, endTime) {
  return moment.duration(endTime.diff(startTime));
}

export const setDailySleep = (fullSleepList) => {
  let endDay = new Date(getTimes(fullSleepList[0].startTimeNanos)).setHours(15, 0, 0, 0);
  let currentDaySleepList = [];
  const dailySleepInfoList = [];

  function spliceCurrentDay() {
    const length = fullSleepList.length;

    for(let i = 0; i < fullSleepList.length; i++) {
      if(getTimes(fullSleepList[i].startTimeNanos) > endDay) {
        endDay = new Date(getTimes(fullSleepList[i].startTimeNanos)).setHours(15, 0, 0, 0);
        currentDaySleepList = fullSleepList.splice(0, i);
        console.log(fullSleepList);
      }
    }
    if(length === fullSleepList.length) currentDaySleepList = fullSleepList.splice(0, length);

    return makeDailySleep(currentDaySleepList);
  }

  // console.log(moment(getTimes(sleepList[0].startTimeNanos)).hour(15).format());
  function makeDailySleep(sleepList) {
    const bedTime = getTimes(sleepList[0].startTimeNanos);
    const wakeUpTime = getTimes(sleepList[sleepList.length - 1].endTimeNanos);
    const totalDiff = getDiff(moment(bedTime), moment(wakeUpTime));

    const sleepDuration = `${totalDiff.hours()}시간 ${totalDiff.minutes()}분`;

    const sleepCycle = sleepList.map((sleep, index) => {
      const type = index % 2 ? 'deep' : 'light';
      return [getTimes(sleep.startTimeNanos), getTimes(sleep.endTimeNanos), type];
    });

    let lightSleepSeconds = 0;
    for(let i = 0; i < sleepCycle.length; i++) {
      if(sleepCycle[i][2] === 'light') {
        lightSleepSeconds += sleepCycle[i][1] - sleepCycle[i][0];
      }
    }
    const lightSleepPercentage = parseInt(lightSleepSeconds / (wakeUpTime - bedTime) * 100);

    dailySleepInfoList.push({
      sleepDuration,
      bedTime: moment(bedTime).format(),
      wakeUpTime: moment(wakeUpTime).format(),
      sleepCycle,
      lightSleepPercentage
    });

    if(fullSleepList.length) {
      console.log(fullSleepList);
      return spliceCurrentDay();
    } else {
      console.log(dailySleepInfoList);
      return dailySleepInfoList;
    }
  }
  return spliceCurrentDay();
};

// {
//   user : { type: String , required: true },
//   created_at: { type: Date, required: true },
//   sleepDuration: { type: Number, required: true, default: 0, min: 0 },
//   bedtime: { type: Date, required: true, default: 0, min: 0 },
//   wakeUp_time: { type: Date, required: true, default: 0, min: 0 },
//   sleepCycle: { type: Array, required: true, default: [] },
//   light_sleep_percentage: { type: Number, required: true, default: 0, min: 0 },
//   deep_sleep_percentage: { type: Number, required: true, default: 0, min: 0 },
//   has_diary: { type: Boolean, required: true, default: false }
// }