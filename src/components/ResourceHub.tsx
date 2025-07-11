// components/ResourceHub.tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Video, FileText, Headphones } from 'lucide-react';
import { useRef } from 'react';
import ResourceCard from './ResourceCard';
import { useNavigate } from 'react-router-dom';

const ResourceHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const navigate = useNavigate();

  const resources = [
    { title: "E-Books", count: "500+", icon: BookOpen, color: "sky" },
    { title: "Video Courses", count: "100+", icon: Video, color: "violet" },
    { title: "Cheat Sheets", count: "50+", icon: FileText, color: "rose" },
    { title: "Podcasts", count: "200+", icon: Headphones, color: "emerald" }
  ];

  const featuredResources = [
    {
      id: "dsa-handbook",
      title: "Complete DSA Handbook",
      type: "E-Book",
      description: "Comprehensive guide to Data Structures & Algorithms with implementations in multiple languages.",
      rating: 4.9,
      downloads: "10K+",
      color: "sky",
      content: {
        author: "Jane Smith",
        pages: 320,
        language: "JavaScript, Python, Java",
        downloadLink: "#",
        previewLink: "#"
      }
    },
    {
      id: "system-design-masterclass",
      title: "System Design Masterclass",
      type: "Video Course",
      description: "20-hour course covering everything from basic principles to advanced distributed systems.",
      rating: 4.8,
      downloads: "5K+",
      color: "violet",
      content: {
        duration: "20 hours",
        instructor: "John Doe",
        projects: 5,
        downloadLink: "#",
        previewLink: "#"
      }
    },
    {
      id: "coding-interview-cheatsheet",
      title: "Coding Interview Cheatsheet",
      type: "PDF",
      description: "Quick reference for 50+ common patterns with solutions and time complexity analysis.",
      rating: 4.9,
      downloads: "15K+",
      color: "rose",
      content: {
        patterns: 57,
        languages: "All",
        difficulty: "Beginner to Advanced",
        downloadLink: "#",
        previewLink: "#"
      }
    }
  ];

  return (
    <section ref={ref} id="resources" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-responsive font-bold mb-4 md:mb-6 text-gradient-violet">
            Resource Vault
          </h2>
          <p className="text-responsive text-gray-300 max-w-3xl mx-auto">
            Curated resources from the legends who came before you
          </p>
        </motion.div>

        {/* Resource Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl md:rounded-3xl p-4 md:p-8 text-center hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <item.icon className={`w-8 h-8 md:w-16 md:h-16 text-${item.color}-400 mx-auto mb-2 md:mb-4`} />
              <div className={`text-lg md:text-3xl font-bold text-${item.color}-400 mb-1 md:mb-2`}>{item.count}</div>
              <h3 className="text-sm md:text-xl font-semibold text-white">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Featured Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            Featured Resources
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => navigate('/resources')}
            className="bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base touch-target"
          >
            Explore All Resources
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceHub;