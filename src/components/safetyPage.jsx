import React from 'react';
import { Shield } from 'lucide-react';
import logo from '../corinthian_doors_indonesia_logo.jpg';
import emergencyicon from '../emergencyicon.png';
import warningicon from '../warningicon.png';

const SafetyPage = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 p-6">
      {/* Navigation Dots
      <div className="flex justify-center mb-4">
        <div className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 flex gap-2">
          <div className="w-10 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        </div>
      </div> */}

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 max-w-6xl mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 ml-4">
            <div className="bg-red-600 rounded-xl p-3">
              <Shield size={50} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-5xl font-black text-red-600">SAFETY</h1>
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

      {/* Main KPI Cards - TRIR, LTI FR, Share It */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="grid grid-cols-2 gap-6">
          
          {/* Icident Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-4 h-64 flex items-center justify-center">
              <div className="flex items-center gap-6">
                {/* Icon Kiri */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img src={emergencyicon} alt="emergency icon" className="w-full h-full object-contain"/>
                </div>
                {/* Angka & Label Kanan */}
                <div className="flex-1 text-center">
                  <div className="text-7xl font-black text-red-900 mb-2">
                    {data.kpis.incident.value}
                  </div>
                  <div className="text-2xl font-semibold text-red-900 opacity-80">
                    {data.kpis.share_it.label}
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">Total Insiden</h2>
            </div>
          </div>

          {/* Share It Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-16 mb-4">
              <div className="flex items-center gap-6">
                {/* Icon Kiri */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img src={warningicon} alt="warning icon" className="w-full h-full object-contain"/>
                </div>
                {/* Angka & Label Kanan */}
                <div className="flex-1 text-center">
                  <div className="text-7xl font-black text-red-900 mb-2">
                    {data.kpis.share_it.value}
                  </div>
                  <div className="text-2xl font-semibold text-red-900 opacity-80">
                    {data.kpis.share_it.label}
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">SHARE IT</h2>
            </div>
          </div>

        </div>
      </div>

      {/* Insight Box */}
      {/* <div className="max-w-6xl mx-auto">
        <div className="bg-red-900 rounded-2xl shadow-xl p-6">
          <div className="bg-white rounded-xl px-5 py-2 inline-block mb-3">
            <p className="font-black text-red-600 italic text-sm">Safety Insight - {data.week}</p>
          </div>
          <p className="text-white text-base leading-relaxed ml-5">
            {data.insight}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default SafetyPage;