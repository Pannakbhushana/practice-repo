import * as types from "./actionType";

const addAction=(payload)=>{
    return {type:types.add,payload}
}

const subAction=(payload)=>{
    return {type:types.subtract,payload}
}


const getTodoRequestAction=()=>{
    return {type:types.GET_TODO_REQUEST}
}

const getTodoSuccessAction=(payload)=>{
    return {type:types.GET_TODO_SUCCESS,payload}
}

const getTodoErrorAction=()=>{
    return {type:types.GET_TODO_ERROR}
}

export {
    addAction,
    subAction,
    getTodoRequestAction,
    getTodoSuccessAction,
    getTodoErrorAction
};