import React, { useState } from 'react';

const PeopleInputForm = ({ onSave, currentData, onLogout }) => {
  const [formData, setFormData] = useState({
    week: currentData.week,
    attendanceValue: currentData.kpis.attendance.value,
    totalKaryawan: currentData.kpis.attendance.totalKaryawan,
    sakit: currentData.kpis.attendance.sakit,
    alfa: currentData.kpis.attendance.alfa
  });

  const handleSubmit = (e) => {
    if (!formData.week || formData.attendanceValue === '' || formData.totalKaryawan === '' || formData.sakit === '' || formData.alfa === '') {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-blue-900 text-center flex-1 ml-28">KPI Input - People</h1>
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
                <label className="block text-blue-900 font-bold mb-2">Week</label>
                <input
                  type="text"
                  name="week"
                  value={formData.week}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="Week 43"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-bold mb-2">Attendance (%)</label>
                <input
                  type="text"
                  name="attendanceValue"
                  value={formData.attendanceValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="99.5"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-bold mb-2">Total Karyawan</label>
                <input
                  type="number"
                  name="totalKaryawan"
                  value={formData.totalKaryawan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="476"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-bold mb-2">Sakit</label>
                <input
                  type="number"
                  name="sakit"
                  value={formData.sakit}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="11"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-bold mb-2">Alfa</label>
                <input
                  type="number"
                  name="alfa"
                  value={formData.alfa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                  placeholder="0"
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

export default PeopleInputForm;