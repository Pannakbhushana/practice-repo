import React from "react";
import { createContext, useState } from "react";

export const AuthContext=createContext();

const AuthContextProvider=({children})=>{
    const [state, setState]=useState(false);

    const loginAuth=()=>{
        setState(true);
    }

    const logoutAuth=()=>{
        setState(false);
    }

    return <AuthContext.Provider value={{state, loginAuth, logoutAuth}} >{children}</AuthContext.Provider>
}

export default AuthContextProvider