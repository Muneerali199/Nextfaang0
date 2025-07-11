
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Trophy, Code, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ActivityFeed = () => {
  const activities = [
    {
      type: 'solved',
      title: 'Solved "Two Sum" problem',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    },
    {
      type: 'achievement',
      title: 'Earned "Speed Demon" badge',
      time: '5 hours ago',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    },
    {
      type: 'streak',
      title: 'Extended streak to 23 days',
      time: '1 day ago',
      icon: Star,
      color: 'text-violet-400',
      bgColor: 'bg-violet-400/20'
    },
    {
      type: 'practice',
      title: 'Completed Arrays chapter',
      time: '2 days ago',
      icon: Code,
      color: 'text-sky-400',
      bgColor: 'bg-sky-400/20'
    },
    {
      type: 'session',
      title: '2-hour study session',
      time: '3 days ago',
      icon: Clock,
      color: 'text-rose-400',
      bgColor: 'bg-rose-400/20'
    }
  ];

  return (
    <Card className="glass border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{activity.title}</p>
                <p className="text-gray-400 text-xs">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="w-full mt-4 text-center text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors">
          View all activity →
        </button>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
