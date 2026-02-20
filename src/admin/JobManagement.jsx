import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { getJobs } from "../api/jobs";
import initialCareersData from "../data/careersData";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaSearch,
  FaFilter,
  FaCheck,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const JobManagement = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getJobs({
        skip: 0,
        limit: 20,
      });
      console.log(response.data);
      setJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    let results = [...jobs];

    // Apply search filter
    if (searchTerm) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      const isActive = statusFilter === "active";
      results = results.filter((job) => job.isActive === isActive);
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        results.sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
        );
        break;
      case "oldest":
        results.sort(
          (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0),
        );
        break;
      case "title-asc":
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredJobs(results);
  }, [jobs, searchTerm, statusFilter, sortBy]);

  const handleToggleActive = (jobId) => {
    const updatedJobs = jobs.map((job) =>
      job.id === jobId ? { ...job, isActive: !job.isActive } : job,
    );
    setJobs(updatedJobs);
    localStorage.setItem("leviticaCareersData", JSON.stringify(updatedJobs));
  };

  const handleDelete = (jobId) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      const updatedJobs = jobs.filter((job) => job.id !== jobId);
      setJobs(updatedJobs);
      localStorage.setItem("leviticaCareersData", JSON.stringify(updatedJobs));
    }
  };

  const handleEdit = (jobId) => {
    navigate(`/admin/jobs/edit/${jobId}`);
  };

  return (
    <div className=" p-3 sm:p-5 space-y-5 w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Job Management
          </h1>
          <p
            className={`mt-1 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Create, edit, and manage job postings
          </p>
        </div>

        <Link
          to="/admin/jobs/new"
          className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl"
          }`}
        >
          <FaPlus className="w-5 h-5" />
          <span className="hidden sm:inline">Add New Job</span>
          <span className="sm:hidden">Add Job</span>
        </Link>
      </div>

      {/* Filters - Fixed responsive layout */}
      <div
        className={`p-4 rounded-xl ${
          isDark
            ? "bg-slate-800/50 border border-slate-700/50"
            : "bg-gray-50 border border-gray-200"
        }`}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Search - Full width on mobile, then responsive */}
          <div className="relative sm:col-span-2 lg:col-span-1">
            <label
              className={`block text-sm font-medium mb-1.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              Search
            </label>
            <div className="absolute inset-y-0 left-0 top-7 pl-3 flex items-center pointer-events-none">
              <FaSearch
                className={`w-5 h-5 ${isDark ? "text-gray-500" : "text-gray-400"}`}
              />
            </div>
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-all duration-300 ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              }`}
            />
          </div>

          {/* Status Filter */}
          <div>
            <label
              className={`block text-sm font-medium mb-1.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-300 ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              }`}
            >
              <option value="all">All Jobs</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label
              className={`block text-sm font-medium mb-1.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-300 ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              }`}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title-asc">Title A-Z</option>
              <option value="title-desc">Title Z-A</option>
            </select>
          </div>

          {/* Clear Filters Button - Only show when filters are active */}
          {(searchTerm || statusFilter !== "all" || sortBy !== "newest") && (
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setSortBy("newest");
                }}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-300 ${
                  isDark
                    ? "bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
                    : "bg-gray-200 border-gray-300 hover:bg-gray-300 text-gray-700"
                }`}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Active Filters Indicator */}
        {(searchTerm || statusFilter !== "all" || sortBy !== "newest") && (
          <div className="mt-4 pt-4 border-t border-slate-700/30">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Active filters:
              </span>
              {searchTerm && (
                <span
                  className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                    isDark
                      ? "bg-blue-500/20 text-blue-300"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-1 hover:opacity-70"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </span>
              )}
              {statusFilter !== "all" && (
                <span
                  className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                    isDark
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  Status: {statusFilter === "active" ? "Active" : "Inactive"}
                  <button
                    onClick={() => setStatusFilter("all")}
                    className="ml-1 hover:opacity-70"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </span>
              )}
              {sortBy !== "newest" && (
                <span
                  className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                    isDark
                      ? "bg-green-500/20 text-green-300"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  Sort:{" "}
                  {sortBy === "oldest"
                    ? "Oldest First"
                    : sortBy === "title-asc"
                      ? "Title A-Z"
                      : "Title Z-A"}
                  <button
                    onClick={() => setSortBy("newest")}
                    className="ml-1 hover:opacity-70"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <div
            className={`text-center py-12 border-2 border-dashed rounded-xl ${
              isDark ? "border-slate-700" : "border-gray-300"
            }`}
          >
            <FaSearch
              className={`w-16 h-16 mx-auto mb-4 ${isDark ? "text-gray-600" : "text-gray-400"}`}
            />
            <h3
              className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              No jobs found
            </h3>
            <p
              className={`mb-4 text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "Create your first job posting"}
            </p>
            <Link
              to="/admin/jobs/new"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
              }`}
            >
              <FaPlus className="w-5 h-5" />
              Add Job
            </Link>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Showing {filteredJobs.length} of {jobs.length} jobs
            </div>

            {/* Jobs Grid */}
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`p-4 sm:p-6 rounded-xl transition-all duration-300 overflow-hidden ${
                  isDark
                    ? "bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800"
                    : "bg-white border border-gray-200 hover:border-blue-300 hover:bg-gray-50 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {" "}
                    {/* Added min-w-0 to prevent overflow */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <h3
                        className={`text-lg sm:text-xl font-semibold truncate ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {job.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium self-start sm:self-auto ${
                          job.isActive
                            ? isDark
                              ? "bg-green-500/20 text-green-400"
                              : "bg-green-100 text-green-700"
                            : isDark
                              ? "bg-red-500/20 text-red-400"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {job.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                      <span
                        className={`flex items-center ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        <span className="font-medium mr-1">Dept:</span>
                        <span className="truncate">{job.department}</span>
                      </span>
                      <span
                        className={`flex items-center ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        <span className="font-medium mr-1">Location:</span>
                        <span className="truncate">{job.location}</span>
                      </span>
                      <span
                        className={`hidden sm:flex items-center ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        <span className="font-medium mr-1">Type:</span>{" "}
                        {job.type}
                      </span>
                      <span
                        className={`hidden md:flex items-center ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      >
                        <span className="font-medium mr-1">Salary:</span>{" "}
                        {job.salary}
                      </span>
                    </div>
                    <p
                      className={`text-sm line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {job.description}
                    </p>
                  </div>

                  {/* Action Buttons - Responsive layout */}
                  <div className="flex items-center justify-between sm:justify-end gap-2 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-700/30">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleToggleActive(job.id)}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          job.isActive
                            ? isDark
                              ? "text-red-400 hover:text-red-300 hover:bg-red-500/20"
                              : "text-red-600 hover:text-red-700 hover:bg-red-100"
                            : isDark
                              ? "text-green-400 hover:text-green-300 hover:bg-green-500/20"
                              : "text-green-600 hover:text-green-700 hover:bg-green-100"
                        }`}
                        title={job.isActive ? "Deactivate" : "Activate"}
                      >
                        {job.isActive ? (
                          <FaEyeSlash className="w-4 h-4" />
                        ) : (
                          <FaEye className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => handleEdit(job.id)}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? "text-blue-400 hover:text-blue-300 hover:bg-blue-500/20"
                            : "text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                        }`}
                        title="Edit"
                      >
                        <FaEdit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(job.id)}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? "text-red-400 hover:text-red-300 hover:bg-red-500/20"
                            : "text-red-600 hover:text-red-700 hover:bg-red-100"
                        }`}
                        title="Delete"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>

                    <Link
                      to={`/admin/jobs/edit/${job.id}`}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isDark
                          ? "text-gray-400 hover:text-gray-300 hover:bg-slate-700"
                          : "text-gray-600 hover:text-gray-700 hover:bg-gray-200"
                      }`}
                      title="View Details"
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Job Details - Responsive grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-700/30">
                  <div>
                    <h4
                      className={`text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Requirements ({job.requirements.length})
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <FaCheck
                            className={`w-3 h-3 mr-2 mt-0.5 flex-shrink-0 ${isDark ? "text-green-400" : "text-green-600"}`}
                          />
                          <span
                            className={`line-clamp-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                          >
                            {req.content}
                          </span>
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li
                          className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
                        >
                          +{job.requirements.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Benefits ({job.benefits.length})
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {job.benefits.slice(0, 3).map((benefit, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs truncate max-w-full ${
                            isDark
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {benefit.content}
                        </span>
                      ))}
                      {job.benefits.length > 3 && (
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
                        >
                          +{job.benefits.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default JobManagement;
