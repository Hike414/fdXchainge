import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Landmark } from 'lucide-react';
import bgImage from '../assets/BackgroundImage.png';

function CreateFD() {
    const navigate = useNavigate();
    const [selectedBank, setSelectedBank] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedBank || !selectedPlan || !amount || !duration) return;

        const newToken = {
            id: crypto.randomUUID(),
            bankId: selectedBank.id,
            planId: selectedPlan.id,
            amount: parseFloat(amount),
            duration: parseInt(duration),
            createdAt: new Date(),
            maturityDate: new Date(Date.now() + parseInt(duration) * 30 * 24 * 60 * 60 * 1000),
        };

        const existingTokens = JSON.parse(localStorage.getItem('fdTokens') || '[]');
        localStorage.setItem('fdTokens', JSON.stringify([...existingTokens, newToken]));
        navigate('/dashboard');
    };

    const banks = [
        {
            id: 'hdfc',
            name: 'HDFC Bank',
            plans: [
                {
                    id: 'hdfc-basic',
                    name: 'Basic FD',
                    interestRate: 5.5,
                    minDuration: 6,
                    maxDuration: 12,
                    minAmount: 10000,
                },
                {
                    id: 'hdfc-premium',
                    name: 'Premium FD',
                    interestRate: 6.5,
                    minDuration: 12,
                    maxDuration: 24,
                    minAmount: 25000,
                },
            ],
        },
        {
            id: 'sbi',
            name: 'State Bank of India',
            plans: [
                {
                    id: 'sbi-regular',
                    name: 'Regular FD',
                    interestRate: 5.75,
                    minDuration: 6,
                    maxDuration: 18,
                    minAmount: 5000,
                },
                {
                    id: 'sbi-gold',
                    name: 'Gold FD',
                    interestRate: 6.75,
                    minDuration: 12,
                    maxDuration: 36,
                    minAmount: 50000,
                },
            ],
        },
    ];

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="container mx-auto px-4 py-8">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="mb-6 flex items-center gap-2 text-2xl text-purple-500 hover:text-purple-600 cursor-pointer"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Dashboard</span>
                </button>

                <div className="max-w-2xl mx-auto bg-[#0D1321] rounded-xl shadow-md p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Landmark className="text-blue-600" size={28} />
                        <h1 className="text-2xl font-bold text-white">Create New Fixed Deposit</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Select Bank
                            </label>
                            <select
                                className="w-full p-3 border dark:bg-[#0D1321] dark:border-gray-300 border-white rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                                value={selectedBank?.id || ''}
                                onChange={(e) => {
                                    const bank = banks.find((b) => b.id === e.target.value);
                                    setSelectedBank(bank || null);
                                    setSelectedPlan(null);
                                }}
                            >
                                <option value="">Choose a bank</option>
                                {banks.map((bank) => (
                                    <option key={bank.id} value={bank.id}>
                                        {bank.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {selectedBank && (
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Select Plan
                                </label>
                                <select
                                    className="w-full p-3 border  dark:bg-[#0D1321] dark:border-gray-300 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                                    value={selectedPlan?.id || ''}
                                    onChange={(e) => {
                                        const plan = selectedBank.plans.find((p) => p.id === e.target.value);
                                        setSelectedPlan(plan || null);
                                    }}
                                >
                                    <option value="">Choose a plan</option>
                                    {selectedBank.plans.map((plan) => (
                                        <option key={plan.id} value={plan.id}>
                                            {plan.name} ({plan.interestRate}% p.a.)
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {selectedPlan && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Amount (₹)
                                    </label>
                                    <input
                                        type="number"
                                        min={selectedPlan.minAmount}
                                        step="1000"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                                        placeholder={`Minimum ₹${selectedPlan.minAmount}`}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Duration (months)
                                    </label>
                                    <select
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="w-full p-3 border dark:bg-[#0D1321] dark:border-gray-300 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                                    >
                                        <option value="">Select duration</option>
                                        {[6, 12, 18, 24, 30, 36].map((d) => (
                                            <option key={d} value={d}>
                                                {d} months
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            disabled={!selectedBank || !selectedPlan || !amount || !duration}
                            className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Create FD
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateFD;
