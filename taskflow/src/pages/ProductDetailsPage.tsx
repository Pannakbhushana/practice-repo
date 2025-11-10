import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PostType {
    id:Number,
    userId:Number,
    title:string,
    body:string,
}

const ProductDetailsPage = () => {
    const [post, setPost] = useState<PostType | null>(null);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        if(id) getData();
    },[id])

    const getData = async() => {
        setIsLoading(true);
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const res = await data.json();
            setPost(res);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    if(isLoading){
        return <div><h1>Loading...</h1></div>
    }
    
    {return !post ? <div><h1>Oops...! No Post found.</h1></div> :
     <div>
        <h2>User Posts</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div> }
}

export default ProductDetailsPage