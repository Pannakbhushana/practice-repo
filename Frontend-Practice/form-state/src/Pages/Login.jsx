import React from 'react';
import  Styles from "../Styles/Navbar.module.css";
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

function Login() {
    const {state, logedIn, logedOut}=useContext(AuthContext);

  return (
    <div>
        {state ? <h3>Loged In !</h3>:<h3>Loged Out !</h3>}
        
        <div style={{width:"100%",height:"500px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <button className={Styles.btn} onClick={()=>{
                logedIn()
            }}>Login</button>
            <button className={Styles.btn} style={{marginLeft:"2%"}} onClick={()=>{
                logedOut()
            }}>Logout</button>
        </div>

    </div>
  )
}

export default Login
