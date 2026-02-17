// components/TermsAndConditions.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, businessServicesData } from '../data/Servicedata';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaFileContract, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaQuestionCircle,
  FaChevronLeft,
  FaChevronRight,
  FaCogs,
  FaMoneyBillWave,
  FaBalanceScale,
  FaShieldAlt,
  FaLock,
  FaSignOutAlt,
  FaHandshake
} from 'react-icons/fa';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const tabsRef = useRef(null);
  const { isDark } = useTheme();

  // Combine all services
  const allServices = [...servicesData, ...businessServicesData];
  
  const sections = [
    { id: 'overview', title: 'Overview', icon: FaFileContract },
    { id: 'services', title: 'Services', icon: FaCogs },
    { id: 'payment', title: 'Payment', icon: FaMoneyBillWave },
    { id: 'intellectual', title: 'IP Rights', icon: FaBalanceScale },
    { id: 'liability', title: 'Liability', icon: FaShieldAlt },
    { id: 'confidentiality', title: 'Confidentiality', icon: FaLock },
    { id: 'termination', title: 'Termination', icon: FaSignOutAlt },
    { id: 'disputes', title: 'Disputes', icon: FaHandshake },
  ];

  // Handle scroll visibility for arrows
  const handleScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll tabs horizontally
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
      handleScroll(); // Initial check
      return () => tabsElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
            Terms & Conditions
          </h1>
          <p className={`mt-2 lg:mt-4 text-base lg:text-lg max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
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
                              ? 'bg-blue-600 text-white shadow-md' 
                              : 'bg-blue-600 text-white shadow-md'
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
                }`}>Table of Contents</h3>
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
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-blue-50 text-blue-700'
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
                isDark ? 'bg-blue-900/20 border border-blue-800/30' : 'bg-blue-50'
              }`}>
                <h4 className={`font-semibold mb-2 flex items-center transition-colors duration-300 ${
                  isDark ? 'text-blue-300' : 'text-blue-900'
                }`}>
                  <FaQuestionCircle className="mr-2" />
                  Need Help?
                </h4>
                <p className={`text-sm mb-3 transition-colors duration-300 ${
                  isDark ? 'text-blue-200' : 'text-blue-700'
                }`}>
                  Have questions about our terms?
                </p>
                <Link
                  to="/contact"
                  className={`inline-block w-full text-center px-4 py-2 rounded-md border transition-colors ${
                    isDark 
                      ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white'
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
                  <div className={`mb-6 p-4 rounded-lg border-l-4 transition-all duration-300 ${
                    isDark ? 'bg-blue-900/20 border-blue-500' : 'bg-blue-50 border-blue-500'
                  }`}>
                    <div className="flex items-start">
                      <FaExclamationTriangle className={`mt-1 mr-3 flex-shrink-0 ${
                        isDark ? 'text-blue-400' : 'text-blue-500'
                      }`} />
                      <div>
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-blue-300' : 'text-blue-900'
                        }`}>Important Notice</h3>
                        <p className={`mt-1 transition-colors duration-300 ${
                          isDark ? 'text-blue-200' : 'text-blue-700'
                        }`}>
                          By using our services, you agree to these terms. Please read them carefully.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>1. Agreement Overview</h2>
                  <div className="prose max-w-none">
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      These Terms and Conditions ("Terms") govern your use of services provided by 
                      <strong> Levitica Technologies Private Limited</strong> ("Company", "we", "us", or "our"). 
                      By engaging our services, you ("Client", "you", or "your") agree to be bound by these Terms.
                    </p>

                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>1.1 Definitions</h3>
                    <ul className={`list-disc pl-5 space-y-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>
                        <strong>"Services"</strong> refers to any professional services provided by Levitica Technologies 
                        as described in our service catalog.
                      </li>
                      <li>
                        <strong>"Deliverables"</strong> means the materials, software, documents, or other work products 
                        developed and delivered to Client.
                      </li>
                      <li>
                        <strong>"Project"</strong> means a specific engagement for which Services are provided.
                      </li>
                      <li>
                        <strong>"Effective Date"</strong> means the date when both parties sign the Service Agreement.
                      </li>
                    </ul>

                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>1.2 Scope of Services</h3>
                    <p className={`mb-3 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Levitica Technologies provides the following categories of services:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className={`p-4 rounded-lg transition-all duration-300 ${
                        isDark ? 'bg-slate-700/50' : 'bg-gray-50'
                      }`}>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Technical Services</h4>
                        <ul className="space-y-1 text-sm">
                          {servicesData.slice(0, 4).map((service) => (
                            <li key={service.id} className="flex items-center">
                              <FaCheckCircle className={`mr-2 flex-shrink-0 ${
                                isDark ? 'text-green-400' : 'text-green-500'
                              }`} />
                              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{service.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`p-4 rounded-lg transition-all duration-300 ${
                        isDark ? 'bg-slate-700/50' : 'bg-gray-50'
                      }`}>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Business Services</h4>
                        <ul className="space-y-1 text-sm">
                          {businessServicesData.slice(0, 4).map((service) => (
                            <li key={service.id} className="flex items-center">
                              <FaCheckCircle className={`mr-2 flex-shrink-0 ${
                                isDark ? 'text-green-400' : 'text-green-500'
                              }`} />
                              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{service.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Services Section */}
              {activeSection === 'services' && (
                <section id="services">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>2. Service Terms</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>2.1 Service Delivery</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      All services will be delivered according to the specifications outlined in the 
                      individual Service Agreement. Each service has specific terms that apply:
                    </p>

                    <div className="mt-6 space-y-6">
                      {allServices.slice(0, 4).map((service) => (
                        <div key={service.id} className={`border rounded-lg p-4 transition-all duration-300 ${
                          isDark ? 'border-slate-700' : 'border-gray-200'
                        }`}>
                          <h4 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>{service.title}</h4>
                          <p className={`mb-3 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>{service.shortDescription}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className={`px-3 py-1 text-sm rounded-full ${
                              isDark 
                                ? 'bg-blue-900/30 text-blue-300 border border-blue-800/50' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              Timeline: {service.timeline}
                            </span>
                            <span className={`px-3 py-1 text-sm rounded-full ${
                              isDark 
                                ? 'bg-green-900/30 text-green-300 border border-green-800/50' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              Team: {service.team.size}
                            </span>
                            <span className={`px-3 py-1 text-sm rounded-full ${
                              isDark 
                                ? 'bg-purple-900/30 text-purple-300 border border-purple-800/50' 
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              Basic: {service.pricing.basic}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className={`text-xl font-semibold mt-8 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>2.2 Service Modifications</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Any changes to the scope of services must be requested in writing and may result in 
                      additional charges and timeline adjustments.
                    </p>

                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>2.3 Acceptance Criteria</h3>
                    <ul className={`list-disc pl-5 space-y-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>Deliverables must meet specifications outlined in the Service Agreement</li>
                      <li>Client has 10 business days to review and accept deliverables</li>
                      <li>Rejection must include specific reasons and required changes</li>
                      <li>Silence after 10 days is considered acceptance</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Payment Section */}
              {activeSection === 'payment' && (
                <section id="payment">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>3. Payment Terms</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>3.1 Fee Structure</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Our services are priced according to the following structure:
                    </p>

                    <div className={`overflow-x-auto mt-6 ${
                      isDark ? 'bg-slate-800/50 rounded-lg' : ''
                    }`}>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className={isDark ? 'bg-slate-700' : 'bg-gray-50'}>
                          <tr>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Service Type
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Basic Package
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Standard Package
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Payment Terms
                            </th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${
                          isDark ? 'divide-slate-700 bg-slate-800/30' : 'divide-gray-200 bg-white'
                        }`}>
                          {allServices.slice(0, 3).map((service) => (
                            <tr key={service.id} className={isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`text-sm font-medium ${
                                  isDark ? 'text-white' : 'text-gray-900'
                                }`}>{service.title}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`text-sm ${
                                  isDark ? 'text-blue-300' : 'text-gray-900'
                                }`}>{service.pricing.basic}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`text-sm ${
                                  isDark ? 'text-green-300' : 'text-gray-900'
                                }`}>{service.pricing.standard}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`text-sm ${
                                  isDark ? 'text-gray-300' : 'text-gray-900'
                                }`}>
                                  50% upfront, 30% on milestone, 20% on delivery
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h3 className={`text-xl font-semibold mt-8 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>3.2 Invoicing and Payment</h3>
                    <ul className={`list-disc pl-5 space-y-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>Invoices are issued monthly or per milestone as agreed</li>
                      <li>Payment is due within 15 days of invoice date</li>
                      <li>Late payments incur interest at 1.5% per month</li>
                      <li>All prices are in USD unless otherwise specified</li>
                    </ul>

                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>3.3 Taxes</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      All fees are exclusive of taxes. Client is responsible for all applicable taxes, 
                      duties, and governmental charges.
                    </p>
                  </div>
                </section>
              )}

              {/* Intellectual Property Section */}
              {activeSection === 'intellectual' && (
                <section id="intellectual">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>4. Intellectual Property</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>4.1 Ownership</h3>
                    <div className={`border-l-4 p-4 mb-6 ${
                      isDark ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-50 border-yellow-400'
                    }`}>
                      <div className="flex">
                        <FaExclamationTriangle className={`mt-1 mr-3 flex-shrink-0 ${
                          isDark ? 'text-yellow-500' : 'text-yellow-400'
                        }`} />
                        <div>
                          <p className={isDark ? 'text-yellow-300' : 'text-yellow-700'}>
                            Intellectual property rights are crucial. Please review this section carefully.
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul className={`list-disc pl-5 space-y-2 mb-6 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>
                        <strong>Pre-existing IP:</strong> Each party retains ownership of their pre-existing 
                        intellectual property.
                      </li>
                      <li>
                        <strong>Developed IP:</strong> Upon full payment, Client receives ownership of 
                        custom-developed deliverables.
                      </li>
                      <li>
                        <strong>Background IP:</strong> Company retains rights to tools, frameworks, and 
                        methodologies used to create deliverables.
                      </li>
                      <li>
                        <strong>Open Source:</strong> Open source components remain under their respective licenses.
                      </li>
                    </ul>

                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>4.2 License Grants</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Company grants Client a perpetual, non-exclusive, non-transferable license to use 
                      any background IP incorporated into the deliverables.
                    </p>
                  </div>
                </section>
              )}

              {/* Liability Section */}
              {activeSection === 'liability' && (
                <section id="liability">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>5. Liability and Warranties</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>5.1 Warranties</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Company warrants that services will be performed in a professional manner consistent 
                      with industry standards. Specific warranties vary by service:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className={`border rounded-lg p-4 ${
                        isDark ? 'border-slate-700' : 'border-gray-200'
                      }`}>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Technical Services</h4>
                        <ul className={`space-y-2 text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <li>90-day warranty on software development</li>
                          <li>30-day warranty on implementation services</li>
                          <li>Performance meets documented specifications</li>
                          <li>Compliance with security standards</li>
                        </ul>
                      </div>
                      <div className={`border rounded-lg p-4 ${
                        isDark ? 'border-slate-700' : 'border-gray-200'
                      }`}>
                        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Business Services</h4>
                        <ul className={`space-y-2 text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <li>Professional advice based on current regulations</li>
                          <li>Accurate and timely delivery</li>
                          <li>Compliance with applicable laws</li>
                          <li>Confidentiality maintained</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className={`text-xl font-semibold mt-8 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>5.2 Limitation of Liability</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      In no event shall Company's total liability exceed the fees paid by Client for the 
                      specific service giving rise to the claim. Company is not liable for:
                    </p>
                    <ul className={`list-disc pl-5 space-y-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of data, profits, or business opportunities</li>
                      <li>Third-party claims except as specified</li>
                      <li>Force majeure events</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Confidentiality Section */}
              {activeSection === 'confidentiality' && (
                <section id="confidentiality">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>6. Confidentiality</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>6.1 Confidential Information</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Both parties agree to protect confidential information received during the engagement.
                    </p>

                    <div className={`rounded-lg p-6 mt-6 ${
                      isDark ? 'bg-slate-700/30' : 'bg-gray-50'
                    }`}>
                      <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Confidential Information Includes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className={`space-y-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <li className="flex items-start">
                            <FaCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-500'
                            }`} />
                            Business plans and strategies
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-500'
                            }`} />
                            Financial information
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-500'
                            }`} />
                            Technical specifications
                          </li>
                        </ul>
                        <ul className={`space-y-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <li className="flex items-start">
                            <FaCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-500'
                            }`} />
                            Customer lists and data
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-500'
                            }`} />
                            Source code and algorithms
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-500'
                            }`} />
                            Proprietary methodologies
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h3 className={`text-xl font-semibold mt-8 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>6.2 Exceptions</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Confidentiality obligations do not apply to information that:
                    </p>
                    <ul className={`list-disc pl-5 space-y-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>Was already known to the receiving party</li>
                      <li>Becomes publicly available through no fault of the receiving party</li>
                      <li>Is independently developed</li>
                      <li>Must be disclosed by law or court order</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Termination Section */}
              {activeSection === 'termination' && (
                <section id="termination">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>7. Termination</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>7.1 Termination Rights</h3>
                    
                    <div className={`overflow-x-auto mt-6 ${
                      isDark ? 'bg-slate-800/50 rounded-lg' : ''
                    }`}>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className={isDark ? 'bg-slate-700' : 'bg-gray-50'}>
                          <tr>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Termination Type
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Notice Period
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                              isDark ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              Fees Due
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
                              }`}>For Convenience</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                isDark ? 'text-blue-300' : 'text-gray-900'
                              }`}>30 days written notice</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                isDark ? 'text-green-300' : 'text-gray-900'
                              }`}>All work completed plus 20%</div>
                            </td>
                          </tr>
                          <tr className={isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm font-medium ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>For Cause</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                isDark ? 'text-blue-300' : 'text-gray-900'
                              }`}>Immediate</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                isDark ? 'text-green-300' : 'text-gray-900'
                              }`}>Pro-rata for work completed</div>
                            </td>
                          </tr>
                          <tr className={isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm font-medium ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>Material Breach</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                isDark ? 'text-blue-300' : 'text-gray-900'
                              }`}>15 days to cure</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm ${
                                isDark ? 'text-green-300' : 'text-gray-900'
                              }`}>As per breach remedies</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className={`text-xl font-semibold mt-8 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>7.2 Post-Termination</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Upon termination:
                    </p>
                    <ul className={`list-disc pl-5 space-y-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>All outstanding fees become immediately due</li>
                      <li>Each party returns or destroys confidential information</li>
                      <li>Company delivers completed work to date</li>
                      <li>Survival clauses remain in effect</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Disputes Section */}
              {activeSection === 'disputes' && (
                <section id="disputes">
                  <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>8. Dispute Resolution</h2>
                  
                  <div className="prose max-w-none">
                    <h3 className={`text-xl font-semibold mt-6 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>8.1 Resolution Process</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      The parties agree to resolve disputes through the following escalation process:
                    </p>

                    <div className="space-y-4 mt-6">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                          isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                        }`}>
                          <span className={`font-semibold ${
                            isDark ? 'text-blue-300' : 'text-blue-600'
                          }`}>1</span>
                        </div>
                        <div>
                          <h4 className={`font-semibold transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Direct Negotiation</h4>
                          <p className={`mt-1 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Parties attempt to resolve dispute within 15 days</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                          isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                        }`}>
                          <span className={`font-semibold ${
                            isDark ? 'text-blue-300' : 'text-blue-600'
                          }`}>2</span>
                        </div>
                        <div>
                          <h4 className={`font-semibold transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Mediation</h4>
                          <p className={`mt-1 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>If unresolved, mediation with a neutral third party</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                          isDark ? 'bg-blue-900/30' : 'bg-blue-100'
                        }`}>
                          <span className={`font-semibold ${
                            isDark ? 'text-blue-300' : 'text-blue-600'
                          }`}>3</span>
                        </div>
                        <div>
                          <h4 className={`font-semibold transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Arbitration</h4>
                          <p className={`mt-1 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Final binding arbitration if mediation fails</p>
                        </div>
                      </div>
                    </div>

                    <h3 className={`text-xl font-semibold mt-8 mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>8.2 Governing Law</h3>
                    <p className={`mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      These Terms are governed by the laws of India. Any legal proceedings shall be conducted 
                      in the courts of the jurisdiction where Levitica Technologies is headquartered.
                    </p>

                    <div className={`rounded-lg p-6 mt-8 ${
                      isDark ? 'bg-slate-700/30' : 'bg-gray-50'
                    }`}>
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Contact for Legal Notices</h4>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        Levitica Technologies Private Limited<br />
                        Office #407 & 409, 4th Floor, Jain Sadguru<br />
                        Image's Capital Park, Ayyappa Society,<br />
                        Madhapur, Hyderabad, Telangana 500081.<br />
                        Email: legal@leviticatech.com<br />
                        Phone: [Company Phone Number]
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Footer Note */}
            <div className={`mt-8 p-6 rounded-lg border transition-all duration-300 ${
              isDark ? 'bg-blue-800/50 border-blue-700' : 'bg-blue-50 border-blue-200'
            }`}>
              <div className="flex items-start">
                <FaExclamationTriangle className={`mt-1 mr-3 flex-shrink-0 ${
                  isDark ? 'text-blue-400' : 'text-blue-400'
                }`} />
                <div>
                  <p className={isDark ? 'text-blue-300' : 'text-blue-600'}>
                    This document is a summary of our Terms and Conditions. The complete legal document 
                    with all terms will be provided in the Service Agreement. These terms are subject to 
                    change, and the latest version will always be available on our website.
                  </p>
                  <p className={`mt-2 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    By engaging our services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms and Conditions.
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

export default TermsAndConditions;