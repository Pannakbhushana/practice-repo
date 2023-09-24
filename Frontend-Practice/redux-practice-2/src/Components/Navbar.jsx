import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from "./Navbar.module.css";

const navElement=[{
    title:"Home",path:"/"},
    {title:"Users",path:"/users"},
    {title:"Login",path:"/login"}
]

function Navbar() {
  return (
    <div className={Styles.container}>
      {navElement.map((el,i)=>{
        return <NavLink 
                    to={el.path} 
                    key={i}
                    className={({isActive})=>{
                        return isActive ? Styles.Active: Styles.default
                    }}
                    >{el.title}</NavLink>
      })}
    </div>
  )
}

export default Navbar
