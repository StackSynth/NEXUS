import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Calendar, Mail, Mic, Settings, BarChart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Task Planning',
    description: 'Intelligent task breakdown using Nova 2 Lite',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Calendar,
    title: 'Calendar Automation',
    description: 'Smart scheduling and meeting management',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Mail,
    title: 'Email Processing',
    description: 'Automated Gmail workflow management',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Mic,
    title: 'Voice Commands',
    description: 'Natural language voice input and responses',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Settings,
    title: 'Workflow Control',
    description: 'Custom automation rules and preferences',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track productivity and task completion',
    color: 'from-pink-500 to-rose-500'
  }
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
    >
      <motion.div
        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {feature.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {feature.description}
      </p>
      
      <motion.div
        className="mt-4 flex items-center text-blue-600 font-medium"
        whileHover={{ x: 5 }}
      >
        <span>Learn more</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
};

export default FeatureGrid;
