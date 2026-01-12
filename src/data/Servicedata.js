
import { image } from 'framer-motion/client';
import { 
  FaMobileAlt,
  FaCloud,
  FaChartBar,
  FaCode,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaBullhorn,
  FaFileAlt,
  FaUserTie,
  FaBalanceScale,
  FaCalculator,
  FaDatabase,
  FaShieldAlt,
  FaServer,
  FaFlask,
  FaBrain,

 
} from 'react-icons/fa';
import { FaAws, FaJava, FaLock, FaNodeJs, FaParagraph, FaPython, FaReact, FaReddit, FaScribd } from 'react-icons/fa6';

export const servicesData = [
    {
        id: 'web-development',
        icon: FaCode,
        title: "Web Development",
        image: '/services/web-development.jpg',
        shortDescription: "Custom websites and web applications built with modern technologies.",
        fullDescription: "We create responsive, high-performance websites and web applications that deliver exceptional user experiences. Using cutting-edge technologies and best practices, we build solutions that are scalable, secure, and optimized for performance across all devices.",
        detailedDescription: "Our web development services cover everything from simple business websites to complex web applications. We focus on creating intuitive user interfaces, fast loading times, and seamless functionality. Our approach combines aesthetic design with technical excellence to deliver web solutions that not only look great but also drive business results through improved user engagement and conversion rates.",
        features: [
        "Responsive Design",
        "SEO Optimization", 
        "Performance",
        "Modern Frameworks"
        ],
        technologies: [
        {name: 'React'},
        {name: 'Next.js'},
        {name: 'Vue.js'},
        {name: 'Angular'},
        {name: 'Node.js'},
        {name: 'TypeScript'},
        {name: 'HTML5/CSS3'},
        {name: 'Tailwind CSS'},
        {name: 'MongoDB'},
        {name: 'PostgreSQL'},
        {name: 'AWS'},
        {name: 'Docker'}
        ],
        benefits: [
        "Pixel-perfect responsive designs",
        "Improved search engine rankings",
        "Fast loading performance",
        "Cross-browser compatibility",
        "Mobile-first approach",
        "Easy content management"
        ],
        color: (isDark) => isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-blue-800",
        caseStudies: [
        { 
            title: "E-commerce Platform", 
            result: "Increased sales by 45%",
            description: "Built a custom e-commerce platform with advanced features and responsive design, resulting in 45% increase in sales."
        },
        { 
            title: "Corporate Website", 
            result: "Improved lead generation by 60%",
            description: "Redesigned and developed a corporate website with SEO optimization, leading to 60% increase in lead generation."
        }
        ],
        process: [
        "Requirements analysis and planning",
        "UI/UX design and prototyping",
        "Development and implementation",
        "Testing and quality assurance",
        "Deployment and launch",
        "Maintenance and support"
        ],
        pricing: {
        basic: "Starting at $5,000",
        standard: "$10,000 - $30,000",
        enterprise: "Custom pricing",
        maintenance: "20% of project cost annually"
        },
        timeline: "4-12 weeks",
        team: {
        size: "3-5 members",
        roles: ["Frontend Developer", "Backend Developer", "UI/UX Designer", "QA Engineer"]
        }
    },
  {
    id: 'mobile-app-development',
    icon: FaMobileAlt,
    title: "Mobile App Development",
    image: '/services/mobile-app.jpg',
    shortDescription: "Cross-platform apps with intuitive UX/UI design for iOS & Android.",
    fullDescription: "We build native and cross-platform mobile applications that deliver exceptional user experiences. Our apps are designed with intuitive interfaces, smooth animations, and reliable performance that keep users engaged.",
    detailedDescription: "Our mobile app development services cover both iOS and Android platforms using native and cross-platform technologies. We focus on creating apps that are not only visually appealing but also functionally robust, secure, and scalable.",
    features: [
      "iOS & Android",
      "Cross-platform",
      "Native Performance",
      "App Store Optimization"
    ],
    technologies: [
      {name: 'React Native'},
      {name: 'Flutter'},
      {name: 'Swift'},
      {name: 'Kotlin'},
      {name: 'Java'},
      {name: 'Firebase'},
      {name: 'AWS Amplify'},
      {name: 'Redux'},
      {name: 'GraphQL'},
      {name: 'App Store Connect'},
      {name: 'Google Play Console'},
      {name: 'TestFlight'}
    ],
    benefits: [
      "Single codebase for multiple platforms",
      "Native-like performance",
      "Faster time to market",
      "Cost-effective development",
      "Easy maintenance",
      "Enhanced user engagement"
    ],
    color: (isDark) => isDark ? "from-green-500 to-emerald-500" : "from-green-600 to-emerald-700",
    caseStudies: [
      { 
        title: "Fitness Tracking App", 
        result: "50k+ downloads",
        description: "Developed a fitness tracking app with workout plans and nutrition tracking that achieved 50,000+ downloads in first 3 months."
      },
      { 
        title: "E-commerce Mobile App", 
        result: "Increased conversions by 35%",
        description: "Created a mobile e-commerce app with AR features, resulting in 35% increase in conversions."
      }
    ],
    process: [
      "Market research and planning",
      "UI/UX design",
      "Development sprints",
      "Testing on real devices",
      "App store submission",
      "Post-launch updates"
    ],
    pricing: {
      basic: "Starting at $8,000",
      standard: "$15,000 - $40,000",
      enterprise: "Custom pricing",
      maintenance: "25% of project cost annually"
    },
    timeline: "6-16 weeks",
    team: {
      size: "2-4 members",
      roles: ["Mobile Developer", "UI/UX Designer", "QA Tester", "Product Manager"]
    }
  },
  {
    id: 'cloud-devops',
    icon: FaCloud,
    title: "Cloud & DevOps",
    image: '/services/cloud-devops.jpg',
    shortDescription: "Infrastructure setup, CI/CD pipelines, and cloud migration services.",
    fullDescription: "We provide comprehensive cloud and DevOps services to help you build scalable, secure, and efficient infrastructure with automated deployment pipelines.",
    detailedDescription: "Our Cloud & DevOps services include infrastructure setup, continuous integration and deployment, monitoring, and cloud migration to help businesses achieve operational excellence and scalability.",
    features: [
      "Cloud Migration",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging"
    ],
    technologies: [
      {name: 'AWS'},
      {name: 'Azure'},
      {name: 'Google Cloud'},
      {name: 'Kubernetes'},
      {name: 'Docker'},
      {name: 'Terraform'},
      {name: 'Jenkins'},
      {name: 'GitLab CI'},
      {name: 'Prometheus'},
      {name: 'Grafana'},
      {name: 'Ansible'},
      {name: 'ELK Stack'}
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Auto-scaling capabilities",
      "Reduced deployment time",
      "Cost optimization",
      "Enhanced security",
      "Better resource utilization"
    ],
    color: (isDark) => isDark ? "from-orange-500 to-amber-500" : "from-orange-600 to-amber-700",
    caseStudies: [
      { 
        title: "E-commerce Platform Migration", 
        result: "Handled 1M+ users",
        description: "Migrated legacy infrastructure to cloud with auto-scaling, successfully handling 1M+ concurrent users."
      },
      { 
        title: "DevOps Implementation", 
        result: "Reduced deployment time by 80%",
        description: "Implemented CI/CD pipelines and automated infrastructure, reducing deployment time from hours to minutes."
      }
    ],
    process: [
      "Infrastructure assessment",
      "Architecture design",
      "Implementation and setup",
      "CI/CD pipeline configuration",
      "Monitoring setup",
      "Training and handover"
    ],
    pricing: {
      basic: "Starting at $6,000",
      standard: "$12,000 - $35,000",
      enterprise: "Custom pricing",
      managed: "$1,500 - $4,000 monthly"
    },
    timeline: "4-10 weeks",
    team: {
      size: "2-3 members",
      roles: ["Cloud Architect", "DevOps Engineer", "System Administrator"]
    }
  },
  {
    id: 'cybersecurity',
    icon: FaShieldAlt,
    title: "Cybersecurity",
    image: '/services/cybersecurity.jpg',
    shortDescription: "Protect your business with advanced security measures.",
    fullDescription: "We provide comprehensive cybersecurity services to protect your digital assets from threats and vulnerabilities with advanced security measures and monitoring.",
    detailedDescription: "Our cybersecurity services include vulnerability assessment, penetration testing, security audits, and 24/7 monitoring to ensure your business remains protected against evolving cyber threats.",
    features: [
      "Vulnerability Testing",
      "Data Protection",
      "Firewall Management",
      "24/7 Monitoring"
    ],
    technologies: [
      {name: 'SIEM Tools'},
      {name: 'Firewall Solutions'},
      {name: 'VPN Technologies'},
      {name: 'Encryption Tools'},
      {name: 'Penetration Testing Tools'},
      {name: 'IDS/IPS Systems'},
      {name: 'Security Auditing Tools'},
      {name: 'Compliance Frameworks'},
      {name: 'Two-factor Authentication'},
      {name: 'Security Information'},
      {name: 'Event Management'},
      {name: 'Threat Intelligence'}
    ],
    benefits: [
      "Enhanced data protection",
      "Compliance with regulations",
      "Reduced risk of breaches",
      "24/7 threat monitoring",
      "Incident response planning",
      "Security awareness training"
    ],
    color: (isDark) => isDark ? "from-red-500 to-pink-500" : "from-red-600 to-pink-700",
    caseStudies: [
      { 
        title: "Financial Institution Security", 
        result: "Zero breaches in 2 years",
        description: "Implemented comprehensive security measures for a bank, resulting in zero security breaches over 2 years."
      },
      { 
        title: "Healthcare Data Protection", 
        result: "HIPAA compliance achieved",
        description: "Secured healthcare data and achieved HIPAA compliance for a medical institution."
      }
    ],
    process: [
      "Security assessment",
      "Risk analysis",
      "Security implementation",
      "Monitoring setup",
      "Incident response planning",
      "Regular audits"
    ],
    pricing: {
      basic: "Starting at $4,000",
      standard: "$8,000 - $25,000",
      enterprise: "Custom pricing",
      subscription: "Monthly security monitoring"
    },
    timeline: "3-8 weeks",
    team: {
      size: "2-3 members",
      roles: ["Security Analyst", "Penetration Tester", "Compliance Officer"]
    }
  },
  {
    id: 'software-testing-qa',
    icon: FaFlask,
    title: "Software Testing & QA",
    image: '/services/software-testing.jpg',
    shortDescription: "Ensure software quality with comprehensive testing and quality assurance.",
    fullDescription: "We provide thorough software testing and quality assurance services to ensure your applications are bug-free, performant, and deliver exceptional user experiences.",
    detailedDescription: "Our QA services include manual and automated testing, performance testing, security testing, and usability testing to ensure your software meets the highest quality standards before release.",
    features: [
      "Desktop Apps",
      "ERP Solutions",
      "Scalable Systems",
      "API Integrations"
    ],
    technologies: [
      {name: 'Selenium'},
      {name: 'Cypress'},
      {name: 'Jest'},
      {name: 'Mocha'},
      {name: 'JUnit'},
      {name: 'Postman'},
      {name: 'JMeter'},
      {name: 'LoadRunner'},
      {name: 'Appium'},
      {name: 'TestRail'},
      {name: 'BrowserStack'},
      {name: 'Docker'}
    ],
    benefits: [
      "Bug-free software releases",
      "Improved user experience",
      "Reduced maintenance costs",
      "Faster time to market",
      "Enhanced software performance",
      "Better customer satisfaction"
    ],
    color: (isDark) => isDark ? "from-purple-500 to-violet-500" : "from-purple-600 to-violet-700",
    caseStudies: [
      { 
        title: "ERP System Testing", 
        result: "99.9% bug-free release",
        description: "Conducted comprehensive testing for an ERP system, resulting in 99.9% bug-free production release."
      },
      { 
        title: "Mobile App QA", 
        result: "5-star app store rating",
        description: "Performed thorough testing on a mobile app, leading to consistent 5-star ratings on app stores."
      }
    ],
    process: [
      "Test planning",
      "Test case development",
      "Manual testing",
      "Automated testing",
      "Performance testing",
      "Bug reporting and tracking"
    ],
    pricing: {
      basic: "Starting at $3,000",
      standard: "$6,000 - $20,000",
      enterprise: "Custom pricing",
      hourly: "$50 - $100 per hour"
    },
    timeline: "2-6 weeks",
    team: {
      size: "1-3 members",
      roles: ["QA Lead", "Test Engineer", "Automation Specialist"]
    }
  },
  {
    id: 'ai-machine-learning',
    icon: FaBrain,
    title: "AI & Machine Learning",
    image: '/services/ai-machine-learning.jpg',
    shortDescription: "Smart AI-driven solutions to automate workflows and enhance efficiency.",
    fullDescription: "We develop AI and machine learning solutions that automate processes, provide intelligent insights, and enhance decision-making capabilities for businesses.",
    detailedDescription: "Our AI/ML services include developing custom machine learning models, natural language processing, computer vision solutions, and predictive analytics to help businesses gain competitive advantages.",
    features: [
      "ML Models",
      "Chatbots",
      "Data Processing",
      "Automation"
    ],
    technologies: [
      {name: 'TensorFlow'},
      {name: 'PyTorch'},
      {name: 'Scikit-learn'},
      {name: 'OpenAI'},
      {name: 'Python'},
      {name: 'R'},
      {name: 'Pandas'},
      {name: 'NumPy'},
      {name: 'NLTK'},
      {name: 'OpenCV'},
      {name: 'Hugging Face'},
      {name: 'LangChain'}
    ],
    benefits: [
      "Automated workflows",
      "Data-driven insights",
      "Improved decision making",
      "Enhanced efficiency",
      "Predictive capabilities",
      "Competitive advantage"
    ],
    color: (isDark) => isDark ? "from-cyan-500 to-blue-500" : "from-cyan-600 to-blue-700",
    caseStudies: [
      { 
        title: "Customer Service Chatbot", 
        result: "Reduced support tickets by 60%",
        description: "Developed an AI chatbot that handled common customer queries, reducing support tickets by 60%."
      },
      { 
        title: "Predictive Maintenance", 
        result: "Reduced downtime by 45%",
        description: "Created ML models for predictive maintenance in manufacturing, reducing equipment downtime by 45%."
      }
    ],
    process: [
      "Problem definition",
      "Data collection and preparation",
      "Model development",
      "Training and validation",
      "Deployment",
      "Monitoring and optimization"
    ],
    pricing: {
      basic: "Starting at $10,000",
      standard: "$20,000 - $50,000",
      enterprise: "Custom pricing",
      ongoing: "Model maintenance fees"
    },
    timeline: "8-20 weeks",
    team: {
      size: "3-5 members",
      roles: ["Data Scientist", "ML Engineer", "Data Engineer", "Domain Expert"]
    }
  }
];

