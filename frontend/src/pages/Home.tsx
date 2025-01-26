import React from 'react';
import { Hero } from '../components/Hero';
import { BikeCard } from '../components/BikeCard';

const featuredBikes = [
  {
    name: "Mountain Explorer Pro",
    price: 2499,
    category: "Mountain Bike",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80"
  },
  {
    name: "Urban Commuter Elite",
    price: 1299,
    category: "City Bike",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80"
  },
  {
    name: "Road Master Carbon",
    price: 3499,
    category: "Road Bike",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80"
  },
  {
    name: "Trail Blazer X",
    price: 1899,
    category: "Mountain Bike",
    image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80"
  }
];

export function Home() {
  return (
    <>
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Bikes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBikes.map((bike, index) => (
            <BikeCard key={index} {...bike} />
          ))}
        </div>
        
        <section className="mt-24 mb-12">
          <div className="bg-indigo-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Bike?</h2>
            <p className="mb-6 text-lg">
              Visit our shop or contact us for expert advice on choosing the right bike for you.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-md hover:bg-gray-100 font-semibold">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </>
  );
}