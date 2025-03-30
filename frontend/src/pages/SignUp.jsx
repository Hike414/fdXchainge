import React from "react";
import bgImage from "../assets/BackgroundImage.png";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl w-96 shadow-lg">
        <h2 className="text-blue-600 text-3xl font-semibold text-center mb-6">
          Create Your Account
        </h2>
        <form>
          <div className="mb-4">
            <label className="text-blue-500 block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-500 block mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="text-blue-500 block mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500"
              />
            </div>
            <div className="w-1/2">
              <label className="text-blue-500 block mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">
            Create Account
          </button>
          <div className="text-center text-blue-500 mt-4">Or</div>
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="w-full bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg mt-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
