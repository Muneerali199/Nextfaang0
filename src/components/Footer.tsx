
import React from 'react';
import { Code, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Practice Arena', href: '#practice' },
      { name: 'Roadmap', href: '#roadmap' },
      { name: 'Community', href: '#community' },
      { name: 'Leaderboard', href: '#leaderboard' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'API Reference', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ],
    Connect: [
      { name: 'Discord', href: '#', icon: Github },
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'Email', href: '#', icon: Mail }
    ]
  };

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with <span className="text-gradient-sky">NEXTFAANG</span>
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest coding challenges, algorithm insights, and career tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
            <button className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-violet-500 text-white px-8 py-3 rounded-full hover:from-sky-600 hover:to-violet-600 transition-all duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-sky">NEXTFAANG</span>
                <p className="text-gray-400 text-sm">© 2024 All rights reserved</p>
              </div>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for competitive programmers</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Floating wave animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-violet-500 to-rose-500 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
