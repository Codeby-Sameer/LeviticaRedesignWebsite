import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedBackground from '../components/AnimatedBackground';
import { FaEye, FaEyeSlash, FaLock, FaShield } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaSignInAlt } from 'react-icons/fa';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isDark } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = login(formData.username, formData.password);
    
    if (result.success) {
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 500);
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatedBackground className="absolute inset-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md mx-4"
      >
        <div className={`backdrop-blur-xl border rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
          isDark 
            ? 'bg-slate-900/60 border-slate-700/50 shadow-slate-900/20' 
            : 'bg-white/80 border-slate-200/50 shadow-blue-100'
        }`}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              isDark 
                ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20' 
                : 'bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200'
            }`}>
              <FaShield className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <h1 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Admin Portal
            </h1>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Levitica Technologies Dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                isDark 
                  ? 'bg-red-500/20 border border-red-500/30 text-red-300' 
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}
            >
              {error}
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}>
                Username
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                  isDark ? 'text-gray-400' : 'text-slate-400'
                }`}>
                  <MdOutlineMailOutline className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20' 
                      : 'bg-white/50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                  placeholder="Enter username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}>
                Password
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                  isDark ? 'text-gray-400' : 'text-slate-400'
                }`}>
                  <FaLock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-12 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    isDark 
                      ? 'bg-slate-800/50 border-slate-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20' 
                      : 'bg-white/50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                    isDark ? 'text-gray-400 hover:text-gray-300' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
              } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <FaSignInAlt className="w-5 h-5" />
                  <span>Sign In</span>
                </>
              )}
              <div className={`absolute inset-0 rounded-lg blur opacity-30 group-hover:opacity-50 -z-10 ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600'
              }`} />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t text-center">
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
              This is a secure admin portal. Unauthorized access is prohibited.
            </p>
            <Link
              to="/"
              className={`inline-flex items-center gap-1 mt-4 text-sm transition-colors duration-300 ${
                isDark 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className={`mt-4 text-center text-sm transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-slate-600'
        }`}>
          <p>Demo credentials:</p>
          <p className="font-mono">Username: <span className="font-bold">admin</span></p>
          <p className="font-mono">Password: <span className="font-bold">admin123</span></p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;