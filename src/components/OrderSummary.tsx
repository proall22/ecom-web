import React from 'react';
import { Share2 } from 'lucide-react';

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  total,
  itemCount
}) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-semibold text-black">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="font-semibold text-black">Free</span>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-semibold text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">Including VAT</p>
          </div>
        </div>
        <button 
          className={`w-full mt-6 py-3 rounded-lg text-white transition-colors ${
            itemCount > 0 
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={itemCount === 0}
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Share */}
      <div className="mt-6">
        <p className="text-gray-600 mb-2">Share your cart</p>
        <div className="flex gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;