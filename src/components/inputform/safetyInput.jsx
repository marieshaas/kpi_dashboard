import React, { useState } from 'react';

const SafetyInputForm = ({ onSave, currentData, onLogout }) => {
  const [formData, setFormData] = useState({
    week: currentData.week,
    incidentValue: currentData.kpis.incident.value,
    noincidentValue: currentData.kpis.no_incident.value,
    shareitValue: currentData.kpis.share_it.value
  });

  const handleSubmit = (e) => {
  if (!formData.week || formData.incidentValue === '' || formData.noincidentValue === '' || formData.shareitValue === '') {
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
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-red-900 text-center flex-1 ml-28">KPI Input - Safety</h1>
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
                <label className="block text-red-900 font-bold mb-2">Week</label>
                <input
                  type="text"
                  name="week"
                  value={formData.week}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                  placeholder="Week 43"
                  required
                />
              </div>

              <div>
                <label className="block text-red-900 font-bold mb-2">Total Insiden</label>
                <input
                  type="number"
                  name="incidentValue"
                  value={formData.incidentValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                  placeholder="10"
                  required
                />
              </div>

              <div>
                <label className="block text-red-900 font-bold mb-2">Jumlah Hari Tanpa Kecelakaan Kerja</label>
                <input
                  type="number"
                  name="noincidentValue"
                  value={formData.noincidentValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                  placeholder="100"
                  required
                />
              </div>

              <div>
                <label className="block text-red-900 font-bold mb-2">SHARE IT</label>
                <input
                  type="number"
                  name="shareitValue"
                  value={formData.shareitValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                  placeholder="50"
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

export default SafetyInputForm;