import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface ProductOptionsProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  sizes: string[];
  colors: { value: string; class: string }[];
  onAddToCart: () => void;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  quantity,
  setQuantity,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  sizes,
  colors,
  onAddToCart,
}) => {
  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Quantity:</label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Size:</label>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-lg border ${
                selectedSize === size
                  ? 'border-orange-500 text-orange-500'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <button className="text-sm text-purple-600 mt-2 hover:underline">
          See all size guides
        </button>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 mb-2">Color:</label>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              className={`w-8 h-8 rounded-full ${color.class} ${
                selectedColor === color.value
                  ? 'ring-2 ring-offset-2 ring-orange-500'
                  : ''
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onAddToCart}
          className="flex-1 h-12 border-2 border-gray-900 rounded-lg hover:bg-gray-50 font-medium"
        >
          Add to cart
        </button>
        <button className="flex-1 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium">
          Buy now
        </button>
      </div>

      <p className="text-green-600 text-center mt-4">
        Pickup & Pay on collection available
      </p>
    </div>
  );
};

export default ProductOptions;