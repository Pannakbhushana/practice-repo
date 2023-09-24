import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import { handleAdd, handleSub } from '../Redux/action';

function Counter() {
    const dispatch=useDispatch();

    const store=useSelector((store)=>{
        return store.count
    });
  return (
    <div>
      <h1>Counter:{store}</h1>

      <button onClick={()=>{
        dispatch(handleSub(1))
      }}>Dec</button>

      <button onClick={()=>{
        dispatch(handleAdd(2))
      }}>Inc</button>
    </div>
  )
}

export default Counter
