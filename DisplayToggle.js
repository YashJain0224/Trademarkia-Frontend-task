import React, { useState } from 'react';

const DisplayToggle = () => {
  const [view, setView] = useState('Grid View'); // Default view

  return (
    <div className="p-4 bg-white shadow-md rounded-md mt-4">
      <h3 className="font-semibold">Display</h3>
      <div className="flex mt-4">
        <button
          onClick={() => setView('Grid View')}
          className={`px-6 py-2 rounded-l-full border ${
            view === 'Grid View' ? 'bg-gray-300' : 'bg-gray-100'
          }`}
        >
          Grid View
        </button>
        <button
          onClick={() => setView('List View')}
          className={`px-6 py-2 rounded-r-full border ${
            view === 'List View' ? 'bg-gray-300' : 'bg-gray-100'
          }`}
        >
          List View
        </button>
      </div>
    </div>
  );
};

export default DisplayToggle;
