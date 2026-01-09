import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4 group-hover:bg-blue-500/30 transition-colors">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Hover Arrow */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          className="mt-4 flex items-center text-blue-400 text-sm font-medium"
        >
          Learn More →
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;