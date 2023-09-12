import React from 'react';
import Styles from "../Styles/Navbar.module.css";
import { NavLink } from 'react-router-dom';

const links=[
    {title:"Home", path:"/"},
    {title:"Users", path:"/users"},
    {title:"Login", path:"/login"}
]

function Navbar() {
  return (
    <div className={Styles.container}>
      {links.map((el,i)=>{
        return <NavLink key={i} to={el.path} className={({isActive})=>{
            return isActive ? Styles.isActive : Styles.defauld
        }}  >{el.title}</NavLink>
      })}
    </div>
  )
}

export default Navbar
