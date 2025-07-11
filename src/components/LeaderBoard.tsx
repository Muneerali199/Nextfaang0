import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Award, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LeaderBoard = () => {
  const leaders = [
    {
      rank: 1,
      name: 'Alex Chen',
      points: 15420,
      avatar: '👨‍💻',
      badge: Crown,
      badgeColor: 'text-yellow-400'
    },
    {
      rank: 2,
      name: 'Sarah Kim',
      points: 14280,
      avatar: '👩‍💻',
      badge: Medal,
      badgeColor: 'text-gray-400'
    },
    {
      rank: 3,
      name: 'Mike Johnson',
      points: 13950,
      avatar: '👨‍💼',
      badge: Award,
      badgeColor: 'text-orange-400'
    },
    {
      rank: 4,
      name: 'You',
      points: 12340,
      avatar: '🚀',
      isCurrentUser: true
    },
    {
      rank: 5,
      name: 'Lisa Wang',
      points: 11890,
      avatar: '👩‍🔬'
    }
  ];

  return (
    <Card className="glass border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span>Leaderboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                leader.isCurrentUser 
                  ? 'bg-sky-500/20 border border-sky-500/30' 
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-2 flex-1">
                <span className="text-2xl">{leader.avatar}</span>
                <div>
                  <p className={`font-medium ${leader.isCurrentUser ? 'text-sky-400' : 'text-white'}`}>
                    {leader.name}
                  </p>
                  <p className="text-gray-400 text-sm">{leader.points.toLocaleString()} pts</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {leader.badge && (
                  <leader.badge className={`w-4 h-4 ${leader.badgeColor}`} />
                )}
                <span className={`text-sm font-bold ${
                  leader.rank <= 3 ? 'text-yellow-400' : 'text-gray-400'
                }`}>
                  #{leader.rank}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="w-full mt-4 text-center text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors">
          View full leaderboard →
        </button>
      </CardContent>
    </Card>
  );
};

export default LeaderBoard;
