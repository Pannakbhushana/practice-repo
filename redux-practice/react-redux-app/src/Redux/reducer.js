import * as types from "./actionType";

const reducer=(state,action)=>{
    const {type, payload}=action;
    
    switch(type){
        case types.add :{
            return {...state, count:state.count+payload}
        }
        case types.reduce :{
            return {...state, count:state.count-payload}
        }
        default :{
            return state;
        }
    }
}

export {reducer};