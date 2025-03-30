import React from "react";
import bgImage from "../assets/BackgroundImage.png";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
    const navigate = useNavigate();

    return (
        <div
            className="h-screen flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-2xl w-96 shadow-lg">
                <h2 className="text-purple-400 text-3xl font-semibold text-center mb-6">
                    Sign up
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="text-purple-300 block mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Rahul Misala"
                            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-purple-300 block mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Rahulmisala@gmail.com"
                            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="text-purple-300 block mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                                />
                        </div>
                        <div className="w-1/2">
                            <label className="text-purple-300 block mb-1">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                                
                            />
                        </div>
                    </div>
                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition duration-300">
                        Create Account
                    </button>
                    <div className="text-center text-purple-300 mt-4">Or</div>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                        className="w-full bg-white text-black font-semibold py-3 rounded-lg mt-2"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};


export default SignupForm;
