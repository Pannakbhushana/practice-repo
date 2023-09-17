import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [state, setState]=useState(true);

    const logedIn=()=>{
        setState(true);
    }

    const logedOut=()=>{
        setState(false);
    }

    return <AuthContext.Provider value={{state, logedIn, logedOut}} >{children}</AuthContext.Provider>
}