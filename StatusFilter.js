import React, { useState } from 'react';

const StatusFilter = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="font-semibold text-lg mb-4">Status</h3>
      <div className="flex flex-wrap gap-3">
        <button
          className={`flex items-center px-4 py-2 rounded-full border ${selectedStatus === 'All' ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => handleStatusClick('All')}
        >
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          All
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full border ${selectedStatus === 'Registered' ? 'border-green-500' : 'border-gray-300'}`}
          onClick={() => handleStatusClick('Registered')}
        >
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          Registered
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full border ${selectedStatus === 'Pending' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleStatusClick('Pending')}
        >
          <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          Pending
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full border ${selectedStatus === 'Abandoned' ? 'border-red-500' : 'border-gray-300'}`}
          onClick={() => handleStatusClick('Abandoned')}
        >
          <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          Abandoned
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-full border ${selectedStatus === 'Others' ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => handleStatusClick('Others')}
        >
          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          Others
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;
