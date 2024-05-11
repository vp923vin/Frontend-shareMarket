import React, { useState } from 'react';

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
    // Handle form submission logic here
    console.log(newEntry);
    // Reset form fields
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

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Entry date</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Stock</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Quantity</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Entry Price</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">LTP</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Today's gain%</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Unrealized gain</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Current Value</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Exit Price</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Exit Date</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Amount Invested</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Total Days</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300">Cash Margin</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows will go here */}
          </tbody>
        </table>
      </div>

      <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Add New
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded shadow-md p-8">
              <h2 className="text-xl font-bold mb-4">Add New Entry</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="entryDate" className="block text-sm font-medium text-gray-700">Entry Date</label>
                  <input type="text" id="entryDate" name="entryDate" value={newEntry.entryDate} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
                  <input type="text" id="stock" name="stock" value={newEntry.stock} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                  <input type="text" id="quantity" name="quantity" value={newEntry.quantity} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                {/* Include other input fields similarly */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </form>
              <button onClick={toggleModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-2">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown for Portfolio Type */}
      <div>
        <label htmlFor="portfolioType" className="block text-sm font-medium text-gray-700">
          Portfolio Type
        </label>
        <select
          id="portfolioType"
          name="portfolioType"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={portfolioType}
          onChange={handlePortfolioTypeChange}
        >
          <option value="equity">Equity</option>
          <option value="options">Options</option>
        </select>
      </div>
    </div>
  );
};

export default StockPortfolio;
