import React, { useState } from 'react';
import StatusFilter from './StatusFilter';
import OwnersFilter from './OwnerFilter';  // Updated OwnersFilter that handles API
import DisplayToggle from './DisplayToggle';
import FilterShareSort from './FilterShareSort'; // Import the Filter, Share, and Sort buttons

const FilterPanel = () => {
  const [activeTab, setActiveTab] = useState('Owners');  // Tracks the active tab (Owners, Law Firms, Attorneys)

  // Function to handle tab switching (Owners, Law Firms, Attorneys)
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-1/4 p-4 space-y-4">
      {/* Filter, Share, and Sort Buttons */}
      <FilterShareSort />
{/* 
      Tab Navigation
      <div className="flex space-x-4 border-b pb-2">
        <button
          className={`font-semibold ${activeTab === 'Owners' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => handleTabChange('Owners')}
        >
          Owners
        </button>
        <button
          className={`font-semibold ${activeTab === 'Law Firms' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => handleTabChange('Law Firms')}
        >
          Law Firms
        </button>
        <button
          className={`font-semibold ${activeTab === 'Attorneys' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => handleTabChange('Attorneys')}
        >
          Attorneys
        </button>
      </div> */}

      {/* Status Filter */}
      <StatusFilter />

      {/* Owners Filter with API Integration */}
      <OwnersFilter activeTab={activeTab} /> {/* Pass activeTab to OwnersFilter */}

      {/* Display Toggle */}
      <DisplayToggle />
    </div>
  );
};

export default FilterPanel;
