import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Productivity Increase',
    description: 'Average efficiency boost for users'
  },
  {
    icon: Clock,
    value: '2.5hrs',
    label: 'Time Saved Daily',
    description: 'Automated workflow processing'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Happy Customers',
    description: 'Growing community worldwide'
  },
  {
    icon: Zap,
    value: '0.3s',
    label: 'Response Time',
    description: 'Lightning-fast AI processing'
  }
];

const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
    >
      <motion.div
        className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        className="text-3xl font-bold text-gray-800 mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {stat.value}
      </motion.div>

      <div className="text-lg font-semibold text-gray-700 mb-1">
        {stat.label}
      </div>

      <div className="text-sm text-gray-500">
        {stat.description}
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who've transformed their workflow with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
