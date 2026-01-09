import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Users, Cog, BarChart } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Engineering",
      description: "Tailored software solutions built from the ground up to meet your unique business requirements and scale with your growth.",
      features: [
        "Full-stack web applications",
        "Enterprise software systems",
        "API development & integration",
        "Microservices architecture",
        "Legacy system modernization"
      ]
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Application Development",
      description: "Cross-platform applications that deliver exceptional user experiences across all devices and platforms.",
      features: [
        "React & React Native apps",
        "Progressive Web Apps (PWAs)",
        "iOS & Android development",
        "Responsive web design",
        "App store optimization"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Automation",
      description: "Scalable cloud infrastructure and automated deployment pipelines for maximum efficiency and reliability.",
      features: [
        "AWS & Azure cloud solutions",
        "Container orchestration (Kubernetes)",
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)",
        "Monitoring & observability"
      ]
    },
    {
      icon: Users,
      title: "Enterprise IT Consulting",
      description: "Strategic technology consulting to align your IT infrastructure with business objectives and drive digital transformation.",
      features: [
        "Technology strategy planning",
        "System architecture design",
        "Digital transformation roadmaps",
        "Security & compliance audits",
        "Performance optimization"
      ]
    },
    {
      icon: Cog,
      title: "Digital Transformation Solutions",
      description: "End-to-end digital transformation services that modernize your business processes and unlock new opportunities.",
      features: [
        "Process automation",
        "Workflow optimization",
        "Digital platform integration",
        "Change management",
        "Training & support"
      ]
    },
    {
      icon: BarChart,
      title: "Data Analytics & Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Data warehouse design",
        "Business intelligence dashboards",
        "Real-time analytics",
        "Data visualization",
        "Predictive modeling"
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
              Technology Services
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive sustainable business growth through innovation.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Technology Stack Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From conception to deployment, we provide end-to-end services that transform your business vision into reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven methodology that ensures delivery excellence and client success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Deep analysis of requirements, stakeholder interviews, and strategic planning."
              },
              {
                step: "02", 
                title: "Design & Architecture",
                description: "System design, UI/UX planning, and technical architecture documentation."
              },
              {
                step: "03",
                title: "Development & Integration",
                description: "Agile development with continuous integration and regular client feedback."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Production deployment, monitoring setup, and ongoing maintenance support."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-slate-900 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can accelerate your growth and competitive advantage.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;