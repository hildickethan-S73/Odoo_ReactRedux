import { combineReducers } from 'redux';
import restaurants from './restaurants.reducer';
import auth from './auth.reducer';
import common from './common.reducer';

const rootReducer = combineReducers({
  restaurants,
  common,
  auth
});

export default rootReducer;
