import { motion } from 'framer-motion';
import { Code, Brain, Users, Zap, MapPin, Clock, DollarSign, Star } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Artificial Intelligence",
      type: "Full-time",
      location: "Silicon Valley, CA",
      salary: "$150k - $200k",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions, working with transformer models, computer vision, and natural language processing.",
      requirements: [
        "PhD/Masters in Computer Science or related field",
        "Expertise in TensorFlow, PyTorch, and Scikit-learn",
        "Experience with LLMs and generative AI",
        "Strong background in machine learning algorithms",
        "Experience with cloud ML platforms (AWS, Azure)"
      ],
      benefits: ["Stock options", "Health & dental", "Flexible PTO", "Learning budget"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      department: "Engineering",
      type: "Full-time", 
      location: "Remote / San Francisco",
      salary: "$120k - $160k",
      experience: "3+ years",
      description: "Build scalable web applications using React, Node.js, and modern cloud technologies. Work on enterprise-grade solutions for Fortune 500 clients.",
      requirements: [
        "Strong proficiency in React and Node.js",
        "Experience with TypeScript and GraphQL",
        "Knowledge of cloud platforms (AWS/Azure)",
        "Understanding of microservices architecture",
        "Experience with containerization (Docker/Kubernetes)"
      ],
      benefits: ["Remote work", "Health insurance", "401(k) match", "Tech allowance"]
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Infrastructure",
      type: "Full-time",
      location: "New York, NY",
      salary: "$140k - $180k",
      experience: "4+ years",
      description: "Design and implement enterprise cloud architectures, focusing on scalability, security, and cost optimization for large-scale deployments.",
      requirements: [
        "AWS/Azure certifications required",
        "Experience with Infrastructure as Code (Terraform)",
        "Strong background in DevOps practices",
        "Knowledge of containerization and orchestration",
        "Experience with monitoring and observability tools"
      ],
      benefits: ["Certification budget", "Conference attendance", "Stock options", "Relocation assistance"]
    },
    {
      id: 4,
      title: "Product Manager - AI Solutions",
      department: "Product",
      type: "Full-time",
      location: "Austin, TX",
      salary: "$130k - $170k",
      experience: "4+ years",
      description: "Drive product strategy for AI-powered solutions, working closely with engineering teams and enterprise clients to define and deliver innovative products.",
      requirements: [
        "MBA or equivalent experience in product management",
        "Understanding of AI/ML technologies and applications",
        "Experience with enterprise B2B products",
        "Strong analytical and communication skills",
        "Track record of successful product launches"
      ],
      benefits: ["Product training", "Leadership development", "Flexible schedule", "Annual bonus"]
    },
    {
      id: 5,
      title: "UI/UX Designer",
      department: "Design",
      type: "Contract",
      location: "Remote",
      salary: "$80k - $110k",
      experience: "3+ years",
      description: "Create intuitive and beautiful user experiences for AI-powered applications. Work on complex enterprise dashboards and consumer-facing AI products.",
      requirements: [
        "Portfolio demonstrating UI/UX expertise",
        "Proficiency in Figma, Adobe Creative Suite",
        "Experience designing for AI/ML applications",
        "Understanding of accessibility principles",
        "Strong prototyping and user testing skills"
      ],
      benefits: ["Design software budget", "Portfolio development", "Flexible hours", "Creative freedom"]
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Full-time",
      location: "Seattle, WA",
      salary: "$110k - $150k",
      experience: "3+ years",
      description: "Build and maintain CI/CD pipelines, automate infrastructure deployment, and ensure system reliability for mission-critical applications.",
      requirements: [
        "Experience with CI/CD tools (Jenkins, GitHub Actions)",
        "Proficiency in Infrastructure as Code (Terraform, Ansible)",
        "Strong Linux/Unix system administration skills",
        "Knowledge of monitoring tools (Prometheus, Grafana)",
        "Experience with container orchestration (Kubernetes)"
      ],
      benefits: ["On-call compensation", "Tech allowance", "Training budget", "Health benefits"]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Innovation-First Culture",
      description: "Work on cutting-edge AI projects that push the boundaries of what's possible"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Join a team of world-class engineers, designers, and product experts"
    },
    {
      icon: Star,
      title: "Growth Opportunities",
      description: "Continuous learning, mentorship, and career advancement paths"
    },
    {
      icon: Zap,
      title: "Impact at Scale",
      description: "Your work directly impacts Fortune 500 companies and millions of users"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <AnimatedBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our Mission
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Shape the Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of a team that's defining the future of AI and intelligent systems. 
              Work on groundbreaking projects with the latest technologies and make an impact that matters.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Why Work With Us */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Levitica Technologies?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join a culture that values innovation, collaboration, and continuous growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore opportunities to work with cutting-edge technology and brilliant minds
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Code className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Apply Now
                  </motion.button>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We foster an environment where innovation thrives and every team member can reach their potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Freedom",
                description: "20% time for personal projects and exploration of new technologies. We encourage experimentation and creative problem-solving."
              },
              {
                title: "Continuous Learning",
                description: "Annual learning budget, conference attendance, and access to cutting-edge courses. We invest in your professional growth."
              },
              {
                title: "Work-Life Balance",
                description: "Flexible schedules, remote work options, and unlimited PTO. We believe great work happens when you're at your best."
              }
            ].map((culture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{culture.title}</h3>
                <p className="text-gray-400 leading-relaxed">{culture.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always looking for exceptional talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
              >
                View All Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border-2 border-blue-400/50 rounded-lg text-blue-400 font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                Submit General Application
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;