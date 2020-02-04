import { combineReducers } from 'redux';
import restaurants from './restaurants';
import common from './common';

const rootReducer = combineReducers({
  restaurants,
  common,

});

export default rootReducer;
