import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8080/post";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF0bWFuIiwiaWF0IjoxNzYyNjExMTIzfQ.5Qn7mVhh3sEVQs-3T-OISo0pss5CfQiwDW9q7YF5Jiw";

const usePosts = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getPost = async () => {
        setLoading(true)
        try {
            const data = await fetch(BASE_URL, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            const res = await data.json();
            setPost(res);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
            else {
                setError("An unknown error occured")
            }
        }
        finally {
            setLoading(false)
        }
    }

    const addPost = async (newPost: any) => {
        setLoading(true)
        try {
            await fetch(`${BASE_URL}/add`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                    body: JSON.stringify(newPost)
                })
            await getPost()
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
            else {
                setError("An unknown error occured")
            }
        }
        finally {
            setLoading(false)
        }
    }

    const updatePost = async (id:any, data:any) => {
        setLoading(true)
        try {
            await fetch(`${BASE_URL}/update/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${TOKEN}`
                },
                body:JSON.stringify(data)
            })
           await getPost();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
            else {
                setError("An unknown error occured");
            }
        }
        finally {
            setLoading(false)
        }
    }

    const deletePost = async(id:any)=>{
        setLoading(true);
        try {
            await fetch(`${BASE_URL}/delete/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${TOKEN}`
                }
            });
           await getPost();
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

    useEffect(() => {
        getPost();
    }, [])

    return { post, loading, error, addPost, updatePost, deletePost }

}

export { usePosts };