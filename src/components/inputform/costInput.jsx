import React, { useState } from 'react';

const CostInputForm = ({ onSave, currentData, onLogout }) => {
  const [formData, setFormData] = useState({
    week: currentData.week,
    overtimeValue: currentData.kpis.overtime.value,
    repairMaintenanceValue: currentData.kpis.repair_maintenance.value
  });

  const handleSubmit = (e) => {
    if (!formData.week || formData.overtimeValue === '' || formData.repairMaintenanceValue === '') {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-yellow-600 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-yellow-900 text-center flex-1 ml-28">KPI Input - Cost</h1>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-yellow-900 font-bold mb-2">Week</label>
                <input
                  type="text"
                  name="week"
                  value={formData.week}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow-600 focus:outline-none"
                  placeholder="Week 43"
                  required
                />
              </div>

              <div>
                <label className="block text-yellow-900 font-bold mb-2">Overtime Cost (%)</label>
                <input
                  type="text"
                  name="overtimeValue"
                  value={formData.overtimeValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow-600 focus:outline-none"
                  placeholder="90"
                  required
                />
              </div>

              <div>
                <label className="block text-yellow-900 font-bold mb-2">Repair Maintenance Cost (%)</label>
                <input
                  type="number"
                  name="repairMaintenanceValue"
                  value={formData.repairMaintenanceValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow-600 focus:outline-none"
                  placeholder="90"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all mt-6"
            >
              Simpan Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CostInputForm;