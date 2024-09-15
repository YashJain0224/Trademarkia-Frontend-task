import React from 'react';
import TrademarkItem from './TrademarkItem';

const TrademarkList = () => {
  // Create an array with 12 trademark items
  const trademarks = new Array(12).fill({
    mark: 'Meta Logo',
    owner: 'Facebook Inc.',
    trademarkID: '88713620',
    dateFiled: '26th Jan 2020',
    status: 'Live/Registered',
    statusDate: '26 Jun 2020',
    expiryDate: '26 Dec 2027',
    classDescription: 'Computer services, Social Media, Networking, Virtual Communities, Community',
    classInfo: ['Class 45', 'Class 8', 'Class 8'],
  });

  return (
    <div className="w-full bg-white rounded-md shadow-md p-4">
      {/* Table Header */}
      <div className="flex justify-between border-b pb-4 mb-4">
        <div className="w-1/4 text-left font-semibold">Mark</div>
        <div className="w-1/4 text-left font-semibold">Details</div>
        <div className="w-1/4 text-left font-semibold">Status</div>
        <div className="w-1/4 text-left font-semibold">Class/Description</div>
      </div>

      {/* Trademark Items */}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} {...trademark} />
      ))}
    </div>
  );
};

export default TrademarkList;
