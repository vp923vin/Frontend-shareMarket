import React, { useState } from 'react';

const BrokerForm = ({ isModalOpen, toggleModal, handleSave }) => {

    const [selectedBroker, setSelectedBroker] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [apiSecret, setApiSecret] = useState('');
    const [brokerId, setBrokerId] = useState('');


    const handleBrokerChange = (event) => {
        setSelectedBroker(event.target.value);
    };


    return (
        <div className="max-w-md mx-auto">

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                    <div className="bg-white p-8 rounded shadow-md z-50">
                        <h2 className="text-lg font-semibold mb-4">Broker Details</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="broker">
                                Select Broker:
                            </label>
                            <select id="broker" value={selectedBroker} onChange={handleBrokerChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Select Broker</option>
                                <option value="broker1">Broker 1</option>
                                <option value="broker2">Broker 2</option>
                                <option value="broker3">Broker 3</option>
                            </select>
                        </div>
                        

                        {selectedBroker && (
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="api-key">
                                    API Key:
                                </label>
                                <input id="api-key" type="text" placeholder="Enter API Key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="api-secret">
                                    API Secret:
                                </label>
                                <input id="api-secret" type="password" placeholder="Enter API Secret" value={apiSecret} onChange={(e) => setApiSecret(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="broker-id">
                                    Broker ID:
                                </label>
                                <input id="broker-id" type="text" placeholder="Enter Broker ID" value={brokerId} onChange={(e) => setBrokerId(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button onClick={handleSave} className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">
                                Save Broker Details 
                            </button>
                            <button onClick={toggleModal} className="ml-4 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
                                Cancel 
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BrokerForm;
