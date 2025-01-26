import React from 'react';
import { Award, Users, PenTool as Tool, Bike } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Futta-Bikes</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Since 1970, we've been passionate about providing the highest quality bikes
          and exceptional service to our cycling community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1565951887-4b166fcf6987?auto=format&fit=crop&q=80"
            alt="Bike shop interior"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Futta-Bikes began as a small repair shop and has grown into the region's
            premier cycling destination. Our commitment to quality and customer service
            has remained unchanged throughout our journey.
          </p>
          <p className="text-gray-600">
            We believe that every person deserves to experience the joy of cycling,
            whether they're a casual rider or a competitive athlete. Our expert team
            is here to help you find the perfect bike and keep it running smoothly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6">
          <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Quality First</h3>
          <p className="text-gray-600">Only the best brands and products make it to our shelves</p>
        </div>
        <div className="text-center p-6">
          <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Expert Staff</h3>
          <p className="text-gray-600">Our team has decades of combined experience</p>
        </div>
        <div className="text-center p-6">
          <Tool className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Professional Service</h3>
          <p className="text-gray-600">Full-service maintenance and repair shop</p>
        </div>
        <div className="text-center p-6">
          <Bike className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
          <p className="text-gray-600">Bikes for every rider and every budget</p>
        </div>
      </div>
    </div>
  );
}