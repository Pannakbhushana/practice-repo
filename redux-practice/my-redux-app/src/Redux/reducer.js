import * as type from "./actionType";

const reducer=(state, action)=>{
    switch(action.type){
        case type.add :{
            return {...state, count:state.count+action.payload}
        }
        case type.reduce :{
            return {...state, count:state.count-action.payload}
        }
        default :{
            return state;
        }
    }
}

export default reducer