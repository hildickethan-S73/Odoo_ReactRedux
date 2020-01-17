import { combineReducers }  from 'redux';
import BooksReducer         from './reducer-books';
import ProductReducer         from './reducer-products';
import ActiveBookReducer    from './reducer-active-book';
import ActiveProductReducer    from './reducer-active-product';

const rootReducer = combineReducers({
  books: BooksReducer,
  products: ProductReducer,
  activeBook: ActiveBookReducer,
  activeProduct: ActiveProductReducer
});

export default rootReducer;
