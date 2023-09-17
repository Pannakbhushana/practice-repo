import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const [data, setData]=useState({});
    const [load, setLoad]=useState(false);
    const {id}=useParams();

    useEffect(()=>{
        getData() 
    },[])

    const getData=()=>{
      setLoad(true)
        fetch(`http://localhost:8080/posts/${id}`)
        .then(res=>res.json())
        .then((res)=>{
          setLoad(false)
            console.log(res);
            setData(res);
        }).catch(err=>{
          setLoad(false)
          console.log(err.message)});
    }

    if(load){
      return <h1>Loading...</h1>
    }
    
  return (
    <div>
      <img src={data.image} alt="" style={{width:"400px", height:"300px", marginTop:"5%"}} />
      <h1>Name :- {data.name}</h1>
      <h4>Age :- {data.age} </h4>
      <h4>profession :- {data.profession} </h4>
      <h4>place :- {data.place} </h4>
    </div>
  )
}

export default SinglePage
