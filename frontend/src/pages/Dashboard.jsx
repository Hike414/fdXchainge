import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Landmark ,ShoppingBagIcon} from 'lucide-react';
import bgImage from '../assets/BackgroundImage.png';
import axios from 'axios';
function Dashboard() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [userID, setUserID] = useState('');
    
    useEffect(() => {
        const fetchFullName = async () => {
            const saved = localStorage.getItem('username');
            if (saved) {
                try {
                    const response = await axios.get('http://localhost:3000/api/v1/user/getUser', {
                        params: {
                            username: saved,
                        },
                    });
                    console.log(response.data);
                    if (response.status === 200) {
                        setFullName(response.data.fullName);
                        setUserID(response.data.userId);
                    } else {
                        console.error('Unexpected response:', response);
                        alert('An error occurred. Please try again.');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    alert('An error occurred. Please try again.');
                }
            }
        };
        fetchFullName();
    }, []);
    
    const [fdTokens, setFdTokens] = useState([]);
    const [ffdTokens, setFFdTokens] = useState([]);
    useEffect(() => {
        const fetchFdTokens = async () => {
            if (userID) {
                try {
                    const response = await axios.get(`http://localhost:3000/api/v1/fd/bulk/${userID}`);
                    const response2 = await axios.get(`http://localhost:3000/api/v1/ffd/bulk/${userID}`);
                    if (response.status === 200) {
                        console.log(response.data.FDTokens)
                        setFdTokens(response.data.FDTokens);
                    } else {
                        console.error('Unexpected response:', response);
                        alert('An error occurred while fetching FD tokens. Please try again.');
                    }
                    if (response2.status === 200) {
                        console.log(response2.data.FFDTokens)
                        setFFdTokens(response2.data.FFDTokens);
                    } else {
                        console.error('Unexpected response:', response2);
                        alert('An error occurred while fetching FFD tokens. Please try again.');
                    }
                } catch (error) {
                    console.error('Error fetching FD tokens:', error);
                    alert('An error occurred while fetching FD tokens. Please try again.');
                }
            }
        };
        fetchFdTokens();
    },[userID]);
    
    

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-950 to-black"
            // style={{
            //     backgroundImage: `url(${bgImage})`,
            //     backgroundSize: 'cover',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: 'center',
            // }}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white">Welcome back {fullName}</h1>
                    <p className="mt-2 text-purple-400">Manage your fixed deposits and create new ones</p>
                </div>
                <div className='flex justify-between gap-4'>
                    <button
                        onClick={() => navigate('/create-fd')}
                        className="mb-8 flex items-center gap-2 cursor-pointer bg-purple-500  text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
                        >
                        <PlusCircle size={20} />
                        Create New FD
                    </button>
                    <button
                        onClick={() => navigate('/marketplace')}
                        className="mb-8 flex items-center gap-2 cursor-pointer bg-purple-500  text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
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
                                         className="ml-20 flex items-center cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed  bg-purple-500  text-white text-lg px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                                            Fractionlize
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2 text-md text-white">
                                    <p>Amount: ₹{token.amount}</p>
                                    <p>Bank: {token.bank}</p>
                                    <p>Plan: {token.plan}</p>
                                    <p>Duration: {token.duration} months</p>
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
                                        onClick={()=>navigate("/selltoken?tid="+token._id+"&uid="+userID+"&amt="+token.amount+"&dur="+token.maturityDate+"&int="+token.interestRate+"&vol="+token.volume+"&name="+token.tokenName+"&fileName="+token.image.filename+"&")}
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
            </div>
        </div>
    );
}

export default Dashboard;
