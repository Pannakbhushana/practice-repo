import React from 'react';
import {NavLink} from "react-router-dom";
import  Styles from "../Styles/Navbar.module.css";

const path=[
    {
        title:"Home",
        path:"/"
    },
    {
        title:"Users",
        path:"/users"
    },
    {
        title:"Login",
        path:"/login"
    }
]

function Navbar() {
  return (
    <div className={Styles.container}>
      {
        path.map((el,i)=>{
            return <NavLink key={i} to={el.path} className={({isActive})=>{
                return isActive ? Styles.Active : Styles.default;
            }}  >{el.title}</NavLink>
        })
      }
    </div>
  )
}

export default Navbar
