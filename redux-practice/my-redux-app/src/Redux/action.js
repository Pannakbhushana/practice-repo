import * as types from "./actionType";

const handleAddFromAction=(payload)=>{
    return {type:types.add, payload}
}

const handleReduceFromAction=(payload)=>{
    return {type:types.reduce, payload}
}


export {handleAddFromAction,handleReduceFromAction}