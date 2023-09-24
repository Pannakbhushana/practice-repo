import * as types from "./actionType.js";

const initState={
    count:10,
    todos:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState, action)=>{
    const {type,payload}=action;

    switch(type){

        case types.add:{
            return {...state, count:state.count+payload}
        }

        case types.subtract:{
            return  {...state, count:state.count-payload}
        }

        case types.GET_TODO_REQUEST:{
            return {...state, isLoading:true}
        }

        case types.GET_TODO_SUCCESS:{
            return {...state, isLoading:false, todos:payload}
        }

        case types.GET_TODO_ERROR:{
            return {...state, isLoading:false, isError:true}
        }

        default:{
            return state;
        }
    }

}