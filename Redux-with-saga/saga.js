import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_REQUEST, fetch_success, fetch_failure } from './reduxWithSaga.js'; 


const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

const fetch_API=()=>{
    return axios.get(API_URL);
}

//generator function
function* fetch_posts_data() {
  try{
    const res = yield call(fetch_API);
    yield put(fetch_success(res.data)); 
  } 
  catch(err){
    yield put(fetch_failure(err.message));
  }
}

// watcher-saga
export default function* rootsaga() {
  yield takeEvery(FETCH_REQUEST, fetch_posts_data);
}