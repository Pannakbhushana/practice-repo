import { useState } from "react"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF0bWFuIiwiaWF0IjoxNzY1MDg2ODQxfQ.QLI89-pK2FrQa7Q8X1bcbW-UAtIz5O_lB5JFVNhPvvo"
const BASE_URL = "http://localhost:8080/post";

export const PostService = () => {
    const [post, setPost] = useState([]);
    const [singlePost, setSinglePost] = useState<any>({});
    const [loading, setLoading] = useState(false);

    const getPost = async()=>{
        try {
            const result = await fetch(BASE_URL, {
                method:"GET",
                headers:{
                    Authorization:`Bearer ${TOKEN}`,
                    "Content-type":"application/json"
                }
            })
            if(!result.ok) throw new Error("Not able to fetch data !");
            const res = await result.json();
            setPost(res.posts);            
        } catch (error) {
            console.log(error)
        }
    }

    const getSinglePost = async(id:string) => {
        setLoading(true)
        try {
          const result = await fetch(`${BASE_URL}?_id=${id}`,{
            method:"GET",
            headers:{
                Authorization:`Bearer ${TOKEN}`,
                "Content-type":"application/json"
            }
          })  
          if(!result.ok) throw new Error("Not able to fetch data !");
          const res = await result.json();
          setSinglePost(res.posts[0]);
          setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        finally{
            setLoading(false)
        }
    }

    const PostData = async(data:any) => {
        try {
            const result = await fetch(`${BASE_URL}/add`, {
                method:"POST",
                headers:{
                    Authorization:`Bearer ${TOKEN}`,
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            if(!result.ok) throw new Error("error occured while postion data !");
            await getPost();
        } catch (error) {
            console.log(error);
        }
    }

    const updatePost = async(data:any, id:any) => {
        setLoading(true)
        try {
            const result = await fetch(`${BASE_URL}/update/${id}`, {
                method:"PATCH",
                headers:{
                    Authorization:`Bearer ${TOKEN}`,
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            if(!result.ok) throw new Error("error occured while updation data !")
            await getSinglePost(id)
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    } 

    const deletePost = async(id:any) => {
        setLoading(true)
        try {
            const result = await fetch(`${BASE_URL}/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:`Bearer ${TOKEN}`,
                    "Content-type":"application/json"
                },
            })
            if(!result.ok) throw new Error("error occured which deleting the post");
            await getPost();
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }


    return {post, singlePost, getPost, PostData, getSinglePost, loading, updatePost, deletePost}
}