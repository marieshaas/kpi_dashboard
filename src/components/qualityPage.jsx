import React from 'react';
import { BadgeCheck } from 'lucide-react';
import logo from '../corinthian_doors_indonesia_logo.jpg';

const QualityPage = ({ data }) => {
  const imageUrl = data.kpis.image.url;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-800 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 max-w-6xl mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 ml-4">
            <div className="bg-green-600 rounded-xl p-3">
              <BadgeCheck size={50} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-5xl font-black text-green-600">QUALITY</h1>
              <p className="text-gray-600 text-base mt-1">📍 {data.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mr-5">
            <div className="bg-green-100 text-green-700 px-6 py-3 rounded-xl font-bold text-xl animate-pulse">
              {data.week}
            </div>
            <div className="bg-white rounded-xl p-2 w-16 h-16 flex items-center justify-center">
              <img src={logo} alt="logo" className="w-full h-full object-contain"/>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-6">
        <div className="grid grid-cols-2 gap-6">
          
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-12 mb-4 h-64 flex flex-col items-center justify-center">
              <div className="flex justify-center -mt-10">
                <span className="bg-green-200 text-green-900 text-xl font-bold px-14 py-1 rounded-xl">
                  Target: {data.kpis.nc_router_doors.target} {data.kpis.nc_router_doors.unit}
                </span>
              </div>
              <div className="text-center mt-2">
                <span className="text-8xl font-black text-green-900 mb-2">
                  {data.kpis.nc_router_doors.value}
                </span>
                <div className="text-2xl font-bold text-green-900 opacity-80">
                  {data.kpis.nc_router_doors.unit}
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">NC Router Doors</h2>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-12 mb-4 h-64 flex flex-col items-center justify-center gap-2">
              <img src={imageUrl} alt="Quality Issue" className="w-auto h-48 object-contain"/>
              <span className="text-xl font-extrabold text-green-900 opacity-80">
                {data.kpis.image.label}
              </span>
          </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">Quality Issue</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QualityPage;