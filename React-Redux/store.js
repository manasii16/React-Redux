import { createStore, combineReducers } from 'redux';
import {counter_reducer} from './src/components/counter/redux/counterReducer';

const store = createStore(counter_reducer);

export default store;

// const rootReducer = combineReducers({
//   counter: counter_reducer,
// });

// const store = createStore(rootReducer);

// export default store;