import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Components/AuthConteext';

function LoginPage() {
    const {auth,Login,Logout}=useContext(AuthContext);
  return (
    <div>
      <h3>{auth ? "Login Successful !":"Loged Out !"}</h3>
      <button onClick={()=>{Login()}}>Login</button>
      <button onClick={()=>{Logout()}}>Logout</button>
    </div>
  )
}

export default LoginPage
