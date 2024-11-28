import React from 'react';
import { Minus, Plus, Heart, Trash2 } from 'lucide-react';

interface CartItemDetailProps {
  item: {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    quantity: number;
    size?: string;
    color?: string;
  };
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemDetail: React.FC<CartItemDetailProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="flex gap-6 py-6 border-t border-gray-100">
      <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.brand}</p>
          </div>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-gray-600"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        
        {item.size && (
          <p className="text-gray-500 text-sm mb-2">Size: {item.size}</p>
        )}
        {item.color && (
          <p className="text-gray-500 text-sm mb-4">Color: {item.color}</p>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <span className="font-semibold text-lg">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItemDetail;