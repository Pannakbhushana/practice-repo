import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [auth, setAuth]=useState(true);

    const Login=()=>{
        setAuth(true);
    }

    const Logout=()=>{
        setAuth(false);
    }
    return <AuthContext.Provider value={{auth,Login,Logout}}>{children}</AuthContext.Provider>
}
