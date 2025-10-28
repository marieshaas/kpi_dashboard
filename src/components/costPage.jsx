import React from 'react';
import { Banknote } from 'lucide-react';
import logo from '../corinthian_doors_indonesia_logo.jpg';

const CostPage = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-yellow-600 p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 max-w-6xl mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 ml-4">
            <div className="bg-yellow-600 rounded-xl p-3">
              <Banknote size={50} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-5xl font-black text-yellow-600">COST</h1>
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

      {/* Main KPI Cards - Overtime & Repair Maintenance */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="grid grid-cols-2 gap-6">
          
          {/* Overtime Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-12 mb-4 h-64 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl font-black text-yellow-900 mb-2">
                  {data.kpis.overtime.value}
                </span>
                <span className="text-5xl font-black text-yellow-900">
                  {data.kpis.overtime.unit}
                </span>
                <div className="text-2xl font-semibold text-yellow-900 opacity-80">
                  {data.kpis.overtime.label}
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">Overtime</h2>
            </div>
          </div>

          {/* Repair Maintenance Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-12 mb-4 h-64 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl font-black text-yellow-900 mb-2">
                  {data.kpis.repair_maintenance.value}
                </span>
                <span className="text-5xl font-black text-yellow-900">
                  {data.kpis.repair_maintenance.unit}
                </span>
                <div className="text-2xl font-semibold text-yellow-900 opacity-80">
                  {data.kpis.repair_maintenance.label}
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">Repair Maintenance</h2>
            </div>
          </div>

        </div>
      </div>

      {/* Insight Box
      <div className="max-w-6xl mx-auto">
        <div className="bg-yellow-900 rounded-2xl shadow-xl p-6 border-2 border-white">
          <div className="bg-white rounded-xl px-5 py-2 inline-block mb-3">
            <p className="font-black text-yellow-600 italic text-sm">Cost Insight - {data.week}</p>
          </div>
          <p className="text-white text-base leading-relaxed ml-5 italic">
            {data.insight}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default CostPage;