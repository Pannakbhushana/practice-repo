import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { PostService } from "../custome-hooks/post.hook";

interface Post {
  _id: string;
  userName: string;
  postImg: string;
  title: string;
  description: string;
  body: string;
}

export const PostDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<Post | null>(null);

  const { getSinglePost, singlePost, loading , updatePost} = PostService();

  useEffect(() => {
    if (id) getSinglePost(id);
  }, [id]);

  // Pre-fill modal when opening
  useEffect(() => {
    if (isModalOpen && singlePost) {
      setEditData(singlePost);
    }
  }, [isModalOpen, singlePost]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setEditData((prev) =>
      prev ? { ...prev, [name]: value } : prev
    );
  };

  const handleSave = () => {
    updatePost(editData, id)
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <div className="relative">
        <img
          src={singlePost.postImg}
          alt={singlePost.title}
          className="w-full h-auto rounded-lg shadow"
        />

        <button
          className="absolute top-4 right-4 p-3 bg-white shadow rounded-full hover:bg-gray-100"
          onClick={() => setIsModalOpen(true)}
        >
          <FaRegEdit size={20} />
        </button>
      </div>

      <h1 className="text-3xl font-semibold mt-6">{singlePost.title}</h1>
      <p className="text-gray-600 mt-2">{singlePost.description}</p>

      <p className="text-gray-800 mt-6 leading-relaxed whitespace-pre-line">
        {singlePost.body}
      </p>

      {/* Modal */}
      {isModalOpen && editData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-xl p-6 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Post</h2>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                placeholder="Title"
                className="border p-2 rounded"
              />

              <input
                type="text"
                name="description"
                value={editData.description}
                onChange={handleChange}
                placeholder="Description"
                className="border p-2 rounded"
              />

              <input
                type="text"
                name="postImg"
                value={editData.postImg}
                onChange={handleChange}
                placeholder="Image URL"
                className="border p-2 rounded"
              />

              <textarea
                name="body"
                value={editData.body}
                onChange={handleChange}
                placeholder="Body content"
                rows={6}
                className="border p-2 rounded"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
