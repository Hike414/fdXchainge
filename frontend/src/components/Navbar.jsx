import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const signedIn = localStorage.getItem('signedIn');
  return (
    <nav className="relative px-6 py-4 bg-purple-900/40 backdrop-blur-lg border-white">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative flex items-center justify-between">
          <div className="flex items-center px-12">
            <span
              className=" text-2xl font-bold cursor-pointer px-8 py-2 text-white"
              onClick={() => navigate('/')}
            >
              FDXChainge
            </span>
          </div>
            <div className="flex items-center">
              {signedIn ? (
                <button
                  onClick={() => {
                    localStorage.removeItem('signedIn');
                    navigate('/signin');
                  }}
            className="text-purple rounded-2xl px-5 py-1 text-xl cursor-pointer bg-white hover:bg-white transform hover:scale-110 transition-transform duration-200"
                >
            Sign Out
                </button>
              ) : (
                <button
            onClick={() => navigate('/signin')}
            className="text-purple rounded-2xl px-5 py-1 text-xl cursor-pointer bg-white hover:bg-white transform hover:scale-110 transition-transform duration-200"
                >
            Sign In
                </button>
              )}
            </div>
                </div>
                {/* Mirror Effect Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </nav>
  )
}

export default Navbar
