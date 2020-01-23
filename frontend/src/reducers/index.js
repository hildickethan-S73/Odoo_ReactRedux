import { combineReducers }  from 'redux';
import ProductReducer         from './reducer-products';
import ActiveProductReducer    from './reducer-active-product';

const rootReducer = combineReducers({
  products: ProductReducer,
  activeProduct: ActiveProductReducer
});

export default rootReducer;
