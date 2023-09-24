import React from 'react';
import { useRef } from 'react';

function FormElementRef() {
    const nameRef=useRef(null)
    const emailRef=useRef(null)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        
        let obj={name,email};
        console.log(obj)
        nameRef.current.value="";
        emailRef.current.value="";
    }

  return (
    <div style={{marginTop:"5%"}}>
        <h1>Form-element by using Ref Hook</h1>
        <form onSubmit={handleSubmit} >
            <label>
                Name 
            </label>
            <input type="text" name="name"  placeholder='name'  ref={nameRef}   />
            <br />
            <br />
            <label>
                Email
            </label>
            <input type="text" name="email" placeholder='email'  ref={emailRef} />
            <br />
            <br />
            <input type="submit" value='submit' />
        </form>
        <br />     
        <br />
        <hr />     
    </div>
  )
}

export default FormElementRef
