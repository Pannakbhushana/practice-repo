import React from 'react';
import useForm from '../CoustomeHook/useForm';

function FormElement() {
    const {value, resetForm, handleChange}=useForm({name:"",email:""});

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(value)
        resetForm()
    }
  return (
    <div style={{marginTop:"5%"}}>
        <h1>Form-element by using Coustome Hook</h1>
        <form onSubmit={handleSubmit} >
            <label>
                Name 
            </label>
            <input type="text" name="name"  placeholder='name' value={value.name} onChange={handleChange}  />
            <br />
            <br />
            <label>
                Email
            </label>
            <input type="text" name="email" placeholder='email' value={value.email} onChange={handleChange} />
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

export default FormElement
