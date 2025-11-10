import { useParams } from "react-router-dom";
import { useFetch } from "../custom-hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { AVATAR } from "../constent";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { usePosts } from "../custom-hooks/usePosts";

export default function PostDetailsPage() {
  const {updatePost} = usePosts()
  const { id } = useParams();
  const Navigate = useNavigate()
  const { data, isLoading, errror, refetch  } = useFetch(`http://localhost:8080/post?_id=${id}`);

  const post:any = Array.isArray(data) ? data[0] : null;

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: post?.title || "",
    content: post?.content || "",
  });

  const handleChange = (e:any) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]:e.target.value});
  }

 const handleSubmit = async () => {
  await updatePost(id, formData);
  await refetch();
  setIsOpen(false);
};

  useEffect(()=>{
    if(post){
        setFormData({title:post.title, content:post.content})
    }
  },[post])

  if (isLoading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (errror) return <p className="text-center mt-10 text-red-500">Something went wrong.</p>;
  if (!post) return <p className="text-center mt-10 text-gray-500">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 relative">
         {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-5 right-5 text-gray-500 hover:text-teal-600 transition-colors"
      >
        <FiEdit size={22} />Edit
      </button>

      {/* User Section */}
      <div className="flex items-center gap-4 border-b pb-4">
        <img
          src={AVATAR}
          alt="User Avatar"
          className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
        />
        <div>
          <p className="text-gray-700 text-sm">Posted by</p>
          <h3 className="text-lg font-semibold text-teal-600">
            {post?.userId?.email || "Unknown User"}
          </h3>
        </div>
      </div>

      {/* Post Title */}
      <h1 className="text-2xl font-bold text-gray-800 mt-6">{post.title}</h1>

      {/* Post Content */}
      <p className="text-gray-700 mt-4 leading-relaxed">
        {post.content}
      </p>

      {/* Footer */}
      <div className="mt-6 border-t pt-4 flex justify-between items-center text-sm text-gray-500">
        <p>Post ID: {post._id}</p>
        <button onClick={()=>Navigate("/post")}
            className="text-teal-600 hover:text-teal-700 font-medium">
          Back to Posts →
        </button>
      </div>

       {/* Edit Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Post</h2>

            <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 rounded-md text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-teal-500 px-4 py-1 rounded-md hover:bg-teal-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
