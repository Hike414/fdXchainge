import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="relative px-6 py-4 bg-[#0D1321] bg-opacity-50 backdrop-blur-lg">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative flex items-center justify-between">
        {/* App Name */}
        <div className="flex items-center">
          <span
            className="text-white text-2xl font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            FDXChainge
          </span>
        </div>

        
          <div className="flex items-center">
            <button
              onClick={() => navigate('/signin')}
              className="text-white rounded-2xl px-5 py-1 text-xl cursor-pointer bg-purple-500 hover:bg-purple-600 transform hover:scale-110 transition-transform duration-200"
            >
              Sign In
            </button>
          </div>
              </div>
              {/* Mirror Effect Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </nav>
  )
}

export default Navbar
