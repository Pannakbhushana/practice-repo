import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080/auth";

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const Navigate = useNavigate();

    const regesterUser = async (data: { email: String, password: String }) => {
        setLoading(true);
         setIsSuccess(false)
        try {
            await fetch(`${BASE_URL}/regester`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            setIsSuccess(true)
            Navigate("/login")
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
            else {
                setError("An unknown error occured");
            }
        }
        finally {
            setLoading(false);
        }
    }

    const userSignIn = async (data: { email: String, password: String }) => {
        setLoading(true);
        setIsSuccess(false)
        try {
            const res = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            if (!res.ok) throw new Error("Bad request");

            const result = await res.json();

            if (result.Token) {
                localStorage.setItem("user", JSON.stringify(result));
            }
            setIsSuccess(true)
            Navigate("/post")
            return result;
        } catch (error) {
            setLoading(false);
            if (error instanceof Error) {
                setError(error.message);
            }
            else {
                setError("An unknown error occured");
            }
        }
        finally {
            setLoading(false);
           
        }
    }

    const deleteUser = async(id:any) =>{
        setLoading(true);
        try {
            await fetch(`${BASE_URL}/delete/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            })
        } catch (error) {
            if(error instanceof Error){
                setError(error.message);
            }
            else{
                setError("An unknown error occured");
            }
        }
        finally{
        setLoading(false);
        }
    }

    const getUsers = async () => {
        setLoading(true)
        try {
            const res = await fetch(BASE_URL);

            if(!res.ok){
                throw new Error("Faild to fetch Users");
            }
            const result = await res.json();
            setUsers(result)
        } catch (error) {
            if(error instanceof Error){
                setError(error.message);
            }
            else{
                setError("An unknown error occured");
            }
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getUsers();
    },[])

    return { regesterUser, userSignIn, deleteUser, refetch:getUsers, users, loading, error, isSuccess }
}

export { useAuth }