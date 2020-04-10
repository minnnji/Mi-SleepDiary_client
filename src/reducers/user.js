import * as types from '../constants/actionTypes';

const initialState = {
  _id: '',
  email: '',
  name: '',
  best_sleep_hours: 0,
  best_bedtime: 0,
  best_wakeUp_time: 0,
  my_diaries: {},
  sleep_last_updated_at: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        _id: action.payload._id,
        email: action.payload.email,
        name: action.payload.name,
        best_sleep_hours: action.payload.best_sleep_hours,
        best_bedtime: action.payload.best_bedtime,
        best_wakeUp_time: action.payload.best_wakeUp_time,
        my_diaries: action.payload.my_diaries,
        sleep_last_updated_at: action.payload.sleep_last_updated_at
      };
    default: return state;
  }
};

export default user;
