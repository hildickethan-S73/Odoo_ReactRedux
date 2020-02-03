import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger'
import reducers from './reducers';
import { promiseMiddleware } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
    // if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(promiseMiddleware)
    // } else {
    //     return applyMiddleware(promiseMiddleware, createLogger())
    // }
}

const store = createStore(reducers, composeEnhancers(getMiddleware()));

export default store;