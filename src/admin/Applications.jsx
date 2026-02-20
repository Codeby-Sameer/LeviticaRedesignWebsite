import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getApplications } from "../api/applications"; 
import { 
  FaEnvelope, FaPhone, FaFileAlt, FaCalendar, FaDownload,
  FaCheck, FaTimes, FaEye, FaTrash, FaUser, FaBriefcase,
  FaLinkedin, FaGithub, FaGlobe, FaMapMarkerAlt, FaBuilding,
  FaGraduationCap, FaMoneyBill, FaSearch, FaFilter,
  FaFilePdf, FaFileWord, FaFile, FaStar,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Applications = () => {
  const { isDark } = useTheme();
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'appliedAt', direction: 'descending' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Load applications from localStorage
  

useEffect(() => {
  const loadApplications = async () => {
    try {
      const response = await getApplications({
        skip: 0,
        limit: 20,
      });

      // IMPORTANT: because backend is paginated
      setApplications(response.data.items);

    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  loadApplications();

}, []);


  // Sort applications
  const sortedApplications = [...applications].sort((a, b) => {
    if (sortConfig.key === 'date') {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortConfig.direction === 'ascending' ? dateA - dateB : dateB - dateA;
    }
    
    if (sortConfig.key === 'name') {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortConfig.direction === 'ascending' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    }
    
    if (sortConfig.key === 'status') {
      const statusOrder = { 'pending': 0, 'reviewed': 1, 'shortlisted': 2, 'interview': 3, 'accepted': 4, 'rejected': 5 };
      const orderA = statusOrder[a.status] || 6;
      const orderB = statusOrder[b.status] || 6;
      return sortConfig.direction === 'ascending' ? orderA - orderB : orderB - orderA;
    }
    
    return 0;
  });

  // Filter applications
  const filteredApplications = sortedApplications.filter(app => {
    const matchesFilter = filter === 'all' || app.status === filter;
    const matchesSearch = searchTerm === '' || 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700';
      case 'reviewed': return isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700';
      case 'shortlisted': return isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700';
      case 'interview': return isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-700';
      case 'accepted': return isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700';
      case 'rejected': return isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700';
      default: return isDark ? 'bg-gray-500/20 text-gray-400' : 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'pending': return 'Pending';
      case 'reviewed': return 'Reviewed';
      case 'shortlisted': return 'Shortlisted';
      case 'interview': return 'Interview';
      case 'accepted': return 'Accepted';
      case 'rejected': return 'Rejected';
      default: return 'Unknown';
    }
  };

  const updateApplicationStatus = (id, newStatus) => {
    const updatedApps = applications.map(app => 
      app.id === id ? { ...app, status: newStatus, updatedAt: new Date().toISOString() } : app
    );
    setApplications(updatedApps);
    localStorage.setItem('leviticaApplications', JSON.stringify(updatedApps));
    
    if (selectedApp?.id === id) {
      setSelectedApp({ ...selectedApp, status: newStatus });
    }
  };

  const deleteApplication = (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      const updatedApps = applications.filter(app => app.id !== id);
      setApplications(updatedApps);
      localStorage.setItem('leviticaApplications', JSON.stringify(updatedApps));
      if (selectedApp?.id === id) {
        setSelectedApp(null);
      }
    }
  };

  const viewApplicationDetails = (app) => {
    setSelectedApp(app);
  };

  const closeDetails = () => {
    setSelectedApp(null);
  };

  // Calculate stats
  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewed: applications.filter(app => app.status === 'reviewed').length,
    shortlisted: applications.filter(app => app.status === 'shortlisted').length,
    interview: applications.filter(app => app.status === 'interview').length,
    accepted: applications.filter(app => app.status === 'accepted').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
  };

  // Handle resume download
  const handleResumeDownload = (app) => {
    if (app.resumeFile) {
      try {
        const byteCharacters = atob(app.resumeFile.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${app.name.replace(/\s+/g, '_')}_resume.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        alert(`Would download resume for ${app.name}`);
      }
    } else {
      alert(`Would download resume for ${app.name}`);
    }
  };

  // Get file icon based on file type
  const getFileIcon = (fileName) => {
    if (!fileName) return FaFile;
    if (fileName.toLowerCase().endsWith('.pdf')) return FaFilePdf;
    if (fileName.toLowerCase().endsWith('.doc') || fileName.toLowerCase().endsWith('.docx')) return FaFileWord;
    return FaFile;
  };

  // Get file color based on file type
  const getFileColor = (fileName) => {
    if (!fileName) return isDark ? 'text-gray-400' : 'text-gray-600';
    if (fileName.toLowerCase().endsWith('.pdf')) return 'text-red-500';
    if (fileName.toLowerCase().endsWith('.doc') || fileName.toLowerCase().endsWith('.docx')) return 'text-blue-500';
    return isDark ? 'text-gray-400' : 'text-gray-600';
  };

  // Mobile card view for applications
  const ApplicationCard = ({ app }) => {
    const FileIcon = getFileIcon(app.resumeName);
    const fileColor = getFileColor(app.resumeName);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full rounded-lg p-3 mb-3 border ${isDark 
          ? 'bg-slate-800 border-slate-700' 
          : 'bg-white border-gray-200 shadow-sm'}`}
      >
        <div className="space-y-2">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className={`font-semibold text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {app.name}
                  </h3>
                  <p className={`text-xs mt-1 truncate ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {app.email}
                  </p>
                </div>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(app.status)}`}>
                  {getStatusText(app.status)}
                </span>
              </div>
              
              <div className="mt-1 space-y-0.5">
                <p className={`font-medium text-xs truncate ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                  {app.jobTitle}
                </p>
                <p className={`text-xs truncate ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  {app.jobDepartment}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center min-w-0">
              <FaPhone className={`w-3 h-3 mr-1 flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-600'}`} />
              <span className={`truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{app.phone}</span>
            </div>
            <div className="flex items-center min-w-0">
              <FaCalendar className={`w-3 h-3 mr-1 flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-600'}`} />
              <span className={`truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{app.date}</span>
            </div>
          </div>

          {/* Resume Info */}
          {app.resumeName && (
            <div className={`flex items-center justify-between p-1.5 rounded ${isDark ? 'bg-slate-900/50' : 'bg-gray-100'}`}>
              <div className="flex items-center min-w-0 flex-1">
                <FileIcon className={`w-3 h-3 mr-1.5 flex-shrink-0 ${fileColor}`} />
                <span className={`text-xs truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {app.resumeName}
                </span>
              </div>
              <button
                onClick={() => handleResumeDownload(app)}
                className={`p-1 rounded flex-shrink-0 ml-1.5 ${isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                <FaDownload className="w-2.5 h-2.5" />
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between pt-1.5 border-t border-gray-200 dark:border-slate-700">
            <button
              onClick={() => viewApplicationDetails(app)}
              className={`flex-1 mx-0.5 px-2 py-1.5 rounded font-medium text-xs truncate ${isDark 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              View
            </button>
            <div className="flex space-x-0.5 flex-shrink-0">
              <button
                onClick={() => updateApplicationStatus(app.id, 'accepted')}
                className={`p-1.5 rounded ${isDark
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'}`}
                title="Accept"
              >
                <FaCheck className="w-2.5 h-2.5" />
              </button>
              <button
                onClick={() => updateApplicationStatus(app.id, 'rejected')}
                className={`p-1.5 rounded ${isDark
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'}`}
                title="Reject"
              >
                <FaTimes className="w-2.5 h-2.5" />
              </button>
              <button
                onClick={() => deleteApplication(app.id)}
                className={`p-1.5 rounded ${isDark
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'}`}
                title="Delete"
              >
                <FaTrash className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen p-2 w-full ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="p-2 md:p-1 space-y-4">
        {/* Header */}
        <div>
          <h1 className={`text-xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Job Applications
          </h1>
          <p className={`mt-1 text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Review and manage job applications ({applications.length} total)
          </p>
        </div>

        {/* Mobile Stats View */}
        <div className="md:hidden">
          <div className={`w-full rounded-lg mb-3 ${isDark ? 'bg-slate-800' : 'bg-white shadow'}`}>
            <div className="flex justify-between items-center p-3">
              <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Application Stats
              </h3>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-1.5 rounded ${isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {mobileMenuOpen ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
              </button>
            </div>
            
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-3 gap-1.5 p-3 pt-0">
                    {[
                      { label: 'Total', value: stats.total, color: 'blue' },
                      { label: 'Pending', value: stats.pending, color: 'yellow' },
                      { label: 'Reviewed', value: stats.reviewed, color: 'blue' },
                      { label: 'Shortlisted', value: stats.shortlisted, color: 'purple' },
                      { label: 'Interview', value: stats.interview, color: 'indigo' },
                      { label: 'Accepted', value: stats.accepted, color: 'green' },
                      { label: 'Rejected', value: stats.rejected, color: 'red' },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded text-center ${isDark 
                          ? 'bg-slate-700' 
                          : 'bg-gray-100'}`}
                      >
                        <div className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {stat.value}
                        </div>
                        <div className={`text-[10px] mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Stats View */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4">
          {[
            { label: 'Total', value: stats.total, color: 'blue' },
            { label: 'Pending', value: stats.pending, color: 'yellow' },
            { label: 'Reviewed', value: stats.reviewed, color: 'blue' },
            { label: 'Shortlisted', value: stats.shortlisted, color: 'purple' },
            { label: 'Interview', value: stats.interview, color: 'indigo' },
            { label: 'Accepted', value: stats.accepted, color: 'green' },
            { label: 'Rejected', value: stats.rejected, color: 'red' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-3 md:p-4 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200 shadow-sm'}`}
            >
              <p className={`text-xs md:text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
              <p className={`text-xl md:text-2xl font-bold mt-1 md:mt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Search and Filter */}
        <div className="md:hidden space-y-3">
          <div className={`w-full rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white shadow'}`}>
            <div className="flex items-center p-2">
              <FaSearch className={`w-3.5 h-3.5 mr-2 flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-600'}`} />
              <input
                type="text"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full bg-transparent outline-none text-xs ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}`}
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`w-full flex items-center justify-between p-2 border-t ${isDark ? 'border-slate-700 hover:bg-slate-700' : 'border-gray-200 hover:bg-gray-100'}`}
            >
              <div className="flex items-center">
                <FaFilter className={`w-3.5 h-3.5 mr-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Filter: {filter === 'all' ? 'All' : getStatusText(filter)}
                </span>
              </div>
              <FaChevronDown className={`w-3 h-3 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-1.5 p-2">
                    <button
                      onClick={() => setFilter('all')}
                      className={`p-1.5 rounded text-xs font-medium truncate ${filter === 'all'
                        ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                        : isDark ? 'bg-slate-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      All
                    </button>
                    {['pending', 'reviewed', 'shortlisted', 'interview', 'accepted', 'rejected'].map(status => (
                      <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`p-1.5 rounded text-xs font-medium truncate ${filter === status
                          ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                          : isDark ? 'bg-slate-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {getStatusText(status)}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Search and Filter */}
        <div className={`hidden md:block p-4 rounded-xl ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white border border-gray-200 shadow-sm'}`}>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-600'}`} />
                <input
                  type="text"
                  placeholder="Search by name, email, or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${isDark 
                    ? 'bg-slate-900 border-slate-700 text-white placeholder-gray-500 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'}`}
                />
              </div>
            </div>
            
            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${filter === 'all'
                  ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                  : isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {['pending', 'reviewed', 'shortlisted', 'interview', 'accepted', 'rejected'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${filter === status
                    ? isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                    : isDark ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {getStatusText(status)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Applications List */}
        <div className="md:hidden">
          {filteredApplications.length === 0 ? (
            <div className={`w-full text-center py-6 border-2 border-dashed rounded-lg ${isDark ? 'border-slate-700' : 'border-gray-300'}`}>
              <FaFileAlt className={`w-10 h-10 mx-auto mb-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
              <h3 className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {applications.length === 0 ? 'No applications yet' : 'No matching applications'}
              </h3>
              <p className={`text-xs px-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {applications.length === 0 
                  ? 'Applications will appear here when candidates apply'
                  : 'Try changing your search or filter criteria'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Showing {filteredApplications.length} of {applications.length} applications
              </p>
              {filteredApplications.map((app) => (
                <ApplicationCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>

        {/* Desktop Applications Table */}
        <div className={`hidden md:block rounded-lg overflow-hidden border ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
          <div className={`overflow-x-auto ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
            <table className="w-full min-w-max">
              <thead>
                <tr className={`border-b ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
                  <th className={`text-left py-3 px-4 font-semibold whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Applicant
                  </th>
                  <th className={`text-left py-3 px-4 font-semibold whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Position
                  </th>
                  <th className={`text-left py-3 px-4 font-semibold whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Status
                  </th>
                  <th className={`text-left py-3 px-4 font-semibold whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Date Applied
                  </th>
                  <th className={`text-center py-3 px-4 font-semibold whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Resume
                  </th>
                  <th className={`text-center py-3 px-4 font-semibold whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => {
                  const FileIcon = getFileIcon(app.resumeName);
                  const fileColor = getFileColor(app.resumeName);
                  
                  return (
                    <motion.tr
                      key={app.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`border-b last:border-0 ${isDark 
                        ? 'border-slate-700 hover:bg-slate-800/50' 
                        : 'border-gray-200 hover:bg-gray-50'}`}
                    >
                      <td className="py-3 px-4">
                        <div>
                          <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {app.name}
                          </div>
                          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <div className="flex items-center">
                              <FaEnvelope className="w-3 h-3 mr-1" />
                              <span className="truncate max-w-[200px] block">{app.email}</span>
                            </div>
                            <div className="flex items-center">
                              <FaPhone className="w-3 h-3 mr-1" />
                              <span className="truncate max-w-[200px] block">{app.phone}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={`py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="font-medium truncate max-w-[200px]">{app.jobTitle}</div>
                        <div className="text-sm opacity-75 truncate max-w-[200px]">{app.jobDepartment}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                          {getStatusText(app.status)}
                        </span>
                      </td>
                      <td className={`py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="flex items-center">
                          <FaCalendar className="w-3 h-3 mr-2" />
                          {app.date}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {app.resumeName ? (
                          <button
                            onClick={() => handleResumeDownload(app)}
                            className={`flex items-center px-3 py-1 rounded-lg text-sm font-medium ${isDark 
                              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                              : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                          >
                            <FileIcon className={`w-4 h-4 mr-2 ${fileColor}`} />
                            Download
                          </button>
                        ) : (
                          <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                            No resume
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => viewApplicationDetails(app)}
                            className={`p-2 rounded-lg ${isDark
                              ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-500/20'
                              : 'text-blue-600 hover:text-blue-700 hover:bg-blue-100'}`}
                            title="View Details"
                          >
                            <FaEye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateApplicationStatus(app.id, 'accepted')}
                            className={`p-2 rounded-lg ${isDark
                              ? 'text-green-400 hover:text-green-300 hover:bg-green-500/20'
                              : 'text-green-600 hover:text-green-700 hover:bg-green-100'}`}
                            title="Accept"
                          >
                            <FaCheck className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateApplicationStatus(app.id, 'rejected')}
                            className={`p-2 rounded-lg ${isDark
                              ? 'text-red-400 hover:text-red-300 hover:bg-red-500/20'
                              : 'text-red-600 hover:text-red-700 hover:bg-red-100'}`}
                            title="Reject"
                          >
                            <FaTimes className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteApplication(app.id)}
                            className={`p-2 rounded-lg ${isDark
                              ? 'text-red-400 hover:text-red-300 hover:bg-red-500/20'
                              : 'text-red-600 hover:text-red-700 hover:bg-red-100'}`}
                            title="Delete"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State for Desktop */}
        {filteredApplications.length === 0 && (
          <div className={`hidden md:block text-center py-12 border-2 border-dashed rounded-xl ${isDark ? 'border-slate-700' : 'border-gray-300'}`}>
            <FaFileAlt className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {applications.length === 0 ? 'No applications yet' : 'No matching applications'}
            </h3>
            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {applications.length === 0 
                ? 'Applications will appear here when candidates apply'
                : 'Try changing your search or filter criteria'
              }
            </p>
          </div>
        )}

        {/* Application Details Modal */}
        <AnimatePresence>
          {selectedApp && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`w-full max-w-full md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}
              >
                {/* Modal Header */}
                <div className={`sticky top-0 z-10 p-3 md:p-6 border-b ${isDark ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-white'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1 mr-3 min-w-0">
                      <h2 className={`text-base md:text-2xl font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {selectedApp.name}
                      </h2>
                      <p className={`mt-0.5 text-xs md:text-base truncate ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Applied for {selectedApp.jobTitle}
                      </p>
                    </div>
                    <button
                      onClick={closeDetails}
                      className={`p-1.5 md:p-2 rounded flex-shrink-0 ${isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-200'}`}
                    >
                      <FaTimes className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-3 md:p-6 space-y-4">
                  {/* Status Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className={`text-xs md:text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Application Status:
                      </span>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getStatusColor(selectedApp.status)}`}>
                          {getStatusText(selectedApp.status)}
                        </span>
                        <div className="text-xs md:text-sm">
                          Applied on {selectedApp.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1.5 md:gap-2 flex-shrink-0">
                      <button
                        onClick={() => updateApplicationStatus(selectedApp.id, 'accepted')}
                        className={`px-2 md:px-4 py-1.5 md:py-2 rounded font-medium text-xs md:text-sm flex items-center ${isDark 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : 'bg-green-600 hover:bg-green-700 text-white'}`}
                      >
                        <FaCheck className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />
                        Accept
                      </button>
                      <button
                        onClick={() => updateApplicationStatus(selectedApp.id, 'rejected')}
                        className={`px-2 md:px-4 py-1.5 md:py-2 rounded font-medium text-xs md:text-sm flex items-center ${isDark 
                          ? 'bg-red-600 hover:bg-red-700 text-white' 
                          : 'bg-red-600 hover:bg-red-700 text-white'}`}
                      >
                        <FaTimes className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />
                        Reject
                      </button>
                    </div>
                  </div>

                  {/* Resume Section */}
                  <div className={`p-3 md:p-4 rounded-lg border-2 ${isDark ? 'border-blue-500/30 bg-slate-900/50' : 'border-blue-500/30 bg-blue-50'}`}>
                    <h3 className={`text-sm md:text-lg font-semibold mb-3 md:mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <FaFileAlt className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                      Resume / CV
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center mb-1.5 md:mb-2">
                          <FaFileAlt className={`w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                          <div className="min-w-0">
                            <div className={`font-medium truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {selectedApp.resumeName || 'Resume File'}
                            </div>
                            <div className={`text-xs md:text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                              Uploaded on {selectedApp.date}
                            </div>
                          </div>
                        </div>
                        {selectedApp.coverLetter && (
                          <div className="mt-1.5 md:mt-2">
                            <div className={`text-xs md:text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              Cover Letter Preview:
                            </div>
                            <div className={`text-xs md:text-sm mt-0.5 line-clamp-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {selectedApp.coverLetter.substring(0, 150)}...
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-1.5 md:gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleResumeDownload(selectedApp)}
                          className={`px-2 md:px-4 py-1.5 md:py-2 rounded font-medium text-xs md:text-sm flex items-center ${isDark 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                        >
                          <FaDownload className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className={`text-sm md:text-lg font-semibold mb-2 md:mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <FaUser className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center mb-1 md:mb-2">
                          <FaEnvelope className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</span>
                        </div>
                        <a 
                          href={`mailto:${selectedApp.email}`}
                          className={`hover:underline truncate block text-xs md:text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                        >
                          {selectedApp.email}
                        </a>
                      </div>
                      
                      <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center mb-1 md:mb-2">
                          <FaPhone className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Phone</span>
                        </div>
                        <a 
                          href={`tel:${selectedApp.phone}`}
                          className={`hover:underline truncate block text-xs md:text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                        >
                          {selectedApp.phone}
                        </a>
                      </div>
                      
                      {selectedApp.linkedin && (
                        <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-1 md:mb-2">
                            <FaLinkedin className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                            <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>LinkedIn</span>
                          </div>
                          <a 
                            href={selectedApp.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:underline truncate block text-xs md:text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                          >
                            {selectedApp.linkedin.replace('https://', '')}
                          </a>
                        </div>
                      )}
                      
                      {selectedApp.github && (
                        <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-1 md:mb-2">
                            <FaGithub className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-900'}`} />
                            <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</span>
                          </div>
                          <a 
                            href={selectedApp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:underline truncate block text-xs md:text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                          >
                            {selectedApp.github.replace('https://', '')}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className={`text-sm md:text-lg font-semibold mb-2 md:mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <FaBriefcase className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      {selectedApp.currentCompany && (
                        <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-1 md:mb-2">
                            <FaBuilding className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Current Company</span>
                          </div>
                          <span className={`truncate block text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{selectedApp.currentCompany}</span>
                        </div>
                      )}
                      
                      {selectedApp.currentRole && (
                        <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-1 md:mb-2">
                            <FaBriefcase className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Current Role</span>
                          </div>
                          <span className={`truncate block text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{selectedApp.currentRole}</span>
                        </div>
                      )}
                      
                      <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center mb-1 md:mb-2">
                          <FaCalendar className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Experience</span>
                        </div>
                        <span className={`truncate block text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{selectedApp.experience}</span>
                      </div>
                      
                      <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                        <div className="flex items-center mb-1 md:mb-2">
                          <FaGraduationCap className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Education</span>
                        </div>
                        <span className={`truncate block text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{selectedApp.education}</span>
                      </div>
                      
                      {selectedApp.location && (
                        <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-1 md:mb-2">
                            <FaMapMarkerAlt className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Location</span>
                          </div>
                          <span className={`truncate block text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{selectedApp.location}</span>
                        </div>
                      )}
                      
                      {selectedApp.expectedSalary && (
                        <div className={`p-2 md:p-4 rounded-lg ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-1 md:mb-2">
                            <FaMoneyBill className={`w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Expected Salary</span>
                          </div>
                          <span className={`truncate block text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{selectedApp.expectedSalary}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Full Cover Letter */}
                  {selectedApp.coverLetter && (
                    <div>
                      <h3 className={`text-sm md:text-lg font-semibold mb-2 md:mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <FaFileAlt className="mr-1.5 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                        Cover Letter
                      </h3>
                      <div className={`p-2 md:p-4 rounded-lg max-h-40 md:max-h-60 overflow-y-auto text-xs md:text-sm ${isDark ? 'bg-slate-900/50 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                        {selectedApp.coverLetter}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className={`sticky bottom-0 p-3 md:p-6 border-t ${isDark ? 'border-slate-700 bg-slate-800' : 'border-gray-200 bg-white'}`}>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-4">
                    <div className={`text-xs md:text-sm text-center sm:text-left ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                      Applied on {selectedApp.date} at {new Date(selectedApp.appliedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="flex gap-1.5 md:gap-3 flex-wrap justify-center">
                      <button
                        onClick={() => updateApplicationStatus(selectedApp.id, 'shortlisted')}
                        className={`px-2 md:px-4 py-1.5 md:py-2 rounded font-medium text-xs md:text-sm flex items-center ${isDark 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
                      >
                        <FaStar className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />
                        Shortlist
                      </button>
                      <button
                        onClick={() => updateApplicationStatus(selectedApp.id, 'interview')}
                        className={`px-2 md:px-4 py-1.5 md:py-2 rounded font-medium text-xs md:text-sm flex items-center ${isDark 
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
                      >
                        <FaCalendar className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />
                        Schedule
                      </button>
                      <button
                        onClick={() => deleteApplication(selectedApp.id)}
                        className={`px-2 md:px-4 py-1.5 md:py-2 rounded font-medium text-xs md:text-sm flex items-center ${isDark 
                          ? 'bg-red-600 hover:bg-red-700 text-white' 
                          : 'bg-red-600 hover:bg-red-700 text-white'}`}
                      >
                        <FaTrash className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Applications;