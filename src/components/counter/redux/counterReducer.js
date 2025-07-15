import {INCREMENT, DECREMENT, RESET} from './counterAction';
const initialState={
    count: 0
}

export const counter_reducer =(state =initialState, action)=>{
    
    switch (action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            };

        case DECREMENT:
            return{
                ...state,
                count:state.count <= 0 ? 0: state.count-1
            };

        case RESET:
            return{
                ...state,
                count: 0 
            };

        default:
            return state;
    }
};