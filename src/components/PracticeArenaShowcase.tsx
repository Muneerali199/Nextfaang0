
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Terminal, Code, Zap } from 'lucide-react';
import { useRef } from 'react';

const PracticeArenaShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="arena" ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-violet">
            Practice Arena
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Battle legendary problems in our cinematic coding environment
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-800/50 px-6 py-4 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-sky-400" />
                <span className="text-gray-300">Legend IDE</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Python 3.9</span>
              <motion.button 
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                <span>Run</span>
              </motion.button>
            </div>
          </div>
          
          <div className="p-8 bg-gray-900/50 font-mono text-sm">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-gray-400">
                <span className="text-purple-400">def</span>{' '}
                <span className="text-blue-400">two_sum</span>
                <span className="text-white">(</span>
                <span className="text-orange-400">nums</span>
                <span className="text-white">, </span>
                <span className="text-orange-400">target</span>
                <span className="text-white">):</span>
              </div>
              <div className="text-gray-500 ml-4">
                # Legend-level solution with O(n) complexity
              </div>
              <div className="text-gray-400 ml-4">
                <span className="text-orange-400">hash_map</span>
                <span className="text-white"> = {}</span>
              </div>
              <div className="text-gray-400 ml-4">
                <span className="text-purple-400">for</span>
                <span className="text-white"> i, num </span>
                <span className="text-purple-400">in</span>
                <span className="text-blue-400"> enumerate</span>
                <span className="text-white">(nums):</span>
              </div>
              <div className="text-gray-400 ml-8">
                <span className="text-orange-400">complement</span>
                <span className="text-white"> = target - num</span>
              </div>
              <div className="text-gray-400 ml-8">
                <span className="text-purple-400">if</span>
                <span className="text-white"> complement </span>
                <span className="text-purple-400">in</span>
                <span className="text-white"> hash_map:</span>
              </div>
              <div className="text-gray-400 ml-12">
                <span className="text-purple-400">return</span>
                <span className="text-white"> [hash_map[complement], i]</span>
              </div>
              <div className="text-gray-400 ml-8">
                <span className="text-orange-400">hash_map</span>
                <span className="text-white">[num] = i</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeArenaShowcase;
