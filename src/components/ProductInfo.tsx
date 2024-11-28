import React from 'react';
import { Heart } from 'lucide-react';

interface ProductInfoProps {
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: string;
  unitsLeft: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  brand,
  price,
  originalPrice,
  discount,
  rating,
  unitsLeft,
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-600 mt-1">Brand: {brand}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Heart className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex items-center gap-2 mt-4">
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="text-gray-600 ml-1">{rating}</span>
        </div>
        <span className="text-green-600">{unitsLeft} units left</span>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span className="text-2xl font-bold">${price}</span>
        <span className="text-gray-500 line-through">${originalPrice}</span>
        <span className="text-green-600">-{discount}%</span>
      </div>
      
      <p className="text-gray-500 mt-2">+ Shipping fee may vary on location</p>
    </div>
  );
};

export default ProductInfo;