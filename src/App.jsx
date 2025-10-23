import React, { useState } from 'react';
import Login from './components/login';
import PeoplePage from './components/peoplePage';
import AdminInput from './components/adminInput';
import { kpiData } from './data/kpiData';

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(kpiData.people);
  const [viewMode, setViewMode] = useState('display');

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setViewMode(loggedInUser.role === 'admin' ? 'input' : 'display');
  };

  const handleLogout = () => {
    setUser(null);
    setViewMode('display');
  };

  const handleSaveData = (formData) => {
    setData({
      ...data,
      week: formData.week,
      kpis: {
        ...data.kpis,
        attendance: {
          ...data.kpis.attendance,
          value: formData.attendanceValue,
          totalKaryawan: parseInt(formData.totalKaryawan),
          sakit: parseInt(formData.sakit),
          alfa: parseInt(formData.alfa)
        }
      },
      insight: formData.insight
    });
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (viewMode === 'input' && user.role === 'admin') {
    return (
      <AdminInput 
        onSave={handleSaveData} 
        currentData={data}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div>
      <PeoplePage data={data} />
      {user.role === 'admin' && (
        <button
          onClick={() => setViewMode('input')}
          className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-blue-700"
        >
          Edit Data
        </button>
      )}
      <button
        onClick={handleLogout}
        className="fixed top-8 right-8 bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

export default App;