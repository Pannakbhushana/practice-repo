import React from 'react';
import * as types from "./actionType";

const initState={
    count:10
}

function reducer(state=initState, action) {
    const {type,payload}=action;
    switch(type){
        case types.add :{
            return {count:state.count+payload}
        }
        case types.sub :{
            return {count:state.count-payload}
        }
        default:{
            return state
        }
    }
  
}

export default reducer
