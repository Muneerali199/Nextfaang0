
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Code, Sparkles, Target, Zap } from 'lucide-react';

const CinematicNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const blur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Timeline', href: '#timeline', icon: Target },
    { name: 'Dashboard', href: '#dashboard', icon: Sparkles },
    { name: 'Arena', href: '#arena', icon: Zap },
    { name: 'Community', href: '#community', icon: Code },
  ];

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(17, 24, 39, ${backgroundOpacity.get()})`,
        backdropFilter: `blur(${blur.get()}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with glow effect */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-violet-500 rounded-lg blur-lg opacity-75"></div>
              <div className="relative w-10 h-10 bg-gradient-to-r from-sky-400 to-violet-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              NEXTFAANG
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group py-2"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon className="w-4 h-4 group-hover:text-sky-400 transition-colors" />
                  <span>{item.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-violet-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              <motion.button 
                className="relative group bg-gradient-to-r from-sky-500 to-violet-500 text-white px-6 py-2 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Launch Pad</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </motion.a>
          ))}
          <motion.button 
            className="w-full mt-4 bg-gradient-to-r from-sky-500 to-violet-500 text-white px-6 py-2 rounded-full"
            whileTap={{ scale: 0.95 }}
          >
            Launch Pad
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default CinematicNavbar;
