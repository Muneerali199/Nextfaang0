
import React from 'react';
import { MessageCircle, Users, Heart, Share2, Bookmark, TrendingUp } from 'lucide-react';

const Community = () => {
  const posts = [
    {
      author: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      timeAgo: "2h ago",
      content: "Just solved the 'Longest Palindromic Substring' problem using Manacher's algorithm! The time complexity improvement from O(n²) to O(n) is incredible. Here's my approach...",
      likes: 24,
      comments: 8,
      tags: ["algorithms", "strings", "optimization"]
    },
    {
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3c8?w=100&h=100&fit=crop&crop=face",
      timeAgo: "4h ago",
      content: "Finally cracked my first Hard problem on LeetCode! 🎉 The key insight was recognizing it as a graph problem disguised as an array manipulation challenge.",
      likes: 45,
      comments: 12,
      tags: ["graph", "leetcode", "milestone"]
    },
    {
      author: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      timeAgo: "6h ago",
      content: "Sharing my dynamic programming cheat sheet! After solving 100+ DP problems, I've compiled the most common patterns and when to use them.",
      likes: 78,
      comments: 23,
      tags: ["dynamic-programming", "cheatsheet", "study-guide"]
    }
  ];

  const trendingTopics = [
    { tag: "binary-search", count: 156 },
    { tag: "graph-algorithms", count: 124 },
    { tag: "dynamic-programming", count: 98 },
    { tag: "system-design", count: 87 },
    { tag: "trees", count: 73 }
  ];

  return (
    <section id="community" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Join the</span>
            <span className="block text-gradient-violet">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow developers, share solutions, and learn together
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">You</span>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Share your coding insights..."
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <button className="bg-gradient-to-r from-sky-500 to-violet-500 text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-violet-600 transition-all duration-200">
                  Post
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  {/* Post Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{post.author}</h4>
                      <p className="text-gray-400 text-sm">{post.timeAgo}</p>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-violet-500/20 text-violet-300 rounded-full hover:bg-violet-500/30 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center space-x-6 text-gray-400">
                    <button className="flex items-center space-x-2 hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                      <Bookmark className="w-5 h-5" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Users className="w-5 h-5 text-sky-400" />
                <span>Community Stats</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Members</span>
                  <span className="text-white font-semibold">12,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Daily Posts</span>
                  <span className="text-white font-semibold">284</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Solutions Shared</span>
                  <span className="text-white font-semibold">1,956</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Online Now</span>
                  <span className="text-green-400 font-semibold flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>847</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-violet-400" />
                <span>Trending Topics</span>
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center hover:bg-white/10 rounded-lg p-2 transition-colors cursor-pointer"
                  >
                    <span className="text-gray-300">#{topic.tag}</span>
                    <span className="text-gray-400 text-sm">{topic.count} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-sky-500 to-violet-500 text-white py-3 rounded-lg hover:from-sky-600 hover:to-violet-600 transition-all duration-200">
                  Join Study Group
                </button>
                <button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-3 rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-200">
                  Find Study Partner
                </button>
                <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-200">
                  Ask for Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
