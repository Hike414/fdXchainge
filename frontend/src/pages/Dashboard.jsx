import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Landmark } from 'lucide-react';
import bgImage from '../assets/BackgroundImage.png';

function Dashboard() {
    const navigate = useNavigate();
    const [fdTokens, setFdTokens] = useState(() => {
        const saved = localStorage.getItem('fdTokens');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('fdTokens', JSON.stringify(fdTokens));
    }, [fdTokens]);

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-purple-400">Welcome to Your FD Dashboard</h1>
                    <p className="mt-2 text-purple-400">Manage your fixed deposits and create new ones</p>
                </div>

                <button
                    onClick={() => navigate('/create-fd')}
                    className="mb-8 flex items-center gap-2 cursor-pointer bg-purple-500  text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                    <PlusCircle size={20} />
                    Create New FD
                </button>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {fdTokens.map((token) => (
                        <div
                            key={token.id}
                            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Landmark className="text-purple-600" size={24} />
                                <h3 className="text-lg  text-black-400 font-semibold">FD Token #{token.id.slice(0, 8)}</h3>
                            </div>
                            <div className="space-y-2 text-black-600">
                                <p>Amount: ₹{token.amount.toLocaleString()}</p>
                                <p>Duration: {token.duration} months</p>
                                <p>Created: {new Date(token.createdAt).toLocaleDateString()}</p>
                                <p>Maturity: {new Date(token.maturityDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                    {fdTokens.length === 0 && (
                        <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                            <Landmark className="mx-auto text-gray-400 mb-3" size={32} />
                            <p className="text-gray-500">No FD tokens yet. Create your first FD!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
