import React, { useState } from 'react';
import { users } from '../data/kpiData';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      onLogin(user);
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">📊</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">KPI Dashboard</h1>
          <p className="text-gray-600 mt-2">Login to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
              placeholder="Masukkan username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
              placeholder="Masukkan password"
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 font-semibold mb-2">Demo Accounts:</p>
          <p className="text-xs text-gray-500">admin / admin123</p>
          <p className="text-xs text-gray-500">safety / safety123</p>
          <p className="text-xs text-gray-500">quality / quality123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;