export const businessServicesData = [
  {
    id: 'startup-business-consulting',
    icon: FaChartLine,
    title: 'Startup & Business Consulting',
    image: '/services/startup-business.jpg',
    shortDescription: 'Strategic guidance for entrepreneurs and SMEs to scale efficiently and achieve sustainable growth.',
    fullDescription: 'Our Startup & Business Consulting services provide comprehensive strategic guidance for entrepreneurs and small-to-medium enterprises looking to scale their operations efficiently. We combine market insights with practical business acumen to help you navigate growth challenges, secure funding, and build sustainable business models that stand the test of time.',
    detailedDescription: 'In today\'s competitive business landscape, startups and SMEs need more than just good ideas—they need strategic direction and expert guidance. Our consulting services cover every aspect of business growth, from initial market entry strategies to scaling operations globally. We work closely with founders and leadership teams to develop customized growth plans, identify new market opportunities, optimize operations, and build investor relationships that fuel sustainable expansion.',
    features: [
      'Business Strategy Development',
      'Market Analysis & Competitive Research',
      'Growth Planning & Scaling Strategies',
      'Investor Relations & Fundraising Support',
      'Business Model Innovation',
      'Operational Efficiency Optimization',
      'Risk Assessment & Mitigation',
      'Exit Strategy Planning'
    ],
    technologies: [
      'Business Intelligence Tools',
      'Financial Modeling Software',
      'Market Research Platforms',
      'CRM Systems',
      'Project Management Tools',
      'Analytics Dashboards'
    ],
    benefits: [
      'Clear roadmap for sustainable growth',
      'Improved investor readiness and valuation',
      'Reduced operational costs by 20-30%',
      'Faster time to market for new products',
      'Enhanced competitive positioning',
      'Better resource allocation',
      'Increased funding success rate',
      'Scalable business processes'
    ],
    color: (isDark) => isDark ? 'from-purple-600 to-pink-600' : 'from-purple-500 to-pink-500',
    caseStudies: [
      { 
        title: 'Tech Startup Scaling', 
        result: 'Secured $2M in Series A funding',
        description: 'Provided comprehensive business strategy and investor pitch preparation for a SaaS startup, helping them secure $2 million in Series A funding within 6 months.'
      },
      { 
        title: 'SME Expansion Strategy', 
        result: 'Expanded to 3 new markets',
        description: 'Developed and executed market expansion strategy for an e-commerce SME, successfully entering 3 new international markets within 12 months.'
      },
      { 
        title: 'Business Turnaround', 
        result: 'Increased revenue by 150%',
        description: 'Implemented strategic turnaround plan for a struggling manufacturing business, resulting in 150% revenue growth and restored profitability.'
      }
    ],
    process: [
      'Initial Business Assessment',
      'Market Opportunity Analysis',
      'Strategy Development Workshop',
      'Implementation Roadmap Creation',
      'Execution Support',
      'Performance Monitoring',
      'Strategy Refinement'
    ],
    pricing: {
      basic: 'Starting at $5,000',
      standard: '$10,000 - $25,000',
      enterprise: 'Custom retainer-based pricing',
      hourly: '$150 - $300 per hour'
    },
    timeline: '4-12 weeks depending on scope',
    team: {
      size: '1-3 consultants',
      roles: ['Business Strategist', 'Industry Expert', 'Financial Analyst', 'Market Researcher']
    },
    methodologies: ['SWOT Analysis', 'Business Model Canvas', 'Lean Startup', 'OKR Framework']
  },
  {
    id: 'digital-marketing',
    icon: FaBullhorn,
    title: 'Digital Marketing',
    image: '/services/digital marketing.jpg',
    shortDescription: 'Comprehensive digital marketing services including SEO, SEM, social media campaigns, and brand visibility.',
    fullDescription: 'Transform your online presence with our full-spectrum digital marketing services. We create data-driven marketing strategies that increase brand visibility, drive qualified traffic, and generate measurable results. From search engine optimization to social media management, we help you connect with your target audience and achieve your business objectives.',
    detailedDescription: 'In the digital age, effective marketing requires a strategic approach that combines creativity with data analysis. Our Digital Marketing services cover the entire spectrum of online marketing, helping businesses establish strong digital footprints and connect with their audiences across multiple channels. We focus on delivering measurable ROI through targeted campaigns, optimized content, and performance tracking that informs continuous improvement.',
    features: [
      'SEO & SEM Strategy & Execution',
      'Social Media Marketing & Management',
      'Content Marketing & Strategy',
      'Email Marketing Campaigns',
      'Pay-Per-Click Advertising',
      'Conversion Rate Optimization',
      'Brand Development & Positioning',
      'Marketing Analytics & Reporting'
    ],
    technologies: [
      'Google Analytics & Ads',
      'Facebook Business Suite',
      'SEO Tools (Ahrefs, SEMrush)',
      'Email Marketing Platforms',
      'Social Media Management Tools',
      'Marketing Automation Software'
    ],
    benefits: [
      'Increased website traffic by 200-300%',
      'Higher search engine rankings',
      'Improved lead generation quality',
      'Enhanced brand awareness and recognition',
      'Better customer engagement metrics',
      'Measurable ROI on marketing spend',
      'Multi-channel marketing integration',
      'Data-driven decision making'
    ],
    color: (isDark) => isDark ? 'from-green-600 to-teal-600' : 'from-green-500 to-teal-500',
    caseStudies: [
      { 
        title: 'B2B Lead Generation', 
        result: 'Generated 500+ qualified leads',
        description: 'Implemented comprehensive digital marketing strategy for a B2B software company, generating over 500 qualified leads in the first quarter.'
      },
      { 
        title: 'E-commerce Growth', 
        result: 'Increased sales by 180%',
        description: 'Executed targeted social media and SEO campaigns for an e-commerce store, resulting in 180% sales growth over 6 months.'
      },
      { 
        title: 'Brand Awareness Campaign', 
        result: 'Reached 2M+ impressions',
        description: 'Developed and ran multi-channel brand awareness campaign that achieved over 2 million impressions and significantly improved brand recognition.'
      }
    ],
    process: [
      'Market & Competitor Analysis',
      'Strategy Development',
      'Content Creation & Optimization',
      'Campaign Execution',
      'Performance Monitoring',
      'A/B Testing & Optimization',
      'Reporting & Analysis'
    ],
    pricing: {
      basic: 'Starting at $1,500/month',
      standard: '$3,000 - $8,000/month',
      enterprise: 'Custom campaign-based pricing',
      project: 'One-time campaign setup available'
    },
    timeline: '3-6 months for measurable results',
    team: {
      size: '3-5 specialists',
      roles: ['Digital Marketing Manager', 'SEO Specialist', 'Content Strategist', 'Social Media Manager', 'PPC Expert']
    },
    methodologies: ['Inbound Marketing', 'Content Marketing Funnel', 'Growth Hacking', 'Data-Driven Marketing']
  },
  {
    id: 'content-documentation',
    icon: FaFileAlt,
    title: 'Content & Documentation',
    image: '/services/content and documentation.jpg',
    shortDescription: 'Professional technical writing, content creation, documentation, and translation services for global business success.',
    fullDescription: 'Elevate your communication with professional content and documentation services. We create clear, engaging, and effective content that resonates with your audience and supports your business objectives. From technical documentation to marketing copy, our expert writers deliver quality content that drives results.',
    detailedDescription: 'Effective communication is essential for business success in today\'s global marketplace. Our Content & Documentation services help organizations communicate clearly and effectively with their stakeholders across multiple channels and languages. We specialize in creating content that not only informs but also engages and converts, whether it\'s technical documentation for complex products or compelling marketing copy that drives business growth.',
    features: [
      'Technical Writing & Documentation',
      'Content Creation & Strategy',
      'Documentation Management',
      'Translation Services (Multiple Languages)',
      'Copywriting & Editing',
      'Content Localization',
      'User Manuals & Guides',
      'API Documentation'
    ],
    technologies: [
      'Content Management Systems',
      'Documentation Tools',
      'Translation Management Systems',
      'Collaboration Platforms',
      'Version Control Systems',
      'AI Writing Assistants'
    ],
    benefits: [
      'Improved customer understanding and satisfaction',
      'Enhanced brand credibility and authority',
      'Better SEO performance through quality content',
      'Reduced support costs with clear documentation',
      'Increased user adoption and engagement',
      'Global reach through professional translation',
      'Consistent brand voice across all channels',
      'Compliance with industry standards'
    ],
    color: (isDark) => isDark ? 'from-blue-600 to-cyan-600' : 'from-blue-500 to-cyan-500',
    caseStudies: [
      { 
        title: 'Technical Documentation Overhaul', 
        result: 'Reduced support calls by 40%',
        description: 'Completely overhauled technical documentation for a software company, resulting in 40% reduction in customer support calls.'
      },
      { 
        title: 'Multilingual Content Strategy', 
        result: 'Expanded to 5 new countries',
        description: 'Developed and executed multilingual content strategy that enabled a business to successfully expand into 5 new international markets.'
      },
      { 
        title: 'API Documentation Project', 
        result: 'Increased developer adoption by 60%',
        description: 'Created comprehensive API documentation that improved developer experience and increased API adoption by 60%.'
      }
    ],
    process: [
      'Content Audit & Analysis',
      'Strategy & Planning',
      'Content Creation',
      'Review & Editing',
      'Translation & Localization',
      'Quality Assurance',
      'Publication & Distribution',
      'Performance Tracking'
    ],
    pricing: {
      basic: 'Starting at $0.20/word',
      standard: '$0.30 - $0.50/word',
      enterprise: 'Monthly retainer packages',
      translation: '$0.15 - $0.30/word per language'
    },
    timeline: '2-8 weeks depending on volume',
    team: {
      size: '2-4 specialists',
      roles: ['Content Strategist', 'Technical Writer', 'Copywriter', 'Editor', 'Translator']
    },
    methodologies: ['Content-First Approach', 'SEO-Optimized Writing', 'User-Centered Documentation', 'Agile Content Development']
  },
  {
    id: 'hr-recruitment',
    icon: FaUserTie,
    title: 'HR & Recruitment',
    image: '/services/HR and Recruitment.jpg',
    shortDescription: 'Comprehensive HR services including staffing, payroll management, compliance, and training programs.',
    fullDescription: 'Build and manage high-performing teams with our comprehensive HR and recruitment services. We help you attract top talent, optimize HR processes, ensure compliance, and develop your workforce through effective training programs.',
    detailedDescription: 'Your people are your most valuable asset, and effective human resources management is critical to business success. Our HR & Recruitment services provide comprehensive support for all aspects of people management, from attracting and hiring top talent to developing and retaining your workforce. We combine deep HR expertise with modern recruitment strategies to help you build teams that drive business growth and innovation.',
    features: [
      'Talent Acquisition & Executive Search',
      'Payroll Management & Processing',
      'Compliance & Legal Advisory',
      'Training & Development Programs',
      'Performance Management Systems',
      'Employee Engagement Strategies',
      'HR Policy Development',
      'Benefits Administration'
    ],
    technologies: [
      'Applicant Tracking Systems',
      'HR Management Software',
      'Payroll Processing Tools',
      'Learning Management Systems',
      'Performance Management Platforms',
      'Employee Engagement Tools'
    ],
    benefits: [
      'Reduced time-to-hire by 50%',
      'Improved employee retention rates',
      'Ensured legal compliance',
      'Enhanced workforce productivity',
      'Better talent acquisition quality',
      'Reduced HR administration costs',
      'Improved employee satisfaction',
      'Scalable HR processes'
    ],
    color: (isDark) => isDark ? 'from-orange-600 to-red-600' : 'from-orange-500 to-red-500',
    caseStudies: [
      { 
        title: 'Tech Talent Acquisition', 
        result: 'Filled 50+ positions in 3 months',
        description: 'Managed end-to-end recruitment for a growing tech company, successfully filling over 50 technical positions within 3 months.'
      },
      { 
        title: 'HR Process Automation', 
        result: 'Reduced HR costs by 35%',
        description: 'Implemented automated HR systems and streamlined processes, reducing HR administration costs by 35%.'
      },
      { 
        title: 'Leadership Development Program', 
        result: 'Increased retention by 40%',
        description: 'Developed and implemented comprehensive leadership development program, increasing management retention by 40%.'
      }
    ],
    process: [
      'HR Needs Assessment',
      'Strategy Development',
      'Recruitment & Selection',
      'Onboarding & Integration',
      'Performance Management',
      'Training & Development',
      'Compliance Monitoring',
      'Continuous Improvement'
    ],
    pricing: {
      basic: 'Starting at $3,000/month',
      standard: '$5,000 - $15,000/month',
      enterprise: 'Custom HR outsourcing packages',
      recruitment: '15-25% of annual salary per hire'
    },
    timeline: 'Ongoing support with immediate start',
    team: {
      size: '2-5 specialists',
      roles: ['HR Manager', 'Recruitment Specialist', 'Payroll Administrator', 'Training Coordinator', 'Compliance Officer']
    },
    methodologies: ['Competency-Based Hiring', 'Structured Interviewing', 'Performance Management Frameworks', 'Blended Learning Approaches']
  },
  {
    id: 'legal-finance',
    icon: FaBalanceScale,
    title: 'Legal & Finance',
    image: '/services/legal and finance.jpg',
    shortDescription: 'Business registration, bookkeeping, taxation, and intellectual property management services for sustainable financial growth.',
    fullDescription: 'Navigate the complexities of business law and finance with our expert services. We provide comprehensive support for business registration, financial management, tax planning, and intellectual property protection to ensure your business operates smoothly and compliantly.',
    detailedDescription: 'Managing legal and financial aspects of business operations can be complex and time-consuming, especially as you scale. Our Legal & Finance services provide expert guidance and support across all aspects of business compliance, financial management, and legal protection. We help businesses establish solid foundations, optimize financial performance, ensure regulatory compliance, and protect valuable intellectual property assets.',
    features: [
      'Business Registration & Incorporation',
      'Bookkeeping & Accounting Services',
      'Tax Planning & Compliance',
      'Intellectual Property Management',
      'Contract Drafting & Review',
      'Financial Reporting & Analysis',
      'Audit Support Services',
      'Regulatory Compliance Advisory'
    ],
    technologies: [
      'Accounting Software (QuickBooks, Xero)',
      'Tax Preparation Software',
      'Legal Document Management',
      'Financial Analysis Tools',
      'Compliance Management Systems',
      'IP Portfolio Management Tools'
    ],
    benefits: [
      'Ensured legal compliance and reduced risk',
      'Optimized tax savings and financial planning',
      'Protected intellectual property assets',
      'Improved financial decision making',
      'Reduced audit risks and penalties',
      'Streamlined financial operations',
      'Better cash flow management',
      'Enhanced investor confidence'
    ],
    color: (isDark) => isDark ? 'from-indigo-600 to-purple-600' : 'from-indigo-500 to-purple-500',
    caseStudies: [
      { 
        title: 'International Business Setup', 
        result: 'Successfully registered in 3 countries',
        description: 'Managed complete international business registration and tax setup for a company expanding into 3 different countries.'
      },
      { 
        title: 'Tax Optimization Strategy', 
        result: 'Saved $500k in taxes annually',
        description: 'Developed and implemented comprehensive tax optimization strategy, saving the client $500,000 annually in tax liabilities.'
      },
      { 
        title: 'IP Portfolio Management', 
        result: 'Protected 25+ patents & trademarks',
        description: 'Managed complete intellectual property portfolio including patents, trademarks, and copyrights for a technology company.'
      }
    ],
    process: [
      'Initial Assessment & Planning',
      'Document Preparation & Filing',
      'Financial System Setup',
      'Compliance Implementation',
      'Ongoing Monitoring & Support',
      'Regular Reporting & Review',
      'Tax Planning & Filing',
      'Annual Compliance Updates'
    ],
    pricing: {
      basic: 'Starting at $2,000',
      standard: '$5,000 - $15,000 annually',
      enterprise: 'Custom retainer agreements',
      hourly: '$200 - $400 per hour for legal services'
    },
    timeline: '2-8 weeks for setup, ongoing monthly support',
    team: {
      size: '2-4 specialists',
      roles: ['Legal Advisor', 'Certified Accountant', 'Tax Consultant', 'Financial Analyst', 'Compliance Specialist']
    },
    methodologies: ['GAAP Compliance', 'International Tax Planning', 'Risk-Based Auditing', 'IP Strategy Development']
  },
  {
    id: 'chartered-accountancy',
    icon: FaCalculator,
    title: 'Chartered Accountancy (CA)',
    image: '/services/charted accoutant.jpg',
    shortDescription: 'Comprehensive Chartered Accountancy course covering all essential areas including Accounting, Taxation, Audit, and Finance.',
    fullDescription: 'Become a qualified Chartered Accountant with our comprehensive CA course program. We provide expert training and guidance covering all essential areas including accounting principles, taxation laws, auditing standards, and financial management.',
    detailedDescription: 'Chartered Accountancy is one of the most prestigious and comprehensive qualifications in the finance and accounting field. Our CA program provides aspiring accountants with the knowledge, skills, and practical experience needed to succeed in this demanding profession. We offer structured learning paths, expert mentorship, and comprehensive exam preparation to help students achieve CA certification and build successful careers in accounting, auditing, taxation, and financial advisory services.',
    features: [
      'Accounting Principles & Standards',
      'Bookkeeping & Financial Reporting',
      'Audit & Assurance Services',
      'Taxation & GST Compliance',
      'Payroll & Labor Law Compliance',
      'Licenses & Special Registrations',
      'Financial Management',
      'NGO & Special Entity Accounting'
    ],
    technologies: [
      'Accounting Software Training',
      'Tax Calculation Tools',
      'Audit Management Software',
      'Financial Modeling Tools',
      'Compliance Tracking Systems',
      'Learning Management Platform'
    ],
    benefits: [
      'Comprehensive CA exam preparation',
      'Practical industry experience',
      'Expert mentorship from qualified CAs',
      'Updated curriculum with latest regulations',
      'Flexible learning schedules',
      'Career placement assistance',
      'Networking opportunities',
      'Professional development support'
    ],
    color: (isDark) => isDark ? 'from-emerald-600 to-green-600' : 'from-emerald-500 to-green-500',
    caseStudies: [
      { 
        title: 'CA Final Batch Success', 
        result: '85% pass rate in first attempt',
        description: 'Coached a batch of 50 CA Final students, achieving 85% first-attempt pass rate compared to national average of 15-20%.'
      },
      { 
        title: 'Corporate Training Program', 
        result: 'Trained 100+ finance professionals',
        description: 'Developed and delivered specialized CA training program for corporate finance teams, upskilling over 100 professionals.'
      },
      { 
        title: 'International Accounting Standards', 
        result: '100% certification success',
        description: 'Prepared candidates for international accounting certifications with 100% success rate in IFRS and US GAAP exams.'
      }
    ],
    process: [
      'Initial Assessment & Counseling',
      'Course Registration & Planning',
      'Structured Learning Modules',
      'Practical Training & Articleship',
      'Exam Preparation Coaching',
      'Mock Tests & Assessments',
      'Career Guidance & Placement',
      'Post-Qualification Support'
    ],
    pricing: {
      foundation: 'Starting at $2,000',
      intermediate: '$3,000 - $5,000',
      final: '$4,000 - $7,000',
      complete: '$8,000 - $12,000 (full program)',
      corporate: 'Custom corporate training packages'
    },
    timeline: '3-4 years for complete CA qualification',
    team: {
      size: '5-10 instructors',
      roles: ['CA Program Director', 'Subject Matter Experts', 'Exam Coaches', 'Career Counselors', 'Practical Training Supervisors']
    },
    methodologies: ['Blended Learning Approach', 'Case-Based Teaching', 'Exam-Focused Preparation', 'Practical Skill Development']
  }
];