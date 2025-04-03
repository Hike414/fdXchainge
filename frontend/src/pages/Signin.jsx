import { React, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../assets/BackgroundImage.png";

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Username"
              className="w-full p-3 pl-10 rounded-lg bg-gray-900 text-white placeholder-gray-400"
            />
          </div>
          <div className="mb-4 relative">
            <FaLock className="absolute left-3 top-3 text-purple-400" />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 rounded-lg bg-gray-900 text-white placeholder-gray-400"
            />
          </div>
          <button
            onClick={async (event) => {
              event.preventDefault();
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                if (response.status === 200) {
                  localStorage.setItem("username", username);
                  localStorage.setItem("signedIn", true);
                  navigate("/dashboard");
                } else {
                  console.error("Unexpected response:", response);
                  alert("An error occurred. Please try again.");
                }
              } catch (error) {
                console.error("Error during sign-in:", error);
                alert(
                  error.response?.data?.message ||
                    "Failed to sign in. Please check your credentials and try again."
                );
              }
            }}
            className="w-full bg-purple-500 cursor-pointer hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign in
          </button>
          <div className="pt-2 flex justify-between text-purple-300 text-sm mb-4">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
            <a href="/signup" className="hover:underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;