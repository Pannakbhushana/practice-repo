import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import { handleAddFromAction, handleReduceFromAction } from '../Redux/action';

const Counter = () => {

  const count=useSelector((store)=>{
    return store.count
  })

  const dispatch=useDispatch();

  const handleAdd=()=>{
    dispatch(handleAddFromAction(1))
  }

  const handleReduce=()=>{
    dispatch(handleReduceFromAction(1));
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleReduce}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default Counter
