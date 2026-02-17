import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaUser, FaLock, FaBell, FaPalette, FaSave, 
  FaDatabase, FaGlobe, FaShieldAlt, FaTrash,
  FaUsers, FaKey, FaEnvelope, FaLanguage,
  FaCalendarAlt, FaCloud, FaDesktop, FaMoon,
  FaSun, FaCheck, FaTimes, FaEye, FaEyeSlash,
  FaUserShield, FaHistory, FaCog, FaDownload,
  FaUpload, FaRedo, FaQuestionCircle, FaInfoCircle,
  FaPhone, FaMapMarkerAlt, FaBuilding,
  FaCreditCard, FaServer, FaCode, FaChartBar,
  FaSyncAlt, FaUserCircle, FaFileExport, FaFileImport,
  FaExclamationTriangle, FaLockOpen, FaUserCheck,
  FaUsersCog, FaNetworkWired, FaShapes, FaSlidersH,
  FaWifi, FaDatabase as FaDb, FaBellSlash,
  FaToggleOn, FaToggleOff, FaBars,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { FaSliders } from 'react-icons/fa6';

const Settings = () => {
  const { isDark, toggleTheme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    // Profile Settings
    username: 'admin',
    email: 'admin@leviticatech.com',
    fullName: 'Admin User',
    jobTitle: 'System Administrator',
    phone: '+1 (555) 123-4567',
    department: 'IT Department',
    location: 'New York, USA',
    
    // Security Settings
    twoFactorEnabled: true,
    sessionTimeout: 30,
    loginNotifications: true,
    passwordLastChanged: '2024-01-15',
    loginAlerts: true,
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    applicationAlerts: true,
    weeklyReports: true,
    marketingEmails: false,
    systemAlerts: true,
    billingAlerts: true,
    
    // Appearance Settings
    theme: isDark ? 'dark' : 'light',
    fontSize: 'medium',
    density: 'comfortable',
    sidebarCollapsed: false,
    animations: true,
    colorScheme: 'blue',
    reducedMotion: false,
    
    // General Settings
    language: 'en',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    autoSave: true,
    saveInterval: 5,
    currency: 'USD',
    units: 'metric',
    
    // Advanced Settings
    apiAccess: false,
    debugMode: false,
    analyticsTracking: true,
    dataRetention: 365,
    cacheEnabled: true,
    logLevel: 'info',
    
    // Workspace Settings
    defaultDashboard: 'overview',
    quickActions: true,
    keyboardShortcuts: true,
    sidebarPosition: 'left',
    
    // Integration Settings
    slackIntegration: false,
    githubIntegration: false,
    googleCalendar: false,
    jiraIntegration: false,
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: FaUser,
      color: 'blue'
    },
    { 
      id: 'security', 
      label: 'Security', 
      icon: FaShieldAlt,
      color: 'red'
    },
    { 
      id: 'notifications', 
      label: 'Notifications', 
      icon: FaBell,
      color: 'purple'
    },
    { 
      id: 'appearance', 
      label: 'Appearance', 
      icon: FaPalette,
      color: 'orange'
    },
    { 
      id: 'general', 
      label: 'General', 
      icon: FaCog,
      color: 'green'
    },
    { 
      id: 'workspace', 
      label: 'Workspace', 
      icon: FaDesktop,
      color: 'cyan'
    },
    { 
      id: 'integrations', 
      label: 'Integrations', 
      icon: FaNetworkWired,
      color: 'pink'
    },
    { 
      id: 'advanced', 
      label: 'Advanced', 
      icon: FaDatabase,
      color: 'gray'
    },
  ];

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('adminSettings');
    if (savedSettings) {
      setSettings(prev => ({ ...prev, ...JSON.parse(savedSettings) }));
    }
  }, []);

  // Sync theme with settings
  useEffect(() => {
    if (settings.theme === 'dark' && !isDark) {
      setTheme('dark');
    } else if (settings.theme === 'light' && isDark) {
      setTheme('light');
    }
  }, [settings.theme, isDark, setTheme]);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      localStorage.setItem('adminSettings', JSON.stringify(settings));
      
      if (settings.theme === 'dark' && !isDark) {
        setTheme('dark');
      } else if (settings.theme === 'light' && isDark) {
        setTheme('light');
      }
      
      toast.success('Settings saved successfully!', {
        icon: '✅',
        style: {
          background: isDark ? '#1e293b' : '#ffffff',
          color: isDark ? '#f1f5f9' : '#1f2937',
          border: isDark ? '1px solid #334155' : '1px solid #e5e7eb',
        },
      });
    } catch (error) {
      toast.error('Failed to save settings. Please try again.', {
        icon: '❌',
        style: {
          background: isDark ? '#1e293b' : '#ffffff',
          color: isDark ? '#f1f5f9' : '#1f2937',
          border: isDark ? '1px solid #334155' : '1px solid #e5e7eb',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      const defaultSettings = {
        username: 'admin',
        email: 'admin@leviticatech.com',
        theme: 'light',
        language: 'en',
        timezone: 'UTC',
        autoSave: true,
        emailNotifications: true,
      };
      setSettings(defaultSettings);
      localStorage.removeItem('adminSettings');
      toast.success('Settings reset to default!');
    }
  };

  const ToggleSwitch = ({ isChecked, onChange, disabled = false, color = 'blue' }) => {
    const bgColor = isDark 
      ? isChecked 
        ? color === 'blue' ? 'bg-blue-600' : 
          color === 'green' ? 'bg-green-600' : 
          color === 'purple' ? 'bg-purple-600' : 
          color === 'orange' ? 'bg-orange-600' : 
          color === 'red' ? 'bg-red-600' : 
          color === 'cyan' ? 'bg-cyan-600' : 
          'bg-blue-600'
        : 'bg-slate-700'
      : isChecked 
        ? color === 'blue' ? 'bg-blue-600' : 
          color === 'green' ? 'bg-green-600' : 
          color === 'purple' ? 'bg-purple-600' : 
          color === 'orange' ? 'bg-orange-600' : 
          color === 'red' ? 'bg-red-600' : 
          color === 'cyan' ? 'bg-cyan-600' : 
          'bg-blue-600'
        : 'bg-gray-300';

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${bgColor} ${isDark ? 'focus:ring-blue-500 focus:ring-offset-slate-900' : 'focus:ring-blue-500 focus:ring-offset-white'}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isChecked ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    );
  };

  // Mobile Tab Selector
  const MobileTabSelector = () => {
    const currentTab = tabs.find(t => t.id === activeTab);
    const Icon = currentTab?.icon || FaCog;
    
    return (
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`w-full flex items-center justify-between p-4 rounded-lg ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'}`}
        >
          <div className="flex items-center gap-3">
            <Icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {currentTab?.label}
            </span>
          </div>
          {isMobileMenuOpen ? (
            <FaChevronUp className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
          ) : (
            <FaChevronDown className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
          )}
        </button>
        
        {isMobileMenuOpen && (
          <div className={`mt-2 rounded-lg overflow-hidden ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'}`}>
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-4 border-b last:border-b-0 ${isDark ? 'border-slate-700 hover:bg-slate-700' : 'border-gray-200 hover:bg-gray-50'} ${
                    activeTab === tab.id ? (isDark ? 'bg-blue-600/20' : 'bg-blue-50') : ''
                  }`}
                >
                  <TabIcon className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-blue-500" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Picture - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <div className="mb-6">
          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Profile Picture
          </h3>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Update your profile image
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center ${isDark ? 'bg-slate-800 border-2 border-slate-700' : 'bg-gray-100 border-2 border-gray-300'}`}>
            <FaUserCircle className={`w-16 h-16 sm:w-24 sm:h-24 ${isDark ? 'text-slate-600' : 'text-gray-400'}`} />
          </div>
          
          <div className="flex-1 space-y-4 w-full">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Upload a new profile picture (JPG, PNG, GIF) - Max 2MB
            </p>
            <div className="flex flex-wrap gap-3">
              <button className={`px-4 py-2.5 rounded-lg text-sm font-medium flex-1 min-w-[140px] ${isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                Upload Photo
              </button>
              <button className={`px-4 py-2.5 rounded-lg text-sm font-medium flex-1 min-w-[140px] ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Personal Information
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="col-span-full sm:col-span-1">
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Full Name *
            </label>
            <input
              type="text"
              value={settings.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="col-span-full sm:col-span-1">
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Email Address *
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="col-span-full sm:col-span-1">
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Job Title
            </label>
            <input
              type="text"
              value={settings.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
              placeholder="Enter your job title"
            />
          </div>
          
          <div className="col-span-full sm:col-span-1">
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Phone Number
            </label>
            <input
              type="tel"
              value={settings.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="col-span-full sm:col-span-1">
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Department
            </label>
            <input
              type="text"
              value={settings.department}
              onChange={(e) => handleChange('department', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
              placeholder="Enter your department"
            />
          </div>

          <div className="col-span-full sm:col-span-1">
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Location
            </label>
            <input
              type="text"
              value={settings.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-all text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }`}
              placeholder="Enter your location"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      {/* Password Change - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Change Password
        </h3>
        
        <div className="space-y-4">
          {['current', 'new', 'confirm'].map((field) => (
            <div key={field}>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {field === 'current' ? 'Current Password' : 
                 field === 'new' ? 'New Password' : 'Confirm New Password'}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword[field] ? 'text' : 'password'}
                  value={password[field]}
                  onChange={(e) => setPassword(prev => ({ ...prev, [field]: e.target.value }))}
                  className={`w-full px-4 py-3 pr-10 rounded-lg border transition-all text-sm md:text-base ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                  }`}
                  placeholder={`Enter ${field === 'current' ? 'current' : 'new'} password`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => ({ ...prev, [field]: !prev[field] }))}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 ${
                    isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {showPassword[field] ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          ))}
          
          <button
            onClick={() => {
              if (password.new !== password.confirm) {
                toast.error('New passwords do not match!');
                return;
              }
              if (password.new.length < 8) {
                toast.error('Password must be at least 8 characters long.');
                return;
              }
              toast.success('Password updated successfully!');
              setPassword({ current: '', new: '', confirm: '' });
            }}
            className={`w-full px-4 py-3 rounded-lg font-medium transition-all text-sm md:text-base ${
              isDark
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            Update Password
          </button>
        </div>
      </div>

      {/* Security Features - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Security Features
        </h3>
        
        <div className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className={`p-2.5 rounded-lg flex-shrink-0 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
                <FaUserCheck className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                  Two-Factor Authentication
                </h4>
                <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch 
                isChecked={settings.twoFactorEnabled} 
                onChange={() => handleToggle('twoFactorEnabled')}
                color="green"
              />
            </div>
          </div>

          {/* Login Notifications */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className={`p-2.5 rounded-lg flex-shrink-0 ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                <FaBell className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                  Login Notifications
                </h4>
                <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Get notified when someone logs into your account
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch 
                isChecked={settings.loginNotifications} 
                onChange={() => handleToggle('loginNotifications')}
                color="blue"
              />
            </div>
          </div>

          {/* Session Timeout */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className={`p-2.5 rounded-lg flex-shrink-0 ${isDark ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
                <FaHistory className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
              </div>
              <div className="flex-1">
                <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                  Session Timeout
                </h4>
                <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Automatic logout after {settings.sessionTimeout} minutes of inactivity
                </p>
              </div>
            </div>
            <input
              type="range"
              min="5"
              max="120"
              step="5"
              value={settings.sessionTimeout}
              onChange={(e) => handleChange('sessionTimeout', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs md:text-sm mt-2">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>5 min</span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>120 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Notification Preferences
        </h3>
        
        <div className="space-y-4">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email', icon: FaEnvelope, color: 'blue' },
            { key: 'pushNotifications', label: 'Push Notifications', description: 'Browser push notifications', icon: FaBell, color: 'purple' },
            { key: 'applicationAlerts', label: 'Application Alerts', description: 'New job application notifications', icon: FaUsers, color: 'green' },
            { key: 'systemAlerts', label: 'System Alerts', description: 'Critical system notifications', icon: FaExclamationTriangle, color: 'red' },
            { key: 'weeklyReports', label: 'Weekly Reports', description: 'Receive weekly analytics reports', icon: FaChartBar, color: 'orange' },
            { key: 'billingAlerts', label: 'Billing Alerts', description: 'Payment and billing notifications', icon: FaCreditCard, color: 'cyan' },
            { key: 'marketingEmails', label: 'Marketing Emails', description: 'Product updates and promotions', icon: FaEnvelope, color: 'pink' },
          ].map((item) => (
            <div key={item.key} className="flex items-start justify-between gap-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/30">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
                  <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base truncate`}>
                    {item.label}
                  </h4>
                  <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <ToggleSwitch 
                  isChecked={settings[item.key]} 
                  onChange={() => handleToggle(item.key)}
                  color={item.color}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      {/* Theme Selection - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Theme & Colors
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { id: 'light', label: 'Light', icon: FaSun, description: 'Bright and clear' },
            { id: 'dark', label: 'Dark', icon: FaMoon, description: 'Easy on the eyes' },
            { id: 'auto', label: 'Auto', icon: FaDesktop, description: 'Follow system theme' },
          ].map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleChange('theme', theme.id)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                settings.theme === theme.id
                  ? isDark
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-blue-500 bg-blue-50'
                  : isDark
                    ? 'border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
                  <theme.icon className={`w-5 h-5 ${
                    theme.id === 'light' ? 'text-yellow-500' : 
                    theme.id === 'dark' ? 'text-blue-400' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                    {theme.label}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {theme.description}
                  </div>
                </div>
              </div>
              {settings.theme === theme.id && (
                <div className="flex items-center justify-center">
                  <div className="px-2 py-1 rounded-full bg-green-500 text-white text-xs">
                    Active
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Font Size
            </label>
            <select
              value={settings.fontSize}
              onChange={(e) => handleChange('fontSize', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xlarge">Extra Large</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Interface Density
            </label>
            <select
              value={settings.density}
              onChange={(e) => handleChange('density', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="compact">Compact</option>
              <option value="comfortable">Comfortable</option>
              <option value="spacious">Spacious</option>
            </select>
          </div>
        </div>
      </div>

      {/* UI Preferences - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          UI Preferences
        </h3>
        
        <div className="space-y-4">
          {[
            { key: 'animations', label: 'Animations', description: 'Enable interface animations and transitions', color: 'purple' },
            { key: 'reducedMotion', label: 'Reduced Motion', description: 'Minimize animations for accessibility', color: 'blue' },
            { key: 'sidebarCollapsed', label: 'Collapse Sidebar', description: 'Keep sidebar collapsed by default', color: 'green' },
          ].map((item) => (
            <div key={item.key} className="flex items-start justify-between gap-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/30">
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                  {item.label}
                </h4>
                <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <ToggleSwitch 
                  isChecked={settings[item.key]} 
                  onChange={() => handleToggle(item.key)}
                  color={item.color}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGeneralTab = () => (
    <div className="space-y-6">
      {/* Language & Region - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Language & Region
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Language
            </label>
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
              <option value="zh">Chinese</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Timezone
            </label>
            <select
              value={settings.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="UTC">UTC</option>
              <option value="EST">EST (New York)</option>
              <option value="CST">CST (Chicago)</option>
              <option value="PST">PST (Los Angeles)</option>
              <option value="GMT">GMT (London)</option>
              <option value="CET">CET (Paris)</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Date Format
            </label>
            <select
              value={settings.dateFormat}
              onChange={(e) => handleChange('dateFormat', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Time Format
            </label>
            <select
              value={settings.timeFormat}
              onChange={(e) => handleChange('timeFormat', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="12h">12-hour (AM/PM)</option>
              <option value="24h">24-hour</option>
            </select>
          </div>
        </div>
      </div>

      {/* Auto-save - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Auto-save Settings
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                Enable Auto-save
              </h4>
              <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Automatically save changes while editing
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch 
                isChecked={settings.autoSave} 
                onChange={() => handleToggle('autoSave')}
                color="green"
              />
            </div>
          </div>

          {settings.autoSave && (
            <div>
              <div className="mb-4">
                <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                  Auto-save Interval: {settings.saveInterval} minutes
                </h4>
                <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  How often to automatically save changes
                </p>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={settings.saveInterval}
                onChange={(e) => handleChange('saveInterval', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs md:text-sm mt-2">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>1 min</span>
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>30 min</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderWorkspaceTab = () => (
    <div className="space-y-6">
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Workspace Configuration
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Default Dashboard
            </label>
            <select
              value={settings.defaultDashboard}
              onChange={(e) => handleChange('defaultDashboard', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="overview">Overview</option>
              <option value="analytics">Analytics</option>
              <option value="monitoring">Monitoring</option>
              <option value="reports">Reports</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Sidebar Position
            </label>
            <select
              value={settings.sidebarPosition}
              onChange={(e) => handleChange('sidebarPosition', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              }`}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { key: 'quickActions', label: 'Quick Actions', description: 'Show quick action buttons in the header', color: 'blue' },
            { key: 'keyboardShortcuts', label: 'Keyboard Shortcuts', description: 'Enable keyboard shortcuts for common actions', color: 'purple' },
          ].map((item) => (
            <div key={item.key} className="flex items-start justify-between gap-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/30">
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                  {item.label}
                </h4>
                <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <ToggleSwitch 
                  isChecked={settings[item.key]} 
                  onChange={() => handleToggle(item.key)}
                  color={item.color}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIntegrationsTab = () => (
    <div className="space-y-6">
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Connected Services
        </h3>
        
        <div className="space-y-4">
          {[
            { key: 'slackIntegration', label: 'Slack', description: 'Connect with Slack workspace for notifications', icon: FaSlidersH, color: 'purple' },
            { key: 'githubIntegration', label: 'GitHub', description: 'Sync with GitHub repositories and issues', icon: FaCode, color: 'gray' },
            { key: 'googleCalendar', label: 'Google Calendar', description: 'Sync calendar events and meetings', icon: FaCalendarAlt, color: 'blue' },
            { key: 'jiraIntegration', label: 'Jira', description: 'Connect with Jira projects and tickets', icon: FaShapes, color: 'blue' },
          ].map((integration) => (
            <div key={integration.key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/30">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
                  <integration.icon className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                    {integration.label}
                  </h4>
                  <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {integration.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 self-start sm:self-center">
                <ToggleSwitch 
                  isChecked={settings[integration.key]} 
                  onChange={() => handleToggle(integration.key)}
                  color={integration.color}
                />
                <button className={`px-3 py-1.5 rounded-lg text-xs md:text-sm whitespace-nowrap ${
                  isDark
                    ? 'bg-slate-700 hover:bg-slate-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}>
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdvancedTab = () => (
    <div className="space-y-6">
      {/* System Settings - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          System Settings
        </h3>
        
        <div className="space-y-4">
          {[
            { key: 'apiAccess', label: 'API Access', description: 'Enable REST API access for integrations', icon: FaServer, color: 'blue' },
            { key: 'debugMode', label: 'Debug Mode', description: 'Enable detailed error logging and debugging', icon: FaCode, color: 'yellow' },
            { key: 'analyticsTracking', label: 'Analytics Tracking', description: 'Collect anonymous usage analytics', icon: FaChartBar, color: 'purple' },
            { key: 'cacheEnabled', label: 'Cache System', description: 'Enable response caching for better performance', icon: FaDatabase, color: 'green' },
          ].map((item) => (
            <div key={item.key} className="flex items-start justify-between gap-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800/30">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDark ? 'bg-slate-800' : 'bg-gray-100'}`}>
                  <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                    {item.label}
                  </h4>
                  <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <ToggleSwitch 
                  isChecked={settings[item.key]} 
                  onChange={() => handleToggle(item.key)}
                  color={item.color}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Management - Mobile Optimized */}
      <div className={`p-4 md:p-6 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Data Management
        </h3>
        
        <div className="space-y-6">
          <div>
            <div className="mb-4">
              <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>
                Data Retention Period: {settings.dataRetention} days
              </h4>
              <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                How long to keep user data and logs
              </p>
            </div>
            <input
              type="range"
              min="30"
              max="730"
              step="30"
              value={settings.dataRetention}
              onChange={(e) => handleChange('dataRetention', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs md:text-sm mt-2">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>30 days</span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>2 years</span>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
              <FaExclamationTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
              <div className="flex-1">
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-red-300' : 'text-red-700'} text-sm md:text-base`}>
                  Danger Zone
                </h4>
                <p className={`text-xs md:text-sm mb-4 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  This will permanently delete all your settings and cached data. This action cannot be undone.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className={`px-4 py-2.5 rounded-lg text-sm font-medium flex-1 min-w-[140px] ${isDark ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}>
                    Clear All Data
                  </button>
                  <button className={`px-4 py-2.5 rounded-lg text-sm font-medium flex-1 min-w-[140px] ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
                    Export Data First
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile': return renderProfileTab();
      case 'security': return renderSecurityTab();
      case 'notifications': return renderNotificationsTab();
      case 'appearance': return renderAppearanceTab();
      case 'general': return renderGeneralTab();
      case 'workspace': return renderWorkspaceTab();
      case 'integrations': return renderIntegrationsTab();
      case 'advanced': return renderAdvancedTab();
      default: return renderProfileTab();
    }
  };

  return (
    <div className="p-4 sm:p-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Settings
        </h1>
        <p className={`mt-1 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Manage your account settings and preferences
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Mobile Tab Selector */}
        <MobileTabSelector />

        {/* Desktop Tabs Navigation */}
        <div className="hidden lg:block mb-6">
          <div className={`rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200'}`}>
            <div className="flex overflow-x-auto scrollbar-thin">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[120px] flex items-center justify-center gap-3 px-4 py-3 transition-all duration-300 border-b-2 whitespace-nowrap ${
                      isActive
                        ? isDark
                          ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                          : 'border-blue-600 text-blue-600 bg-blue-50'
                        : `border-transparent ${isDark ? 'text-gray-400 hover:text-white hover:bg-slate-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="pb-6">
            {renderTabContent()}
          </div>
        </div>

        {/* Action Buttons - Mobile Optimized */}
        <div className={`mt-6 p-4 sm:p-6 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200'}`}>
          <div className="space-y-4">
            {/* Quick Actions Row */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleReset}
                className={`px-4 py-2.5 rounded-lg font-medium transition-colors flex-1 min-w-[120px] flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-slate-700 hover:bg-slate-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                <FaRedo className="w-4 h-4" />
                <span className="text-sm">Reset</span>
              </button>
              
              <label className={`px-4 py-2.5 rounded-lg font-medium cursor-pointer transition-colors flex-1 min-w-[120px] flex items-center justify-center gap-2 ${
                isDark
                  ? 'bg-slate-700 hover:bg-slate-600 text-gray-300'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}>
                <FaFileImport className="w-4 h-4" />
                <span className="text-sm">Import</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        try {
                          const importedSettings = JSON.parse(e.target.result);
                          setSettings(prev => ({ ...prev, ...importedSettings }));
                          toast.success('Settings imported successfully!');
                        } catch (error) {
                          toast.error('Invalid settings file format.');
                        }
                      };
                      reader.readAsText(file);
                    }
                  }}
                  className="hidden"
                />
              </label>
              
              <button
                onClick={() => {
                  const dataStr = JSON.stringify(settings, null, 2);
                  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                  const exportFileDefaultName = `settings-${new Date().toISOString().split('T')[0]}.json`;
                  
                  const linkElement = document.createElement('a');
                  linkElement.setAttribute('href', dataUri);
                  linkElement.setAttribute('download', exportFileDefaultName);
                  linkElement.click();
                  
                  toast.success('Settings exported successfully!');
                }}
                className={`px-4 py-2.5 rounded-lg font-medium transition-colors flex-1 min-w-[120px] flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-slate-700 hover:bg-slate-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                <FaFileExport className="w-4 h-4" />
                <span className="text-sm">Export</span>
              </button>
            </div>

            {/* Save Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <FaInfoCircle className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Settings are saved to your browser
                </p>
              </div>
              
              <button
                onClick={handleSave}
                disabled={isLoading}
                className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  isLoading
                    ? 'bg-blue-500/70 cursor-not-allowed'
                    : isDark
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg'
                }`}
              >
                <FaSave className="w-5 h-5" />
                <span className="text-sm sm:text-base">
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;