
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useRef, useState } from 'react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes NextFaang different from other coding platforms?",
      answer: "NextFaang combines AI-powered personalized learning with real interview experiences from FAANG companies. Our platform adapts to your learning style and provides targeted feedback to accelerate your growth."
    },
    {
      question: "How long does it take to prepare for FAANG interviews?",
      answer: "It depends on your current skill level, but most students see significant improvement within 3-6 months of consistent practice. Our AI tracks your progress and adjusts the timeline accordingly."
    },
    {
      question: "Do you provide real interview questions from FAANG companies?",
      answer: "Yes! Our database contains thousands of real interview questions from Google, Amazon, Facebook, Apple, Netflix, and other top tech companies, curated from recent interviews."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel your subscription at any time with no hidden fees. You'll continue to have access to your plan features until the end of your billing period."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes, our Elite plan includes job placement assistance, company referrals, and salary negotiation support to help you land your dream job at top tech companies."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! NextFaang is fully responsive and works perfectly on mobile devices. We also have dedicated mobile apps for iOS and Android coming soon."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-responsive font-bold mb-4 md:mb-6 text-gradient-rose">
            Frequently Asked Questions
          </h2>
          <p className="text-responsive text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about NextFaang
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl mb-4 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors touch-target"
              >
                <h3 className="text-white font-semibold text-sm md:text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                  ) : (
                    <Plus className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 md:p-6 pt-0 md:pt-0">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
