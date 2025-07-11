
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-rose-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container-responsive">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <Mail className="w-12 h-12 md:w-16 md:h-16 text-sky-400 mx-auto mb-6" />
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Stay in the Loop
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Get weekly tips, new problems, and success stories delivered to your inbox
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center space-x-2 text-green-400 text-lg md:text-xl"
              >
                <CheckCircle className="w-6 h-6" />
                <span>Thanks for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-sm md:text-base touch-target"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 text-sm md:text-base touch-target"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </form>
            )}

            <p className="text-gray-400 text-xs md:text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
