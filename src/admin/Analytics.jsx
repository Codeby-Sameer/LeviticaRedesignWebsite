import { useTheme } from '../contexts/ThemeContext';
import { 
  FaChartLine, FaChartBar, FaChartPie, FaUsers,
  FaEye, FaMousePointer, FaCalendarAlt, FaGlobe,
  FaSearch, FaShareAlt, FaLink, FaMobileAlt,
  FaDesktop, FaTabletAlt, FaArrowUp, FaArrowDown
} from 'react-icons/fa';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, AreaChart, Area
} from 'recharts';

const Analytics = () => {
  const { isDark } = useTheme();

  // Simplified data for mobile, full data for desktop
  const performanceDataMobile = [
    { name: 'Q1', views: 5100, applications: 185, conversions: 3.6 },
    { name: 'Q2', views: 8400, applications: 321, conversions: 3.8 },
    { name: 'Q3', views: 9500, applications: 364, conversions: 3.8 },
    { name: 'Q4', views: 11300, applications: 435, conversions: 3.8 },
  ];

  const performanceDataDesktop = [
    { name: 'Jan', views: 1200, applications: 45, conversions: 3.8 },
    { name: 'Feb', views: 1800, applications: 62, conversions: 3.4 },
    { name: 'Mar', views: 2100, applications: 78, conversions: 3.7 },
    { name: 'Apr', views: 2400, applications: 92, conversions: 3.8 },
    { name: 'May', views: 2800, applications: 105, conversions: 3.8 },
    { name: 'Jun', views: 3200, applications: 124, conversions: 3.9 },
    { name: 'Jul', views: 3500, applications: 138, conversions: 3.9 },
    { name: 'Aug', views: 3100, applications: 118, conversions: 3.8 },
    { name: 'Sep', views: 2900, applications: 108, conversions: 3.7 },
    { name: 'Oct', views: 3300, applications: 128, conversions: 3.9 },
    { name: 'Nov', views: 3800, applications: 145, conversions: 3.8 },
    { name: 'Dec', views: 4200, applications: 162, conversions: 3.9 },
  ];

  // Top Jobs Data with shorter names for mobile
  const topJobsData = [
    { name: 'AI/ML Engineer', shortName: 'AI/ML', views: 2456, applications: 42, fill: '#3B82F6' },
    { name: 'Full-Stack Dev', shortName: 'Full-Stack', views: 1892, applications: 38, fill: '#10B981' },
    { name: 'Cloud Architect', shortName: 'Cloud', views: 1567, applications: 24, fill: '#8B5CF6' },
    { name: 'Product Manager', shortName: 'Product', views: 1342, applications: 19, fill: '#F59E0B' },
    { name: 'UX Designer', shortName: 'UX', views: 1123, applications: 15, fill: '#EF4444' },
  ];

  const trafficData = [
    { name: 'Direct', shortName: 'Direct', value: 35, color: '#3B82F6' },
    { name: 'Organic Search', shortName: 'Search', value: 28, color: '#10B981' },
    { name: 'Social Media', shortName: 'Social', value: 22, color: '#8B5CF6' },
    { name: 'Referral', shortName: 'Referral', value: 15, color: '#F59E0B' },
  ];

  const deviceData = [
    { name: 'Desktop', value: 62, icon: FaDesktop },
    { name: 'Mobile', value: 34, icon: FaMobileAlt },
    { name: 'Tablet', value: 4, icon: FaTabletAlt },
  ];

  const analyticsData = {
    overview: [
      { 
        label: 'Page Views', 
        value: '42.8K', 
        change: '+12.5%', 
        trend: 'up',
        icon: FaEye,
        description: '30 days'
      },
      { 
        label: 'Visitors', 
        value: '23.4K', 
        change: '+8.2%', 
        trend: 'up',
        icon: FaUsers,
        description: 'Unique users'
      },
      { 
        label: 'Applications', 
        value: '1.2K', 
        change: '+15.3%', 
        trend: 'up',
        icon: FaChartBar,
        description: 'Total'
      },
      { 
        label: 'Conv. Rate', 
        value: '3.9%', 
        change: '+0.4%', 
        trend: 'up',
        icon: FaChartLine,
        description: 'View to app'
      },
    ],
    engagement: [
      { label: 'Session Time', value: '3:45', change: '+5.2%', icon: FaCalendarAlt },
      { label: 'Bounce Rate', value: '32%', change: '-3.1%', icon: FaChartPie },
      { label: 'CTR', value: '4.8%', change: '+1.2%', icon: FaMousePointer },
      { label: 'Pages/Session', value: '3.2', change: '+0.3', icon: FaGlobe },
    ]
  };

  // Custom Tooltip with responsive styling
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-2 sm:p-3 rounded-lg shadow-lg border text-xs sm:text-sm ${
          isDark 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        }`}>
          <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            {label}
          </p>
          {payload.map((entry, index) => (
            <p key={index} className="flex items-center gap-2" style={{ color: entry.color }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span>{entry.name}: {entry.value}{entry.dataKey === 'conversions' && '%'}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom Legend for mobile
  const renderCustomLegend = (props) => (
    <div className="flex justify-center gap-4 mt-2 flex-wrap">
      {props.payload?.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-1.5 text-xs">
          <div 
            className="w-2 h-2 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Analytics
          </h1>
          <p className={`mt-1 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Track performance and insights
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border text-xs sm:text-sm ${
            isDark 
              ? 'bg-slate-800 border-slate-700 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
          }`}>
            <option>30 Days</option>
            <option>90 Days</option>
            <option>1 Year</option>
          </select>
          <button className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
            isDark
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}>
            Export
          </button>
        </div>
      </div>

      {/* Overview Stats - Stack on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {analyticsData.overview.map((stat, index) => (
          <div
            key={index}
            className={`p-3 sm:p-4 rounded-xl transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30' 
                : 'bg-white border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className={`p-1.5 sm:p-2 rounded-lg ${
                isDark ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className="flex items-center gap-1">
                {stat.trend === 'up' ? (
                  <FaArrowUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                ) : (
                  <FaArrowDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500" />
                )}
                <span className={`text-xs font-medium ${
                  stat.trend === 'up' 
                    ? isDark ? 'text-green-400' : 'text-green-600'
                    : isDark ? 'text-red-400' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <p className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {stat.value}
            </p>
            <p className={`text-xs sm:text-sm font-medium mt-0.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {stat.label}
            </p>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section - Stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Performance Chart */}
        <div className={`p-3 sm:p-4 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
            <h2 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Performance
            </h2>
            <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-0">
              <button className={`px-2 sm:px-3 py-1 text-xs rounded-lg ${
                isDark 
                  ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}>
                Views
              </button>
              <button className={`px-2 sm:px-3 py-1 text-xs rounded-lg ${
                isDark 
                  ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}>
                Apps
              </button>
            </div>
          </div>
          
          <div className="h-56 sm:h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={window.innerWidth < 768 ? performanceDataMobile : performanceDataDesktop}>
                <CartesianGrid 
                  strokeDasharray="2 2" 
                  stroke={isDark ? '#334155' : '#e5e7eb'} 
                />
                <XAxis 
                  dataKey="name" 
                  stroke={isDark ? '#94a3b8' : '#6b7280'}
                  fontSize={window.innerWidth < 768 ? 10 : 12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke={isDark ? '#94a3b8' : '#6b7280'}
                  fontSize={window.innerWidth < 768 ? 10 : 12}
                  tickLine={false}
                  axisLine={false}
                  width={window.innerWidth < 768 ? 30 : 40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#3B82F6" 
                  fill={isDark ? '#1e3a8a' : '#93c5fd'}
                  fillOpacity={0.3}
                  name="Views"
                  strokeWidth={1.5}
                />
                <Area 
                  type="monotone" 
                  dataKey="applications" 
                  stroke="#10B981" 
                  fill={isDark ? '#065f46' : '#a7f3d0'}
                  fillOpacity={0.3}
                  name="Applications"
                  strokeWidth={1.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          {/* Simplified Legend for mobile */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-2 sm:mt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Views</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Applications</span>
            </div>
          </div>
        </div>

        {/* Top Jobs Chart */}
        <div className={`p-3 sm:p-4 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Top Jobs
          </h2>
          
          <div className="h-56 sm:h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={topJobsData}
                margin={{ top: 10, right: 10, left: 0, bottom: window.innerWidth < 768 ? 30 : 60 }}
              >
                <CartesianGrid 
                  strokeDasharray="2 2" 
                  stroke={isDark ? '#334155' : '#e5e7eb'} 
                  vertical={false}
                />
                <XAxis 
                  dataKey={window.innerWidth < 768 ? "shortName" : "name"}
                  stroke={isDark ? '#94a3b8' : '#6b7280'}
                  fontSize={window.innerWidth < 768 ? 10 : 11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke={isDark ? '#94a3b8' : '#6b7280'}
                  fontSize={window.innerWidth < 768 ? 10 : 12}
                  tickLine={false}
                  axisLine={false}
                  width={window.innerWidth < 768 ? 30 : 40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="views" 
                  name="Views" 
                  radius={[2, 2, 0, 0]}
                >
                  {topJobsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Job breakdown - responsive grid */}
          <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {topJobsData.map((job, index) => (
              <div key={index} className={`p-2 sm:p-3 rounded-lg ${
                isDark 
                  ? 'bg-slate-800/30' 
                  : 'bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div 
                      className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1.5"
                      style={{ backgroundColor: job.fill }}
                    />
                    <span className={`text-xs font-medium truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {window.innerWidth < 768 ? job.shortName : job.name.split(' ')[0]}
                    </span>
                  </div>
                  <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {job.applications}
                  </span>
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {job.views > 1000 ? `${(job.views/1000).toFixed(1)}k` : job.views} views
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Stack on mobile, 3 cols on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Traffic Sources - Pie Chart */}
        <div className={`p-3 sm:p-4 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Traffic Sources
          </h2>
          
          <div className="h-80 sm:h-56 md:h-80 flex flex-col lg:flex-col items-center">
            <div className="w-full lg:w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => 
                      `${window.innerWidth < 768 ? trafficData.find(t => t.name === name)?.shortName : name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={window.innerWidth < 768 ? 60 : 70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Share']}
                    contentStyle={{
                      backgroundColor: isDark ? '#1e293b' : '#ffffff',
                      borderColor: isDark ? '#334155' : '#e5e7eb',
                      color: isDark ? '#f1f5f9' : '#1f2937',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="w-full lg:w-full space-y-2 sm:space-y-3 mt-4 lg:mt-0 lg:pl-4">
              {trafficData.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: source.color }}
                    />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {window.innerWidth < 768 ? source.shortName : source.name}
                    </span>
                  </div>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {source.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device Distribution */}
        <div className={`p-3 sm:p-4 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Devices
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {deviceData.map((device, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <device.icon className={`w-4 h-4 mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {device.name}
                    </span>
                  </div>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {device.value}%
                  </span>
                </div>
                <div className={`h-1.5 sm:h-2 rounded-full ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-full rounded-full ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-green-500' : 'bg-purple-500'
                    }`}
                    style={{ width: `${device.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
            <p className={`text-xs sm:text-sm ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
              <span className="font-semibold">Mobile traffic ↑ 15%</span> - Optimize mobile experience
            </p>
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className={`p-3 sm:p-4 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Engagement
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {analyticsData.engagement.map((metric, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  isDark 
                    ? 'bg-slate-800/30 hover:bg-slate-800' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-1.5 sm:p-2 rounded-lg mr-2 ${
                      isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                    }`}>
                      <metric.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {metric.label}
                      </p>
                      <p className={`text-lg sm:text-xl font-bold mt-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {metric.value}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {metric.change.startsWith('+') ? (
                        <FaArrowUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                      ) : (
                        <FaArrowDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500" />
                      )}
                      <span className={`text-xs font-medium ${
                        metric.change.startsWith('+') 
                          ? isDark ? 'text-green-400' : 'text-green-600'
                          : isDark ? 'text-red-400' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      vs last
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Only show on desktop */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Rate Trend */}
        <div className={`p-4 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Conversion Rate Trend
          </h2>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceDataDesktop}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={isDark ? '#334155' : '#e5e7eb'} 
                />
                <XAxis 
                  dataKey="name" 
                  stroke={isDark ? '#94a3b8' : '#6b7280'}
                  fontSize={12}
                />
                <YAxis 
                  stroke={isDark ? '#94a3b8' : '#6b7280'}
                  fontSize={12}
                  domain={[3.0, 4.5]}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Conversion Rate']}
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    borderColor: isDark ? '#334155' : '#e5e7eb',
                    color: isDark ? '#f1f5f9' : '#1f2937',
                    borderRadius: '8px',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Conversion Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity - Hidden on mobile */}
        <div className={`p-4 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Recent Activity
          </h2>
          
          <div className="space-y-4">
            {[
              { action: 'Application submitted', job: 'Full-Stack Developer', time: '2h ago', type: 'application' },
              { action: 'Page view', job: 'Senior AI/ML Engineer', time: '4h ago', type: 'view' },
              { action: 'Job shared', job: 'Cloud Architect', time: '6h ago', type: 'share' },
            ].map((activity, index) => (
              <div 
                key={index}
                className={`flex items-start p-3 rounded-lg ${
                  isDark 
                    ? 'bg-slate-800/30 hover:bg-slate-800' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`p-2 rounded-lg mr-3 ${
                  activity.type === 'application' ? isDark ? 'bg-green-500/20' : 'bg-green-100' :
                  activity.type === 'view' ? isDark ? 'bg-blue-500/20' : 'bg-blue-100' :
                  isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  {activity.type === 'application' && <FaUsers className={`w-4 h-4 ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`} />}
                  {activity.type === 'view' && <FaEye className={`w-4 h-4 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />}
                  {activity.type === 'share' && <FaShareAlt className={`w-4 h-4 ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`} />}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {activity.action}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {activity.job}
                  </p>
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;