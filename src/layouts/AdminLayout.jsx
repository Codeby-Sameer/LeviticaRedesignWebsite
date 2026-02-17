import { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaBriefcase, FaChartBar, FaCog, FaHome, FaSignOutAlt, 
  FaUsers, FaFileAlt, FaBell, FaUser, FaChevronLeft, 
  FaChevronRight, FaPlus, FaSearch
} from 'react-icons/fa';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: FaHome },
    { path: '/admin/jobs', label: 'Job Management', icon: FaBriefcase },
    { path: '/admin/applications', label: 'Applications', icon: FaUsers },
    { path: '/admin/analytics', label: 'Analytics', icon: FaChartBar },
    { path: '/admin/settings', label: 'Settings', icon: FaCog },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Top Navigation Bar - Fixed at top */}
      <header className={`fixed top-0 left-0 right-0 z-50 h-16 border-b transition-all duration-300 ${
        isDark 
          ? 'bg-slate-900 border-slate-800' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left side: Logo and toggle button */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className={`p-2 rounded-lg lg:hidden transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-400 hover:text-white hover:bg-slate-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <div className="flex items-center ml-4 lg:ml-0">
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                  isDark 
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600' 
                    : 'bg-gradient-to-br from-blue-600 to-blue-700'
                }`}>
                  <span className="text-white font-bold text-sm">LT</span>
                </div>
                <span className={`ml-3 text-lg font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Levitica Admin
                </span>
              </div>
            </div>

            {/* Right side: User menu and notifications */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className={`w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className={`pl-10 pr-4 py-2 w-64 rounded-lg border transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                />
              </div>

              {/* User Menu */}
              <div className="relative">
                <button className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'hover:bg-slate-800' 
                    : 'hover:bg-gray-100'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isDark 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    <FaUser className="w-4 h-4" />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {user?.username || 'Admin'}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Administrator
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main container with padding for fixed header */}
      <div className="pt-16 min-h-screen flex">
        {/* Sidebar - Fixed for mobile, Sticky for desktop */}
        <div className={`lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:z-30`}>
          <aside className={`fixed top-16 bottom-0 left-0 z-40 w-64 transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:top-0 ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } ${isDark ? 'bg-slate-900' : 'bg-white'} border-r ${
            isDark ? 'border-slate-800' : 'border-gray-200'
          }`}>
            {/* Sidebar content container */}
            <div className="h-full flex flex-col">
              {/* Navigation Menu - Scrollable area */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4 space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? isDark
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-blue-600 text-white shadow-lg'
                          : isDark
                            ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      onClick={() => setMobileSidebarOpen(false)}
                    >
                      <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-white' : ''}`} />
                      <span className={`ml-3 font-medium ${sidebarCollapsed ? 'lg:hidden' : ''}`}>
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Fixed bottom section */}
              <div className="mt-auto">
                {/* Quick Actions */}
                <div className={`p-4 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
                  <div className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    QUICK ACTIONS
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/admin/jobs/new"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                        isDark
                          ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      <FaPlus className="w-4 h-4 mr-2" />
                      <span className={sidebarCollapsed ? 'lg:hidden' : ''}>New Job</span>
                    </Link>
                    <Link
                      to="/careers"
                      target="_blank"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                        isDark
                          ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30'
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                    >
                      <FaFileAlt className="w-4 h-4 mr-2" />
                      <span className={sidebarCollapsed ? 'lg:hidden' : ''}>View Site</span>
                    </Link>
                  </div>
                </div>

                {/* Footer - Fixed at bottom */}
                <div className="p-4 border-t">
                  <button
                    onClick={handleLogout}
                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                      isDark
                        ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30 hover:text-red-300'
                        : 'bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700'
                    }`}
                  >
                    <FaSignOutAlt className="w-5 h-5" />
                    <span className={`ml-3 font-medium ${sidebarCollapsed ? 'lg:hidden' : ''}`}>
                      Logout
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Main Content */}
        <main className={`flex-1 min-w-0 transition-all duration-300`}>
          {/* Mobile sidebar overlay */}
          {mobileSidebarOpen && (
            <div 
              className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
          )}
          
          {/* Content wrapper */}
          <div className="p-4 lg:p-3 w-full">
            <div className={`rounded-xl transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800/50 border border-slate-700/50' 
                : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;