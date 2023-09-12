import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { Navigate } from 'react-router-dom';

function Login() {
  const {state, loginAuth, logoutAuth}=useContext(AuthContext);

  console.log(state);
  if(state){
    return <Navigate to="/users" />
  }
  return (
    <div style={{marginTop:"250px", display:"flex", marginLeft:"48%"}}>

      <button onClick={()=>{
        loginAuth()
      }} >Login</button>

      <div style={{width:"10px"}}></div>

      <button onClick={()=>{
       logoutAuth()
      }} >Logout</button>

    </div>
  )
}

export default Login
