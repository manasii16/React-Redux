import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootsaga from './saga.js';

const sagaMiddleware = createSagaMiddleware();

export const FETCH_REQUEST ='FETCH_REQUEST';
export const FETCH_SUCCESS ='FETCH_SUCCESS';
export const FETCH_FAILURE ='FETCH_FAILURE';

const initialState={
  loading: false,
  posts: [],
  error: '',
};

//actions
export const fetch_request =()=>(
    { 
        type: FETCH_REQUEST 
    }
);
export const fetch_success=(posts)=>(
    { 
        type: FETCH_SUCCESS, 
        payload: posts
    }
  );
export const fetch_failure=(error)=>(
    { 
    type: FETCH_FAILURE, 
    payload: error     
});


//reducer
const apiReducer = (state=initialState, action) =>{
  switch (action.type){

    case FETCH_REQUEST:
      return{ 
        ...state, 
        loading: true 
    };

    case FETCH_SUCCESS:
      return{ 
        loading: false, 
        posts: action.payload, 
        error: '' 
    };

    case FETCH_FAILURE:
      return{ 
        loading: false, 
        error: action.payload,
        posts: [],  
    };

    default:
      return state;
  }
};

//store
const store = createStore(apiReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootsaga)

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetch_request());
