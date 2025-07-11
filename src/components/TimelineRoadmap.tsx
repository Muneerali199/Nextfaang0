
import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CheckCircle, Circle, ArrowRight, Code, Brain, Trophy, Rocket } from 'lucide-react';
import { useRef } from 'react';

const TimelineRoadmap = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const roadmapItems = [
    {
      title: "Fundamentals",
      description: "Master the building blocks of competitive programming",
      icon: Code,
      color: "sky",
      completed: true,
      topics: ["Arrays & Strings", "Time Complexity", "Basic Math", "Sorting"],
      level: "Novice"
    },
    {
      title: "Data Structures",
      description: "Deep dive into essential data structures for CP mastery",
      icon: Brain,
      color: "violet",
      completed: true,
      topics: ["Linked Lists", "Stacks & Queues", "Trees", "Hash Tables"],
      level: "Apprentice"
    },
    {
      title: "Algorithms",
      description: "Learn advanced algorithms and optimization techniques",
      icon: Trophy,
      color: "rose",
      completed: false,
      topics: ["Dynamic Programming", "Graph Algorithms", "Greedy", "Divide & Conquer"],
      level: "Expert"
    },
    {
      title: "Advanced Mastery",
      description: "Achieve legendary status with complex algorithmic concepts",
      icon: Rocket,
      color: "emerald",
      completed: false,
      topics: ["Segment Trees", "Advanced DP", "String Algorithms", "Computational Geometry"],
      level: "Legend"
    }
  ];

  const getColorClasses = (color: string, completed: boolean) => {
    const colors = {
      sky: completed ? "from-sky-500 to-sky-600" : "from-gray-600 to-gray-700",
      violet: completed ? "from-violet-500 to-violet-600" : "from-gray-600 to-gray-700",
      rose: completed ? "from-rose-500 to-rose-600" : "from-gray-600 to-gray-700",
      emerald: completed ? "from-emerald-500 to-emerald-600" : "from-gray-600 to-gray-700"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="timeline" ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Your Epic Journey
          </h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From novice to competitive programming legend - every master was once a beginner
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Simplified timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-sky-500 via-violet-500 to-rose-500 rounded-full origin-top"
              style={{ 
                scaleY: useTransform(lineProgress, [0, 100], [0, 1])
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-12 lg:space-y-0 space-y-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="glass rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
                    {/* Static background element */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getColorClasses(item.color, true)} rounded-full opacity-10 blur-2xl`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(item.color, item.completed)} rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                            <span className={`text-xs px-3 py-1 rounded-full ${
                              item.completed ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {item.level}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {item.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-400" />
                            )}
                            <span className={`text-sm ${item.completed ? 'text-green-400' : 'text-gray-400'}`}>
                              {item.completed ? 'Mastered' : 'Unlock Next'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">{item.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {item.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="text-sm glass rounded-full px-4 py-2 text-gray-300 text-center hover:bg-white/10 transition-colors duration-200"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <button className={`bg-gradient-to-r ${getColorClasses(item.color, true)} text-white px-8 py-3 rounded-full flex items-center space-x-2 font-semibold hover:scale-105 transition-transform duration-200`}>
                        <span>{item.completed ? 'Review & Practice' : 'Begin Quest'}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-20 w-8 h-8 lg:w-12 lg:h-12 my-8 lg:my-0">
                  <div className={`w-full h-full bg-gradient-to-r ${getColorClasses(item.color, item.completed)} rounded-full border-4 border-gray-900 shadow-lg`} />
                  {item.completed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>

                {/* Spacer */}
                <div className="w-full lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineRoadmap;
