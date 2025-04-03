import React from 'react';
import { 
  Database, 
  Wallet, 
  LayoutDashboard, 
  PenTool as Token, 
  ArrowRight, 
  Store, 
  Coins,
  Split,
  UserCircle,
  Clock,
  PieChart,
  DollarSign,
} from 'lucide-react';

export function Architecture() {
  return (
    <div className="py-32 relative overflow-hidden bg-gradient-to-br from-purple-950 to-black"> {/* Increased padding */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-10 bg-cover bg-center"></div>  */}
      <div className="container mx-auto px-6"> {/* Adjusted padding */}
        <div className="text-center mb-20"> {/* Increased margin */}
          <h2 className="text-5xl font-bold mb-6 text-white"> {/* Increased font size */}
            How FDX<span className='text-5xl text-purple-600'>Chainge</span>works
          </h2>
          <p className="text-2xl text-purple-200"> {/* Increased font size */}
            Understanding the complete flow of our FD trading platform
          </p>
        </div>

        <div className="max-w-7xl mx-auto"> {/* Increased max width */}
          {/* User Authentication Flow */}
          <div className="mb-20 bg-purple-900/40 p-12 rounded-3xl backdrop-blur-md border border-purple-500/30"> {/* Adjusted padding and brightness */}
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 text-white"> {/* Increased font size */}
              <UserCircle className="w-10 h-10 text-purple-300" />
              User Authentication
            </h3>
            <div className="flex items-center justify-center gap-12 animate-fade-in"> {/* Increased gap */}
              <div className="flex flex-col items-center">
                <UserCircle className="w-14 h-14 text-purple-300 mb-4" /> {/* Increased icon size */}
                <p className="text-purple-200 text-lg">SignIn</p> {/* Increased font size */}
              </div>
              <div className="w-32 h-px border-t-2 border-dotted border-purple-300 relative"> {/* Adjusted size */}
                <ArrowRight className="w-6 h-6 text-purple-300 absolute -right-3 -top-3" /> {/* Increased icon size */}
              </div>
              <div className="flex flex-col items-center">
                <LayoutDashboard className="w-14 h-14 text-purple-300 mb-4" /> {/* Increased icon size */}
                <p className="text-purple-200 text-lg">Access Dashboard</p> {/* Increased font size */}
              </div>
            </div>
          </div>

          {/* Connecting Arrow */}
          <div className="flex justify-center -mt-8 mb-8">
            <div className="h-8 w-px border-l-2 border-dotted border-purple-400 relative">
              <ArrowRight className="w-5 h-5 text-purple-400 absolute -bottom-2.5 -right-2 rotate-90" />
            </div>
          </div>

          {/* FD Token Creation */}
          <div className="mb-20 bg-purple-900/40 p-12 rounded-3xl backdrop-blur-md border border-purple-500/30"> {/* Adjusted padding and brightness */}
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 text-white"> {/* Increased font size */}
              <Token className="w-10 h-10 text-purple-300" />
              FD Token Creation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"> {/* Increased gap */}
              <div className="flex flex-col items-center p-8 bg-purple-800/40 rounded-2xl group hover:bg-purple-800/50 transition-all duration-300"> {/* Adjusted padding */}
                <Database className="w-14 h-14 text-purple-300 mb-4 group-hover:scale-110 transition-transform duration-300" /> {/* Increased icon size */}
                <h4 className="font-semibold mb-3 text-white text-lg">Token Metadata</h4> {/* Increased font size */}
                <ul className="text-purple-200 text-base space-y-2"> {/* Increased font size */}
                  <li>• Principal Amount</li>
                  <li>• Interest Rate</li>
                  <li>• Duration</li>
                  <li>• Owner Address</li>
                </ul>
              </div>
              {/* <div className="hidden md:block absolute left-[30%] top-1/2 w-[40%] h-px border-t-2 border-dotted border-purple-400">
                <ArrowRight className="w-5 h-5 text-purple-400 absolute -right-2.5 -top-2.5" />
              </div> */}
              <div className="flex flex-col items-center p-6 bg-purple-800/30 rounded-xl group hover:bg-purple-800/40 transition-all duration-300">
                <Split className="w-12 h-12 text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold mb-2 text-white text-xl">Fractionalization</h4>
                <ul className="text-purple-300 text-lg space-y-1">
                  <li>• Token Name</li>
                  <li>• Number of Tokens</li>
                  <li>• Token Distribution</li>
                </ul>
              </div>
              {/* <div className="hidden md:block absolute right-[30%] top-1/2 w-[40%] h-px border-t-2 border-dotted border-purple-400">
                <ArrowRight className="w-5 h-5 text-purple-400 absolute -right-2.5 -top-2.5" />
              </div> */}
              <div className="flex flex-col items-center p-6 bg-purple-800/30 rounded-xl group hover:bg-purple-800/40 transition-all duration-300">
                <Store className="w-12 h-12 text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold mb-2 text-white text-xl">Marketplace</h4>
                <ul className="text-purple-300 text-lg space-y-1">
                  <li>• List Tokens</li>
                  <li>• Set Price</li>
                  <li>• Trading Options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Connecting Arrow */}
          {/* <div className="flex justify-center -mt-8 mb-8">
            <div className="h-8 w-px border-l-2 border-dotted border-purple-400 relative">
              <ArrowRight className="w-5 h-5 text-purple-400 absolute -bottom-2.5 -right-2 rotate-90" />
            </div>
          </div> */}

          {/* Trading Dashboard */}
          <div className="bg-purple-900/40 p-12 rounded-3xl backdrop-blur-md border border-purple-500/30"> {/* Adjusted padding and brightness */}
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 text-white"> {/* Increased font size */}
              <PieChart className="w-10 h-10 text-purple-300" />
              Dashboard Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
              <div className="p-6 bg-purple-800/40 rounded-2xl flex items-center gap-6 group hover:bg-purple-800/50 transition-all duration-300"> {/* Adjusted padding */}
                <Coins className="w-10 h-10 text-purple-300 group-hover:scale-110 transition-transform duration-300" /> {/* Increased icon size */}
                <div>
                  <h4 className="font-semibold text-white text-lg">Total FD Value</h4> {/* Increased font size */}
                  <p className="text-purple-200 text-base">Track your portfolio value</p> {/* Increased font size */}
                </div>
              </div>
              <div className="p-4 bg-purple-800/30 rounded-xl flex items-center gap-4 group hover:bg-purple-800/40 transition-all duration-300">
                <DollarSign className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold text-white">Interest Payout</h4>
                  <p className="text-purple-300 text-sm">Monitor earnings</p>
                </div>
              </div>
              <div className="p-4 bg-purple-800/30 rounded-xl flex items-center gap-4 group hover:bg-purple-800/40 transition-all duration-300">
                <Clock className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold text-white">Active FDs</h4>
                  <p className="text-purple-300 text-sm">Track ongoing investments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}