import React from "react";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "../components/SignupForm";

export const SignUp: React.FC = () => {
    const Navigate = useNavigate();

    return <div className="flex h-screen justify-center items-center">
        <div className="w-1/3 min-h-100 shadow-2xl rounded-xl">

            <div className="h-[20%] flex justify-center items-center py-4">
                <p className="text-lg font-semibold italic">
                    <span className="text-xl font-bold">SignUp  </span>
                    to see what people have posted and access our cool featurs
                </p>
            </div>

            <div className="h-[60%]">
                <SignupForm />
            </div>

            <div className="h-[20%] flex justify-center items-center py-8">
                <p className="text-xl italic">
                    Already regestered {" "}
                    <span
                        onClick={() => Navigate("/login")}
                        className="text-blue-700 hover:cursor-pointer">login here</span>
                </p>
            </div>
        </div>
    </div>
}