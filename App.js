import React, { useState, useEffect } from 'react';
import TopBar from './components/SearchBar';  // Search bar at the top
import TrademarkList from './components/TrademarkList';  // List to display search results
import FilterPanel from './components/FilterPanel';  // Filters for Owners, Law Firms, etc.
import TrySearchingFor from './components/TrySearchingFor';  // "Also Try Searching For" section

function App() {
  const [searchQuery, setSearchQuery] = useState('');  // Search query input state
  const [results, setResults] = useState([]);  // Search results from the API
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Call the handleSearch function when searchQuery is updated
  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://vit-tm-task.api.trademarkia.app/api/v3/us?query=${searchQuery}`);
        const data = await response.json();
        setResults(data);  // Store the search results
      } catch (err) {
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  return (
    <div>
      {/* Top Search Bar */}
      <TopBar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery to capture input */}

      <div className="p-8">
        {/* About Trademarks and Try Searching For */}
        <div className="mb-4">
          <TrySearchingFor />
        </div>

        {/* Display Loading, Error, or Trademark List */}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && results.length === 0 && <p>No results found.</p>}

        <div className="flex justify-between">
          {/* Trademark List */}
          <TrademarkList results={results} />  {/* Pass search results to TrademarkList */}

          {/* Filter Panel */}
          <FilterPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
