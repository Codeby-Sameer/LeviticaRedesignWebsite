import { motion } from 'framer-motion';
import { Brain, Bot, Target, Zap, Eye, MessageSquare, TrendingUp, Cpu } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const AISolutions = () => {
  const aiServices = [
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots",
      description: "Advanced conversational AI that understands context, provides accurate responses, and learns from interactions.",
      features: [
        "Natural language processing",
        "Multi-language support", 
        "Sentiment analysis",
        "Integration with CRM/ERP systems",
        "24/7 automated customer support"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends, identify opportunities, and optimize business decisions.",
      features: [
        "Market trend prediction",
        "Customer behavior analysis",
        "Risk assessment models",
        "Revenue forecasting",
        "Demand planning optimization"
      ]
    },
    {
      icon: Cpu,
      title: "Process Automation (AI/ML)",
      description: "Intelligent automation that streamlines workflows and eliminates repetitive tasks with AI-driven decision making.",
      features: [
        "Document processing automation",
        "Smart workflow orchestration",
        "Exception handling",
        "Quality assurance automation",
        "Compliance monitoring"
      ]
    },
    {
      icon: Brain,
      title: "AI-Driven Decision Systems",
      description: "Sophisticated decision support systems that process complex data to provide actionable recommendations.",
      features: [
        "Real-time decision engines",
        "Multi-criteria optimization",
        "Risk-reward analysis",
        "Strategic planning support",
        "Performance optimization"
      ]
    },
    {
      icon: Eye,
      title: "Smart UX Personalization",
      description: "AI-powered personalization engines that create unique user experiences based on behavior and preferences.",
      features: [
        "Dynamic content personalization",
        "User behavior tracking",
        "A/B testing automation",
        "Recommendation engines",
        "Adaptive user interfaces"
      ]
    },
    {
      icon: Target,
      title: "Computer Vision Solutions",
      description: "Advanced image and video analysis for quality control, security, and automated visual inspection.",
      features: [
        "Object detection & recognition",
        "Quality control automation",
        "Facial recognition systems",
        "Medical image analysis",
        "Security & surveillance AI"
      ]
    }
  ];

  const aiCapabilities = [
    { name: "Deep Learning", percentage: 95 },
    { name: "Natural Language Processing", percentage: 92 },
    { name: "Computer Vision", percentage: 88 },
    { name: "Predictive Modeling", percentage: 94 },
    { name: "Reinforcement Learning", percentage: 85 },
    { name: "Neural Networks", percentage: 90 }
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
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Brain className="w-12 h-12 text-blue-400" />
              <Bot className="w-10 h-10 text-cyan-400" />
              <Zap className="w-8 h-8 text-blue-300" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Solutions
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Intelligent by Design
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and create unprecedented competitive advantages.
            </p>
          </motion.div>

          {/* AI Network Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-64 mb-16"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="600" height="200" viewBox="0 0 600 200" className="overflow-visible">
                {/* AI Network Nodes */}
                {Array.from({ length: 15 }, (_, i) => (
                  <motion.circle
                    key={i}
                    cx={50 + (i % 5) * 125}
                    cy={50 + Math.floor(i / 5) * 50}
                    r="4"
                    fill="#3b82f6"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      r: [4, 8, 4]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
                
                {/* Connecting Lines */}
                {Array.from({ length: 10 }, (_, i) => (
                  <motion.line
                    key={i}
                    x1={50 + (i % 4) * 125}
                    y1={50 + Math.floor(i / 4) * 50}
                    x2={175 + (i % 4) * 125}
                    y2={50 + Math.floor(i / 4) * 50}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ delay: i * 0.3, duration: 2 }}
                  />
                ))}
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </AnimatedBackground>

      {/* AI Services Grid */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions designed to solve complex business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                AI Technology Expertise
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Our team masters cutting-edge AI technologies to deliver solutions that push the boundaries of what's possible.
              </p>
              
              <div className="space-y-6">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{capability.name}</span>
                      <span className="text-blue-400">{capability.percentage}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${capability.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">AI Development Stack</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <div className="font-medium text-blue-400 mb-2">Frameworks</div>
                    <ul className="space-y-1">
                      <li>TensorFlow</li>
                      <li>PyTorch</li>
                      <li>Keras</li>
                      <li>Scikit-learn</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-cyan-400 mb-2">Languages</div>
                    <ul className="space-y-1">
                      <li>Python</li>
                      <li>R</li>
                      <li>JavaScript</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Cloud AI Platforms</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <div className="font-medium text-blue-400 mb-2">AWS</div>
                    <ul className="space-y-1">
                      <li>SageMaker</li>
                      <li>Bedrock</li>
                      <li>Comprehend</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-cyan-400 mb-2">Azure</div>
                    <ul className="space-y-1">
                      <li>Cognitive Services</li>
                      <li>ML Studio</li>
                      <li>OpenAI Service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-slate-900 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Unlock AI's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with intelligent solutions that learn, adapt, and evolve with your needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            >
              Start Your AI Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AISolutions;