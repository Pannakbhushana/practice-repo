import React, { useState } from "react";
import { useAuth } from "../custom-hooks/auth-customehook";

let initState = {
    userName: "",
    email: "",
    password: ""
}

export const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState(initState)
    const {regesterUser} = useAuth()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formData.userName && formData.email && formData.password){
            regesterUser(formData)
            setFormData(initState)
        }
    }

    return <div>
        <form
            onSubmit={handleSubmit} 
            className="flex flex-col gap-8 justify-center items-center p-4">
            <input
                type="text"
                name="userName" 
                placeholder="User Name" 
                onChange={handleChange} 
                value={formData.userName} 
                className="input-style" />

            <input 
                type="email"
                name="email" 
                placeholder="email" 
                onChange={handleChange} 
                value={formData.email} 
                className="input-style" />

            <input 
                type="password"
                name="password" 
                placeholder="password" 
                onChange={handleChange} 
                value={formData.password} 
                className="input-style" />

            <input type="submit" className="button-style" />
        </form>
    </div>
}