import { combineReducers } from 'redux';
import products from './reducer-products';
import activeProduct from './reducer-active-product';
import restaurants from './restaurants';
import common from './common';

const rootReducer = combineReducers({
  products,
  activeProduct,
  restaurants,
  common

});

export default rootReducer;
