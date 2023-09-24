import React, { useState } from 'react'

const initState={
    name:"",
    email:"",
    password:"",
    nationality:"",
    married:false
}


const Home = () => {

    const [text, setText]=useState(initState);

    const handleChange=(e)=>{
       if(e.target.name==="married"){
        setText({...text, [e.target.name]:e.target.checked})
       }
       else{
        setText({...text, [e.target.name]:e.target.value})
       }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(text);
    }

  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
        <label>
            Name : -
           <input type="text" 
                  name="name" 
                  onChange={handleChange}
                  placeholder='Name'
                  />
        </label>
        <br />
        <br />
        <label>
            Email : -
           <input type="text" 
                  name="email" 
                  onChange={handleChange}
                  placeholder='email'
                  />
        </label>
        <br />
        <br />

        <label>
            Password : -
           <input type="text" 
                  name="password" 
                  onChange={handleChange}
                  placeholder='password'
                  />
        </label>
        <br />
        <br />

        <label>
            Nationality : -
            <select name="nationality" onChange={handleChange} >

                <option value="">Nationality</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Russia">Russia</option>
                <option value="Germany">Germany</option>

            </select>
        </label>
        <br />
        <br />
        <label>
            Married : -
          <input type="checkbox" onChange={handleChange} name="married" />
        </label>
        <br />
        <br />
    
         <input type="submit" value="Submit" />
        <br />
        <br />
         
        </form>

    </div>
  )
}

export default Home
