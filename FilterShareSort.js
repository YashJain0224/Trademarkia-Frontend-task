import React from 'react';
import { FaFilter, FaShareAlt, FaSort } from 'react-icons/fa'; // Using Font Awesome Icons

const FilterShareSort = () => {
  return (
    <div className="flex space-x-4 my-4">
      {/* Filter Button with Label */}
      <button className="flex items-center space-x-2 p-3 bg-white-100 rounded-full shadow-md hover:bg-gray-200 transition-all">
        <FaFilter className="white" />
        <span className="text-gray-500">Filter</span>
      </button>

      {/* Share Button */}
      <button className="flex items-center space-x-2 p-3 bg-white-100 rounded-full shadow-md hover:bg-gray-200 transition-all">
        <FaShareAlt className="white" />
        
      </button>

      {/* Sort Button */}
      <button className="flex items-center space-x-2 p-3 bg-white-100 rounded-full shadow-md hover:bg-gray-200 transition-all">
        <FaSort className="white" />
        
      </button>
    </div>
  );
};

export default FilterShareSort;
