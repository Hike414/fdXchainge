import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Landmark, ShoppingBagIcon } from 'lucide-react';
import bgImage from '../assets/BackgroundImage.png';
import axios from 'axios';

function Dashboard() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [userID, setUserID] = useState('');
    const [fdTokens, setFdTokens] = useState([]);
    const [ffdTokens, setFFdTokens] = useState([]);
    const [recentTransactions, setRecentTransactions] = useState([]);

    const [data,setData] = useState([]);
    useEffect(() => {
            const fetchData = async () => {
                const response = await axios.get("http://localhost:3000/api/v1/marketplace/bulk");
                if (response.status === 200) {
                    console.log("Data fetched successfully");
                    setData(response.data.data);
                } else {
                    console.error("Error fetching data");
                }
            };
            fetchData();
        },[]);


    useEffect(() => {
        const fetchFullName = async () => {
            const saved = localStorage.getItem('username');
            if (saved) {
                try {
                    const response = await axios.get('http://localhost:3000/api/v1/user/getUser', {
                        params: { username: saved },
                    });
                    if (response.status === 200) {
                        setFullName(response.data.fullName);
                        setUserID(response.data.userId);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };
        fetchFullName();
    }, []);

    useEffect(() => {
        const fetchTokens = async () => {
            if (userID) {
                try {
                    const fdResponse = await axios.get(`http://localhost:3000/api/v1/fd/bulk/${userID}`);
                    const ffdResponse = await axios.get(`http://localhost:3000/api/v1/ffd/bulk/${userID}`);
                    if (fdResponse.status === 200) setFdTokens(fdResponse.data.FDTokens);
                    if (ffdResponse.status === 200) setFFdTokens(ffdResponse.data.FFDTokens);
                } catch (error) {
                    console.error('Error fetching tokens:', error);
                }
            }
        };
        fetchTokens();
    }, [userID]);

    useEffect(() => {
        // Fetch recent transactions (mocked for now)
        setRecentTransactions([
            { id: 1, type: 'Buy', token: 'Token A', amount: 5000, date: '2023-10-01' },
            { id: 2, type: 'Sell', token: 'Token B', amount: 3000, date: '2023-09-28' },
        ]);
    }, []);

    // Calculations
    const totalFDValue = fdTokens.reduce((sum, token) => sum + token.amount, 0);
    const totalInterestPayout = fdTokens.reduce((sum, token) => {
        const interest = (token.amount * token.interestRate * token.duration) / (100 * 12);
        return interest;
    }, 0);
    const upcomingInterestPayout = fdTokens.reduce((sum, token) => {
        const maturityDate = new Date(token.maturityDate);
        const today = new Date();
        if (maturityDate > today) {
            const interest = (token.amount * token.interestRate * token.duration) / (100 * 12);
            return interest;
        }
        return sum;
    }, 0);
    const activeFDs = fdTokens.length;
    const fdPartners = [...new Set(fdTokens.map(token => token.bank))].length;
    const ffdTokenCount = ffdTokens.length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-950 to-black">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white">Welcome {fullName}</h1>
                    <p className="mt-2 text-purple-400">Manage your fixed deposits and create new ones</p>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-[#0D1321] p-6 rounded-lg shadow-md text-white">
                        <h2 className="text-xl font-bold">Total FD Value</h2>
                        <p className="text-2xl">₹{totalFDValue.toFixed(2)}</p>
                    </div>
                    <div className="bg-[#0D1321] p-6 rounded-lg shadow-md text-white">
                        <h2 className="text-xl font-bold">Total Interest Payout</h2>
                        <p className="text-2xl">₹{totalInterestPayout.toFixed(2)}</p>
                    </div>
                    <div className="bg-[#0D1321] p-6 rounded-lg shadow-md text-white">
                        <h2 className="text-xl font-bold">Upcoming Interest Payout</h2>
                        <p className="text-2xl">₹{upcomingInterestPayout.toFixed(2)}</p>
                    </div>
                    <div className="bg-[#0D1321] p-6 rounded-lg shadow-md text-white">
                        <h2 className="text-xl font-bold">Active FDs</h2>
                        <p className="text-2xl">{activeFDs}</p>
                    </div>
                </div> */}
                
                <div className='flex justify-between gap-4'>
                    <button
                        onClick={() => navigate('/create-fd')}
                        className="mb-8 flex mt-5  items-center gap-2 cursor-pointer bg-purple-500  text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
                        >
                        <PlusCircle size={20} />
                        Create New FD
                    </button>
                    <button
                        onClick={() => navigate('/marketplace')}
                        className="mb-8 flex mt-5 items-center gap-2 cursor-pointer bg-purple-500  text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
                        >
                        <ShoppingBagIcon size={20} />
                        View Marketplace
                    </button>
                </div>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-purple-400">My FD Tokens</h1>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {fdTokens.map((token) => {
                        const adjustedAmount = (parseInt(token.amount )* (1 + (parseFloat(token.interestRate) / 100) * (parseInt(token.duration) / 12))).toFixed(2);
                        return (
                            <div
                                key={token.tokenID}
                                className="bg-[#0D1321] p-6 rounded-lg shadow-md "
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Landmark className="text-purple-600" size={24} />
                                    <h3 className="text-lg  text-white font-semibold">{token.tokenID}</h3>
                                    <div>
                                        <button onClick={()=>
                                            navigate("/fractionalise?tid="+ token.tokenID+"&uid="+userID+"&amt="+token.amount+"&dur="+token.maturityDate+"&int="+token.interestRate)
                                        }
                                        disabled={token.fractionalised}
                                         className="ml-20 flex items-center cursor-pointer disabled:bg-red-400 disabled:cursor-not-allowed disabled:text-black bg-green-500  text-white text-lg px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                                            Fractionlize
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2 text-md text-white">
                                    <p>Amount: ₹{token.amount}</p>
                                    <p>Bank: {token.bank}</p>
                                    <p>Plan: {token.plan}</p>
                                    <p>Duration: {token.duration} months</p>
                                    <p> Interest Rate: {token.interestRate} </p>
                                    <p>Maturity Date : {token.maturityDate.slice(0,10)}</p>
                                </div>
                            </div>
                        );
                    })}
                    {fdTokens.length === 0 && (
                        <div className="col-span-full text-center py-12 bg-[#0D1321] rounded-lg border-2 border-dashed border-gray-300">
                            <Landmark className="mx-auto text-white mb-3" size={32} />
                            <p className="text-white">No FD tokens yet. Create your first FD!</p>
                        </div>
                    )}
                </div>
                <div className="mb-8">
                    <h1 className="text-3xl pt-6 font-bold text-purple-400">My FFD Tokens</h1>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {ffdTokens.map((token) => {
                        
                        return (
                            <div
                                key={token.tokenID}
                                className="bg-[#0D1321] p-6 rounded-lg shadow-md "
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={"/uploads/" + token.image.filename}
                                        alt={token.tokenName}
                                        className="w-100 h-50 rounded-md border-2 "
                                    />
                                </div>
                                <div className="space-y-2  text-md text-white">
                                    <h2 className='text-lg'>Token Name: {token.tokenName}</h2>
                                    <h2 className='text-lg'>FD TokenID: {token.FDTokenId}</h2>
                                    <h2 className='text-lg'>Price of Each Token :{token.amount}</h2>
                                    <h2 className='text-lg'>Volume: {token.volume}</h2>
                                    <h2 className='text-lg'>Maturity Date : {token.maturityDate.slice(0,10)}</h2>
                                </div>
                                <div>
                                    {!token.listed ? (
                                        <button
                                        onClick={()=>navigate("/selltoken?tid="+token._id+"&uid="+userID+"&amt="+token.amount+"&dur="+token.maturityDate+"&int="+token.interestRate+"&vol="+token.volume+"&name="+token.tokenName+"&fileName="+token.image.filename)}
                                        disabled={token.listed}
                                        className=' mt-10 ml-20 flex items-center cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed  bg-green-500  text-white text-lg px-6 py-3 rounded-lg hover:bg-green-600 transition-colors'>
                                            Sell This Token
                                        </button>
                                    ):(
                                        <button
                                        disabled={false}
                                        className=' mt-10 ml-20 flex items-center   cursor-not-allowed  bg-red-400  text-black text-lg px-6 py-3 rounded-lg hover:bg-red-400 transition-colors'>
                                            Listed
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    {ffdTokens.length === 0 && (
                        <div className="col-span-full text-center py-12 bg-[#0D1321] rounded-lg border-2 border-dashed border-gray-300">
                            <Landmark className="mx-auto text-white mb-3" size={32} />
                            <p className="text-white">No FFD tokens yet!</p>
                        </div>
                    )}
                </div>
                <div className="mb-8">
                    <h1 className="text-3xl pt-6 font-bold text-purple-400">Shopped Tokens</h1>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {data.filter(item => (item.sold && (item.owner === userID))).map((token) => {
                        
                        return (
                            <div
                                className="bg-[#0D1321] p-6 w-100 rounded-lg shadow-md "
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={"/uploads/" + token.fileName}
                                        alt={token.tokenName}
                                        className="w-100 h-50 rounded-md border-2 "
                                    />
                                </div>
                                <div className="space-y-2  text-md text-white">
                                    <h2 className='text-lg'>Token Name : {token.tokenName}</h2>
                                    <h2 className='text-lg'>TokenID : {token.tokenID}</h2>
                                    <h2 className='text-lg'>Bought For :{token.price}</h2>
                                    <h2 className='text-lg'>Bought From :{token.seller}</h2>
                                    <h2 className='text-lg'>Maturity Date : {token.maturityDate.slice(0,10)}</h2>
                                </div>
                        
                            </div>
                        );
                    })}
                    {data.filter(item => (item.sold && (item.owner === userID))).length === 0 && (
                        <div className="col-span-full text-center py-12 bg-[#0D1321] rounded-lg border-2 border-dashed border-gray-300">
                            <Landmark className="mx-auto text-white mb-3" size={32} />
                            <p className="text-white">No Shopped tokens yet!</p>
                        </div>
                    )}
                </div>

                {/* <div className="mb-8">
                    <h1 className="text-3xl pt-5 font-bold text-purple-400">Recent Transactions</h1>
                </div>
                <div className="bg-[#0D1321] p-6 rounded-lg shadow-md text-white">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-400">
                                <th className="p-2 text-2xl">Type</th>
                                <th className="p-2 text-2xl">Token</th>
                                <th className="p-2 text-2xl">Amount</th>
                                <th className="p-2 text-2xl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentTransactions.map(tx => (
                                <tr key={tx.id} className="border-b text-xl border-gray-700">
                                    <td className={`p-2 ${tx.type.toLowerCase() === 'buy' ? 'text-green-500' : 'text-red-500'}`}>{tx.type}</td>
                                    <td className="p-2">{tx.token}</td>
                                    <td className="p-2">₹{tx.amount}</td>
                                    <td className="p-2">{tx.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}
            </div>
        </div>
    );
}

export default Dashboard;
