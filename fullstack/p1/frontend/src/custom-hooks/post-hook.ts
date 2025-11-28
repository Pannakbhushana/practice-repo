import { useState } from "react"
import { useAuthToken } from "./auth-token-customehook";

export const usePostHook = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [token] = useState(() => {
        const data = localStorage.getItem("user");
        if (!data) return "";
        try {
            const stored = JSON.parse(data);
            return stored.token || "";
        } catch {
            return "";
        }
    });

    const getPost = async (id = "") => {
        let postUrl;
        if (id.length) {
            postUrl = `${baseUrl}/post?_id=${id}`;
        }
        else {
            postUrl = `${baseUrl}/post`;
        }
        setLoading(true);
        try {
            const result = await fetch(postUrl, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            const res = await result.json();
            if (!result.ok) {
                throw new Error(res.msg || "something went wrong");
            }
            setPost(res);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    return { post, loading, getPost }
}