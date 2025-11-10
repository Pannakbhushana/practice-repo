import { useNavigate } from "react-router-dom";
import { AVATAR } from "../constent";

export default function UserCard({ deletePost, loading, post }: any) {
  const Navigate = useNavigate();

  const shortContent =
    post?.content.split(" ").slice(0, 20).join(" ") 

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col gap-3">
      {/* Avatar */}
      <img
        src={AVATAR}
        alt={"User Avatar"}
        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-teal-400"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold text-center text-gray-800 mt-2">
        {post.title}
      </h2>

      {/* Content */}
      <p className="text-sm text-gray-600 text-center">{shortContent}...</p>

      {/* Optional — button to view full content */}
      <button
        onClick={()=>Navigate(`/post/${post._id}`)}
        className="mt-2 text-teal-600 font-medium hover:underline text-sm">
        Read More →
      </button>
      <button
        style={{backgroundColor:"#fee2e2"}}
        onClick={()=>deletePost(post._id)}
        className="mt-2 font-medium hover:underline text-sm">
        {loading ? <span>Loading...</span>:<span className="text-red-500">Delete</span>}
      </button>
    </div>
  );
}
