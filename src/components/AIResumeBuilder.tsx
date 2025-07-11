import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIResumeBuilder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const navigate = useNavigate();

  const navigateToBuilder = () => {
    navigate('/resume-builder');
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-emerald">
            AI Resume Builder
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Craft legendary resumes that get you into FAANG companies
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <FileText className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Create Your Perfect Resume</h3>
            <p className="text-gray-300 mb-6">AI-powered resume optimization for maximum impact</p>
            <motion.button 
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToBuilder}
            >
              <Sparkles className="w-5 h-5" />
              Start Building
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIResumeBuilder;