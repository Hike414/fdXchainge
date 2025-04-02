import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/BackgroundImage.png';
import { ArrowLeft } from 'lucide-react';
const data = [
    {
      rank: 1,
      TokenName: "Jalebi",
      icon: "🌀",
      price: "$113.44",
      RTI: "13.48k",
      seller: "-3.69%",
      MachurityDate: "26.32k",
    },
    {
      rank: 1,
      TokenName: "Gulab Jamun",
      icon: "🌀",
      price: "$113.44",
      RTI: "13.48k",
      seller: "-3.69%",
      MachurityDate: "26.32k",
    },
    {
      rank: 1,
      TokenName: "Rasmalai",
      icon: "🌀",
      price: "$113.44",
      RTI: "13.48k",
      seller: "-3.69%",
      MachurityDate: "26.32k",
    },
    {
      rank: 1,
      TokenName: "Khaja",
      icon: "🌀",
      price: "$113.44",
      RTI: "13.48k",
      seller: "-3.69%",
      MachurityDate: "26.32k",
    },
    {
      rank: 1,
      TokenName: "Kalakand",
      icon: "🌀",
      price: "$113.44",
      RTI: "13.48k",
      seller: "-3.69%",
      MachurityDate: "26.32k",
    },
    {
      rank: 1,
      TokenName: "Apricot Delight",
      icon: "🌀",
      price: "$113.44",
      RTI: "13.48k",
      seller: "-3.69%",
      MachurityDate: "26.32k",
    },
    {
      rank: 1,
      TokenName: "Halwa",
      icon: "🌀",
      price: "$113.44",
      RTI: "13.48k",
      seller: "-3.69%",
      MachurityDate: "26.32k",
    },
  ];
  
const marketplace = () =>{
    const navigate = useNavigate();
    return (
        <div className="min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                
             <div className="container mx-auto px-4 py-8">
               
                {/* <div className="flex justify-between">
                    <button className="text-3xl pl-5 pt-2 pb-2 pr-5 text-white bg-green-500 rounded-lg hover:bg-green-600 font-bold cursor-pointer">BUY</button>
                    <button className="text-3xl pl-5 pt-2 pb-2 pr-5 text-white bg-red-500 rounded-lg hover:bg-red-600 font-bold cursor-pointer">SELL</button>
                </div> */}
            </div>
            <div className="container mx-auto ">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="mb-6 flex items-center gap-2 text-2xl text-purple-500 hover:text-purple-600 cursor-pointer"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Dashboard</span>
                </button>
                <div className="mb-5">
                    <h1 className="text-3xl font-bold text-purple-400">Trending FFD Tokens</h1>
                </div>
                
            </div>
            <div className="p-6 ml-16 mr-16 bg-[#0D1321] text-white  rounded-lg shadow-lg">
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Search tokens..." 
                        className="p-2 w-1/2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button 
                        className="ml-4 p-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 font-bold cursor-pointer"
                    >
                        Search
                    </button>
                </div>
            <table className="w-full border-collapse">
                <thead>
                <tr className="text-left text-gray-400 text-xl border-b border-gray-700">
                    <th className="p-2">#</th>
                    <th className="p-2">TokenName</th>
                    <th className="p-2">Avg. Price</th>
                    <th className="p-2">RTI</th>
                    <th className="p-2">Seller</th>
                    <th className="p-2">MachurityDate</th>
                    <th className="p-2">Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.rank} className="border-b border-gray-700 text-xl">
                    <td className="p-2">{item.rank}</td>
                    <td className="p-2 flex items-center gap-2">
                        <span>{item.icon}</span>
                        {item.TokenName}
                    </td>
                    <td className="p-2">{item.price}</td>
                    <td className="p-2">{item.RTI}</td>
                    <td className="p-2">{item.seller}</td>
                    <td className="p-2">{item.MachurityDate}</td>
                    <button onClick={()=>{
                        navigate("/buytoken?id=" + item.TokenName);
                    }}
                     className='text-sm pl-5 pt-2 pb-2 pr-5 mb-2 text-white bg-green-500 rounded-lg hover:bg-green-600 font-bold cursor-pointer' >
                        BUY
                    </button>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default marketplace;
