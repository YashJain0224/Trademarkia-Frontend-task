import React from 'react';

const TrademarkCard = () => {
  return (
    <div className="p-4 border rounded-md shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 flex justify-center items-center">
          <span className="text-gray-500">No Image</span>
        </div>
        <div>
          <h3 className="font-bold">Meta Logo</h3>
          <p>Facebook Inc.</p>
          <p className="text-sm text-gray-500">88713620 - 26th Jan 2020</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-green-500 font-bold">Live/Registered</p>
        <p className="text-sm">on 26 Jun 2020</p>
        <p className="text-xs text-gray-500">Expires on 26 Dec 2027</p>
      </div>
    </div>
  );
};

export default TrademarkCard;
