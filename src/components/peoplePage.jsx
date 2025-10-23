import React from 'react';
import { Users } from 'lucide-react';
import logo from '../corinthian_doors_indonesia_logo.jpg';
import peopleicon from '../people icon.png';

const PeoplePage = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 p-6">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 max-w-6xl mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 ml-4">
            <div className="bg-blue-600 rounded-xl p-3">
              <Users size={50} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-5xl font-black text-blue-600">PEOPLE</h1>
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

      {/* Main KPI Card - Attendance */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between">
            {/* Left Icon */}
            <div className="w-[192px] h-[192px]">
              <img src={peopleicon} alt="people icon" className="w-full h-full object-contain ml-20"/>
            </div>

            {/* Center - Big Number */}
            <div className="flex-1 text-center">
              <div className="flex items-baseline justify-center gap-2 mb-2 ml-20">
                <span className="text-8xl font-black text-green-600">
                  {data.kpis.attendance.value}
                </span>
                <span className="text-5xl font-black text-green-600">
                  {data.kpis.attendance.unit}
                </span>
              </div>
              <p className="text-2xl text-blue-600 font-bold ml-10">
                {data.kpis.attendance.label}
              </p>
            </div>

            {/* Right - Info Badges */}
            <div className="flex flex-col gap-3 mr-10">
              {/* Top Level - Total Karyawan */}
              <div className="bg-blue-600 text-white px-35 py-3 rounded-xl text-center">
                <div className="text-xs font-bold opacity-90 mb-1">Total Karyawan:</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black">{data.kpis.attendance.totalKaryawan}</span>
                  <span className="text-sm font-semibold">org</span>
                </div>
              </div>
              
              {/* Bottom Level - Sakit & Alfa */}
              <div className="flex gap-3">
                <div className="bg-blue-100 text-blue-600 px-20 py-3 rounded-xl text-center min-w-[100px]">
                  <div className="text-xs font-semibold mb-1">Sakit:</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-black">{data.kpis.attendance.sakit}</span>
                    <span className="text-sm font-semibold">org</span>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-600 px-20 py-3 rounded-xl text-center min-w-[100px]">
                  <div className="text-xs font-semibold mb-1">Alfa:</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-black">{data.kpis.attendance.alfa}</span>
                    <span className="text-sm font-semibold">org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Title - CENTERED */}
      <div className="max-w-6xl mx-auto mb-4 text-center">
        <div className="backdrop-blur-sm rounded-xl px-8 py-3 inline-block">
          <h2 className="text-3xl font-black text-white">Kehadiran</h2>
          <p className="text-white opacity-50 text-base mt-1">Minggu Ini</p>
        </div>
      </div>

      {/* Insight Box
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-900 rounded-2xl shadow-xl p-6">
          <div className="bg-white rounded-xl px-5 py-2 inline-block mb-3">
            <p className="font-black text-blue-600 italic text-sm">People Insight - {data.week}</p>
          </div>
          <p className="text-white text-base leading-relaxed ml-5">
            {data.insight}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default PeoplePage;