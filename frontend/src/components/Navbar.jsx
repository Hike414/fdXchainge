import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                setWalletAddress(accounts[0] || "");
            });
        }
    }, []);

    return (
        <nav className="relative px-6 py-4 bg-gradient-to-t from-slate-50 to-violet-100 shadow-md ">
            <div className="relative flex items-center justify-between">
                {/* App Name */}
                <div className="flex items-center">
                    <Link to="/" className="text-blue-600 text-2xl font-bold cursor-pointer">
                        FDXChainge
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    {walletAddress ? (
                        <span className="text-blue-600 text-sm font-semibold">
                            {`Wallet: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
                        </span>
                    ) : (
                        <button
                            onClick={connectWallet}
                            className="text-white text-xl  bg-blue-500 border-2 rounded-2xl px-5 py-1 text-sm cursor-pointer hover:bg-yellow-600 transform hover:scale-110 transition-transform duration-200"
                        >
                            Connect MetaMask
                        </button>
                    )}
                    <Link
                        to="/signin"
                        className="text-white text-xl  bg-blue-600 border-2 border-blue-600 rounded-2xl px-5 py-1 text-sm cursor-pointer hover:bg-blue-700 transform hover:scale-110 transition-transform duration-200"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
