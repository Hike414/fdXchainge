import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Signin = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl w-96 shadow-lg">
        <h2 className="text-blue-600 text-3xl font-semibold text-center mb-6">
          Welcome Back
        </h2>
        <form>
          <div className="mb-4">
            <label className="text-blue-500 block mb-1">Email Address</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-blue-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 pl-10 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-blue-500 block mb-1">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-blue-500" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 pl-10 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">
            Sign in
          </button>
          <div className="pt-2 flex justify-between text-blue-500 text-sm mb-4">
            <a href="#" className="hover:underline">Forgot Password?</a>
            <a href="/signup" className="hover:underline">Sign Up</a>
          </div>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={connectWallet}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect MetaMask"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;