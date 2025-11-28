import React, { useState } from "react";
import { Edit, Trash } from "lucide-react"; // optional icon library

export const PostDetails: React.FC = () => {
    
    // Pre-filled sample data (replace with fetched data later)
    const [post] = useState({
        userName: "rahul_m",
        postImg: "https://picsum.photos/id/237/800/500",
        title: "Understanding Flexbox",
        body: "A complete guide to mastering CSS Flexbox layout for responsive UI."
    });

    const [newPost, setNewPost] = useState({
        userName: "",
        postImg: "",
        title: "",
        body: ""
    });

    return (
        <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            
            {/* POST DETAILS SECTION */}
            <div style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "40px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
                {/* Post Image */}
                <img
                    src={post.postImg}
                    alt={post.title}
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        marginBottom: "20px"
                    }}
                />

                {/* Post Info */}
                <h2 style={{ marginBottom: "10px" }}>{post.title}</h2>
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                    By: {post.userName}
                </p>
                <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
                    {post.body}
                </p>

                {/* Action Icons */}
                <div style={{ display: "flex", gap: "15px" }}>
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        <Edit size={24} color="#007bff" />
                    </button>

                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        <Trash size={24} color="#d9534f" />
                    </button>
                </div>
            </div>

            {/* CREATE NEW POST FORM */}
            <div
                style={{
                    border: "1px solid #ddd",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
            >
                <h3 style={{ marginBottom: "20px" }}>Create New Post</h3>

                <form style={{ display: "grid", gap: "15px" }}>
                    
                    {/* Username */}
                    <input
                        type="text"
                        placeholder="User Name"
                        value={newPost.userName}
                        onChange={(e) =>
                            setNewPost({ ...newPost, userName: e.target.value })
                        }
                        style={inputStyle}
                    />

                    {/* Post Image URL */}
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={newPost.postImg}
                        onChange={(e) =>
                            setNewPost({ ...newPost, postImg: e.target.value })
                        }
                        style={inputStyle}
                    />

                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Post Title"
                        value={newPost.title}
                        onChange={(e) =>
                            setNewPost({ ...newPost, title: e.target.value })
                        }
                        style={inputStyle}
                    />

                    {/* Body */}
                    <textarea
                        placeholder="Post Body"
                        value={newPost.body}
                        onChange={(e) =>
                            setNewPost({ ...newPost, body: e.target.value })
                        }
                        rows={5}
                        style={{ ...inputStyle, resize: "vertical" }}
                    />

                    {/* Submit Button */}
                    <button
                        type="button"
                        style={{
                            padding: "12px 18px",
                            background: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </div>
    );
};


// Reusable input style
const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px"
};
