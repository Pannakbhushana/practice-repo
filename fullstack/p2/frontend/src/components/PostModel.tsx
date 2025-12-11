import { useState } from "react";

const initState = {
    userName: "",
    title: "",
    description: "",
    postImg: "",
    body: "",
}

export const PostModal = ({ open, onClose, PostData }: any) => {
    const [form, setForm] = useState(initState);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(form.userName && form.title && form.description && form.postImg && form.body){
            PostData(form);
            setForm(initState)
            onClose()
        }
    };

    if (!open) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
                <h2 className="text-xl font-semibold mb-4">Create New Post</h2>


                <div className="grid gap-4">
                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        className="border p-2 rounded w-full"
                        value={form.userName}
                        onChange={handleChange}
                    />


                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="border p-2 rounded w-full"
                        value={form.title}
                        onChange={handleChange}
                    />


                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        className="border p-2 rounded w-full"
                        value={form.description}
                        onChange={handleChange}
                    />


                    <input
                        type="text"
                        placeholder="Post Image URL"
                        name="postImg"
                        className="border p-2 rounded w-full"
                        value={form.postImg}
                        onChange={handleChange}
                    />

                    <textarea
                        name="body"
                        placeholder="Write your post..."
                        value={form.body}
                        onChange={handleChange}
                        className="border p-2 w-full min-h-24 resize-y rounded"
                    ></textarea>
                </div>


                <div className="flex justify-end mt-6 gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};