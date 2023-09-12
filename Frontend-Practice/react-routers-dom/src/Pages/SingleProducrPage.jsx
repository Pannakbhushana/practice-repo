import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

function SingleProducrPage() {
  const [data, setData]=useState({});
  const {id}=useParams();

  useEffect(()=>{
    getData()
  },[])
 
  const getData=()=>{
    fetch(`http://localhost:8080/posts/${id}`)
    .then(res=>res.json())
    .then((res)=>{
      setData(res);
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div>
      {
        <div  >
        <img src={data.image} alt="" style={{width:"500px",height:"400px", marginTop:"5%", borderRadius:"10px"}} />
        <h3>Name :- {data.name}</h3>
        <p>age :- {data.age}</p>
        <p>Profession :- {data.profession} </p>
        <p>gender :- {data.gender}</p>
      </div>
      }
    </div>
  )
}

export default SingleProducrPage
