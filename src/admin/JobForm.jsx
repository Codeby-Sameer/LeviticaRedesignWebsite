import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import initialCareersData from '../data/careersData';
import { 
  FaSave, FaTimes, FaPlus, FaTrash, FaArrowLeft
} from 'react-icons/fa';

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    type: '',
    location: '',
    salary: '',
    experience: '',
    description: '',
    requirements: [''],
    benefits: [''],
    isActive: true
  });

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];
  const departments = [
    'Artificial Intelligence',
    'Engineering', 
    'Infrastructure',
    'Product',
    'Design',
    'Sales',
    'Marketing',
    'Operations'
  ];

  useEffect(() => {
    if (id) {
      const storedJobs = localStorage.getItem('leviticaCareersData');
      const jobs = storedJobs ? JSON.parse(storedJobs) : initialCareersData;
      const job = jobs.find(j => j.id === parseInt(id));
      
      if (job) {
        setFormData({
          title: job.title,
          department: job.department,
          type: job.type,
          location: job.location,
          salary: job.salary,
          experience: job.experience,
          description: job.description,
          requirements: [...job.requirements],
          benefits: [...job.benefits],
          isActive: job.isActive
        });
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const storedJobs = localStorage.getItem('leviticaCareersData');
    const jobs = storedJobs ? JSON.parse(storedJobs) : initialCareersData;

    let updatedJobs;
    if (id) {
      updatedJobs = jobs.map(job => 
        job.id === parseInt(id) ? { ...formData, id: parseInt(id) } : job
      );
    } else {
      const newId = jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1;
      const newJob = { ...formData, id: newId };
      updatedJobs = [...jobs, newJob];
    }

    localStorage.setItem('leviticaCareersData', JSON.stringify(updatedJobs));
    
    setTimeout(() => {
      setLoading(false);
      navigate('/admin/jobs');
    }, 1000);
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const handleAddArrayItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const handleRemoveArrayItem = (field, index) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {id ? 'Edit Job' : 'Create New Job'}
          </h1>
          <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {id ? 'Update job details' : 'Add a new job posting'}
          </p>
        </div>
        
        <button
          onClick={() => navigate('/admin/jobs')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
            isDark
              ? 'border border-slate-600 text-gray-400 hover:text-gray-300 hover:border-slate-500 hover:bg-slate-700/50'
              : 'border border-gray-300 text-gray-600 hover:text-gray-700 hover:border-gray-400 hover:bg-gray-100'
          }`}
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Jobs
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className={`p-6 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Basic Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Job Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
                placeholder="e.g., Senior AI Engineer"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Job Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              >
                <option value="">Select Type</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
                placeholder="e.g., Remote / San Francisco"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Salary Range *
              </label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
                placeholder="e.g., $120k - $160k"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Experience Required *
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
                placeholder="e.g., 3+ years"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`p-6 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Job Description
          </h2>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
            rows="6"
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
            }`}
            placeholder="Describe the role, responsibilities, and impact..."
          />
        </div>

        {/* Requirements */}
        <div className={`p-6 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Requirements
            </h2>
            <button
              type="button"
              onClick={() => handleAddArrayItem('requirements')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors duration-300 ${
                isDark 
                  ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700'
              }`}
            >
              <FaPlus className="w-4 h-4" />
              Add Requirement
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.requirements.map((req, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                  required={index === 0}
                  className={`flex-1 px-4 py-3 rounded-lg border transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                  placeholder={`Requirement ${index + 1}`}
                />
                {formData.requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem('requirements', index)}
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'text-red-400 hover:text-red-300 hover:bg-red-500/20' 
                        : 'text-red-600 hover:text-red-700 hover:bg-red-100'
                    }`}
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className={`p-6 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Benefits
            </h2>
            <button
              type="button"
              onClick={() => handleAddArrayItem('benefits')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors duration-300 ${
                isDark 
                  ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30 hover:text-green-300' 
                  : 'bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700'
              }`}
            >
              <FaPlus className="w-4 h-4" />
              Add Benefit
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                  required={index === 0}
                  className={`flex-1 px-4 py-3 rounded-lg border transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/20' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                  placeholder={`Benefit ${index + 1}`}
                />
                {formData.benefits.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem('benefits', index)}
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'text-red-400 hover:text-red-300 hover:bg-red-500/20' 
                        : 'text-red-600 hover:text-red-700 hover:bg-red-100'
                    }`}
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Status & Actions */}
        <div className={`p-6 rounded-xl ${
          isDark 
            ? 'bg-slate-800/50 border border-slate-700/50' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Status:
              </label>
              <button
                type="button"
                onClick={() => setFormData({...formData, isActive: !formData.isActive})}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  formData.isActive
                    ? isDark
                      ? 'bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/30'
                      : 'bg-green-100 text-green-700 border border-green-200 hover:bg-green-200'
                    : isDark
                      ? 'bg-red-600/20 text-red-400 border border-red-500/30 hover:bg-red-600/30'
                      : 'bg-red-100 text-red-700 border border-red-200 hover:bg-red-200'
                }`}
              >
                {formData.isActive ? 'Active' : 'Inactive'}
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate('/admin/jobs')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isDark
                    ? 'border border-slate-600 text-gray-400 hover:text-gray-300 hover:border-slate-500 hover:bg-slate-700/50'
                    : 'border border-gray-300 text-gray-600 hover:text-gray-700 hover:border-gray-400 hover:bg-gray-100'
                }`}
              >
                <FaTimes className="w-4 h-4" />
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FaSave className="w-4 h-4" />
                    {id ? 'Update Job' : 'Create Job'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobForm;