// aiSolutionsData.js

import { FaChartLine, FaLaptop, FaRegMessage, FaLaptopCode, FaEye, FaRobot, FaCrosshairs } from 'react-icons/fa6';

export const aiSolutionsData = [
  {
    id: 'intelligent-chatbot-solution',
    icon: FaRegMessage,
    title: 'Intelligent Chatbot Solution',
    imageUrl: '/services/web-development.jpg',
    shortDescription: 'AI-powered conversational platform that automates customer interactions with human-like understanding.',
    fullDescription: 'Transform customer engagement with our end-to-end Intelligent Chatbot Solution. Deploy AI chatbots that understand context, learn from conversations, and provide 24/7 support across all channels.',
    detailedDescription: `Our Intelligent Chatbot Solution is a complete AI-powered conversational platform designed to revolutionize customer interactions. We don't just build chatbots – we deliver comprehensive solutions that integrate seamlessly with your existing systems and scale with your business. <br>

The solution includes: <br>
* Advanced Natural Language Processing (NLP) for understanding customer intent <br>
* Machine learning algorithms that improve responses over time <br>
* Multi-channel deployment (website, mobile apps, social media, messaging platforms) <br>
* Integration with CRM, ERP, and ticketing systems <br>
* Real-time analytics dashboard for performance monitoring <br>
* Human-bot handoff capabilities for complex queries <br>
* Custom training based on your industry and customer data <br>

This isn't just a chatbot; it's a complete customer engagement transformation. We handle everything from initial design and development to deployment, training, and ongoing optimization.`,
    
    features: [
      'Contextual Conversation Engine',
      'Multi-language Support (50+ languages)',
      'Sentiment Analysis & Emotional Intelligence',
      'Seamless CRM Integration',
      '24/7 Automated Customer Support',
      'Voice & Text Interface',
      'Advanced Analytics Dashboard',
      'Continuous Learning Algorithms',
      'Omnichannel Deployment',
      'Enterprise-grade Security'
    ],
    
    technologies: [
      'Dialogflow Enterprise',
      'OpenAI GPT-4 Integration',
      'Microsoft Azure Bot Service',
      'Custom NLP Models',
      'Real-time Analytics Engine',
      'Secure Cloud Infrastructure',
      'API Integration Framework',
      'Containerized Deployment'
    ],
    
    benefits: [
      'Reduce customer service costs by 40-60%',
      'Handle 80%+ of routine inquiries automatically',
      'Improve customer satisfaction by 35%',
      'Scale support operations instantly',
      'Gain 24/7 customer engagement capability',
      'Collect actionable customer insights',
      'Increase lead conversion rates by 25%',
      'Multilingual global support capability'
    ],
    
    color: (isDark) => isDark ? 'from-blue-600 to-cyan-600' : 'from-blue-500 to-cyan-500',
    
    caseStudies: [
      { 
        title: 'Enterprise Customer Support Transformation', 
        result: '65% reduction in support costs',
        description: 'Deployed our Intelligent Chatbot Solution for a Fortune 500 company, handling 85% of customer inquiries automatically while improving satisfaction scores from 3.8 to 4.5 stars.'
      },
      { 
        title: 'E-commerce Sales Optimization', 
        result: '35% increase in conversion rate',
        description: 'Implemented AI chatbots for product recommendations and customer assistance, increasing average order value by 28% and conversion rates by 35%.'
      },
      { 
        title: 'Healthcare Patient Engagement', 
        result: '50k+ monthly interactions automated',
        description: 'Deployed healthcare chatbots for appointment scheduling and basic medical information, reducing administrative workload by 70% and improving patient experience.'
      }
    ],
    
    implementationProcess: [
      'Discovery & Requirements Analysis (2 weeks)',
      'Conversation Design & Flow Mapping (3 weeks)',
      'AI Model Training & Development (4-6 weeks)',
      'Integration with Existing Systems (2-3 weeks)',
      'Testing & Quality Assurance (2 weeks)',
      'Pilot Deployment & User Training (2 weeks)',
      'Full-scale Implementation (1 week)',
      'Ongoing Optimization & Support'
    ],
    
    pricingModels: {
      standard: '₹25,000 - ₹50,000 (One-time implementation)',
      enterprise: 'Custom pricing (Large-scale deployment)',
      subscription: '₹2,000 - ₹10,000/month (Managed service)',
      'pay-per-use': '₹0.10 - ₹0.50 per conversation (Cloud-based)'
    },
    
    timeline: '12-16 weeks for complete implementation',
    
    team: {
      size: '5-8 AI specialists',
      roles: ['AI Solution Architect', 'NLP Engineer', 'Conversation Designer', 'Integration Specialist', 'DevOps Engineer', 'Quality Assurance Lead']
    },
    
    successMetrics: [
      'First Contact Resolution Rate (>75%)',
      'Customer Satisfaction Score (>4.3/5)',
      'Cost Reduction (40-60%)',
      'Automation Rate (>80%)',
      'Response Time (<5 seconds)',
      'Accuracy Rate (>95%)'
    ],
    
    industries: ['Retail & E-commerce', 'Banking & Finance', 'Healthcare', 'Telecommunications', 'Travel & Hospitality', 'Education']
  },

  {
    id: 'predictive-analytics-solution',
    icon: FaChartLine,
    title: 'Predictive Analytics Solution',
    shortDescription: 'Complete AI-powered forecasting platform that turns data into actionable business predictions.',
    fullDescription: 'Our Predictive Analytics Solution provides enterprise-grade forecasting capabilities powered by machine learning, delivering accurate predictions and actionable insights for strategic decision-making.',
    detailedDescription: `The Predictive Analytics Solution is a comprehensive AI platform that transforms your historical data into accurate future predictions. We build custom machine learning models tailored to your specific business needs, whether it's demand forecasting, customer behavior prediction, risk assessment, or market trend analysis. <br>

This solution includes: <br>
* Automated data ingestion and preprocessing pipelines <br>
* Multiple ML algorithms tested for optimal performance <br>
* Real-time prediction capabilities <br>
* Interactive dashboards and reporting <br>
* Automated alerting for anomalies and opportunities <br>
* Integration with existing BI tools and ERP systems <br>
* Continuous model retraining and optimization <br>

We don't just deliver predictions; we deliver a complete ecosystem for data-driven decision making. Our solution evolves with your business, learning from new data and adapting to changing market conditions.`,
    
    features: [
      'Automated Data Pipeline',
      'Multiple ML Algorithm Selection',
      'Real-time Predictions',
      'Interactive Visualization Dashboards',
      'Automated Report Generation',
      'Anomaly Detection System',
      'What-if Scenario Modeling',
      'Historical Performance Tracking',
      'Integration with BI Tools',
      'Continuous Model Improvement'
    ],
    
    technologies: [
      'Python ML Stack (scikit-learn, TensorFlow, PyTorch)',
      'Apache Spark for Big Data',
      'AWS SageMaker / Azure ML',
      'Real-time Data Streaming (Kafka)',
      'Interactive Dashboards (Tableau, Power BI)',
      'Container Orchestration (Kubernetes)',
      'Automated ML Platforms',
      'Cloud Data Warehouses'
    ],
    
    benefits: [
      'Improve forecast accuracy by 30-50%',
      'Reduce inventory costs by 20-35%',
      'Predict customer churn with 85% accuracy',
      'Optimize resource allocation',
      'Identify new market opportunities',
      'Automate routine forecasting tasks',
      'Make proactive business decisions',
      'Gain competitive advantage'
    ],
    
    color: (isDark) => isDark ? 'from-green-600 to-emerald-600' : 'from-green-500 to-emerald-500',
    
    caseStudies: [
      { 
        title: 'Retail Chain Demand Forecasting', 
        result: '35% inventory cost reduction',
        description: 'Implemented predictive analytics for a national retail chain, improving demand forecast accuracy by 42% and reducing inventory costs by 35% while maintaining 99% product availability.'
      },
      { 
        title: 'Financial Services Risk Prediction', 
        result: '30% reduction in default rates',
        description: 'Deployed AI risk assessment models that identified 92% of high-risk applications, reducing loan default rates by 30% and improving portfolio quality.'
      },
      { 
        title: 'Manufacturing Predictive Maintenance', 
        result: '40% reduction in downtime',
        description: 'Installed predictive maintenance solution that predicted equipment failures 10 days in advance, reducing unplanned downtime by 40% and maintenance costs by 35%.'
      }
    ],
    
    implementationProcess: [
      'Business Objective Definition & KPI Setting',
      'Data Assessment & Infrastructure Setup',
      'Feature Engineering & Model Development',
      'Backtesting & Validation',
      'Pilot Implementation',
      'Performance Optimization',
      'Full Deployment',
      'Ongoing Monitoring & Model Retraining'
    ],
    
    pricingModels: {
      standard: '₹30,000 - ₹75,000 (Complete solution)',
      enterprise: 'Custom pricing (Multi-department deployment)',
      subscription: '₹3,000 - ₹15,000/month (SaaS model)',
      'consulting+licensing': '₹15,000 + Annual license fee'
    },
    
    timeline: '10-14 weeks for complete deployment',
    
    team: {
      size: '4-7 data scientists and engineers',
      roles: ['Data Science Lead', 'ML Engineer', 'Data Engineer', 'BI Specialist', 'DevOps Engineer', 'Business Analyst']
    },
    
    successMetrics: [
      'Prediction Accuracy (>90%)',
      'ROI (>300% within 12 months)',
      'Processing Speed (<1 second per prediction)',
      'Data Integration Coverage (>95%)',
      'Uptime (99.9%)',
      'User Adoption Rate (>80%)'
    ],
    
    industries: ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare', 'Logistics', 'Energy', 'Telecom']
  },

  {
    id: 'ai-process-automation-solution',
    icon: FaLaptopCode,
    title: 'AI Process Automation Solution',
    shortDescription: 'End-to-end automation platform that transforms business processes with intelligent decision-making capabilities.',
    fullDescription: 'Our AI Process Automation Solution combines robotic process automation (RPA) with artificial intelligence to create intelligent workflows that learn, adapt, and optimize business processes automatically.',
    detailedDescription: `The AI Process Automation Solution is a complete platform that revolutionizes how businesses handle repetitive tasks and complex workflows. We combine the best of RPA with advanced AI capabilities to create intelligent automation that goes beyond simple task automation. <br>

This solution includes: <br>
* Intelligent Document Processing (IDP) with AI-powered extraction <br>
* Cognitive automation for decision-based processes <br>
* Workflow orchestration and management <br>
* Integration with enterprise systems (ERP, CRM, SCM) <br>
* Real-time monitoring and analytics <br>
* Self-learning capabilities that improve over time <br>
* Exception handling and human-in-the-loop workflows <br>

We transform your existing processes into intelligent workflows that reduce errors, increase speed, and free up human resources for higher-value tasks. The solution scales with your business and adapts to changing requirements.`,
    
    features: [
      'Intelligent Document Processing',
      'Cognitive Decision Making',
      'End-to-end Workflow Automation',
      'Real-time Process Monitoring',
      'Exception Handling Engine',
      'Human-in-the-loop Capabilities',
      'Multi-system Integration',
      'Self-learning Algorithms',
      'Compliance & Audit Trail',
      'Scalable Architecture'
    ],
    
    technologies: [
      'UiPath / Automation Anywhere Integration',
      'Computer Vision (OpenCV, Tesseract)',
      'Natural Language Processing',
      'Workflow Orchestration Engines',
      'Microservices Architecture',
      'Containerization (Docker, Kubernetes)',
      'API Gateway Integration',
      'Real-time Analytics Platform'
    ],
    
    benefits: [
      'Reduce processing time by 70-90%',
      'Decrease error rates by 95%',
      'Cut operational costs by 40-60%',
      'Improve compliance and auditability',
      'Scale operations without linear cost increase',
      '24/7 process execution capability',
      'Better resource allocation',
      'Faster decision making'
    ],
    
    color: (isDark) => isDark ? 'from-purple-600 to-pink-600' : 'from-purple-500 to-pink-500',
    
    caseStudies: [
      { 
        title: 'Insurance Claims Processing', 
        result: '85% faster claim processing',
        description: 'Automated insurance claims processing using AI document extraction and decision automation, reducing average processing time from 5 days to 4 hours while improving accuracy.'
      },
      { 
        title: 'Financial Reconciliation Automation', 
        result: '90% reduction in manual effort',
        description: 'Implemented intelligent reconciliation system for a bank that automated 90% of manual reconciliation tasks, reducing errors by 95% and freeing up 15 FTEs for higher-value work.'
      },
      { 
        title: 'Supply Chain Invoice Processing', 
        result: 'Processed 50k+ invoices monthly',
        description: 'Deployed AI-powered invoice processing solution that handles 50,000+ invoices monthly with 99.8% accuracy, reducing processing costs by 65%.'
      }
    ],
    
    implementationProcess: [
      'Process Discovery & Assessment',
      'Automation Opportunity Identification',
      'Solution Design & Architecture',
      'Development & Integration',
      'Testing & Validation',
      'Pilot Implementation',
      'User Training & Change Management',
      'Full Deployment & Optimization'
    ],
    
    pricingModels: {
      'per-process': '₹20,000 - ₹50,000 per major process',
      enterprise: 'Custom pricing (Enterprise-wide deployment)',
      subscription: '₹5,000 - ₹25,000/month (Platform license + support)',
      'outcome-based': 'Performance-based pricing available'
    },
    
    timeline: '8-12 weeks per major process automation',
    
    team: {
      size: '6-10 automation specialists',
      roles: ['Automation Architect', 'AI Engineer', 'RPA Developer', 'Process Analyst', 'Integration Specialist', 'Change Management Lead']
    },
    
    successMetrics: [
      'Automation Rate (>80%)',
      'Processing Speed Improvement (>70%)',
      'Error Rate Reduction (>90%)',
      'Cost Reduction (40-60%)',
      'ROI Period (<12 months)',
      'User Satisfaction (>4/5)'
    ],
    
    industries: ['Insurance', 'Banking', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics', 'Government']
  },

  {
    id: 'computer-vision-solution',
    icon: FaEye,
    title: 'Computer Vision Solution',
    shortDescription: 'Complete visual intelligence platform for automated inspection, analysis, and recognition tasks.',
    fullDescription: 'Our Computer Vision Solution provides advanced image and video analysis capabilities for quality control, security, surveillance, and automated visual inspection across multiple industries.',
    detailedDescription: `The Computer Vision Solution is a comprehensive platform that brings visual intelligence to your operations. We develop custom computer vision models that can see, understand, and analyze visual data with human-like (or better) accuracy. <br>

This solution includes: <br>
* Real-time object detection and recognition <br>
* Quality inspection and defect detection <br>
* Facial recognition and biometric analysis <br>
* Optical Character Recognition (OCR) for documents <br>
* Video analytics and behavior analysis <br>
* Thermal and infrared image processing <br>
* Edge computing capabilities for real-time processing <br>

Whether you need to automate quality control on a production line, enhance security with facial recognition, or extract data from documents and images, our solution provides the accuracy and reliability you need.`,
    
    features: [
      'Real-time Object Detection & Classification',
      'Quality Control & Defect Identification',
      'Facial Recognition & Biometric Analysis',
      'Optical Character Recognition (OCR)',
      'Video Analytics & Behavior Tracking',
      'Thermal & Infrared Imaging',
      'Edge Computing Capabilities',
      'Multi-camera Support',
      'Custom Model Training',
      'Integration with IoT Devices'
    ],
    
    technologies: [
      'TensorFlow / PyTorch for Deep Learning',
      'OpenCV for Image Processing',
      'YOLO / Faster R-CNN for Object Detection',
      'Edge AI Hardware (NVIDIA Jetson, Intel Movidius)',
      'Cloud Vision APIs (AWS Rekognition, Azure CV)',
      'Real-time Video Processing',
      'IoT Device Integration',
      'Mobile Deployment (iOS/Android)'
    ],
    
    benefits: [
      'Automate 24/7 visual inspection tasks',
      'Improve quality control accuracy by 90%+',
      'Reduce inspection costs by 50-70%',
      'Enable real-time decision making',
      'Enhance security and surveillance',
      'Process visual data at scale',
      'Reduce human error in visual tasks',
      'Gain insights from visual data'
    ],
    
    color: (isDark) => isDark ? 'from-orange-600 to-red-600' : 'from-orange-500 to-red-500',
    
    caseStudies: [
      { 
        title: 'Manufacturing Quality Control', 
        result: '99.5% defect detection accuracy',
        description: 'Implemented computer vision system for automotive parts inspection that achieved 99.5% defect detection accuracy, reducing quality control costs by 60% and improving production yield.'
      },
      { 
        title: 'Retail Inventory Management', 
        result: '40% reduction in stockouts',
        description: 'Deployed shelf monitoring system using computer vision that automatically tracks inventory levels, reducing stockouts by 40% and optimizing restocking schedules.'
      },
      { 
        title: 'Construction Site Safety Monitoring', 
        result: '85% reduction in safety incidents',
        description: 'Installed AI-powered safety monitoring system that detects PPE compliance and unsafe behaviors, reducing safety incidents by 85% on construction sites.'
      }
    ],
    
    implementationProcess: [
      'Use Case Analysis & Requirements Gathering',
      'Data Collection & Annotation',
      'Model Development & Training',
      'Hardware Selection & Setup',
      'Integration with Existing Systems',
      'Testing & Validation',
      'Deployment & Calibration',
      'Ongoing Model Retraining'
    ],
    
    pricingModels: {
      'per-camera': '₹10,000 - ₹30,000 per camera setup',
      enterprise: 'Custom pricing (Multi-site deployment)',
      subscription: '₹2,000 - ₹10,000/month (SaaS platform)',
      'project-based': 'Fixed price for complete solution'
    },
    
    timeline: '10-16 weeks depending on complexity',
    
    team: {
      size: '5-8 computer vision specialists',
      roles: ['Computer Vision Engineer', 'MLOps Specialist', 'Hardware Engineer', 'Data Annotation Lead', 'Integration Developer', 'Quality Assurance']
    },
    
    successMetrics: [
      'Detection Accuracy (>95%)',
      'False Positive Rate (<5%)',
      'Processing Speed (<100ms per frame)',
      'System Uptime (99.9%)',
      'ROI (>200% within 12 months)',
      'User Adoption Rate (>90%)'
    ],
    
    industries: ['Manufacturing', 'Retail', 'Construction', 'Healthcare', 'Agriculture', 'Security', 'Automotive']
  },

  {
    id: 'ai-decision-support-solution',
    icon: FaRobot,
    title: 'AI Decision Support Solution',
    shortDescription: 'Intelligent decision-making platform that analyzes complex data to provide optimal recommendations.',
    fullDescription: 'Our AI Decision Support Solution processes multiple variables and constraints to deliver data-driven recommendations, enabling faster and more accurate strategic decisions across your organization.',
    detailedDescription: `The AI Decision Support Solution is a powerful platform that transforms how organizations make critical decisions. We build intelligent systems that analyze complex data, consider multiple constraints and objectives, and provide optimal recommendations in real-time. <br>

This solution includes: <br>
* Multi-criteria decision analysis engines <br>
* Real-time data integration and processing <br>
* Scenario simulation and what-if analysis <br>
* Prescriptive analytics capabilities <br>
* Integration with business intelligence tools <br>
* Automated reporting and alerting <br>
* Explainable AI for transparent decision-making <br>
* Continuous learning from outcomes <br>

Whether you're optimizing supply chains, making investment decisions, or planning strategic initiatives, our solution provides the intelligence to make better decisions faster.`,
    
    features: [
      'Multi-criteria Decision Analysis',
      'Real-time Data Integration',
      'Scenario Simulation Engine',
      'Prescriptive Analytics',
      'Automated Decision Documentation',
      'Explainable AI Capabilities',
      'Continuous Learning System',
      'Integration with BI Tools',
      'Collaborative Decision Making',
      'Audit Trail & Compliance'
    ],
    
    technologies: [
      'Reinforcement Learning Algorithms',
      'Optimization Frameworks',
      'Real-time Data Pipelines',
      'Graph Databases for Relationship Analysis',
      'Simulation Engines',
      'Explainable AI Libraries',
      'Collaboration Tools Integration',
      'Cloud-native Architecture'
    ],
    
    benefits: [
      'Improve decision accuracy by 30-50%',
      'Reduce decision-making time by 60-80%',
      'Optimize resource allocation',
      'Enhance strategic planning capabilities',
      'Reduce decision bias',
      'Improve organizational agility',
      'Better risk management',
      'Increase operational efficiency'
    ],
    
    color: (isDark) => isDark ? 'from-indigo-600 to-purple-600' : 'from-indigo-500 to-purple-500',
    
    caseStudies: [
      { 
        title: 'Supply Chain Optimization', 
        result: '25% reduction in logistics costs',
        description: 'Deployed decision support system for global supply chain that optimized routing, inventory, and supplier selection, reducing logistics costs by 25% while improving delivery times.'
      },
      { 
        title: 'Investment Portfolio Optimization', 
        result: '18% higher returns',
        description: 'Implemented AI decision system for investment management that analyzed market conditions and risk factors, achieving 18% higher returns compared to traditional methods.'
      },
      { 
        title: 'Healthcare Resource Allocation', 
        result: '30% better resource utilization',
        description: 'Developed decision support platform for hospital resource allocation that optimized staff scheduling and equipment usage, improving resource utilization by 30%.'
      }
    ],
    
    implementationProcess: [
      'Decision Process Analysis',
      'Data Source Identification & Integration',
      'Decision Model Development',
      'User Interface Design',
      'Integration with Decision Systems',
      'Testing with Historical Data',
      'User Training & Adoption',
      'Continuous Improvement Cycle'
    ],
    
    pricingModels: {
      standard: '₹40,000 - ₹80,000 (Department-level solution)',
      enterprise: 'Custom pricing (Enterprise-wide platform)',
      subscription: '₹5,000 - ₹20,000/month (Cloud platform)',
      'consulting+development': 'Time and materials + licensing'
    },
    
    timeline: '12-20 weeks depending on complexity',
    
    team: {
      size: '6-9 decision science specialists',
      roles: ['Decision Scientist', 'Data Engineer', 'UX Designer', 'Business Analyst', 'Integration Specialist', 'Change Management Expert']
    },
    
    successMetrics: [
      'Decision Accuracy Improvement (>30%)',
      'Decision Time Reduction (>60%)',
      'ROI (>250% within 12 months)',
      'User Adoption (>80%)',
      'System Uptime (99.95%)',
      'Decision Documentation Rate (100%)'
    ],
    
    industries: ['Financial Services', 'Healthcare', 'Manufacturing', 'Logistics', 'Government', 'Energy', 'Retail']
  },

  {
    id: 'personalization-engine-solution',
    icon: FaCrosshairs,
    title: 'AI Personalization Engine Solution',
    shortDescription: 'Advanced personalization platform that creates unique user experiences based on behavior and preferences.',
    fullDescription: 'Our AI Personalization Engine Solution delivers hyper-personalized content, product recommendations, and user experiences that increase engagement, conversion, and customer loyalty.',
    detailedDescription: `The AI Personalization Engine Solution is a sophisticated platform that creates truly personalized experiences for every user. We build recommendation systems that understand individual preferences, predict future needs, and deliver relevant content in real-time. <br>

This solution includes:<br>
* Real-time user behavior tracking and analysis<br>
* Collaborative filtering and content-based recommendation<br>
* A/B testing and optimization framework<br>
* Multi-channel personalization (web, mobile, email, apps)<br>
* Integration with marketing automation platforms<br>
* Privacy-compliant data handling<br>
* Performance analytics and reporting<br>
* Self-optimizing algorithms<br>

Whether you're personalizing e-commerce product recommendations, content discovery, or marketing communications, our solution delivers measurable improvements in engagement and conversion.`,
    
    features: [
      'Real-time User Behavior Analysis',
      'Collaborative Filtering Engine',
      'Content-based Recommendation',
      'Multi-channel Personalization',
      'A/B Testing Framework',
      'Privacy-first Data Processing',
      'Real-time Content Delivery',
      'Performance Analytics Dashboard',
      'Self-optimizing Algorithms',
      'Integration with Marketing Tools'
    ],
    
    technologies: [
      'Recommendation Algorithms (SVD, Matrix Factorization)',
      'Real-time Data Processing (Kafka, Spark Streaming)',
      'User Profiling Engines',
      'Content Similarity Analysis',
      'Multi-armed Bandit Algorithms',
      'Privacy-preserving AI',
      'CDN Integration',
      'Marketing Automation Integration'
    ],
    
    benefits: [
      'Increase conversion rates by 20-40%',
      'Improve customer engagement by 30-50%',
      'Reduce bounce rates by 25-35%',
      'Increase average order value by 15-25%',
      'Improve customer retention',
      'Enhance user satisfaction',
      'Optimize marketing ROI',
      'Gain deeper customer insights'
    ],
    
    color: (isDark) => isDark ? 'from-pink-600 to-rose-600' : 'from-pink-500 to-rose-500',
    
    caseStudies: [
      { 
        title: 'E-commerce Product Recommendations', 
        result: '35% increase in conversion rate',
        description: 'Implemented AI personalization engine for major e-commerce platform, increasing conversion rates by 35% and average order value by 28% through personalized recommendations.'
      },
      { 
        title: 'Content Streaming Personalization', 
        result: '40% increase in viewer engagement',
        description: 'Deployed content recommendation system for video streaming service that increased viewer engagement by 40% and reduced churn by 25%.'
      },
      { 
        title: 'Financial Services Cross-selling', 
        result: '50% higher cross-sell conversion',
        description: 'Built personalization engine for bank that analyzed customer behavior to recommend relevant financial products, achieving 50% higher cross-sell conversion rates.'
      }
    ],
    
    implementationProcess: [
      'User Journey Analysis & Personalization Strategy',
      'Data Collection & User Profiling',
      'Algorithm Development & Training',
      'Integration with Digital Platforms',
      'A/B Testing Setup',
      'Performance Optimization',
      'Full Deployment',
      'Continuous Learning & Optimization'
    ],
    
    pricingModels: {
      standard: '₹25,000 - ₹60,000 (Platform implementation)',
      enterprise: 'Custom pricing (Enterprise personalization suite)',
      subscription: '₹3,000 - ₹12,000/month (SaaS platform)',
      'performance-based': 'Revenue share model available'
    },
    
    timeline: '10-14 weeks for complete implementation',
    
    team: {
      size: '5-7 personalization specialists',
      roles: ['Personalization Architect', 'Data Scientist', 'Full-stack Developer', 'UX Designer', 'Marketing Technology Specialist', 'Analytics Engineer']
    },
    
    successMetrics: [
      'Conversion Rate Improvement (>20%)',
      'Customer Engagement Increase (>30%)',
      'Personalization Coverage (>80% of users)',
      'ROI (>300% within 12 months)',
      'Privacy Compliance (100%)',
      'System Response Time (<100ms)'
    ],
    
    industries: ['E-commerce', 'Media & Entertainment', 'Financial Services', 'Travel & Hospitality', 'Education', 'Healthcare']
  }
];

// Utility function to get a solution by ID
export const getSolutionById = (id) => {
  return aiSolutionsData.find(solution => solution.id === id);
};

// Utility function to get solutions by industry
export const getSolutionsByIndustry = (industry) => {
  return aiSolutionsData.filter(solution => 
    solution.industries && solution.industries.includes(industry)
  );
};

// Export all solutions for listing
export const getAllSolutions = () => {
  return aiSolutionsData;
};