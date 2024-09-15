import React from 'react';

const TrySearchingFor = () => {
  const keywords = ['nike*', '*ike'];

  return (
    <div className="my-4">
      {/* About Section */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          About 159 Trademarks found for <span className="font-semibold">"nike"</span>
        </p>
      </div>

      {/* Horizontal Gray Line */}
      <hr className="border-t border-gray-300 mb-4" />

      {/* Also Try Searching For Section */}
      <div className="flex items-center space-x-4">
        <h3 className="font-semibold">Also try searching for</h3>

        <div className="flex space-x-2">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full border border-orange-300 hover:bg-orange-200 transition-all"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrySearchingFor;
