import React from 'react';
import logo from './logo.png'; // Import your logo image here

const TopBar = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);  // Update search query in App.js
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-40 h-auto" /> {/* Adjusted logo size */}
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-2/3 space-x-4">
        <input
          type="text"
          placeholder="Search Trademark Here eg. Mickey Mouse"
          onChange={handleInputChange}  // Capture input changes
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md focus:outline-none">
          Search
        </button>
      </div>
    </div>
  );
};

export default TopBar;
