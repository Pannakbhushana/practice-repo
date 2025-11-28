import React, { useEffect } from "react";
import { PostCard } from "../components/PostCard";
import { usePostHook } from "../custom-hooks/post-hook";
import { Loader } from "./Loader";

const Dashboard:React.FC = () => {
    const {post, loading, getPost} = usePostHook();

    useEffect(()=>{
        getPost();
    },[])

    if(loading) return <Loader/>
    
    return <div className="grid grid-cols-4">
        {post?.map((item,i) => (
                <div key={i}>
                    <PostCard post={item} />
                </div>
            ))}
    </div>
}

export default Dashboard