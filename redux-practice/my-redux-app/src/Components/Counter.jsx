import React, { useState } from 'react';
import { store } from '../Redux/store';
import { handleAddFromAction, handleReduceFromAction } from '../Redux/action';

const Counter = () => {
    const [forceUpdate, setForceUpdate]=useState(0)
    const {getState, dispatch,subscribe}=store;
    const {count}=getState();

    const handleAdd=()=>{
        dispatch(handleAddFromAction(1))
    }

    const handleReducer=()=>{
        dispatch(handleReduceFromAction(1))
    }

    subscribe(()=>{
        setForceUpdate(forceUpdate+1)
    })

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleReducer} >Dec</button>
      <button onClick={handleAdd} >Inc</button>
    </div>
  )
}

export default Counter
