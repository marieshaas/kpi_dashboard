import React, { useState } from 'react';
import logo from '../corinthian_doors_indonesia_logo.jpg';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    await onLogin({ email, password });
  } catch (error) {
    console.error('Login error:', error);
    const errorMessage = error.message?.includes('Invalid login credentials') 
      ? 'Email atau password salah' 
      : 'Terjadi kesalahan saat login';
    setError(errorMessage);
    alert(errorMessage);
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <img src={logo} alt="logo" className="w-full h-full object-contain"/>
          </div>
          <h1 className="text-3xl font-bold text-purple-900">KPI Dashboard</h1>
          <p className="text-purple-900 mt-2">Login to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-600 focus:outline-none"
              placeholder="Masukkan email"
              required
              disabled={loading}
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
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-600 focus:outline-none"
              placeholder="Masukkan password"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-center">
              {error} 
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-all ${
              loading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-green-700'
            }`}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;