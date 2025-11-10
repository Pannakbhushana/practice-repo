import React, { useState } from "react";

const AddPost = ({ addPost, loading }: any) => {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {title, content} = formData
    const userDetails = localStorage.getItem("user")
    if(userDetails && title && content ){
        const parseData = JSON.parse(userDetails)
        addPost({...formData, userId:parseData.userId})
    }
    setFormData({ title: "", content: "" }); // clear form
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {loading ? <span>Loading...</span>: <span>Add a New Post</span>}
        </h2>

        <label className="block mb-2 text-gray-700 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter post title"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <label className="block mb-2 text-gray-700 font-medium">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={5}
          placeholder="Write your content here..."
          className="w-full p-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-teal-400"
        ></textarea>

        <button
          type="submit"
          className="w-full font-medium py-2 rounded-md transition-all duration-300"
        >
         Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
