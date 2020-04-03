import * as types from '../constants/actionTypes';

const initialState = {
  name: null,
  email: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // case types.REMOVE_MESSAGES:
    //   return {
    //     ...state,
    //     chatList: []
    //   };
    default: return state;
  }
};

export default user;
