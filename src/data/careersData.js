// Initial careers data - will be overridden by localStorage data
const initialCareersData = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Artificial Intelligence",
    type: "Full-time",
    location: "Hyderabad",
    salary: "₹150k - ₹200k",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions, working with transformer models, computer vision, and natural language processing.",
    requirements: [
      "PhD/Masters in Computer Science or related field",
      "Expertise in TensorFlow, PyTorch, and Scikit-learn",
      "Experience with LLMs and generative AI",
      "Strong background in machine learning algorithms",
      "Experience with cloud ML platforms (AWS, Azure)"
    ],
    benefits: ["Stock options", "Health & dental", "Flexible PTO", "Learning budget"],
    isActive: true
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    department: "Engineering",
    type: "Full-time", 
    location: "Remote ",
    salary: "₹120k - ₹160k",
    experience: "3+ years",
    description: "Build scalable web applications using React, Node.js, and modern cloud technologies. Work on enterprise-grade solutions for Fortune 500 clients.",
    requirements: [
      "Strong proficiency in React and Node.js",
      "Experience with TypeScript and GraphQL",
      "Knowledge of cloud platforms (AWS/Azure)",
      "Understanding of microservices architecture",
      "Experience with containerization (Docker/Kubernetes)"
    ],
    benefits: ["Remote work", "Health insurance", "401(k) match", "Tech allowance"],
    isActive: true
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "Infrastructure",
    type: "Full-time",
    location: "Hyderabad",
    salary: "₹140k - ₹180k",
    experience: "4+ years",
    description: "Design and implement enterprise cloud architectures, focusing on scalability, security, and cost optimization for large-scale deployments.",
    requirements: [
      "AWS/Azure certifications required",
      "Experience with Infrastructure as Code (Terraform)",
      "Strong background in DevOps practices",
      "Knowledge of containerization and orchestration",
      "Experience with monitoring and observability tools"
    ],
    benefits: ["Certification budget", "Conference attendance", "Stock options", "Relocation assistance"],
    isActive: true
  },
    {
      id: 4,
      title: "Product Manager - AI Solutions",
      department: "Product",
      type: "Full-time",
      location: "Remote",
      salary: "₹130k - ₹170k",
      experience: "4+ years",
      description: "Drive product strategy for AI-powered solutions, working closely with engineering teams and enterprise clients to define and deliver innovative products.",
      requirements: [
        "MBA or equivalent experience in product management",
        "Understanding of AI/ML technologies and applications",
        "Experience with enterprise B2B products",
        "Strong analytical and communication skills",
        "Track record of successful product launches"
      ],
      benefits: ["Product training", "Leadership development", "Flexible schedule", "Annual bonus"],
      isActive: true
    },
    {
      id: 5,
      title: "UI/UX Designer",
      department: "Design",
      type: "Contract",
      location: "Remote",
      salary: "₹80k - ₹110k",
      experience: "3+ years",
      description: "Create intuitive and beautiful user experiences for AI-powered applications. Work on complex enterprise dashboards and consumer-facing AI products.",
      requirements: [
        "Portfolio demonstrating UI/UX expertise",
        "Proficiency in Figma, Adobe Creative Suite",
        "Experience designing for AI/ML applications",
        "Understanding of accessibility principles",
        "Strong prototyping and user testing skills"
      ],
      benefits: ["Design software budget", "Portfolio development", "Flexible hours", "Creative freedom"],
      isActive: true
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Hyderabad",
      location: "Seattle, WA",
      salary: "₹110k - ₹150k",
      experience: "3+ years",
      description: "Build and maintain CI/CD pipelines, automate infrastructure deployment, and ensure system reliability for mission-critical applications.",
      requirements: [
        "Experience with CI/CD tools (Jenkins, GitHub Actions)",
        "Proficiency in Infrastructure as Code (Terraform, Ansible)",
        "Strong Linux/Unix system administration skills",
        "Knowledge of monitoring tools (Prometheus, Grafana)",
        "Experience with container orchestration (Kubernetes)"
      ],
      benefits: ["On-call compensation", "Tech allowance", "Training budget", "Health benefits"],
      isActive: true
    }
];

export default initialCareersData;