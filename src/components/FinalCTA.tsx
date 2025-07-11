
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-rose-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-sky-400" />
            <span className="text-gray-300">Ready to become a legend?</span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="block text-white">Join the</span>
            <span className="block bg-gradient-to-r from-sky-400 via-violet-500 to-rose-500 bg-clip-text text-transparent">
              Elite Squad
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Transform your coding journey and unlock your potential to crack any interview
          </p>

          <motion.button
            className="group relative bg-gradient-to-r from-sky-500 via-violet-500 to-rose-500 text-white px-12 py-6 rounded-full text-xl font-bold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-violet-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center space-x-3">
              <Rocket className="w-6 h-6" />
              <span>Launch My Legend Journey</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
