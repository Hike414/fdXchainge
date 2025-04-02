import React from "react";
import  {useNavigate, useSearchParams}  from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
const SellToken = () => {

    const [tokens, setTokens] = React.useState(0);
    const [interestRate, setInterestRate] = React.useState("");
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const tid = searchParams.get("tid");
    const uid = searchParams.get("uid");
    const amt = searchParams.get("amt");
    const dur = searchParams.get("dur");
    const int = searchParams.get("int");
    const name = searchParams.get("name");
    const vol =  searchParams.get("vol");

    const  handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/v1/marketplace/list-token", {
                tokenID: tid,
                tokenName: name.toString(),
                price: tokens * parseInt(amt),
                RTI: interestRate,
                seller: uid,
                maturityDate: dur,
            });
            const response2 = await axios.put("http://localhost:3000/api/v1/ffd//update-ffd/"+uid+"/"+tid+"/"+tokens);
            const response3 = await axios.put("http://localhost:3000/api/v1/ffd//update-ffd/"+uid+"/"+tid);
            navigate('/sellsuccess');
            console.log('Token Listed successfully:', response.data, response2.data,response3.data);
        } catch (error) {
            console.error('Error listing token:', error.response ? error.response.data : error.message);
        }
    }
    return (
        <div className="flex justify-center h-screen">
            <div className="h-full flex flex-col justify-center">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="mb-6 flex items-center gap-2 text-2xl text-purple-500 hover:text-purple-600 cursor-pointer"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Dashboard</span>
                </button>
                <div className="h-min text-white max-w-md p-4 space-y-8 w-120 bg-[#0D1321] shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-3xl font-bold text-center">List your tokens on the marketplace</h2>
                        {/* <p className="text-md font-bold text-center">List your tokens on the marketplace</p> */}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-xl font-bold ">Selected Token : {name}  </p>
                    </div>
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="volume"
                                className="block text-xl font-medium text-white"
                            >
                                How many tokens do you want to Sell?
                            </label>
                            <input
                                type="number"
                                id="volume"
                                min = {1}
                                max = {10}
                                name="volume"
                                onChange={(e) => setTokens(e.target.value)}
                                className="p-2 mt-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 lg:text-lg"
                                placeholder="Enter Volume of tokens"
                            />
                            <p className="text-s text-purple-500 mt-2">
                               You have {vol} Tokens  
                            </p>
                        </div>
                        <div>
                            <label
                                htmlFor="int"
                                className="block text-xl font-medium text-white"
                            >
                                Propose Your Interest Rate
                            </label>
                            <input
                                type="Number"
                                id="int"
                                name="int"
                                min = {int}
                                step={0.01} 
                                onChange={(e) => setInterestRate(e.target.value)}
                                className="p-2 mt-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 lg:text-lg"
                                placeholder="Interest Rate"
                            />
                            <p className="text-s text-purple-500 mt-2"> min interest {int}</p>
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="userId"
                            >
                            </label>
                            <input
                                type="string"
                                id="UserId"
                                name="UserId"
                                value = {0}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="FDID"
                            >
                            </label>
                            <input
                                type="string"
                                id="FDID"
                                name="FDID"
                                value={0}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="amount"
                            >
                            </label>
                            <input
                                type="string"
                                id="ampunt"
                                name="amount"
                                value={0}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="dur"
                            >
                            </label>
                            <input
                                type="string"
                                id="dur"
                                name="dur"
                                value={0}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="int"
                            >
                            </label>
                            <input
                                type="string"
                                id="int"
                                name="int"
                                value={0}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            List Token
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SellToken;