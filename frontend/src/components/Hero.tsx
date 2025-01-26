import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80"
        alt="Mountain biking"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl font-bold mb-4">Ride Your Adventure</h1>
            <p className="text-xl mb-8">
              Discover our premium selection of bikes for every terrain and riding style.
              From mountain trails to city streets, we've got you covered.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 flex items-center gap-2">
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}