import React from 'react';
import { FaSyncAlt, FaEllipsisH } from 'react-icons/fa';

const TrademarkItem = ({ mark, owner, trademarkID, dateFiled, status, statusDate, expiryDate, classDescription, classInfo }) => {
  return (
    <div className="flex justify-between items-center py-6 border-b">
      {/* Mark (Image) */}
      <div className="w-1/4 flex items-center space-x-4">
        <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/100"
            alt="Trademark"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Details */}
      <div className="w-1/4">
        <h3 className="font-semibold text-black">{mark}</h3>
        <p className="text-sm text-gray-500">{owner}</p>
        <p className="text-sm font-semibold text-gray-700 mt-2">{trademarkID}</p>
        <p className="text-sm text-gray-500">{dateFiled}</p>
      </div>

      {/* Status */}
      <div className="w-1/4 text-left flex flex-col justify-center">
        <div className="mb-2">
          <p className="font-semibold flex items-center">
            <span className="text-green-500 mr-2">&#x2022;</span>
            <span className="text-green-500">{status}</span>
          </p>
          <p className="text-sm text-gray-500">on {statusDate}</p>
        </div>
        <div className="text-sm text-gray-500 mt-2 flex items-center space-x-2">
          <FaSyncAlt className="text-red-500" />
          <span>{expiryDate}</span>
        </div>
      </div>

      {/* Class/Description */}
      <div className="w-1/4 text-left">
        <p className="text-sm text-gray-600">{classDescription}</p>
        <div className="flex justify-start items-center space-x-2 text-sm mt-2">
          {classInfo.map((cls, index) => (
            <span key={index} className="flex items-center space-x-1">
              {/* Icon and Class */}
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path></svg>
              <span className="text-gray-600">{cls}</span>
            </span>
          ))}
          {/* Ellipsis with gray background */}
          <div className="bg-gray-200 p-2 rounded-full flex items-center justify-center">
            <FaEllipsisH className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrademarkItem;
