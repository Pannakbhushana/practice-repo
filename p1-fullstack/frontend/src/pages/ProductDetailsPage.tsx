import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const ProductDetailsPage = () => {
    const [post, setPost] = useState<any>({});
    const {id} = useParams();

    useEffect(()=>{
        getData();
    },[])

    const getData = async() => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            setPost(data);
        } catch (error) {
            console.log(error)
        }
    }

    return <div className="mt-24">
        <p className="text-2xl font-bold">{post.id}-{post.title}</p>
        <p className="text-lg mt-16">{post.body}</p>
    </div>
}