import { motion } from 'framer-motion';
import { Brain, Zap, Target, Cpu } from 'lucide-react';

const AISection = () => {
  const aiNodes = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="relative py-20 overflow-hidden">
      {/* AI Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {aiNodes.map((node, i) => (
            <g key={node}>
              <motion.circle
                cx={100 + (i % 4) * 200}
                cy={100 + Math.floor(i / 4) * 150}
                r="3"
                fill="#3b82f6"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  r: [3, 6, 3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              {i < aiNodes.length - 1 && (
                <motion.line
                  x1={100 + (i % 4) * 200}
                  y1={100 + Math.floor(i / 4) * 150}
                  x2={100 + ((i + 1) % 4) * 200}
                  y2={100 + Math.floor((i + 1) / 4) * 150}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AI-Powered Intelligence
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Transforming Data into
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Intelligent Decisions
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Machine Learning Models",
              description: "Custom AI models trained on your specific data to deliver precise insights and predictions.",
            },
            {
              icon: Zap,
              title: "Real-time Processing",
              description: "Lightning-fast AI inference engines that process data and deliver results in milliseconds.",
            },
            {
              icon: Target,
              title: "Predictive Analytics",
              description: "Advanced forecasting algorithms that help you stay ahead of market trends and opportunities.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-8 text-center group hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 group-hover:bg-blue-500/30 transition-colors">
                <item.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISection;