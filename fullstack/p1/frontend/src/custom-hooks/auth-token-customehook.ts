import toast from "react-hot-toast";
import type { LoginResponseType } from "../types/common";

export const useAuthToken = () => {

    const storeUseDetails = (data: LoginResponseType) => {
        localStorage.setItem("user", JSON.stringify(data));
    }

    const getUserDetails = () => {
        const data = localStorage.getItem("user") || null;
        if (!data) return null;
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error("Invalid user data in localStorage");
            return null;
        }
    }

    const removeUser = () => {
        localStorage.removeItem("user");
        toast.success("User Signed Out successfully");
        return
    }

    return { storeUseDetails, getUserDetails, removeUser }
}