import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const isSignedIn = localStorage.getItem('username');

  const handleSignOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('signedIn');
    navigate('/');
  };

  return (
    <nav className="relative px-6 py-4 bg-purple-900/40 backdrop-blur-lg border-white">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative flex items-center justify-between">
        {/* App Name */}
        <div className="items-center px-12">
          <span
            className="flex text-3xl  cursor-pointer px-8 py-2 text-white"
            onClick={() => navigate('/')}
          >
            <p className='text-5xl font-bold'>FDX</p>
            <p className='pt-3 flex font-bold text-3xl'>
              <p className='text-green-500'>Chain</p>ge
            </p>
          </span>
          <h1 className='text-white ml-8 font-style : italic'>Blockchain Based Tokenised Deposit Platform</h1>
        </div>
        <div className="flex items-center">
          {isSignedIn ? (
            <button
              onClick={handleSignOut}
              className="text-purple rounded-2xl mr-20 px-5 py-1 text-xl cursor-pointer bg-purple-500 hover:bg-purple-600 transform hover:scale-110 transition-transform duration-200"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => navigate('/signin')}
              className="text-purple rounded-2xl mr-20 px-5 py-1 text-xl cursor-pointer bg-purple-500 hover:bg-purple-600 transform hover:scale-110 transition-transform duration-200"
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
