import React from 'react';
import { useSearchParams } from 'react-router-dom';
const BuyToken = () => {
    const [amount, setAmount] = React.useState('');
    const [searchParams] = useSearchParams();
    const token = searchParams.get("id");

    return (
        <div className="flex justify-center h-screen ">
            <div className="h-full flex flex-col justify-center">
                <div className=" h-min text-white max-w-md p-4 space-y-8 w-96 bg-[#0D1321] shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 ">
                        <h2 className="text-3xl font-bold text-center">{token}</h2>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="tokenAmount" className="block text-xl font-medium text-white">
                                Enter the number of tokens to buy
                            </label>
                            <input
                                type="number"
                                id="tokenAmount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className=" p-2 mt-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 border focus:ring-indigo-500 lg:text-lg"
                                placeholder="Token"
                            />
                        </div>
                        <div>
                            <label htmlFor="holdDuration" className="block text-xl font-medium text-white">
                                Enter the Hold Duration
                            </label>
                            <input
                                type="number"
                                id="holdDuration"
                                className=" p-2 mt-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 lg:text-lg"
                                placeholder="Enter duration in months"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Buy Token
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyToken;