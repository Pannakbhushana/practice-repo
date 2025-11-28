import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthToken } from "../custom-hooks/auth-token-customehook";

export const Navbar:React.FC = () => {
    const Navigate = useNavigate()
    const {getUserDetails} = useAuthToken();

    const user = getUserDetails();
    let firstAndLastLetter;
    let userName;
    
    if(user && user.userName){
       userName = user.userName.split(" ");
       firstAndLastLetter = `${userName[0][0]+userName[1][0]}`
    }
    else{
        firstAndLastLetter = "UN"
    }

    return <div className="flex justify-between items-center h-16 bg-amber-200">
        <div className="h-full w-[10%] flex items-center justify-center">
            <span 
              onClick={()=>Navigate("/")}
              className="text-2xl text-teal-600 font-extrabold">
                FULLSTACK
            </span>
        </div>
        <div className="h-full w-1/3 flex items-center justify-around">
            <span
              onClick={()=>Navigate("/")}
              className="tab-style">
                Dashboard
            </span>
            <span className="tab-style">About us</span>
            <span className="tab-style">Contact Us</span>
        </div>

        <div className="h-full w-[10%] flex items-center justify-center gap-8">
            <span
              onClick={()=>Navigate("/login")}
              className="text-xl font-bold hover:cursor-pointer hover:text-teal-500">
                LogIn
            </span>

            <div
              onClick={()=>Navigate("/signup")}
              className="h-12 w-12 rounded-full flex justify-center items-center 
              bg-blue-400 hover:cursor-pointer hover:bg-blue-600">
                <span className="text-xl font-semibold">{firstAndLastLetter}</span>
            </div>

        </div>
    </div>
}