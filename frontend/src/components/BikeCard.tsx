import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface BikeCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

export function BikeCard({ name, price, image, category }: BikeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <span className="text-sm text-indigo-600 font-semibold">{category}</span>
        <h3 className="text-lg font-bold mt-1">{name}</h3>
        <p className="text-gray-600 mt-1">${price.toLocaleString()}</p>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}