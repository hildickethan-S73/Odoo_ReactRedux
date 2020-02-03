import {
    ASYNC_START
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Redux',
  token: null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
      case ASYNC_START:
        return {
          ...state,
          inProgress: true
        };
      default:
        return state;
    }
};