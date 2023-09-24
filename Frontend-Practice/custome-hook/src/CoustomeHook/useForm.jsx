import React, { useState } from 'react'

function useForm(initState={}) {
  const [value, setValue]=useState(initState);

  const handleChange=(e)=>{
   
    setValue({...value, [e.target.name]:e.target.value});
  }

  const resetForm=()=>{
    setValue(initState);
  }

  return {value, handleChange, resetForm}
}

export default useForm
