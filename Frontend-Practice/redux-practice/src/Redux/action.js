import * as types from "./actionType";

const handleAdd=(payload)=>{
    return {type:types.add,payload:payload}
}

const handleSub=(payload)=>{
    return {type:types.sub,payload:payload}
}

export {
    handleAdd,handleSub
}