import React from 'react';
import { Wrench, Clock, Shield, Trophy } from 'lucide-react';

export function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From basic tune-ups to complete overhauls, our expert technicians
          are here to keep your bike running at its best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Wrench className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Basic Tune-Up</h3>
          <p className="text-gray-600 mb-4">
            Includes gear adjustment, brake inspection, tire pressure check,
            and basic cleaning.
          </p>
          <p className="text-lg font-bold text-indigo-600">$59.99</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Full Service</h3>
          <p className="text-gray-600 mb-4">
            Complete bike overhaul including deep cleaning, full adjustment,
            and bearing service.
          </p>
          <p className="text-lg font-bold text-indigo-600">$149.99</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Bike Fitting</h3>
          <p className="text-gray-600 mb-4">
            Professional fitting service to ensure your bike is perfectly
            adjusted for your body.
          </p>
          <p className="text-lg font-bold text-indigo-600">$199.99</p>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-lg p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Premium Service Package</h2>
          <p className="mb-6">
            Get priority service, free basic tune-ups for a year, and 10% off
            all parts with our premium service package.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md hover:bg-gray-100 font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}