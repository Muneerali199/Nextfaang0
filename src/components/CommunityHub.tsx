
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, MessageCircle, Trophy, Star } from 'lucide-react';
import { useRef } from 'react';

const CommunityHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="community" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-sky">
            Legend Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow coding legends and level up together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Discord Server", description: "Join 50K+ active legends", icon: MessageCircle, color: "sky" },
            { title: "Leaderboards", description: "Compete globally", icon: Trophy, color: "violet" },
            { title: "Mentorship", description: "Learn from legends", icon: Star, color: "rose" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <item.icon className={`w-16 h-16 text-${item.color}-400 mx-auto mb-4`} />
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHub;
