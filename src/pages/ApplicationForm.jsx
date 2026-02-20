import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { applyForJob } from "../api/jobs";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaPaperclip,
  FaUpload,
  FaCheck,
  FaBriefcase,
  FaGraduationCap,
  FaCalendar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ApplicationForm = () => {
  const { isDark } = useTheme();
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    coverLetter: "",
    portfolio: "",
    currentCompany: "",
    currentRole: "",
    experience: "",
    education: "",
    location: "",
    noticePeriod: "",
    expectedSalary: "",
    resume: null,
    resumeName: "",
  });

  // Load job details
  useEffect(() => {
    const storedJobs = localStorage.getItem("leviticaCareersData");
    if (storedJobs) {
      const jobs = JSON.parse(storedJobs);
      const selectedJob = jobs.find((j) => j.id.toString() === jobId);
      setJob(selectedJob);
    }
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload PDF or Word documents only");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
        resumeName: file.name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.resume
    ) {
      alert("Please fill in all required fields and upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();

      data.append("full_name", formData.name);
      data.append("email", formData.email);
      data.append("phone_number", formData.phone);
      data.append("linkedin_profile", formData.linkedin);
      data.append("github_profile", formData.github);
      data.append("portfolio_website", formData.portfolio);
      data.append("current_company", formData.currentCompany);
      data.append("current_role", formData.currentRole);
      data.append("years_of_experience", formData.experience);
      data.append("highest_education", formData.education);
      data.append("current_location", formData.location);
      data.append("notice_period", formData.noticePeriod);
      data.append("expected_salary", formData.expectedSalary);
      data.append("cover_letter", formData.coverLetter);
      data.append("resume", formData.resume);

      await applyForJob(jobId, data);

      alert("Application submitted successfully!");
      navigate("/careers?success=true");
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job && jobId !== "general") {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-slate-900" : "bg-gray-50"}`}
      >
        <div className="text-center">
          <div
            className={`text-2xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Job not found
          </div>
          <button
            onClick={() => navigate("/careers")}
            className={`mt-4 inline-flex items-center px-4 py-2 rounded-lg font-medium ${
              isDark
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <FaArrowLeft className="mr-2" />
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-20 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className={`mb-6 inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            isDark
              ? "text-gray-400 hover:text-white hover:bg-slate-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {job ? `Apply for: ${job.title}` : "General Application"}
          </h1>
          {job && (
            <div
              className={`p-4 rounded-lg ${isDark ? "bg-slate-800/50 border-slate-700" : "bg-white border-gray-200"} border`}
            >
              <div className="flex flex-wrap gap-4 text-sm">
                <span
                  className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  <FaBriefcase className="mr-2" />
                  {job.department}
                </span>
                <span
                  className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  <FaMapMarkerAlt className="mr-2" />
                  {job.location}
                </span>
                <span
                  className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  <FaCalendar className="mr-2" />
                  {job.type}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Application Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className={`space-y-6 p-6 rounded-xl ${
            isDark
              ? "bg-slate-800/50 border-slate-700"
              : "bg-white border-gray-200"
          } border`}
        >
          {/* Personal Information */}
          <div>
            <h2
              className={`text-xl font-semibold mb-4 flex items-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <FaUser className="mr-2" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  GitHub Profile
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="https://github.com/username"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Portfolio Website
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div>
            <h2
              className={`text-xl font-semibold mb-4 flex items-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <FaBriefcase className="mr-2" />
              Professional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="Current company name"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Current Role
                </label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="Current job title"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Years of Experience *
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="e.g., 5 years"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Highest Education *
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="e.g., Bachelor's in Computer Science"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Current Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Notice Period
                </label>
                <input
                  type="text"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="e.g., 2 weeks"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Expected Salary
                </label>
                <input
                  type="text"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    isDark
                      ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                  placeholder="e.g., $120,000 per year"
                />
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <h2
              className={`text-xl font-semibold mb-4 flex items-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <FaFileAlt className="mr-2" />
              Cover Letter
            </h2>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Why are you interested in this position? *
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                required
                rows={6}
                className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                  isDark
                    ? "bg-slate-900 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }`}
                placeholder="Tell us about your experience, skills, and why you'd be a great fit for this role..."
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <h2
              className={`text-xl font-semibold mb-4 flex items-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <FaPaperclip className="mr-2" />
              Resume / CV *
            </h2>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-300 ${
                isDark
                  ? "border-slate-700 hover:border-blue-500"
                  : "border-gray-300 hover:border-blue-500"
              }`}
            >
              <input
                type="file"
                id="resume-upload"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />

              {formData.resume ? (
                <div className="space-y-4">
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${
                      isDark
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <FaCheck className="mr-2" />
                    {formData.resumeName}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("resume-upload").click()
                    }
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium ${
                      isDark
                        ? "bg-slate-700 hover:bg-slate-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    }`}
                  >
                    <FaUpload className="mr-2" />
                    Change File
                  </button>
                </div>
              ) : (
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <FaUpload
                    className={`w-12 h-12 mx-auto mb-4 ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  />
                  <div
                    className={`mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </div>
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    PDF, DOC, DOCX (Max file size: 5MB)
                  </div>
                </label>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                * Required fields
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "transform hover:scale-105"
                } ${
                  isDark
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <FaCheck className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ApplicationForm;
