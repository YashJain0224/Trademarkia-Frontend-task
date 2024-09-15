import React, { useState } from 'react';

const FilterPanel = () => {
  const [activeTab, setActiveTab] = useState('Owners'); // State to track the active tab
  const owners = ['Tesla, Inc.', 'LEGALFORCE RAPC.', 'SpaceX Inc.'];
  const lawFirms = ['Law Firm A', 'Law Firm B', 'Law Firm C'];
  const attorneys = ['Attorney A', 'Attorney B', 'Attorney C'];

  // Function to render the current tab's content
  const renderTabContent = () => {
    let data = [];
    if (activeTab === 'Owners') data = owners;
    else if (activeTab === 'Law Firms') data = lawFirms;
    else if (activeTab === 'Attorneys') data = attorneys;

    return (
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input type="checkbox" id={item} className="w-4 h-4" />
            <label htmlFor={item} className="text-sm text-gray-700">
              {item}
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2">
        <button
          className={`font-semibold ${activeTab === 'Owners' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Owners')}
        >
          Owners
        </button>
        <button
          className={`font-semibold ${activeTab === 'Law Firms' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Law Firms')}
        >
          Law Firms
        </button>
        <button
          className={`font-semibold ${activeTab === 'Attorneys' ? 'text-black' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Attorneys')}
        >
          Attorneys
        </button>
      </div>

      {/* Search Input */}
      <div className="mt-4">
        <input
          type="text"
          placeholder={`Search ${activeTab}`}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Content based on active tab */}
      {renderTabContent()}
    </div>
  );
};

export default FilterPanel;


// import React, { useState, useEffect } from 'react';

// const OwnersFilter = ({ activeTab }) => {
//   const [filterOptions, setFilterOptions] = useState([]);  // Tracks the options for the active tab
//   const [searchQuery, setSearchQuery] = useState('');  // Tracks the search input
//   const [loading, setLoading] = useState(false);  // Loading state for API calls
//   const [error, setError] = useState(null);  // Error state for API calls

//   // Function to handle API request based on active tab and search query
//   const fetchFilterOptions = async () => {
//     setLoading(true);
//     setError(null);

//     let apiURL = '';

//     // Change the API URL based on the active tab
//     if (activeTab === 'Owners') {
//       apiURL = `https://vit-tm-task.api.trademarkia.app/api/v3/us/owners?query=${searchQuery}`;
//     } else if (activeTab === 'Law Firms') {
//       apiURL = `https://vit-tm-task.api.trademarkia.app/api/v3/us/lawfirms?query=${searchQuery}`;
//     } else if (activeTab === 'Attorneys') {
//       apiURL = `https://vit-tm-task.api.trademarkia.app/api/v3/us/attorneys?query=${searchQuery}`;
//     }

//     try {
//       const response = await fetch(apiURL);
//       const data = await response.json();
//       setFilterOptions(data);  // Set the fetched data as filter options
//     } catch (err) {
//       setError('Failed to fetch data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // UseEffect to trigger API call when searchQuery changes
//   useEffect(() => {
//     if (searchQuery) {
//       fetchFilterOptions();
//     }
//   }, [searchQuery, activeTab]);

//   return (
//     <div className="mt-4">
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder={`Search ${activeTab}`}
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded-md"
//       />

//       {/* Display Loading, Error, or Filter Options */}
//       <div className="mt-4">
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         {!loading && !error && filterOptions.length === 0 && <p>No {activeTab} found.</p>}
//         {filterOptions.length > 0 && (
//           <ul>
//             {filterOptions.map((option, index) => (
//               <li key={index} className="flex items-center space-x-2 mb-2">
//                 <input type="checkbox" id={option.name} className="w-4 h-4" />
//                 <label htmlFor={option.name} className="text-sm text-gray-700">
//                   {option.name}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OwnersFilter;
