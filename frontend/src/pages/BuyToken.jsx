import {React, useState, useEffect} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
const BuyToken = () => {
    const [UserId, setUserId] = useState('');
    const [searchParams] = useSearchParams();
    const Navigate = useNavigate();
    const token = searchParams.get("id");
    const int = searchParams.get("int");
    const seller = searchParams.get("seller");
    const maturityDate = searchParams.get("maturityDate");
    const fileName = searchParams.get("fileName");
    const tokenId = searchParams.get("tokenId")
    
    useEffect(() => {
        const fetchUserId= async () => {
            const saved = localStorage.getItem('username');
            if (saved) {
                try {
                    const response = await axios.get('http://localhost:3000/api/v1/user/getUser', {
                        params: { username: saved },
                    });
                    if (response.status === 200) {
                        setUserId(response.data.userId);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };
        fetchUserId();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put("http://localhost:3000/api/v1/marketplace/update-listed-token/" + UserId + "/" + tokenId);
            if (response.status === 200 || response.status === 201 ) {
                console.log('Token purchase successful:', response.data);
                Navigate("/buysuccess");
            } else {
            console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error during token purchase:', error);
        }
        
    }


    return (
        <div className="flex justify-center h-screen ">
            <div className="h-full flex flex-col justify-center">
                <div className=" h-min text-white max-w-md p-4 space-y-8 w-150 bg-[#0D1321] shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 ">
                        <h2 className=" mb-10 text-4xl font-bold text-center">Summary</h2>
                        <img
                            src={"/uploads/" + fileName}
                            alt={token}
                            className="w-100 h-50 rounded-md border-2 "
                        />
                        <h2 className="text-2xl font-bold text-center">Selected Token : {token}</h2>
                        <h2 className="text-2xl font-bold text-center">Rate of Interest: {int}</h2>
                        <h2 className="text-2xl font-bold text-center">Seller Address : {seller}</h2>
                        <h2 className="text-2xl font-bold text-center">Maturity Date : {maturityDate}</h2>
                    </div>
                    <form className="space-y-4">
                        
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="w-full bg-green-500 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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