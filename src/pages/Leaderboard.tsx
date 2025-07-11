import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn,
  useUser,
  useClerk
} from '@clerk/clerk-react';

interface LeaderboardUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  score: number;
  problemsSolved: number;
}

const Leaderboard = () => {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { users: clerkUsers } = useClerk();

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        // Get all users from Clerk
        const clerkUserList = await clerkUsers.getUserList();
        
        // Simulate fetching user scores from your backend
        // In a real app, you would fetch this from your database
        const mockScores = clerkUserList.map((clerkUser, index) => ({
          id: clerkUser.id,
          email: clerkUser.emailAddresses[0]?.emailAddress || 'No email',
          firstName: clerkUser.firstName || 'Anonymous',
          lastName: clerkUser.lastName || '',
          score: Math.floor(Math.random() * 1000) + 500, // Random score for demo
          problemsSolved: Math.floor(Math.random() * 50) + 10 // Random count for demo
        }));

        // Sort by score
        const sortedUsers = mockScores.sort((a, b) => b.score - a.score);
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, [clerkUsers]);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-900/20 mb-4">
            <Trophy className="h-8 w-8 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Leaderboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Top performers in our community
          </p>
        </div>

        <SignedIn>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
            </div>
          ) : (
            <div className="glass rounded-xl p-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Problems Solved</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {users.map((userData, index) => (
                      <tr 
                        key={userData.id} 
                        className={`hover:bg-gray-800/50 transition-colors ${
                          user?.id === userData.id ? 'bg-sky-900/20' : ''
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            index === 0 ? 'bg-amber-500/20 text-amber-400' : 
                            index === 1 ? 'bg-gray-500/20 text-gray-400' : 
                            index === 2 ? 'bg-amber-800/20 text-amber-600' : 'bg-gray-700/20 text-gray-300'
                          }`}>
                            #{index + 1}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-white">
                          {userData.firstName} {userData.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-sm">
                          {userData.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sky-400">{userData.score}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-emerald-400">{userData.problemsSolved}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </div>
  );
};

export default Leaderboard;