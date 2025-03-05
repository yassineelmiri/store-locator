import React, { useState } from 'react';
import { MapPin, Store as StoreIcon, Navigation } from 'lucide-react';
import type { StoreFormData } from '../types';

interface StoreFormProps {
  onSubmit: (data: StoreFormData) => void;
}

export function StoreForm({ onSubmit }: StoreFormProps) {
  const [formData, setFormData] = useState<StoreFormData>({
    name: '',
    city: '',
    latitude: 0,
    longitude: 0,
    postalCode: '',
    services: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      city: '',
      latitude: 0,
      longitude: 0,
      postalCode: '',
      services: '',
    });
  };

  const handleAutomaticLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prevData) => ({
            ...prevData,
            latitude,
            longitude,
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location. Please enter it manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser. Please enter coordinates manually.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
        <StoreIcon className="w-8 h-8 text-blue-500" />
        Add New Store
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Store Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
            placeholder="Enter store name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">City</label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
            placeholder="Enter city"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Latitude</label>
            <input
              type="number"
              step="any"
              required
              value={formData.latitude}
              onChange={(e) => setFormData({ ...formData, latitude: parseFloat(e.target.value) })}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
              placeholder="Enter latitude"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Longitude</label>
            <input
              type="number"
              step="any"
              required
              value={formData.longitude}
              onChange={(e) => setFormData({ ...formData, longitude: parseFloat(e.target.value) })}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
              placeholder="Enter longitude"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleAutomaticLocation}
          className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300"
        >
          <Navigation className="w-5 h-5" />
          <span className="font-semibold">Use My Current Location</span>
        </button>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Postal Code</label>
          <input
            type="text"
            required
            value={formData.postalCode}
            onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
            placeholder="Enter postal code"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Services (comma-separated)</label>
          <input
            type="text"
            required
            value={formData.services}
            onChange={(e) => setFormData({ ...formData, services: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
            placeholder="e.g. Delivery, Returns, Gift Wrapping"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300"
        >
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">Add Store</span>
        </button>
      </div>
    </form>
  );
}