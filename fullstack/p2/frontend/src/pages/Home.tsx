import { useEffect, useState } from "react";
import { PostService } from "../custome-hooks/post.hook";
import { PostModal } from "../components/PostModel";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import ConfirmationModal from "../components/ConfirmationModal";

export const Home = () => {
    const { post, getPost, PostData, deletePost } = PostService();
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const Navigate = useNavigate()

    useEffect(() => {
        getPost();
    }, []);

    const handleDelete = (id: any) => {
        deletePost(id);
    }

    return (
        <>
            <div className="min-h-screen p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Latest Posts</h1>
                    <button
                        onClick={() => setOpen(true)}
                        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Add Post
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {post && post.length > 0 ? (
                        post.map((item: any) => (
                            <div
                                key={item._id}
                                className="relative bg-white rounded-xl hover:cursor-pointer shadow-md overflow-hidden hover:shadow-lg transition"
                            >
                                {/* Delete Icon */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevents navigation on delete click
                                        setShowModal(true) // your delete handler
                                    }}
                                    className="absolute top-3 right-3 rounded-full p-2 bg-red-300 hover:bg-red-700 transition"
                                >
                                    <AiOutlineDelete size={22} />
                                </button>

                                {/* Card Click Navigation */}
                                <div onClick={() => Navigate(`/post/${item._id}`)}>
                                    <img
                                        src={item.postImg}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    <div className="p-4">
                                        <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                                        <div className="text-xs text-gray-500">By {item.userName}</div>
                                    </div>
                                </div>
                                {showModal && (
                                    <ConfirmationModal
                                        onCancel={() => setShowModal(false)}
                                        onConfirm={() => {
                                            handleDelete(item._id);
                                            setShowModal(false);
                                        }}
                                    />
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-600">Loading posts...</div>
                    )}
                </div>
            </div>
            <PostModal open={open} onClose={() => { setOpen(false) }} PostData={PostData} />
        </>
    );
};
