// components/PrivacyPolicy.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaShieldAlt, 
  FaDatabase, 
  FaUserLock, 
  FaCookie, 
  FaEye, 
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChartLine,
  FaExchangeAlt,
  FaKey,
  FaFileAlt,
  FaCog,
  FaQuestionCircle
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const tabsRef = useRef(null);
  const { isDark } = useTheme();

  const sections = [
    { id: 'overview', title: 'Overview', icon: FaShieldAlt },
    { id: 'data-collection', title: 'Data Collection', icon: FaDatabase },
    { id: 'data-use', title: 'Data Use', icon: FaChartLine },
    { id: 'data-sharing', title: 'Data Sharing', icon: FaExchangeAlt },
    { id: 'cookies', title: 'Cookies', icon: FaCookie },
    { id: 'security', title: 'Security', icon: FaUserLock },
    { id: 'rights', title: 'Your Rights', icon: FaKey },
    { id: 'contact', title: 'Contact', icon: FaEnvelope },
  ];

  const handleScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = tabsRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      tabsRef.current.scrollLeft = newScrollLeft;
    }
  };

  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (tabsElement) {
      tabsElement.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => tabsElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const dataCategories = [
    {
      name: 'Personal Information',
      items: ['Name', 'Email address', 'Phone number', 'Company name', 'Job title']
    },
    {
      name: 'Service Data',
      items: ['Project requirements', 'Technical specifications', 'Business information', 'Service preferences']
    },
    {
      name: 'Technical Data',
      items: ['IP address', 'Browser type', 'Device information', 'Usage data', 'Cookies']
    },
    {
      name: 'Communication Data',
      items: ['Email communications', 'Chat transcripts', 'Support tickets', 'Meeting notes']
    }
  ];

  return (
    <div className={`min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className={`mt-4 text-3xl lg:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Privacy Policy
          </h1>
          <p className={`mt-2 lg:mt-4 text-base lg:text-lg max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Protecting your privacy is our priority. This policy explains how Levitica Technologies 
            collects, uses, and protects your information.
          </p>
          <p className={`mt-2 text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Mobile Horizontal Tabs */}
        <div className="lg:hidden mb-6 relative">
          <div className="relative">
            <div
              ref={tabsRef}
              className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex-shrink-0 px-4 py-3 rounded-lg flex items-center space-x-2 transition-all ${
                      activeSection === section.id
                        ? `${
                            isDark 
                              ? 'bg-green-600 text-white shadow-md' 
                              : 'bg-green-600 text-white shadow-md'
                          }`
                        : `${
                            isDark 
                              ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700' 
                              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                          }`
                    }`}
                  >
                    <Icon className="text-sm" />
                    <span className="font-medium whitespace-nowrap">{section.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Navigation */}
          <div className="hidden lg:block lg:w-1/4">
            <nav className="sticky top-36">
              <div className={`rounded-lg shadow-sm p-4 transition-all duration-300 ${
                isDark ? 'bg-slate-800' : 'bg-white'
              }`}>
                <h3 className={`font-semibold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Quick Navigation</h3>
                <ul className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-center space-x-3 ${
                            activeSection === section.id
                              ? `${
                                  isDark 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-green-50 text-green-700'
                                }`
                              : `${
                                  isDark 
                                    ? 'text-gray-300 hover:bg-slate-700 hover:text-white' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                          }`}
                        >
                          <Icon className={`${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
                          <span>{section.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Quick Info */}
              <div className={`mt-6 rounded-lg p-4 transition-all duration-300 ${
                isDark ? 'bg-green-900/20 border border-green-800/30' : 'bg-green-50'
              }`}>
                <h4 className={`font-semibold mb-2 flex items-center transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-900'
                }`}>
                  <FaQuestionCircle className="mr-2" />
                  Need Help?
                </h4>
                <p className={`text-sm mb-3 transition-colors duration-300 ${
                  isDark ? 'text-green-200' : 'text-green-700'
                }`}>
                  Have questions about our terms?
                </p>
                <Link
                  to="/contact"
                  className={`inline-block w-full text-center px-4 py-2 rounded-md border transition-colors ${
                    isDark 
                      ? 'bg-green-600 text-white border-green-500 hover:bg-blue-700' 
                      : 'bg-white text-green-600 border-green-200 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className={`rounded-xl shadow-lg p-6 lg:p-8 transition-all duration-300 ${
              isDark ? 'bg-slate-800' : 'bg-white'
            }`}>
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <section id="overview">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>1. Introduction</h2>
                  
                  <div className="prose max-w-none">
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <strong>Levitica Technologies Private Limited</strong> ("we", "us", "our") is committed 
                      to protecting and respecting your privacy. This Privacy Policy explains how we collect, 
                      use, disclose, and safeguard your information when you use our services.
                    </p>

                    <div className={`rounded-lg p-6 mt-6 mb-6 ${
                      isDark ? 'bg-slate-700/30' : 'bg-gray-50'
                    }`}>
                      <h3 className={`font-semibold mb-3 flex items-center transition-colors duration-300 ${
                        isDark ? 'text-green-300' : 'text-gray-900'
                      }`}>
                        <FaShieldAlt className={`mr-2 ${
                          isDark ? 'text-green-400' : 'text-green-500'
                        }`} />
                        Our Commitment
                      </h3>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        We are committed to protecting your personal data and being transparent about 
                        how we handle it. We comply with applicable data protection laws including 
                        GDPR, CCPA, and other global privacy regulations.
                      </p>
                    </div>

                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>1.1 Scope</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      This policy applies to:
                    </p>
                    <ul className={`list-disc pl-5 space-y-2 mb-6 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>Clients using our services</li>
                      <li>Website visitors and users</li>
                      <li>Job applicants and employees</li>
                      <li>Business partners and vendors</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Data Collection Section */}
              {activeSection === 'data-collection' && (
                <section id="data-collection">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>2. Data We Collect</h2>
                  
                  <div className="prose max-w-none">
                    <div className="flex items-start mb-6">
                      <FaDatabase className={`mt-1 mr-3 flex-shrink-0 text-xl ${
                        isDark ? 'text-blue-400' : 'text-blue-500'
                      }`} />
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>2.1 Categories of Data</h3>
                        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          We collect different types of information depending on your interaction with us.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {dataCategories.map((category, index) => (
                        <div key={index} className={`border rounded-lg p-5 hover:shadow-md transition-shadow ${
                          isDark ? 'border-slate-700' : 'border-gray-200'
                        }`}>
                          <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>{category.name}</h4>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx} className={`flex items-center ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                                  isDark ? 'bg-blue-400' : 'bg-blue-400'
                                }`}></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Data Use Section */}
              {activeSection === 'data-use' && (
                <section id="data-use">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>3. How We Use Your Data</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>3.1 Purposes of Processing</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className={`p-5 rounded-lg ${
                        isDark ? 'bg-blue-900/20 border border-blue-800/30' : 'bg-blue-50'
                      }`}>
                        <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                          isDark ? 'text-blue-300' : 'text-blue-900'
                        }`}>Service Delivery</h4>
                        <ul className={`space-y-2 ${
                          isDark ? 'text-blue-200' : 'text-blue-800'
                        }`}>
                          <li className="flex items-center">
                            <FaCog className="mr-2 text-sm" />
                            Providing requested services
                          </li>
                          <li className="flex items-center">
                            <FaFileAlt className="mr-2 text-sm" />
                            Managing client accounts
                          </li>
                          <li className="flex items-center">
                            <FaChartLine className="mr-2 text-sm" />
                            Processing payments
                          </li>
                          <li className="flex items-center">
                            <FaEnvelope className="mr-2 text-sm" />
                            Technical support
                          </li>
                        </ul>
                      </div>
                      <div className={`p-5 rounded-lg ${
                        isDark ? 'bg-green-900/20 border border-green-800/30' : 'bg-green-50'
                      }`}>
                        <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                          isDark ? 'text-green-300' : 'text-green-900'
                        }`}>Business Operations</h4>
                        <ul className={`space-y-2 ${
                          isDark ? 'text-green-200' : 'text-green-800'
                        }`}>
                          <li className="flex items-center">
                            <FaCog className="mr-2 text-sm" />
                            Improving our services
                          </li>
                          <li className="flex items-center">
                            <FaChartLine className="mr-2 text-sm" />
                            Marketing and promotions
                          </li>
                          <li className="flex items-center">
                            <FaShieldAlt className="mr-2 text-sm" />
                            Legal compliance
                          </li>
                          <li className="flex items-center">
                            <FaUserLock className="mr-2 text-sm" />
                            Security monitoring
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Data Sharing Section */}
              {activeSection === 'data-sharing' && (
                <section id="data-sharing">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>4. Data Sharing and Disclosure</h2>
                  
                  <div className="prose max-w-none">
                    <div className="flex items-start mb-6">
                      <FaEye className={`mt-1 mr-3 flex-shrink-0 text-xl ${
                        isDark ? 'text-blue-400' : 'text-blue-500'
                      }`} />
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>4.1 When We Share Data</h3>
                        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          We only share your data when necessary and with appropriate safeguards.
                        </p>
                      </div>
                    </div>

                    <div className={`rounded-lg p-6 mb-6 ${
                      isDark ? 'bg-slate-700/30' : 'bg-gray-50'
                    }`}>
                      <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Third Parties We Work With</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className={`p-3 rounded border ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                        }`}>
                          <h5 className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Service Providers</h5>
                          <p className={`text-sm mt-1 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Hosting, payment processing, analytics</p>
                        </div>
                        <div className={`p-3 rounded border ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                        }`}>
                          <h5 className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Business Partners</h5>
                          <p className={`text-sm mt-1 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Joint service delivery partners</p>
                        </div>
                        <div className={`p-3 rounded border ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                        }`}>
                          <h5 className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Professional Advisors</h5>
                          <p className={`text-sm mt-1 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Lawyers, accountants, consultants</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Cookies Section */}
              {activeSection === 'cookies' && (
                <section id="cookies">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>5. Cookies and Tracking Technologies</h2>
                  
                  <div className="prose max-w-none">
                    <div className="flex items-start mb-6">
                      <FaCookie className={`mt-1 mr-3 flex-shrink-0 text-xl ${
                        isDark ? 'text-yellow-500' : 'text-amber-500'
                      }`} />
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>5.1 Types of Cookies We Use</h3>
                        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          We use cookies and similar technologies to enhance your experience.
                        </p>
                      </div>
                    </div>

                    <div className={`overflow-x-auto mt-6 ${
                      isDark ? 'bg-slate-800/50 rounded-lg' : ''
                    }`}>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className={isDark ? 'bg-slate-700' : 'bg-gray-50'}>
                          <tr>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Cookie Type
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Purpose
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${
                          isDark ? 'divide-slate-700 bg-slate-800/30' : 'divide-gray-200 bg-white'
                        }`}>
                          <tr className={isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm font-medium ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>Essential</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className={`text-sm ${
                                isDark ? 'text-gray-300' : 'text-gray-900'
                              }`}>Site functionality and security</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className={`text-sm ${
                                isDark ? 'text-gray-300' : 'text-gray-900'
                              }`}>Session</div>
                            </td>
                          </tr>
                          <tr className={isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm font-medium ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>Analytics</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className={`text-sm ${
                                isDark ? 'text-gray-300' : 'text-gray-900'
                              }`}>Understanding user behavior</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className={`text-sm ${
                                isDark ? 'text-gray-300' : 'text-gray-900'
                              }`}>Up to 2 years</div>
                            </td>
                          </tr>
                          <tr className={isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm font-medium ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>Marketing</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className={`text-sm ${
                                isDark ? 'text-gray-300' : 'text-gray-900'
                              }`}>Personalized advertising</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className={`text-sm ${
                                isDark ? 'text-gray-300' : 'text-gray-900'
                              }`}>Up to 1 year</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}

              {/* Security Section */}
              {activeSection === 'security' && (
                <section id="security">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>6. Data Security</h2>
                  
                  <div className="prose max-w-none">
                    <div className="flex items-start mb-6">
                      <FaUserLock className={`mt-1 mr-3 flex-shrink-0 text-xl ${
                        isDark ? 'text-green-400' : 'text-green-500'
                      }`} />
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>6.1 Security Measures</h3>
                        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          We implement robust security measures to protect your data.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className={`border rounded-lg p-5 ${
                        isDark ? 'border-green-800/30 bg-green-900/20' : 'border-green-200 bg-green-50'
                      }`}>
                        <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                          isDark ? 'text-green-300' : 'text-green-900'
                        }`}>Technical Measures</h4>
                        <ul className={`space-y-2 ${
                          isDark ? 'text-green-200' : 'text-green-800'
                        }`}>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-green-400' : 'bg-green-500'
                            }`}></div>
                            Encryption in transit and at rest
                          </li>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-green-400' : 'bg-green-500'
                            }`}></div>
                            Regular security audits
                          </li>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-green-400' : 'bg-green-500'
                            }`}></div>
                            Access controls and authentication
                          </li>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-green-400' : 'bg-green-500'
                            }`}></div>
                            Intrusion detection systems
                          </li>
                        </ul>
                      </div>
                      <div className={`border rounded-lg p-5 ${
                        isDark ? 'border-blue-800/30 bg-blue-900/20' : 'border-blue-200 bg-blue-50'
                      }`}>
                        <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                          isDark ? 'text-blue-300' : 'text-blue-900'
                        }`}>Organizational Measures</h4>
                        <ul className={`space-y-2 ${
                          isDark ? 'text-blue-200' : 'text-blue-800'
                        }`}>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-blue-400' : 'bg-blue-500'
                            }`}></div>
                            Employee training and awareness
                          </li>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-blue-400' : 'bg-blue-500'
                            }`}></div>
                            Data protection policies
                          </li>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-blue-400' : 'bg-blue-500'
                            }`}></div>
                            Incident response plans
                          </li>
                          <li className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              isDark ? 'bg-blue-400' : 'bg-blue-500'
                            }`}></div>
                            Vendor security assessments
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Your Rights Section */}
              {activeSection === 'rights' && (
                <section id="rights">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>7. Your Privacy Rights</h2>
                  
                  <div className="prose max-w-none">
                    <div className={`rounded-lg p-6 mb-8 ${
                      isDark ? 'bg-blue-900/20 border border-blue-800/30' : 'bg-blue-50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                        isDark ? 'text-blue-300' : 'text-blue-900'
                      }`}>Your Data Protection Rights</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className={`p-4 rounded border ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-200'
                        }`}>
                          <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Right to Access</h4>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Request a copy of your personal data</p>
                        </div>
                        <div className={`p-4 rounded border ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-200'
                        }`}>
                          <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Right to Rectification</h4>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Correct inaccurate personal data</p>
                        </div>
                        <div className={`p-4 rounded border ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-200'
                        }`}>
                          <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Right to Erasure</h4>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Request deletion of your data</p>
                        </div>
                        <div className={`p-4 rounded border ${
                          isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-200'
                        }`}>
                          <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Right to Restrict</h4>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Limit how we use your data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Contact Section */}
              {activeSection === 'contact' && (
                <section id="contact">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>8. Contact Information</h2>
                  
                  <div className="prose max-w-none">
                    <div className={`rounded-lg p-6 mb-6 ${
                      isDark ? 'bg-slate-700/30' : 'bg-gray-50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-4 flex items-center transition-colors duration-300 ${
                        isDark ? 'text-green-300' : 'text-gray-900'
                      }`}>
                        <FaEnvelope className={`mr-2 ${
                          isDark ? 'text-green-400' : 'text-green-500'
                        }`} />
                        Data Protection Officer
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className={`font-semibold mb-2 flex items-center transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <FaMapMarkerAlt className="mr-2" />
                            Postal Address
                          </h4>
                          <address className={`not-italic ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <span className='font-bold text-black'>Levitica Technologies Private Limited</span><br />
                            Office #407 & 409, 4th Floor, Jain Sadguru<br />
                            Image's Capital Park, Ayyappa Society,<br />
                            Madhapur, Hyderabad, Telangana 500081.
                          </address>
                        </div>
                        <div>
                          <h4 className={`font-semibold mb-2 flex items-center transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <FaEnvelope className="mr-2" />
                            Email
                          </h4>
                          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                            info@leviticatechnologies.com
                          </p>
                          <h4 className={`font-semibold mt-4 mb-2 flex items-center transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <FaPhone className="mr-2" />
                            Phone
                          </h4>
                          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                            +91 9032503559
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Consent Section */}
            <div className={`mt-8 p-6 rounded-lg border transition-all duration-300 ${
              isDark ? 'bg-green-900/20 border-green-800/30' : 'bg-green-50 border-green-200'
            }`}>
              <div className="flex items-start">
                <FaShieldAlt className={`mt-1 mr-3 flex-shrink-0 ${
                  isDark ? 'text-green-400' : 'text-green-500'
                }`} />
                <div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-green-300' : 'text-green-900'
                  }`}>Your Consent</h3>
                  <p className={isDark ? 'text-green-200' : 'text-green-700'}>
                    By using our services, you consent to our Privacy Policy. If you do not agree with 
                    any part of this policy, please do not use our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;