import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import bgImage from "../assets/BackgroundImage.png";
const Signin = () => {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-2xl w-96 shadow-lg">
        <h2 className="text-purple-400 text-3xl font-semibold text-center mb-6">
          Sign in
        </h2>
        <form>
          <div className="mb-4 relative">
            <FaUser className="absolute left-3 top-3 text-purple-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-lg bg-gray-900 text-white placeholder-gray-400"
            />
          </div>
          <div className="mb-4 relative">
            <FaLock className="absolute left-3 top-3 text-purple-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 rounded-lg bg-gray-900 text-white placeholder-gray-400"
            />
          </div>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Sign in
          </button>
          <div className="pt-2 flex justify-between text-purple-300 text-sm mb-4">
            <a href="#" className="hover:underline">Forgot Password?</a>
            <a href="/signup" className="hover:underline">Sign Up</a>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Signin;