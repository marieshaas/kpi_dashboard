import React, { useState } from 'react';

const DeliveryInputForm = ({ onSave, currentData, onLogout }) => {
  const [formData, setFormData] = useState({
    week: currentData.week,
    mifotJoineryDoors: currentData.kpis.mifot.joinerydoors.value,
    mifotSlabDoorsFlush: currentData.kpis.mifot.slabdoors_flush.value,
    mifotWrd: currentData.kpis.mifot.wrd.value,
    mttr: currentData.kpis.maintenance_perform.mttr.value,
    amTpm: currentData.kpis.maintenance_perform.am_tpm.value,
    breakdownRatio: currentData.kpis.maintenance_perform.breakdown_ratio.value,
    difotJoineryDoors: currentData.kpis.difot.joinerydoors.value,
    difotSlabDoorsFlush: currentData.kpis.difot.slabdoors_flush.value
  });

  const handleSubmit = (e) => {
    if (!formData.week || formData.mifotJoineryDoors === '' || formData.mifotSlabDoorsFlush === '' || formData.mifotWrd === ''
        || formData.mttr === '' || formData.amTpm === '' || formData.breakdownRatio === '' || formData.difotJoineryDoors === ''
        || formData.difotSlabDoorsFlush === '') {
    alert('Harap isi semua field!');
    e.preventDefault();
    return;
  }

    e.preventDefault();
    onSave(formData);
    alert('Data berhasil disimpan!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-teal-800 text-center flex-1 ml-28">KPI Input - Delivery</h1>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-teal-900 font-bold mb-2">Week</label>
              <input
                type="text"
                name="week"
                value={formData.week}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                placeholder="Week 43"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">MIFOT</h2>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-teal-900 font-bold mb-2">Joinery Doors (%)</label>
                  <input
                    type="number"
                    name="mifotJoineryDoors"
                    value={formData.mifotJoineryDoors}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="99"
                  />
                </div>

                <div>
                  <label className="block text-teal-900 font-bold mb-2">Slab Doors & Flush (%)</label>
                  <input
                    type="number"
                    name="mifotSlabDoorsFlush"
                    value={formData.mifotSlabDoorsFlush}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="87"
                  />
                </div>

                <div>
                  <label className="block text-teal-900 font-bold mb-2">WRD (%)</label>
                  <input
                    type="number"
                    name="mifotWrd"
                    value={formData.mifotWrd}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="67"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Maintenance Performance</h2>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-teal-900 font-bold mb-2">MTTR (min)</label>
                  <input
                    type="number"
                    name="mttr"
                    value={formData.mttr}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-teal-900 font-bold mb-2">AM/TPM (%)</label>
                  <input
                    type="number"
                    name="amTpm"
                    value={formData.amTpm}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="100"
                  />
                </div>

                <div>
                  <label className="block text-teal-900 font-bold mb-2">Breakdown Ratio (%)</label>
                  <input
                    type="text"
                    name="breakdownRatio"
                    value={formData.breakdownRatio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="0.08"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Schedule Adherence (DIFOT)</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-900 font-bold mb-2">Joinery Doors (%)</label>
                  <input
                    type="number"
                    name="difotJoineryDoors"
                    value={formData.difotJoineryDoors}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="95"
                  />
                </div>

                <div>
                  <label className="block text-teal-900 font-bold mb-2">Slab Doors & Flush (%)</label>
                  <input
                    type="number"
                    name="difotSlabDoorsFlush"
                    value={formData.difotSlabDoorsFlush}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-teal-600 focus:outline-none"
                    placeholder="87"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all mt-6"
            >
              Simpan Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInputForm;