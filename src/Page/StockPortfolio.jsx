import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PieChart from '../components/myportfolio/PieChart';

const StockPortfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [portfolioType, setPortfolioType] = useState('equity');
    const [newEntry, setNewEntry] = useState({
        entryDate: '',
        stock: '',
        quantity: '',
        entryPrice: '',
        LTP: '',
        todayGainPercent: '',
        unrealizedGain: '',
        currentValue: '',
        exitPrice: '',
        exitDate: '',
        amountInvested: '',
        totalDays: '',
        cashMargin: ''
    });

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handlePortfolioTypeChange = (e) => {
        setPortfolioType(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry({ ...newEntry, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newEntry);

        setNewEntry({
            entryDate: '',
            stock: '',
            quantity: '',
            entryPrice: '',
            LTP: '',
            todayGainPercent: '',
            unrealizedGain: '',
            currentValue: '',
            exitPrice: '',
            exitDate: '',
            amountInvested: '',
            totalDays: '',
            cashMargin: ''
        });
        // Close modal
        setIsOpen(false);
    };





    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];







    return (


        <>

            <section className="px-2 pt-3" >
                <h4 className='pl-2'> Trade Diary</h4>
                <div className="container-fluid">
                    <div className="flex justify-between items-center">
                        <div className='flex gap-2 items-center text-base'>
                            <button onClick={toggleModal} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Add New
                            </button>


                            <div>
                                <label htmlFor="portfolioType" className="block text-sm font-medium text-gray-700">
                                    Portfolio Type
                                </label>
                                <select
                                    id="portfolioType"
                                    name="portfolioType"
                                    className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    value={portfolioType}
                                    onChange={handlePortfolioTypeChange}
                                >
                                    <option value="equity">Equity</option>
                                    <option value="options">Options</option>
                                </select>
                            </div>

                        </div>

                        <div className='flex gap-3 '>

                            <button
                                className="bg-blue-900 text-base hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Reports</button>


                            <button
                                className="bg-blue-900 text-base hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                My Portfolio Summary</button>

                        </div>




                        <div className='flex items-center gap-3 '>
                            <Link
                                to="/dashboard"
                                className="bg-blue-900 h-9 rounded text-sm flex items-center px-3 text-white   "
                            >
                                Home
                            </Link>
                            <img className='market_profile' src="public/images/profilee.png" alt="profile" />
                        </div>
                    </div>
                </div>
            </section >


            <div className=" container-fluid mx-auto mt-10">

                <div className='grid grid-cols-[70%_auto] gap-2 '>

                    <div className="overflow-x-auto h-fit">
                        <table className="table-auto min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Entry date</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Stock</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Quantity</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Entry Price</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">LTP</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Today's gain%</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Unrealized gain</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Current Value</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Exit Price</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Exit Date</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Amount Invested</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Total Days</th>
                                    <th className="px-2 text-sm font-bold capitalize border-r  py-2 bg-blue-300 border border-gray-300">Cash Margin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Table rows will go here */}
                            </tbody>
                        </table>
                    </div>


                    <div className='h-fit'>

                        <div className='grid  grid-cols-2 gap-4 '>
                            <div className='bg-sky-400 shadow flex flex-col  text-center p-2'>
                                <span className=''> Total Invested Value</span>
                                <span className=''> 1,00,000</span>
                            </div>

                            <div className='bg-sky-400 shadow flex flex-col  text-center p-2'>
                                <span className=''> Total gain %</span>
                                <span className=''> 40%</span>
                            </div>

                            <div className='bg-sky-400  shadow flex flex-col  text-center p-2'>
                                <span className=''> Realized gain </span>
                                <span className=''> 50,000</span>
                            </div>


                            <div className='bg-sky-400 shadow  flex flex-col  text-center p-2'>
                                <span className=''> Day Change %</span>
                                <span className=''>2%</span>
                            </div>
                            <div className='bg-sky-400 shadow  flex flex-col  text-center p-2'>
                                <span className=''> Unrealized gain </span>
                                <span className=''> 50,000</span>
                            </div>


                            <div className='bg-sky-400 shadow flex flex-col  text-center p-2'>
                                <span className=''>Total Trades </span>
                                <span className='font-extrabold text-red-600'>Lossing</span>
                            </div>

                        </div>

                        <div className='mt-3'>
                        <PieChart data={data} />

                        </div>
                    </div>


                </div>




                {/* Modal */}
                {isOpen && (
                    <div className=" fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen ">
                            <div className="bg-white rounded shadow-md p-8 w-2/5">
                                <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="entryDate" className="block text-sm font-medium text-gray-700 mb-1">Entry Date</label>
                                        <input
                                            type="text"
                                            id="entryDate"
                                            name="entryDate"
                                            value={newEntry.entryDate}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="YYYY-MM-DD"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                                        <input
                                            type="text"
                                            id="stock"
                                            name="stock"
                                            value={newEntry.stock}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Stock Symbol"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                                        <input
                                            type="text"
                                            id="quantity"
                                            name="quantity"
                                            value={newEntry.quantity}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Quantity"
                                        />
                                    </div>
                                    {/* Include other input fields similarly */}


                                    <div className='flex  justify-end gap-2'>
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                        >
                                            Submit
                                        </button>

                                        <button
                                            type=""
                                            onClick={toggleModal}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                                        >
                                            Cancel
                                        </button>


                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                )}

                {/* 
                <p>Trade</p>
                <img src="public/images/structure.png" alt="" /> */}
            </div>



        </>


    );
};

export default StockPortfolio;
