import React, { useState } from 'react';

const AdminInput = ({ onSave, currentData, onLogout }) => {
  const [formData, setFormData] = useState({
    week: currentData.week,
    attendanceValue: currentData.kpis.attendance.value,
    totalKaryawan: currentData.kpis.attendance.totalKaryawan,
    sakit: currentData.kpis.attendance.sakit,
    alfa: currentData.kpis.attendance.alfa,
    insight: currentData.insight
  });

  const handleSubmit = (e) => {
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Admin Input - People KPI</h1>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Week</label>
                <input
                  type="text"
                  name="week"
                  value={formData.week}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="Week 40"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Attendance (%)</label>
                <input
                  type="text"
                  name="attendanceValue"
                  value={formData.attendanceValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="97.5"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Total Karyawan</label>
                <input
                  type="number"
                  name="totalKaryawan"
                  value={formData.totalKaryawan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="350"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Sakit</label>
                <input
                  type="number"
                  name="sakit"
                  value={formData.sakit}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="3"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Alfa</label>
                <input
                  type="number"
                  name="alfa"
                  value={formData.alfa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="1"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">Insight</label>
              <textarea
                name="insight"
                value={formData.insight}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                placeholder="Tulis insight mingguan..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all mt-6"
            >
              Simpan Data
            </button>
          </form>
        </div>

        <div className="bg-yellow-100 border-2 border-yellow-400 rounded-2xl p-6">
          <p className="text-yellow-800 font-semibold">
            ℹ️ Mode Hardcode: Data disimpan sementara di memory. Refresh page akan reset data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminInput;