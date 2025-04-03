import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuySuccess = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="text-center p-6 rounded-lg shadow-lg bg-[#0D1321]">
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-500 flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-12 h-12"
                    >
                        <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Success!</h1>
                <p className="text-white mb-5">
                    Transaction successfull.
                </p>
                <button
                    onClick={()=>{navigate('/dashboard')}}
                    className="px-6 py-2 text-white bg-purple-500 rounded-md cursor-pointer hover:bg-purple-600 transition"
                >
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default BuySuccess;
