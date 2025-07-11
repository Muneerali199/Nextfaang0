
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { useRef } from 'react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for beginners",
      icon: Zap,
      color: "sky",
      features: [
        "50 Practice Problems",
        "Basic Roadmap Access",
        "Community Forum",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For serious learners",
      icon: Crown,
      color: "violet",
      features: [
        "1000+ Practice Problems",
        "AI-Powered Guidance",
        "Advanced Analytics",
        "Resume Builder",
        "Priority Support",
        "Mock Interviews"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "$49",
      period: "/month",
      description: "For career transformation",
      icon: Rocket,
      color: "rose",
      features: [
        "Unlimited Problems",
        "1-on-1 Mentorship",
        "Interview Guarantee",
        "Company Referrals",
        "Salary Negotiation",
        "Lifetime Access"
      ],
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      sky: "from-sky-500 to-sky-600",
      violet: "from-violet-500 to-violet-600",
      rose: "from-rose-500 to-rose-600"
    };
    return colors[color as keyof typeof colors];
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
          <h2 className="heading-responsive font-bold mb-4 md:mb-6 text-gradient-violet">
            Choose Your Path
          </h2>
          <p className="text-responsive text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan to accelerate your coding journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative glass rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-violet-500 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-500 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${getColorClasses(plan.color)} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-4">{plan.description}</p>
                
                <div className="flex items-end justify-center mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm md:text-base ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full bg-gradient-to-r ${getColorClasses(plan.color)} text-white py-3 md:py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-200 text-sm md:text-base touch-target`}>
                {plan.price === "Free" ? "Get Started" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
