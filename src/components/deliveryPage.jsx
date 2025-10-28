import React from 'react';
import { Truck } from 'lucide-react';
import logo from '../corinthian_doors_indonesia_logo.jpg';

const DeliveryPage = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 max-w-6xl mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 ml-4">
            <div className="bg-teal-600 rounded-xl p-3">
              <Truck size={50} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-5xl font-black text-teal-600">DELIVERY</h1>
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

      {/* Main KPI Cards */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="grid grid-cols-3 gap-6">
          
          {/* MIFOT Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
              <div className="space-y-4">
                <div className="bg-yellow-800 rounded-xl px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">Joinery Doors</span>
                  <span className="text-white font-black text-2xl">{data.kpis.mifot.joinerydoors.value}{data.kpis.mifot.joinerydoors.unit}</span>
                </div>
                <div className="bg-yellow-800 rounded-xl px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">Slab Doors & Flush</span>
                  <span className="text-white font-black text-2xl">{data.kpis.mifot.slabdoors_flush.value}{data.kpis.mifot.slabdoors_flush.unit}</span>
                </div>
                <div className="bg-yellow-800 rounded-xl px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">WRD</span>
                  <span className="text-white font-black text-2xl">{data.kpis.mifot.wrd.value}{data.kpis.mifot.wrd.unit}</span>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">MIFOT</h2>
            </div>
          </div>

          {/* Maintenance Performance Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
              <div className="space-y-4">
                <div className="bg-teal-700 rounded-xl px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">MTTR</span>
                  <span className="text-white font-black text-2xl">{data.kpis.maintenance_perform.mttr.value} {data.kpis.maintenance_perform.mttr.unit}</span>
                </div>
                <div className="bg-teal-700 rounded-xl px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">AM/TPM</span>
                  <span className="text-white font-black text-2xl">{data.kpis.maintenance_perform.am_tpm.value}{data.kpis.maintenance_perform.am_tpm.unit}</span>
                </div>
                <div className="bg-teal-700 rounded-xl px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">Breakdown Ratio</span>
                  <span className="text-white font-black text-2xl">{data.kpis.maintenance_perform.breakdown_ratio.value}{data.kpis.maintenance_perform.breakdown_ratio.unit}</span>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white -mt-2">Maintenance</h2>
              <h2 className="text-3xl font-black text-white">Performance</h2>
            </div>
          </div>

          {/* DIFOT Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
              <div className="space-y-4">
                <div className="bg-yellow-800 rounded-xl px-6 py-8 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">Joinery Doors</span>
                  <span className="text-white font-black text-3xl">{data.kpis.difot.joinerydoors.value}{data.kpis.difot.joinerydoors.unit}</span>
                </div>
                <div className="bg-yellow-800 rounded-xl px-6 py-8 flex items-center justify-between">
                  <span className="text-white font-bold text-xl">Slab Doors & Flush</span>
                  <span className="text-white font-black text-3xl">{data.kpis.difot.slabdoors_flush.value}{data.kpis.difot.slabdoors_flush.unit}</span>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl px-8 py-3 text-center">
              <h2 className="text-3xl font-black text-white">Schedule Adherence</h2>
            </div>
          </div>

        </div>
      </div>

      {/* Insight Box */}
      {/* <div className="max-w-6xl mx-auto">
        <div className="bg-teal-900 rounded-2xl shadow-xl p-6 border-2 border-white">
          <div className="bg-white rounded-xl px-5 py-2 inline-block mb-3">
            <p className="font-black text-teal-600 italic text-sm">Delivery Insight - {data.week}</p>
          </div>
          <p className="text-white text-base leading-relaxed ml-5 italic">
            {data.insight}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default DeliveryPage;