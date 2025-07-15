import { createStore, combineReducers, applyMiddleware } from 'redux';
import {counter_reducer} from './components/counter/redux/counterReducer';
import logger from 'redux-logger'; 

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    counter_reducer,
    compose(applyMiddleware(logger))
);

export default store;

// const rootReducer = combineReducers({
//   counter: counter_reducer,
// });

// const store = createStore(rootReducer);

// export default store;