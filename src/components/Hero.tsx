import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden hero-gradient pt-[96px]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-1.5 mb-8 animate-glow">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-sm text-gray-300">Elevate Your Coding Journey</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white">NEXTFAANG</span>
          <span className="block text-gradient-sky">CP Legend Hub</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Master <span className="text-gradient-violet">competitive programming</span> and 
          <span className="text-gradient-rose"> data structures</span> with our 
          AI-powered platform. Join thousands of developers cracking FAANG interviews.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group bg-gradient-to-r from-sky-500 to-violet-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-sky-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105 glow flex items-center space-x-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group glass text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
            <span>Watch Demo</span>
            <Zap className="w-5 h-5 group-hover:text-sky-400 transition-colors" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-3xl font-bold text-gradient-sky mb-2">10K+</div>
            <div className="text-gray-300">Active Learners</div>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-3xl font-bold text-gradient-violet mb-2">500+</div>
            <div className="text-gray-300">Problem Sets</div>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-3xl font-bold text-gradient-rose mb-2">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;