import React, { useState } from "react";
import { useAuth } from "../custom-hooks/useAuth";
import Popup from "../components/Popup";

interface LogInData {
  email: string;
  password: string;
}

export default function LogIn() {
  const { userSignIn, loading, error, isSuccess } = useAuth();
  const [formData, setFormData] = useState<LogInData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      userSignIn(formData)
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 p-6 text-center leading-relaxed">
          Welcome back! Sign in to experience a smarter, more personalized way to explore, learn, and connect.
          <br />Enjoy exclusive access to tools, insights, and exciting updates made to keep you inspired every day.
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter a strong password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 py-2 rounded-md font-medium hover:bg-teal-600 transition disabled:opacity-60"
            >
              {loading ? "Loging In..." : "Log In"}
            </button>
          </form>
          <br />
          <button
              onClick={()=>{
                localStorage.removeItem("user")
              }}
              className="w-full bg-teal-500 py-2 rounded-md font-medium hover:bg-teal-600 transition disabled:opacity-60"
            >
              Sign Out
            </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Create an account?{" "}
            <a href="/signup" className="text-teal-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>

        {/* popUp */}
        {isSuccess && <Popup message="Login successful!" type="success" />}
        {error && <Popup message={`Login failed! ${error}`} type="error" />}
      </div>
    </>
  );
}
