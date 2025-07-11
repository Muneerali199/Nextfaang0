
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageSquare, TrendingUp, Users, Award, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Dashboard from './Dashboard';
import ChatBot from './ChatBot';
import StatsOverview from './StatsOverview';
import ActivityFeed from './ActivityFeed';
import LeaderBoard from './LeaderBoard';

const DashboardLayout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarItems = [
    { icon: TrendingUp, label: 'Overview', active: true },
    { icon: Activity, label: 'Activity', active: false },
    { icon: Users, label: 'Community', active: false },
    { icon: Award, label: 'Achievements', active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-gradient-sky">CodeLegend</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={{
            x: isMobileMenuOpen ? 0 : -100,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          className="fixed lg:relative lg:translate-x-0 lg:opacity-100 z-40 w-64 h-screen glass border-r border-gray-800 lg:block"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gradient-sky mb-8 hidden lg:block">CodeLegend</h2>
            
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    item.active 
                      ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' 
                      : 'hover:bg-white/5 text-gray-300'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 glass rounded-lg">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Quick Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Daily Goal</span>
                  <span className="text-green-400">3/5</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-4 lg:p-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold mb-2">Welcome back, Legend! 👋</h1>
                <p className="text-gray-400">Here's what's happening with your coding journey</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                <button
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>AI Assistant</span>
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <StatsOverview />
                <Dashboard />
              </div>
              
              <div className="space-y-6">
                <ActivityFeed />
                <LeaderBoard />
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
};

export default DashboardLayout;
