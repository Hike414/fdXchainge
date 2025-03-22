import React from 'react'
import { BarChart3 } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className="relative px-6 py-4 rounded-lg">
    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg"></div>
    <div className="relative flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <BarChart3 className="w-8 h-8 text-yellow-300" />
        <span className="text-white text-xl font-bold">fdXchange</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white/80 hover:text-white">Trade</a>
        <a href="#" className="text-white/80 hover:text-white">Markets</a>
        <a href="#" className="text-white/80 hover:text-white">Portfolio</a>
        <a href="#" className="text-white/80 hover:text-white">About</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-white/80">Sign In</button>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-white/90">
          Start Trading
        </button>
      </div>
    </div>
    {/* Mirror Effect Bottom Border */}
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  </nav>
  )
}

export default Navbar