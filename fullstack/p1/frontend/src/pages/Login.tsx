import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";

export const LogIn: React.FC = () => {
    const Navigate = useNavigate();

    return <div className="flex flex-col h-screen justify-center items-center">
        <div className="h-[20%] flex justify-center items-center py-4">
            <p className="text-lg font-semibold italic">
                <span className="text-xl font-bold">LogIn  </span>
                to see what people have posted and access our cool featurs
            </p>
        </div>
        <div className="w-1/3 min-h-100 shadow-2xl rounded-xl">

            <LoginForm />

            <div className="h-[20%] flex justify-center items-center py-8">
                <p className="text-xl italic">
                    Not regestered yet {" "}
                    <span
                        onClick={() => Navigate("/signup")}
                        className="text-blue-700 hover:cursor-pointer">sugnup here</span>
                </p>
            </div>
        </div>
    </div>
}