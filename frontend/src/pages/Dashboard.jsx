import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Landmark ,ShoppingBagIcon} from 'lucide-react';
import bgImage from '../assets/BackgroundImage.png';
import axios from 'axios';
function Dashboard() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    
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
    const [fdTokens, setFdTokens] = useState(() => {
        const saved = localStorage.getItem('fdTokens');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('fdTokens', JSON.stringify(fdTokens));
    }, [fdTokens]);

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
                        const adjustedAmount = (token.amount * (1 + (token.interestRate / 100) * (token.duration / 12))).toFixed(2);
                        return (
                            <div
                                key={token.id}
                                className="bg-[#0D1321] p-6 rounded-lg shadow-md "
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Landmark className="text-purple-600" size={24} />
                                    <h3 className="text-lg  text-white font-semibold">FD Token #{token.id.slice(0, 8)}</h3>
                                    <div>
                                        <button onClick={()=>
                                            navigate("/fractionalise")
                                        }
                                         className="ml-20 flex items-center cursor-pointer bg-purple-500  text-white text-lg px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                                            Fractionlize
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2 text-md text-white">
                                    <p>Amount: ₹{token.amount.toLocaleString()}</p>
                                    <p>Duration: {token.duration} months</p>
                                    <p>Created: {new Date(token.createdAt).toLocaleDateString()}</p>
                                    <p>Maturity: {new Date(token.maturityDate).toLocaleDateString()}</p>
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
            </div>
        </div>
    );
}

export default Dashboard;
