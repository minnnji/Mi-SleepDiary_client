import * as types from '../constants/actionTypes';

const initialState = {
  email: null,
  name: null,
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
        email: action.payload.email,
        name: action.payload.name,
        my_diaries: action.payload
      };
    default: return state;
  }
};

export default user;
