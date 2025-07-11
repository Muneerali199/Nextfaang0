// src/components/Dashboard.tsx
import React, { useState } from 'react';
import { TrendingUp, Target, Clock, Award, Calendar, BarChart3, Code, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [problemsSolved, setProblemsSolved] = useState(247);
  const [currentStreak, setCurrentStreak] = useState(23);
  const [studyHours, setStudyHours] = useState(156);
  const [globalRank, setGlobalRank] = useState(1247);

  const stats = [
    {
      title: "Problems Solved",
      value: problemsSolved.toString(),
      change: "+12",
      changeType: "increase",
      icon: Target,
      color: "sky"
    },
    {
      title: "Current Streak",
      value: currentStreak.toString(),
      change: "+1",
      changeType: "increase",
      icon: Calendar,
      color: "violet"
    },
    {
      title: "Study Hours",
      value: `${studyHours}h`,
      change: "+8h",
      changeType: "increase",
      icon: Clock,
      color: "rose"
    },
    {
      title: "Global Rank",
      value: `#${globalRank.toLocaleString()}`,
      change: "+156",
      changeType: "increase",
      icon: Award,
      color: "emerald"
    }
  ];

  const skillProgress = [
    { skill: "Arrays & Strings", progress: 85, color: "sky" },
    { skill: "Dynamic Programming", progress: 67, color: "violet" },
    { skill: "Graph Algorithms", progress: 52, color: "rose" },
    { skill: "Tree & Binary Search", progress: 78, color: "emerald" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      sky: "from-sky-500 to-sky-600",
      violet: "from-violet-500 to-violet-600",
      rose: "from-rose-500 to-rose-600",
      emerald: "from-emerald-500 to-emerald-600"
    };
    return colors[color as keyof typeof colors];
  };

  const getProgressColor = (color: string) => {
    const colors = {
      sky: "bg-sky-500",
      violet: "bg-violet-500",
      rose: "bg-rose-500",
      emerald: "bg-emerald-500"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Profile Section */}
        <div className="glass rounded-2xl p-6 mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 flex items-center justify-center">
              {user?.imageUrl ? (
                <img 
                  src={user.imageUrl} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-white" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {user?.fullName || 'Anonymous Coder'}
              </h2>
              <p className="text-gray-300">
                {user?.primaryEmailAddress?.emailAddress || 'guest@example.com'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Member since</p>
            <p className="text-white">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : '2023'}
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Performance</span>
            <span className="block text-gradient-rose">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track your progress and celebrate your achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(stat.color)} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className={`text-sm flex items-center space-x-1 ${
                    stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className="w-3 h-3" />
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-gray-300 font-medium">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Progress */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="w-6 h-6 text-sky-400" />
              <h3 className="text-2xl font-bold text-white">Skill Progress</h3>
            </div>
            
            <div className="space-y-6">
              {skillProgress.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">{item.skill}</span>
                    <span className="text-white font-bold">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressColor(item.color)} transition-all duration-1000`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-violet-400" />
              <h3 className="text-2xl font-bold text-white">Weekly Activity</h3>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-gray-400 mb-2">{day}</div>
                  <div className="flex flex-col space-y-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-3 w-full rounded ${
                          Math.random() > 0.3 
                            ? index % 2 === 0 
                              ? 'bg-sky-500' 
                              : 'bg-violet-500'
                            : 'bg-gray-700'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center text-gray-300">
              <p className="text-sm">23 problems solved this week</p>
              <p className="text-xs text-gray-400 mt-1">Keep up the great work! 🔥</p>
            </div>
          </div>
        </div>

        {/* Practice CTA */}
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to practice?</h3>
          <p className="text-gray-300 mb-6">Solve problems to improve your skills and climb the ranks</p>
          <button
            onClick={() => navigate('/problems')}
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg text-white font-medium hover:from-sky-600 hover:to-sky-700 transition-all"
          >
            <Code className="inline w-5 h-5 mr-2" />
            Start Practicing Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;