import React, { useEffect, useState } from 'react';

let initState={
    name:"",
    age:"",
    place:"",
    gender:"",
    image:"",
    profession:""
}

function Home() {
    const [formState, setFormState]=useState(initState);
    const [load, setLoad]=useState(false);
    const {name,age,place,gender,image,profession}=formState;

    useEffect(()=>{
    },[])

    const postData=(data)=>{
        setLoad(true)
        fetch("http://localhost:8080/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            setLoad(false)
        }).catch(err=>{
            setLoad(false)
            console.log(err.message)
        });
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        postData(formState)
    }

    const handleChange=(e)=>{
        if(e.target.name=="male"){
            if(e.target.checked){
                setFormState({...formState, gender:"male"});
            }
        }
        else if(e.target.name=="female"){
            if(e.target.checked){
                setFormState({...formState, gender:"female"});
            }
        }
        else if(e.target.name=="transgender"){
            if(e.target.checked){
                setFormState({...formState, gender:"transgender"});
            }
        }
        else{
            setFormState({...formState, [e.target.name]:e.target.value});
        }
    }

    if(load){
        return <h1>Loading...</h1>
    }

  return (
    <div> <h1>Add Users</h1>
    <div style={{width:"100%",height:"500px", display:"flex", alignItems:"center", justifyContent:"center"}}>
       
      <form onSubmit={handleSubmit} >
        <label >
            Name
        </label>
        <input type="text" name="name" value={name} placeholder='name' onChange={handleChange} required />
        <br />
        <br />
        <label >
            Age
        </label>
        <input type="number" name="age" value={age} placeholder='age' onChange={handleChange} required />
        <br />
        <br />

    <label >
        Place  :
    </label>
    
        <select name="place" onChange={handleChange} value={place} required>
            <option value="">Select City</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Delhi">Delhi</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Karnatak">Karnatak</option>
            <option value="Tamilnadu">Tamilnadu</option>
            <option value="UtarPradesh">UtarPradesh</option>
        </select>
        <br />
        <br />

         <label >
         Gender -
         </label>
        <label > male</label>
        <input type="checkbox" name="male" value={gender}  onChange={handleChange}   />
    

       < label >female</label>
        <input type="checkbox" name="female" value={gender}  onChange={handleChange}   />

        
       < label >Transgender</label>
        <input type="checkbox" name="transgender" value={gender}  onChange={handleChange}  />
        <br />
        <br />

        < label >image</label>
        <input type="text" name="image" value={image} placeholder='image' onChange={handleChange} required />
        <br />
        <br />

        < label >profession</label>
        <input type="text" name="profession" value={profession} placeholder='profession' onChange={handleChange} required  />
        <br />
        <br />

        <input type="submit" value="submit" />
      </form>
    </div>
    </div>
  )
}

export default Home
