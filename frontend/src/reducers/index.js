import { combineReducers } from 'redux';
import ProductReducer from './reducer-products';
import ActiveProductReducer from './reducer-active-product';
import RestaurantReducer from './reducer-restaurants';

const rootReducer = combineReducers({
  products: ProductReducer,
  activeProduct: ActiveProductReducer,
  restaurants: RestaurantReducer
});

export default rootReducer;
