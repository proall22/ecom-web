import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductOptions from '../components/ProductOptions';
import DeliveryInfo from '../components/DeliveryInfo';
import { useCart } from '../context/CartContext';

const product = {
  id: 2,
  name: 'Burberry shine',
  brand: 'FENDI',
  price: 150,
  originalPrice: 300,
  discount: 50,
  mainImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
  thumbnails: [
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a'
  ],
  rating: '1k+ rating',
  unitsLeft: 50,
  description: [
    'Available in a wide range of colors, patterns, and patterns and themes to appeal to kids',
    'Rubber outsoles with good traction to prevent slips and falls',
    'Built-in arch support to help maintain healthy foot development',
    'Soft insoles and adequate padding to support growing feet'
  ],
  sizes: ['20', '25', '32', '37'],
  colors: [
    { value: 'pink', class: 'bg-pink-300' },
    { value: 'blue', class: 'bg-blue-500' },
    { value: 'red', class: 'bg-red-500' },
    { value: 'black', class: 'bg-black' }
  ]
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('25');
  const [selectedColor, setSelectedColor] = useState('pink');
  const [activeTab, setActiveTab] = useState('Overview');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.mainImage,
      size: selectedSize,
      color: selectedColor
    }, quantity);
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
          <div className="lg:col-span-2 bg-white rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Gallery */}
              <ProductGallery
                mainImage={product.mainImage}
                thumbnails={product.thumbnails}
                productName={product.name}
              />

              {/* Product Details */}
              <div>
                <ProductInfo
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  rating={product.rating}
                  unitsLeft={product.unitsLeft}
                />

                <ProductOptions
                  quantity={quantity}
                  setQuantity={setQuantity}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  sizes={product.sizes}
                  colors={product.colors}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <DeliveryInfo />
        </div>

        {/* Product Description Tabs */}
        <div className="bg-white rounded-lg mt-6 p-6">
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
              {product.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;