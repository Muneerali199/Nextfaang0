
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Clock, Award, Zap, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StatsOverview = () => {
  const stats = [
    {
      title: "Problems Solved",
      value: "247",
      change: "+12 today",
      changeType: "increase",
      icon: Target,
      color: "sky",
      bgGradient: "from-sky-500/20 to-sky-600/20"
    },
    {
      title: "Current Streak",
      value: "23 days",
      change: "+1 day",
      changeType: "increase",
      icon: Zap,
      color: "violet",
      bgGradient: "from-violet-500/20 to-violet-600/20"
    },
    {
      title: "Study Time",
      value: "156h",
      change: "+8h this week",
      changeType: "increase",
      icon: Clock,
      color: "rose",
      bgGradient: "from-rose-500/20 to-rose-600/20"
    },
    {
      title: "Global Rank",
      value: "#1,247",
      change: "+156 positions",
      changeType: "increase",
      icon: Award,
      color: "emerald",
      bgGradient: "from-emerald-500/20 to-emerald-600/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="glass border-gray-800 hover:bg-white/5 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.bgGradient}`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.change}</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;
