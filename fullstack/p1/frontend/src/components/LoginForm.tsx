import React, { useState } from "react";
import { useAuth } from "../custom-hooks/auth-customehook";
import { useAuthToken } from "../custom-hooks/auth-token-customehook";

let initState = {
    email: "",
    password: ""
}

export const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState(initState)
    const {loginUser} = useAuth()
    const {removeUser} = useAuthToken()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formData.email && formData.password){
            loginUser(formData);
            setFormData(initState);
        }
    }

    return <div>
        <form
            onSubmit={handleSubmit} 
            className="flex flex-col gap-8 justify-center items-center p-4">
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
            <button className="button-style" onClick={()=>removeUser()}>Log Out</button>
        </form>
    </div>
}