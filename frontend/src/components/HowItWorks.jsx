import React from 'react';
import { ArrowRightCircle, BarChart3, Wallet, Clock, Trophy, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="py-20 relative bg-gradient-to-br from-purple-950 to-black">
     <h1 className='text-white px-160 text-5xl font-bold'>How It Works ??</h1>
      <div className="container mx-auto px-4 mt-6">
        <div className="text-center mb-16">
          <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">Simple Process</span>
          <h2 className="text-4xl font-bold mb-4">Start Trading in Minutes</h2>
          <p className="text-xl text-purple-300">Follow these simple steps to begin your investment journey</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="relative group">
              <div className="bg-purple-900/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="bg-purple-600 rounded-2xl p-6 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">1. Fund Your Account</h3>
                <p className="text-gray-300 leading-relaxed">Add funds securely using multiple payment options. Start with as little as ₹1000.</p>
                <div className="mt-6 flex items-center gap-2 text-purple-400">
                  <Clock className="w-5 h-5" />
                  <span>Takes 2 minutes</span>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-purple-600"></div>
            </div>
            <div className="relative group">
              <div className="bg-purple-900/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="bg-purple-600 rounded-2xl p-6 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">2. Choose Investment</h3>
                <p className="text-gray-300 leading-relaxed">Select from a range of pre-vetted FD options with competitive returns.</p>
                <div className="mt-6 flex items-center gap-2 text-purple-400">
                  <Trophy className="w-5 h-5" />
                  <span>Best rates guaranteed</span>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-purple-600"></div>
            </div>
            <div className="group">
              <div className="bg-purple-900/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="bg-purple-600 rounded-2xl p-6 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRightCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">3. Start Earning</h3>
                <p className="text-gray-300 leading-relaxed">Watch your investments grow with competitive returns. Track in real-time.</p>
                <div className="mt-6 flex items-center gap-2 text-purple-400">
                  <TrendingUp className="w-5 h-5" />
                  <span>Earn up to 9.10% p.a.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}