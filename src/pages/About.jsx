import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, Globe, Zap } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const About = () => {
  const milestones = [
    { year: "2018", title: "Company Founded", description: "Established with a vision to transform businesses through intelligent technology solutions." },
    { year: "2019", title: "First AI Implementation", description: "Deployed our first machine learning model for predictive analytics in healthcare." },
    { year: "2021", title: "Cloud-First Strategy", description: "Transitioned to cloud-native architecture, enabling 10x scalability for our clients." },
    { year: "2023", title: "AI Innovation Lab", description: "Launched dedicated AI research lab focusing on generative AI and automation." },
    { year: "2024", title: "Global Expansion", description: "Extended operations to serve enterprise clients across North America and Europe." },
    { year: "2026", title: "Industry Leadership", description: "Recognized as a leading AI-first technology consultancy with 500+ successful projects." }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation Excellence",
      description: "We push the boundaries of what's possible, delivering cutting-edge solutions that create competitive advantages for our clients."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build long-term partnerships based on trust, transparency, and shared success in achieving business objectives."
    },
    {
      icon: Lightbulb,
      title: "Technical Mastery",
      description: "Our team maintains expertise in the latest technologies, ensuring solutions that are both current and future-ready."
    },
    {
      icon: Award,
      title: "Quality Commitment", 
      description: "We deliver enterprise-grade solutions with rigorous testing, security protocols, and performance optimization."
    },
    {
      icon: Globe,
      title: "Scalable Impact",
      description: "Every solution we build is designed to scale, adapt, and evolve with your business growth and changing requirements."
    },
    {
      icon: Zap,
      title: "Agile Execution",
      description: "We execute with speed and precision, delivering value iteratively while maintaining the highest quality standards."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", suffix: "" },
    { number: "150+", label: "Enterprise Clients", suffix: "" },
    { number: "50+", label: "AI Models Deployed", suffix: "" },
    { number: "99.9%", label: "System Uptime", suffix: "" },
    { number: "8", label: "Years of Innovation", suffix: "" },
    { number: "24/7", label: "Technical Support", suffix: "" }
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
              About Levitica
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology consultancy specializing in AI-driven solutions, 
              cloud infrastructure, and digital transformation. Since 2018, we've been engineering 
              intelligent systems that empower businesses to thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize advanced technology by making AI, cloud computing, and intelligent automation 
                  accessible to businesses of all sizes. We bridge the gap between cutting-edge research and 
                  practical business applications, ensuring our clients stay ahead of the technological curve.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-cyan-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global leader in intelligent business transformation, creating a future where 
                  AI and human expertise work in perfect harmony. We envision a world where every business 
                  decision is informed by intelligent insights and every process is optimized for maximum efficiency.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Company Statistics</h2>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6"
                  >
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and define how we serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/10 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Journey of Innovation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key milestones in our evolution from startup to industry-leading AI consultancy
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}
                >
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300">
                      <div className="text-blue-400 font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Technology with Purpose
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe that technology should amplify human potential, not replace it. Our solutions 
              are designed to augment human decision-making, streamline complex processes, and create 
              opportunities for innovation and growth.
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <blockquote className="text-2xl text-gray-300 italic mb-6">
                "The future belongs to organizations that can seamlessly blend human creativity 
                with artificial intelligence. We're here to make that future a reality."
              </blockquote>
              <div className="text-blue-400 font-semibold">
                — Levitica Technologies Leadership Team
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;