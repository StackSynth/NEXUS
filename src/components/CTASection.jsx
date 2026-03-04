import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Star } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
      </motion.div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Workflow?
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Start your free 14-day trial today. No credit card required.
            Experience the power of AI-driven automation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + star * 0.1 }}
                viewport={{ once: true }}
              >
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
              </motion.div>
            ))}
            <span className="ml-2 text-white font-medium">4.9/5 from 2,000+ reviews</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default CTASection;
