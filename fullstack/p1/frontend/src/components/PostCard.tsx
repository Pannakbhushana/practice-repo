import React from "react";
import type { PostType } from "../types/common";

interface PostCardProps {
    post: PostType
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const des = post.body.split(" ");

    return <div className="w-100 shadow-2xl rounded-xl">
        <img src="https://picsum.photos/id/237/600/400" alt="" className="w-98 h-[60%] rounded-xl p-2" />
        <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-2xl font-bold">{post.title}</p>
            <p className="text-xl font-semibold"> {des[0]+ " "+[des[1]+" "+des[2]+" "+des[3]]}...</p>
            <p className="text-lg font-semibold">By {post.userName}</p>
            <button style={{backgroundColor:"teal", color:"white"}}>know more</button>
        </div>
    </div>
}