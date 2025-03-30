import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Landmark } from 'lucide-react';

function Dashboard() {
    const [fdTokens, setFdTokens] = useState(() => {
        const saved = localStorage.getItem('fdTokens');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('fdTokens', JSON.stringify(fdTokens));
    }, [fdTokens]);

    return (
        <div className="min-h-screen bg-[#4169E1] flex items-center justify-center mt-6">
            <div className="container mx-auto px-4 py-8 text-[#4169E1] bg-white rounded-lg shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">Welcome to Your FD Dashboard</h1>
                    <p className="mt-2">Manage your fixed deposits and create new ones</p>
                </div>

                <div className="flex justify-center mb-8">
                    <Link
                        to="/create-fd"
                        className="flex items-center gap-2 cursor-pointer bg-[#4169E1] text-white px-6 py-3 rounded-lg hover:bg-[#3654B3] transition-colors"
                    >
                        <PlusCircle size={20} />
                        Create New FD
                    </Link>
                </div>

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">My FD Tokens</h1>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {fdTokens.map((token) => (
                        <div
                            key={token.id}
                            className="bg-[#4169E1] text-white p-6 rounded-lg shadow-md border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Landmark className="text-white" size={24} />
                                <h3 className="text-lg font-semibold">FD Token #{token.id.slice(0, 8)}</h3>
                                <button className="ml-auto bg-white text-[#4169E1] px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                    Fractionalize
                                </button>
                            </div>
                            <div className="space-y-2">
                                <p>Amount: ₹{token.amount.toLocaleString()}</p>
                                <p>Duration: {token.duration} months</p>
                                <p>Created: {new Date(token.createdAt).toLocaleDateString()}</p>
                                <p>Maturity: {new Date(token.maturityDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                    {fdTokens.length === 0 && (
                        <div className="col-span-full text-center py-12 bg-[#4169E1] text-white rounded-lg border-2 border-dashed border-gray-300">
                            <Landmark className="mx-auto text-white mb-3" size={32} />
                            <p>No FD tokens yet. Create your first FD!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
