// components/TermsAndConditions.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, businessServicesData } from '../data/Servicedata';
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
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="mt-4 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-2 lg:mt-4 text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
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
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
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
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-center space-x-3 ${
                            activeSection === section.id
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <Icon className="text-gray-400" />
                          <span>{section.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Quick Info */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <FaQuestionCircle className="mr-2" />
                  Need Help?
                </h4>
                <p className="text-sm text-blue-700 mb-3">
                  Have questions about our terms?
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full text-center bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <section id="overview">
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-blue-900">Important Notice</h3>
                        <p className="text-blue-700 mt-1">
                          By using our services, you agree to these terms. Please read them carefully.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement Overview</h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-gray-700 mb-4">
                      These Terms and Conditions ("Terms") govern your use of services provided by 
                      <strong> Levitica Technologies Private Limited</strong> ("Company", "we", "us", or "our"). 
                      By engaging our services, you ("Client", "you", or "your") agree to be bound by these Terms.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Definitions</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
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

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Scope of Services</h3>
                    <p className="text-gray-700 mb-3">
                      Levitica Technologies provides the following categories of services:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Technical Services</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {servicesData.slice(0, 4).map((service) => (
                            <li key={service.id} className="flex items-center">
                              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                              {service.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Services</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {businessServicesData.slice(0, 4).map((service) => (
                            <li key={service.id} className="flex items-center">
                              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                              {service.title}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Terms</h2>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Service Delivery</h3>
                    <p className="text-gray-700 mb-4">
                      All services will be delivered according to the specifications outlined in the 
                      individual Service Agreement. Each service has specific terms that apply:
                    </p>

                    <div className="mt-6 space-y-6">
                      {allServices.slice(0, 4).map((service) => (
                        <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h4>
                          <p className="text-gray-600 mb-3">{service.shortDescription}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                              Timeline: {service.timeline}
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                              Team: {service.team.size}
                            </span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                              Basic: {service.pricing.basic}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2.2 Service Modifications</h3>
                    <p className="text-gray-700 mb-4">
                      Any changes to the scope of services must be requested in writing and may result in 
                      additional charges and timeline adjustments.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Acceptance Criteria</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Fee Structure</h3>
                    <p className="text-gray-700 mb-4">
                      Our services are priced according to the following structure:
                    </p>

                    <div className="overflow-x-auto mt-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Service Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Basic Package
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Standard Package
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Payment Terms
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {allServices.slice(0, 3).map((service) => (
                            <tr key={service.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{service.title}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{service.pricing.basic}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{service.pricing.standard}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  50% upfront, 30% on milestone, 20% on delivery
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3.2 Invoicing and Payment</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Invoices are issued monthly or per milestone as agreed</li>
                      <li>Payment is due within 15 days of invoice date</li>
                      <li>Late payments incur interest at 1.5% per month</li>
                      <li>All prices are in USD unless otherwise specified</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Taxes</h3>
                    <p className="text-gray-700 mb-4">
                      All fees are exclusive of taxes. Client is responsible for all applicable taxes, 
                      duties, and governmental charges.
                    </p>
                  </div>
                </section>
              )}

              {/* Intellectual Property Section */}
              {activeSection === 'intellectual' && (
                <section id="intellectual">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Ownership</h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <div className="flex">
                        <FaExclamationTriangle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-yellow-700">
                            Intellectual property rights are crucial. Please review this section carefully.
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
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

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 License Grants</h3>
                    <p className="text-gray-700 mb-4">
                      Company grants Client a perpetual, non-exclusive, non-transferable license to use 
                      any background IP incorporated into the deliverables.
                    </p>
                  </div>
                </section>
              )}

              {/* Liability Section */}
              {activeSection === 'liability' && (
                <section id="liability">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liability and Warranties</h2>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Warranties</h3>
                    <p className="text-gray-700 mb-4">
                      Company warrants that services will be performed in a professional manner consistent 
                      with industry standards. Specific warranties vary by service:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technical Services</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>90-day warranty on software development</li>
                          <li>30-day warranty on implementation services</li>
                          <li>Performance meets documented specifications</li>
                          <li>Compliance with security standards</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Services</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>Professional advice based on current regulations</li>
                          <li>Accurate and timely delivery</li>
                          <li>Compliance with applicable laws</li>
                          <li>Confidentiality maintained</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5.2 Limitation of Liability</h3>
                    <p className="text-gray-700 mb-4">
                      In no event shall Company's total liability exceed the fees paid by Client for the 
                      specific service giving rise to the claim. Company is not liable for:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Confidential Information</h3>
                    <p className="text-gray-700 mb-4">
                      Both parties agree to protect confidential information received during the engagement.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Confidential Information Includes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            Business plans and strategies
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            Financial information
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            Technical specifications
                          </li>
                        </ul>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            Customer lists and data
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            Source code and algorithms
                          </li>
                          <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            Proprietary methodologies
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6.2 Exceptions</h3>
                    <p className="text-gray-700 mb-4">
                      Confidentiality obligations do not apply to information that:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.1 Termination Rights</h3>
                    
                    <div className="overflow-x-auto mt-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Termination Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Notice Period
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Fees Due
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">For Convenience</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">30 days written notice</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">All work completed plus 20%</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">For Cause</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Immediate</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Pro-rata for work completed</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Material Breach</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">15 days to cure</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">As per breach remedies</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7.2 Post-Termination</h3>
                    <p className="text-gray-700 mb-4">
                      Upon termination:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
                  
                  <div className="prose prose-blue max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.1 Resolution Process</h3>
                    <p className="text-gray-700 mb-4">
                      The parties agree to resolve disputes through the following escalation process:
                    </p>

                    <div className="space-y-4 mt-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-semibold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Direct Negotiation</h4>
                          <p className="text-gray-600 mt-1">Parties attempt to resolve dispute within 15 days</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-semibold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Mediation</h4>
                          <p className="text-gray-600 mt-1">If unresolved, mediation with a neutral third party</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-600 font-semibold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Arbitration</h4>
                          <p className="text-gray-600 mt-1">Final binding arbitration if mediation fails</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8.2 Governing Law</h3>
                    <p className="text-gray-700 mb-4">
                      These Terms are governed by the laws of India. Any legal proceedings shall be conducted 
                      in the courts of the jurisdiction where Levitica Technologies is headquartered.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mt-8">
                      <h4 className="font-semibold text-gray-900 mb-2">Contact for Legal Notices</h4>
                      <p className="text-gray-600">
                        Levitica Technologies Private Limited<br />
                        [Company Address]<br />
                        [City, State, ZIP Code]<br />
                        Email: legal@leviticatech.com<br />
                        Phone: [Company Phone Number]
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Footer Note */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <FaExclamationTriangle className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">
                    This document is a summary of our Terms and Conditions. The complete legal document 
                    with all terms will be provided in the Service Agreement. These terms are subject to 
                    change, and the latest version will always be available on our website.
                  </p>
                  <p className="text-gray-600 mt-2">
                    By engaging our services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile floating action button to scroll to top */}
      <div className="lg:hidden fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          ↑
        </button>
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