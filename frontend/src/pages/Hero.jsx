import React, { useState, useEffect } from 'react';
import bgImage from '../assets/BackgroundImage.png'
import { HowItWorks } from '../components/HowItWorks'
import { Architecture } from '../components/Architecture'
import References from './References';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 20,
        y: (event.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    const isSignedIn = localStorage.getItem('username');
    if (isSignedIn) {
      navigate('/dashboard'); // Redirect to dashboard if signed in
    } else {
      navigate('/signin'); // Redirect to signin if not signed in
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-gradient-to-br from-purple-950 to-black"
    >
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xl px-3 py-2  text-white mb-6">
               Where your money grows steadily, securely, and smartly
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Why Break When You Can{' '} <span className=" bg-white px-3 text-purple-600 rounded-lg">Trade?</span>
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Join the next generation of traders breaking free from traditional constraints. With fractionalized FDs, invest in smaller portions to diversify and maximize returns.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleGetStarted}
                className="bg-white text-xl text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-white/90 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* FD Investment Section */}
          <div
            className="bg-white backdrop-blur-lg rounded-2xl p-8"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-purple-500  mb-4">
                The right time to invest in FDs is <span className="text-purple-500">now</span>
              </h2>
              <p className="text-transparent bg-clip-text bg-purple-700 text-lg mb-6">
                 The Fd's Market is getting hotter, and so are the rates! <br />
              </p>
              <button className="  bg-purple-500 hover:bg-purple-500 text-xl text-white px-8 py-3 rounded-full font-medium transition-colors cursor-pointer">
                  Invest Now
              </button>
            </div>

            <div className="relative mt-12 pt-8">
              {/* Graph Points */}
              <div className="absolute right-4 top-0 text-purple-500 text-right">
                <div className="text-2xl font-bold flex items-center gap-2">
                  NOW <span className="inline-block">✨</span>
                </div>
                <div className="text-4xl font-bold">9.10%</div>
              </div>

              {/* Graph */}
              <div className="relative h-64 mt-8">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff69b4" />
                      <stop offset="50%" stopColor="#9f7aea" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <g className="opacity-20">
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 20}
                        x2="400"
                        y2={i * 20}
                        stroke="white"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                      />
                    ))}
                  </g>

                  {/* Main Graph Line */}
                  <path
                    d="M0,100 C50,80 100,120 150,90 S200,140 250,110 S300,60 350,30 S400,10 400,10"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                  />
                  {/* Data Points */}
                  <circle cx="0" cy="100" r="6" fill="url(#lineGradient)" />
                  <circle cx="150" cy="90" r="6" fill="url(#lineGradient)" />
                  <circle cx="250" cy="110" r="6" fill="url(#lineGradient)" />
                  <circle cx="350" cy="30" r="6" fill="url(#lineGradient)" />
                  <circle cx="400" cy="10" r="8" fill="url(#lineGradient)" className="animate-pulse" />

                  {/* Interest Rate Labels */}
                  <text x="30" y="70" fill="#6b46c1" fontSize="12" textAnchor="middle">5.00%</text>
                  <text x="150" y="70" fill="#6b46c1" fontSize="12" textAnchor="middle">6.50%</text>
                  <text x="250" y="90" fill="#6b46c1" fontSize="12" textAnchor="middle">4.20%</text>
                  {/* <text x="350" y="10" fill="#6b46c1" fontSize="12" textAnchor="middle">8.00%</text> */}
                  <text x="400" y="0" fill="#6b46c1" fontSize="12" textAnchor="middle">9.10%</text>
                </svg>
                {/* Years */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-purple-700 mt-4">
                  <span>2007</span>
                  <span>2012</span>
                  <span>2016</span>
                  <span>2019</span>
                  <span>NOW</span>
                </div>
              </div>
              {/* Graph Glow Effect */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300/40 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <HowItWorks></HowItWorks> */}
             <References/>
            <Architecture></Architecture>
      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
