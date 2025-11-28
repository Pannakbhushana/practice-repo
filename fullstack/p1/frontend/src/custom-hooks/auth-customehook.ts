import { useState } from "react"
import type { SignUpType } from "../types/common";
import toast from "react-hot-toast";
import { useAuthToken } from "./auth-token-customehook";
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
 const [loading, setLoading] = useState(false);
 const {storeUseDetails} = useAuthToken()
 const baseUrl = import.meta.env.VITE_BASE_URL;
 const Navigate = useNavigate();

   const handleError = (error: unknown) => {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Something went wrong");
    }
  };

 const regesterUser = async(data:SignUpType) => {
   setLoading(true)
    try {
       const result = await fetch(`${baseUrl}/auth/regester`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(data)
       })

       const res = await result.json();
       
       if(!result.ok){
         throw new Error(res.msg || "Something went wrong");
       }
       toast.success("User regestered successfully");

       setTimeout(()=>{
         Navigate("/login")
       },500)

    } catch (error) {
        console.log(error);
        handleError(error)
    }
    finally{
      setLoading(false)
    }
 }

 const loginUser = async(data:{email:String, password:String}) => {
   setLoading(true)
   try {
      const resulet = await fetch(`${baseUrl}/auth/login`, {
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(data)
      })
      const res = await resulet.json();
 
      if(!resulet.ok){
         throw new Error(res.msg || "Something went wrong");
       }

      storeUseDetails(res.data);
      toast.success("User LogedIn successfully")

      setTimeout(()=>{
         Navigate("/");
      },500)
      
   } catch (error) {
      console.log(error);
      handleError(error)
   }
   finally{
      setLoading(false)
   }
 }

 return {loading, loginUser, regesterUser}

}