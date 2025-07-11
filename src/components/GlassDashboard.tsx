
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Target, Clock, Award, BarChart3, Zap } from 'lucide-react';
import { useRef } from 'react';

const GlassDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    { title: "Problems Solved", value: "247", change: "+12", icon: Target, color: "sky" },
    { title: "Current Streak", value: "23", change: "+1", icon: Zap, color: "violet" },
    { title: "Study Hours", value: "156h", change: "+8h", icon: Clock, color: "rose" },
    { title: "Global Rank", value: "#1,247", change: "+156", icon: Award, color: "emerald" }
  ];

  return (
    <section id="dashboard" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-rose">
            Performance Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track your legendary journey with beautiful analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-right">
                  <motion.div 
                    className="text-3xl font-bold text-white"
                    animate={{ 
                      textShadow: isInView ? [
                        '0 0 5px rgba(255, 255, 255, 0.5)',
                        '0 0 10px rgba(255, 255, 255, 0.8)',
                        '0 0 5px rgba(255, 255, 255, 0.5)'
                      ] : []
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm flex items-center space-x-1 text-green-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {stat.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlassDashboard;
