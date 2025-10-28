import React from 'react';
import { Users, Shield, Banknote, Truck, BadgeCheck, Bookmark } from 'lucide-react';
import logo from '../corinthian_doors_indonesia_logo.jpg';

const OpeningPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-7xl w-full flex items-center gap-12">
        
        {/* Left Side - Title */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center gap-6 mb-4">
            <h1 className="text-8xl font-black text-purple-900">Weekly</h1>
            <div className="bg-white-600 rounded-full p-4 w-32 h-32 flex items-center justify-center">
              <img src={logo} alt="logo" className="w-full h-full object-contain"/>
            </div>
          </div>
          <h2 className="text-6xl font-black text-purple-900">Performance</h2>
          <h2 className="text-6xl font-black text-purple-900">Overview</h2>
          <h2 className="text-4xl font-black text-purple-900">Operation 3575</h2>
        </div>

        {/* Right Side - Category Bars */}
        <div className="flex-1 space-y-2">
          
          {/* PEOPLE */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 flex items-center gap-6 shadow-lg">
            <Users size={60} className="text-white" strokeWidth={2.5} />
            <h3 className="text-3xl font-black text-white">PEOPLE</h3>
          </div>

          {/* SAFETY */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 flex items-center gap-6 shadow-lg">
            <Shield size={60} className="text-white" strokeWidth={2.5} />
            <h3 className="text-3xl font-black text-white">SAFETY</h3>
          </div>

           {/* QUALITY */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 flex items-center gap-6 shadow-lg">
            <BadgeCheck size={60} className="text-white" strokeWidth={2.5} />
            <h3 className="text-3xl font-black text-white">QUALITY</h3>
          </div>
          
          {/* COST */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 flex items-center gap-6 shadow-lg">
            <Banknote size={60} className="text-white" strokeWidth={2.5} />
            <h3 className="text-3xl font-black text-white">COST</h3>
          </div>

          {/* DELIVERY */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-6 flex items-center gap-6 shadow-lg">
            <Truck size={60} className="text-white" strokeWidth={2.5} />
            <h3 className="text-3xl font-black text-white">DELIVERY</h3>
          </div>

          {/* INVENTORY */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 flex items-center gap-6 shadow-lg">
            <Bookmark size={60} className="text-white" strokeWidth={2.5} />
            <h3 className="text-3xl font-black text-white">INVENTORY</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OpeningPage;