import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const Users = () => {
    const [data, setData]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData=()=>{
        fetch("http://localhost:8080/posts")
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            setData(res);
        }).catch(err=>console.log(err.message));
    }

    
  return (
    <div>
      {data.map((el)=>{
        return <div key={el.id} >
            <Link to={`/users/${el.id}`}><h3>{el.name}</h3></Link>
        </div>
      })}
    </div>
  )
}

export default Users
