import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import initialCareersData from '../data/careersData';
import { 
  FaBriefcase, FaCheckCircle, FaUsers, FaFileAlt, 
  FaArrowUp, FaArrowDown, FaChartLine, FaCalendarAlt,
  FaEye, FaEdit, FaTrash, FaPlus, FaBuilding,
  FaClock, FaDollarSign
} from 'react-icons/fa';
import { FaLocationDot, FaBolt } from 'react-icons/fa6';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, LineChart, Line
} from 'recharts';

const Dashboard = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    applications: 0,
    views: 0,
    conversionRate: 0,
    avgSalary: 0
  });
  const [recentJobs, setRecentJobs] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      // Load jobs from localStorage
      const storedJobs = localStorage.getItem('leviticaCareersData');
      const jobs = storedJobs ? JSON.parse(storedJobs) : initialCareersData;
      
      // Calculate stats
      const totalJobs = jobs.length;
      const activeJobs = jobs.filter(job => job.isActive).length;
      const totalViews = jobs.reduce((sum, job) => sum + (job.views || 0), 0);
      const totalApplications = jobs.reduce((sum, job) => sum + (job.applications || 0), 0);
      const avgSalary = jobs.length > 0 
        ? Math.round(jobs.reduce((sum, job) => {
            const salary = parseInt(job.salary?.replace(/[^0-9]/g, '')) || 0;
            return sum + salary;
          }, 0) / jobs.length)
        : 0;
      
      const conversionRate = totalViews > 0 
        ? Math.round((totalApplications / totalViews) * 100) 
        : 0;

      setStats({
        totalJobs,
        activeJobs,
        applications: totalApplications,
        views: totalViews || 245,
        conversionRate,
        avgSalary
      });

      // Get recent jobs (last 3)
      setRecentJobs(jobs.slice(-3).reverse());

      // Generate chart data
      const monthlyData = [
        { month: 'Jan', jobs: 4, applications: 12, views: 120 },
        { month: 'Feb', jobs: 5, applications: 18, views: 150 },
        { month: 'Mar', jobs: 6, applications: 22, views: 180 },
        { month: 'Apr', jobs: 7, applications: 28, views: 210 },
        { month: 'May', jobs: 8, applications: 32, views: 245 },
        { month: 'Jun', jobs: 6, applications: 24, views: 195 },
      ];
      setChartData(monthlyData);

      // Generate department data
      const departmentStats = jobs.reduce((acc, job) => {
        const dept = job.department || 'Other';
        if (!acc[dept]) {
          acc[dept] = { department: dept, jobs: 0, applications: 0 };
        }
        acc[dept].jobs += 1;
        acc[dept].applications += (job.applications || 0);
        return acc;
      }, {});

      const departmentArray = Object.values(departmentStats).map(dept => ({
        ...dept,
        fill: getDepartmentColor(dept.department)
      }));
      setDepartmentData(departmentArray);

      setLoading(false);
    }, 500);
  }, []);

  const getDepartmentColor = (department) => {
    const colors = [
      '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
      '#8884D8', '#82CA9D', '#FF6B6B', '#4ECDC4'
    ];
    const index = department.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const statCards = [
    { 
      title: 'Total Jobs', 
      value: stats.totalJobs, 
      change: '+12%', 
      description: 'Job postings',
      icon: FaBriefcase,
      color: 'blue',
      trend: 'up',
      link: '/admin/jobs'
    },
    { 
      title: 'Active Jobs', 
      value: stats.activeJobs, 
      change: '+8%', 
      description: 'Active postings',
      icon: FaCheckCircle,
      color: 'green',
      trend: 'up',
      link: '/admin/jobs?filter=active'
    },
    { 
      title: 'Applications', 
      value: stats.applications, 
      change: '+24%', 
      description: 'Applications received',
      icon: FaUsers,
      color: 'purple',
      trend: 'up',
      link: '/admin/applications'
    },
    { 
      title: 'Page Views', 
      value: stats.views.toLocaleString(), 
      change: '-3%', 
      description: 'Careers page visits',
      icon: FaEye,
      color: 'orange',
      trend: 'down',
      link: '/admin/analytics'
    },
  ];

  const handleJobAction = (jobId, action) => {
    switch(action) {
      case 'view':
        navigate(`/admin/jobs/${jobId}`);
        break;
      case 'edit':
        navigate(`/admin/jobs/${jobId}/edit`);
        break;
      case 'delete':
        if(window.confirm('Are you sure you want to delete this job?')) {
          // Delete logic here
          console.log('Delete job:', jobId);
        }
        break;
      default:
        break;
    }
  };

  const handleCreateJob = () => {
    navigate('/admin/jobs/new');
  };

  const handleViewAnalytics = () => {
    navigate('/admin/analytics');
  };

  const handleViewApplications = () => {
    navigate('/admin/applications');
  };

  // Chart colors based on theme
  const chartColors = {
    grid: isDark ? '#374151' : '#e5e7eb',
    text: isDark ? '#9ca3af' : '#6b7280',
    tooltipBg: isDark ? '#1f2937' : '#ffffff',
    bar: '#3b82f6',
    line: '#8b5cf6',
  };

  if (loading) {
    return (
      <div className="p-4 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-5 space-y-4 sm:space-y-6 w-full max-w-full">
      {/* Header with Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Dashboard Overview
          </h1>
          <p className={`text-sm sm:text-base mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Welcome back, Admin!
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCreateJob}
            className={`flex items-center gap-1 sm:gap-2 px-3 py-2 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 ${
              isDark
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>New Job</span>
          </button>
          <button
            onClick={() => window.open('/careers', '_blank')}
            className={`flex items-center gap-1 sm:gap-2 px-3 py-2 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
          >
            <FaEye className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Preview</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl p-3 transition-all duration-300 cursor-pointer ${
              isDark 
                ? 'bg-slate-800/70 border border-slate-700/50' 
                : 'bg-white border border-gray-200'
            }`}
            onClick={() => navigate(stat.link)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.title}
                </p>
                <p className={`text-lg sm:text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
                <div className="flex items-center mt-1">
                  <span className={`text-xs font-medium flex items-center ${
                    stat.trend === 'up' 
                      ? isDark ? 'text-green-400' : 'text-green-600'
                      : isDark ? 'text-red-400' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <FaArrowUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1" /> : <FaArrowDown className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />}
                    {stat.change}
                  </span>
                  <span className={`text-xs ml-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    vs last
                  </span>
                </div>
              </div>
              <div className={`p-2 rounded-lg ml-2 ${
                isDark ? 'bg-slate-700/50' : 'bg-gray-50'
              }`}>
                <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  stat.color === 'blue' ? (isDark ? 'text-blue-400' : 'text-blue-600') :
                  stat.color === 'green' ? (isDark ? 'text-green-400' : 'text-green-600') :
                  stat.color === 'purple' ? (isDark ? 'text-purple-400' : 'text-purple-600') :
                  stat.color === 'orange' ? (isDark ? 'text-orange-400' : 'text-orange-600') :
                  (isDark ? 'text-pink-400' : 'text-pink-600')
                }`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Applications Trend Chart */}
        <div className={`rounded-xl p-3 sm:p-4 transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800/70 border border-slate-700/50' 
            : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Applications Trend
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Monthly applications
              </p>
            </div>
            <FaChartLine className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          
          <div className="h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis 
                  dataKey="month" 
                  stroke={chartColors.text}
                  tick={{ fill: chartColors.text, fontSize: 10 }}
                />
                <YAxis 
                  stroke={chartColors.text}
                  tick={{ fill: chartColors.text, fontSize: 10 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: chartColors.tooltipBg,
                    border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                    color: isDark ? '#fff' : '#000',
                    fontSize: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="applications" 
                  stroke={chartColors.line}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Distribution Chart */}
        <div className={`rounded-xl p-3 sm:p-4 transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800/70 border border-slate-700/50' 
            : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Department Distribution
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Jobs by department
              </p>
            </div>
            <FaBuilding className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          
          <div className="h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis 
                  dataKey="department" 
                  stroke={chartColors.text}
                  tick={{ fill: chartColors.text, fontSize: 10 }}
                  interval={0}
                />
                <YAxis 
                  stroke={chartColors.text}
                  tick={{ fill: chartColors.text, fontSize: 10 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: chartColors.tooltipBg,
                    border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                    color: isDark ? '#fff' : '#000',
                    fontSize: '12px'
                  }}
                />
                <Bar 
                  dataKey="jobs" 
                  fill={chartColors.bar}
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Jobs & Quick Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Recent Jobs - Takes 2/3 on desktop */}
        <div className={`lg:col-span-2 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800/70 border border-slate-700/50' 
            : 'bg-white border border-gray-200'
        }`}>
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Recent Job Postings
                </h2>
                <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Your most recent job positions
                </p>
              </div>
              <Link
                to="/admin/jobs"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <span className="hidden sm:inline">View all</span>
                <FaArrowUp className="w-3 h-3 rotate-45" />
              </Link>
            </div>

            <div className="space-y-3">
              {recentJobs.length > 0 ? (
                recentJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border border-slate-700/30' 
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="space-y-2">
                      {/* Job Title Row */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <FaBuilding className={`w-3 h-3 sm:w-4 sm:h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                            <h3 className={`text-sm sm:text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {job.title}
                            </h3>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          job.isActive
                            ? isDark
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-green-100 text-green-700'
                            : isDark
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-red-100 text-red-700'
                        }`}>
                          {job.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>

                      {/* Job Details */}
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex items-center gap-1">
                            <FaClock className={`w-3 h-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {job.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaLocationDot className={`w-3 h-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {job.location || 'Remote'}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaDollarSign className={`w-3 h-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {job.department}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                          Posted {new Date(job.postedDate || Date.now()).toLocaleDateString()}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleJobAction(job.id, 'view')}
                            className={`p-1.5 rounded transition-colors duration-300 ${
                              isDark
                                ? 'hover:bg-slate-700 text-gray-400 hover:text-white'
                                : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                            }`}
                            title="View Details"
                          >
                            <FaEye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={() => handleJobAction(job.id, 'edit')}
                            className={`p-1.5 rounded transition-colors duration-300 ${
                              isDark
                                ? 'hover:bg-slate-700 text-gray-400 hover:text-white'
                                : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                            }`}
                            title="Edit Job"
                          >
                            <FaEdit className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={() => handleJobAction(job.id, 'delete')}
                            className={`p-1.5 rounded transition-colors duration-300 ${
                              isDark
                                ? 'hover:bg-red-600/20 text-gray-400 hover:text-red-400'
                                : 'hover:bg-red-100 text-gray-600 hover:text-red-600'
                            }`}
                            title="Delete Job"
                          >
                            <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={`text-center py-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <FaBriefcase className="w-10 h-10 mx-auto mb-3 opacity-50" />
                  <p className="text-sm font-medium mb-2">No job postings yet</p>
                  <p className="text-xs mb-4">Get started by creating your first job posting</p>
                  <button
                    onClick={handleCreateJob}
                    className={`px-3 py-2 text-sm rounded-lg font-medium transition-all duration-300 ${
                      isDark
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Create Your First Job
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions - Takes 1/3 on desktop */}
        <div className={`rounded-xl p-3 sm:p-4 transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800/70 border border-slate-700/50' 
            : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Actions
            </h2>
            <FaBolt className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
            <button
              onClick={handleCreateJob}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300'
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded ${isDark ? 'bg-blue-500/30' : 'bg-blue-100'}`}>
                  <FaPlus className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium block">New Job</span>
                  <span className={`text-xs ${isDark ? 'text-blue-300/70' : 'text-blue-600/70'}`}>
                    Post opening
                  </span>
                </div>
              </div>
              <FaArrowUp className="w-3 h-3 rotate-45 opacity-70" />
            </button>

            <button
              onClick={handleViewAnalytics}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 hover:text-purple-300'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded ${isDark ? 'bg-purple-500/30' : 'bg-purple-100'}`}>
                  <FaChartLine className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium block">Analytics</span>
                  <span className={`text-xs ${isDark ? 'text-purple-300/70' : 'text-purple-600/70'}`}>
                    View insights
                  </span>
                </div>
              </div>
              <FaArrowUp className="w-3 h-3 rotate-45 opacity-70" />
            </button>

            <button
              onClick={handleViewApplications}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30 hover:text-green-300'
                  : 'bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded ${isDark ? 'bg-green-500/30' : 'bg-green-100'}`}>
                  <FaUsers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium block">Applications</span>
                  <span className={`text-xs ${isDark ? 'text-green-300/70' : 'text-green-600/70'}`}>
                    Review candidates
                  </span>
                </div>
              </div>
              <FaArrowUp className="w-3 h-3 rotate-45 opacity-70" />
            </button>

            <Link
              to="/admin/settings"
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-orange-600/20 text-orange-400 hover:bg-orange-600/30 hover:text-orange-300'
                  : 'bg-orange-50 text-orange-600 hover:bg-orange-100 hover:text-orange-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded ${isDark ? 'bg-orange-500/30' : 'bg-orange-100'}`}>
                  <FaCalendarAlt className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium block">Settings</span>
                  <span className={`text-xs ${isDark ? 'text-orange-300/70' : 'text-orange-600/70'}`}>
                    Configure panel
                  </span>
                </div>
              </div>
              <FaArrowUp className="w-3 h-3 rotate-45 opacity-70" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;