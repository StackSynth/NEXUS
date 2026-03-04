import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

const Heading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <motion.div
        className="flex items-center justify-center gap-2 mb-4"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Sparkles className="w-8 h-8 text-purple-500" />
        <Zap className="w-6 h-6 text-yellow-500" />
      </motion.div>
      
      <motion.h1
        className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        NovaFlow
      </motion.h1>
      
      <motion.p
        className="text-xl text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        AI-Powered Autonomous Workflow Assistant
      </motion.p>
      
      <motion.div
        className="flex justify-center gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          Voice Commands
        </span>
        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          Smart Automation
        </span>
        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
          AI Powered
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Heading;
