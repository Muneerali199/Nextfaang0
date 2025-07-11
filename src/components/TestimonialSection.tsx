
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "NextFaang helped me land my dream job at Google. The practice problems and AI guidance were incredible!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Developer at Meta",
      content: "The roadmap feature kept me focused and motivated. I went from zero to hero in competitive programming!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist at Amazon",
      content: "Best platform for interview preparation. The AI resume builder got me noticed by top tech companies.",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-responsive font-bold mb-4 md:mb-6 text-gradient-sky">
            Success Stories
          </h2>
          <p className="text-responsive text-gray-300 max-w-3xl mx-auto">
            Join thousands of developers who've transformed their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-sky-400 mb-4" />
              </div>
              
              <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl md:text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
