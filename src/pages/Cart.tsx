import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import DeliveryInfo from '../components/DeliveryInfo';
import ProductTabs from '../components/ProductTabs';
import SimilarItems from '../components/SimilarItems';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [selectedImages, setSelectedImages] = useState<{ [key: number]: string }>({});
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});

  const productDescription = [
    'Available in a wide range of colors, patterns, and patterns and themes to appeal to kids',
    'Rubber outsoles with good traction to prevent slips and falls',
    'Built-in arch support to help maintain healthy foot development',
    'Soft insoles and adequate padding to support growing feet'
  ];

  const handleImageSelect = (itemId: number, image: string) => {
    setSelectedImages(prev => ({ ...prev, [itemId]: image }));
  };

  const handleSizeSelect = (itemId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [itemId]: size }));
  };

  const handleColorSelect = (itemId: number, color: string) => {
    setSelectedColors(prev => ({ ...prev, [itemId]: color }));
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  const handleBuyAll = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <Link to="/" className="text-gray-600">Home</Link>
          <span className="text-gray-400">›</span>
          <Link to="/kids" className="text-gray-600">Kids</Link>
          <span className="text-gray-400">›</span>
          <Link to="/shoes" className="text-gray-600">Shoes</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800">Sneakers</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length > 0 && (
              <div className="flex justify-end">
                <button
                  onClick={handleBuyAll}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Buy All Items
                </button>
              </div>
            )}
            
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Product Images */}
                  <div>
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 mb-4">
                      <img
                        src={selectedImages[item.id] || item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {Array(4).fill(item.image).map((thumb, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleImageSelect(item.id, thumb)}
                          className="aspect-square rounded-lg overflow-hidden bg-gray-50 hover:opacity-80 transition-opacity"
                        >
                          <img
                            src={thumb}
                            alt={`${item.name} view ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                    <div className="mt-6">
                      <p className="text-gray-600 mb-2">Share this product</p>
                      <div className="flex gap-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83z"/>
                          </svg>
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">{item.name}</h1>
                        <p className="text-gray-600">Brand: {item.brand}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Heart className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-600">1k+ rating</span>
                      <span className="text-green-600">• 50 units left</span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl font-bold">${item.price}</span>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Quantity:</label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Size:</label>
                      <div className="flex gap-3">
                        {['20', '25', '32', '37'].map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(item.id, size)}
                            className={`w-12 h-12 rounded-lg border ${
                              selectedSizes[item.id] === size
                                ? 'border-orange-500 text-orange-500'
                                : 'border-gray-200'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-gray-700 mb-2">Color:</label>
                      <div className="flex gap-3">
                        {[
                          { value: 'pink', class: 'bg-pink-300' },
                          { value: 'blue', class: 'bg-blue-500' },
                          { value: 'red', class: 'bg-red-500' },
                          { value: 'black', class: 'bg-black' }
                        ].map((color) => (
                          <button
                            key={color.value}
                            onClick={() => handleColorSelect(item.id, color.value)}
                            className={`w-8 h-8 rounded-full ${color.class} ${
                              selectedColors[item.id] === color.value
                                ? 'ring-2 ring-offset-2 ring-orange-500'
                                : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="flex-1 h-12 border-2 border-gray-900 rounded-lg hover:bg-gray-50"
                      >
                        Remove
                      </button>
                      <button 
                        onClick={handleBuyNow}
                        className="flex-1 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                      >
                        Buy now
                      </button>
                    </div>

                    <p className="text-green-600 text-center mt-4">
                      Pickup & Pay on collection available
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Info */}
          <DeliveryInfo />
        </div>

        {/* Product Description Tabs */}
        <div className="mt-6">
          <ProductTabs description={productDescription} />
        </div>

        {/* Similar Items */}
        <SimilarItems />
      </div>
    </div>
  );
};

export default Cart;