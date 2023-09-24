import React, { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { addAction, getTodoErrorAction, getTodoRequestAction, getTodoSuccessAction, subAction } from '../Redux/action';
import TodoInput from '../Components/TodoInput';
import axios from 'axios';

function HomePage() {
    const {count,todos}=useSelector((store)=>{
        // console.log(store)
        return store;
    })
    const dispatch=useDispatch();

    useEffect(()=>{
        getData()
       
    },[])
    console.log(todos)
    const getData=()=>{
        dispatch(getTodoRequestAction());
        axios.get("http://localhost:8080/todos")
        .then((res)=>{
        //  console.log(res);   
         dispatch(getTodoSuccessAction(res.data));
        })
        .catch((err)=>{
            dispatch(getTodoErrorAction())
            console.log(err.message)
        })
    }

  return (
    <div>
      <h1> Count : {count}</h1>
      <br />
      <button onClick={()=>{
        dispatch(subAction(1))
      }} >Dec</button>

      <button onClick={()=>{
        dispatch(addAction(1))
      }}>Inc</button>
      <br />
      <hr />
      <br />

      <TodoInput/>

    </div>
  )
}

export default HomePage
