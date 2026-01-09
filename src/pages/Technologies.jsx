import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Technologies = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      description: "Modern, responsive user interfaces built with cutting-edge frameworks",
      technologies: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 92, color: "from-gray-600 to-gray-800" },
        { name: "Flutter", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "Vue.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "TypeScript", level: 93, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 96, color: "from-cyan-400 to-cyan-600" }
      ]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Scalable server architectures and robust data management systems",
      technologies: [
        { name: "Node.js", level: 94, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 92, color: "from-gray-600 to-gray-800" },
        { name: "PostgreSQL", level: 90, color: "from-blue-600 to-blue-800" },
        { name: "MongoDB", level: 88, color: "from-green-600 to-green-800" },
        { name: "Redis", level: 85, color: "from-red-500 to-red-700" },
        { name: "GraphQL", level: 87, color: "from-pink-500 to-pink-700" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment pipelines",
      technologies: [
        { name: "AWS", level: 93, color: "from-orange-400 to-orange-600" },
        { name: "Azure", level: 89, color: "from-blue-500 to-blue-700" },
        { name: "Docker", level: 91, color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", level: 87, color: "from-blue-600 to-purple-600" },
        { name: "Terraform", level: 85, color: "from-purple-500 to-purple-700" },
        { name: "Jenkins", level: 88, color: "from-blue-600 to-blue-800" }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI frameworks and machine learning platforms",
      technologies: [
        { name: "TensorFlow", level: 90, color: "from-orange-500 to-orange-700" },
        { name: "PyTorch", level: 87, color: "from-red-500 to-orange-600" },
        { name: "OpenAI APIs", level: 92, color: "from-green-400 to-green-600" },
        { name: "Scikit-learn", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Hugging Face", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "LangChain", level: 89, color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile solutions for iOS and Android",
      technologies: [
        { name: "React Native", level: 91, color: "from-blue-400 to-blue-600" },
        { name: "Flutter", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "iOS (Swift)", level: 82, color: "from-orange-500 to-orange-700" },
        { name: "Android (Kotlin)", level: 85, color: "from-green-500 to-green-700" },
        { name: "Expo", level: 89, color: "from-gray-600 to-gray-800" },
        { name: "PWAs", level: 93, color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description: "Comprehensive security measures and quality assurance protocols",
      technologies: [
        { name: "OAuth 2.0", level: 90, color: "from-blue-600 to-blue-800" },
        { name: "JWT", level: 92, color: "from-green-500 to-green-700" },
        { name: "Jest", level: 88, color: "from-red-500 to-red-700" },
        { name: "Cypress", level: 85, color: "from-green-600 to-green-800" },
        { name: "SonarQube", level: 83, color: "from-blue-500 to-blue-700" },
        { name: "OWASP", level: 87, color: "from-purple-500 to-purple-700" }
      ]
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
              Technology Stack
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovation at Scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge technologies and frameworks, we build scalable, secure, 
              and future-ready solutions that drive business transformation.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Technology Categories */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Technology Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From frontend frameworks to AI platforms, we master the full spectrum of modern technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                        <span className="text-blue-400 text-sm">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                          className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Architecture Principles
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on solid architectural foundations for scalability, maintainability, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Microservices",
                description: "Scalable, independently deployable services that enhance system resilience and maintainability.",
                icon: "🏗️"
              },
              {
                title: "Event-Driven",
                description: "Reactive architectures that respond to real-time events and data streams efficiently.",
                icon: "⚡"
              },
              {
                title: "Cloud-Native",
                description: "Born-in-the-cloud solutions that leverage auto-scaling and distributed computing.",
                icon: "☁️"
              },
              {
                title: "Security-First",
                description: "Zero-trust security models with encryption, authentication, and authorization built-in.",
                icon: "🛡️"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Timeline */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Technology Evolution Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Constantly evolving our technology stack to stay ahead of industry trends
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2024-2026",
                  title: "AI-First Architecture",
                  technologies: ["Large Language Models", "Vector Databases", "Edge AI", "Quantum Computing"],
                  side: "left"
                },
                {
                  year: "2022-2024", 
                  title: "Cloud-Native Transformation",
                  technologies: ["Kubernetes", "Serverless", "Edge Computing", "WebAssembly"],
                  side: "right"
                },
                {
                  year: "2020-2022",
                  title: "Modern Full-Stack",
                  technologies: ["React Ecosystem", "Node.js", "GraphQL", "Docker"],
                  side: "left"
                },
                {
                  year: "2018-2020",
                  title: "DevOps Revolution",
                  technologies: ["CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
                  side: "right"
                }
              ].map((period, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: period.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex ${period.side === 'left' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`w-5/12 ${period.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                      <div className="text-blue-400 font-bold text-lg mb-2">{period.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{period.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {period.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
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
              Let's Build with Cutting-Edge Tech
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Leverage our technology expertise to create solutions that scale and adapt to your growing business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            >
              Discuss Your Technology Needs
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Technologies;