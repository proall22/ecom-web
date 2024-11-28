import React, { useState } from 'react';

interface ProductTabsProps {
  description: string[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({ description }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex gap-8 border-b mb-6">
        {['Overview', 'Description', 'Warranty', 'Reviews'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 ${
              activeTab === tab
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-gray-600">
        <ul className="list-disc pl-6 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductTabs;