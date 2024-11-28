import React, { useState } from 'react';
import { Instagram, MessageSquare } from 'lucide-react';

interface ProductGalleryProps {
  mainImage: string;
  thumbnails: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ mainImage, thumbnails, productName }) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 mb-4">
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {thumbnails.map((thumb, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(thumb)}
            className="aspect-square rounded-lg overflow-hidden bg-gray-50 hover:opacity-80 transition-opacity"
          >
            <img
              src={thumb}
              alt={`${productName} view ${idx + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-gray-700 mb-3">Share this product</p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <MessageSquare className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;