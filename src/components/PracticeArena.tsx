
import React, { useState } from 'react';
import { Play, Clock, Users, Star, Code, Terminal, CheckCircle } from 'lucide-react';

const PracticeArena = () => {
  const [selectedTab, setSelectedTab] = useState('problems');

  const problems = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      solved: true,
      time: "15m",
      acceptance: "89%",
      tags: ["Array", "Hash Table"]
    },
    {
      title: "Binary Tree Traversal",
      difficulty: "Medium",
      solved: false,
      time: "30m",
      acceptance: "67%",
      tags: ["Tree", "DFS"]
    },
    {
      title: "Maximum Subarray",
      difficulty: "Medium",
      solved: true,
      time: "25m",
      acceptance: "74%",
      tags: ["Array", "DP"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="practice" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Practice</span>
            <span className="block text-gradient-violet">Arena</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharpen your skills with our interactive coding environment and curated problems
          </p>
        </div>

        {/* Practice Interface */}
        <div className="glass rounded-3xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-700">
            {[
              { id: 'problems', label: 'Problems', icon: Code },
              { id: 'contest', label: 'Live Contest', icon: Play },
              { id: 'leaderboard', label: 'Leaderboard', icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-200 ${
                  selectedTab === tab.id
                    ? 'text-sky-400 border-b-2 border-sky-400 bg-sky-400/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8">
            {selectedTab === 'problems' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Problem List */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Featured Problems</h3>
                  <div className="space-y-4">
                    {problems.map((problem, index) => (
                      <div
                        key={index}
                        className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {problem.solved ? (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                            )}
                            <h4 className="text-lg font-semibold text-white">{problem.title}</h4>
                          </div>
                          <span className={`text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{problem.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{problem.acceptance}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {problem.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 text-xs bg-violet-500/20 text-violet-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Editor Preview */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <Terminal className="w-6 h-6 text-sky-400" />
                    <span>Code Editor</span>
                  </h3>
                  <div className="glass rounded-xl overflow-hidden">
                    {/* Editor Header */}
                    <div className="bg-gray-800/50 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-400">solution.py</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select className="bg-gray-700 text-white text-sm rounded px-2 py-1">
                          <option>Python</option>
                          <option>JavaScript</option>
                          <option>Java</option>
                          <option>C++</option>
                        </select>
                      </div>
                    </div>

                    {/* Editor Content */}
                    <div className="p-4 bg-gray-900/50 font-mono text-sm">
                      <div className="text-gray-400">
                        <span className="text-purple-400">def</span>{' '}
                        <span className="text-blue-400">twoSum</span>
                        <span className="text-white">(</span>
                        <span className="text-orange-400">nums</span>
                        <span className="text-white">, </span>
                        <span className="text-orange-400">target</span>
                        <span className="text-white">):</span>
                      </div>
                      <div className="text-gray-400 ml-4">
                        <span className="text-orange-400">num_map</span>
                        <span className="text-white"> = {}</span>
                      </div>
                      <div className="text-gray-400 ml-4">
                        <span className="text-purple-400">for</span>
                        <span className="text-white"> i, num </span>
                        <span className="text-purple-400">in</span>
                        <span className="text-blue-400"> enumerate</span>
                        <span className="text-white">(nums):</span>
                      </div>
                      <div className="text-gray-400 ml-8">
                        <span className="text-orange-400">complement</span>
                        <span className="text-white"> = target - num</span>
                      </div>
                      <div className="text-gray-400 ml-8">
                        <span className="text-purple-400">if</span>
                        <span className="text-white"> complement </span>
                        <span className="text-purple-400">in</span>
                        <span className="text-white"> num_map:</span>
                      </div>
                      <div className="text-gray-400 ml-12">
                        <span className="text-purple-400">return</span>
                        <span className="text-white"> [num_map[complement], i]</span>
                      </div>
                      <div className="text-gray-400 ml-8">
                        <span className="text-orange-400">num_map</span>
                        <span className="text-white">[num] = i</span>
                      </div>
                    </div>

                    {/* Editor Footer */}
                    <div className="bg-gray-800/50 px-4 py-2 flex items-center justify-between border-t border-gray-700">
                      <div className="flex items-center space-x-4">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm transition-colors">
                          Run
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm transition-colors">
                          Submit
                        </button>
                      </div>
                      <div className="text-sm text-gray-400">
                        Time: O(n) | Space: O(n)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'contest' && (
              <div className="text-center py-12">
                <Play className="w-16 h-16 text-violet-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Weekly Contest #247</h3>
                <p className="text-gray-300 mb-6">Join 2,500+ participants in this week's contest</p>
                <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-violet-600 hover:to-purple-700 transition-all duration-200">
                  Join Contest
                </button>
              </div>
            )}

            {selectedTab === 'leaderboard' && (
              <div className="text-center py-12">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Global Leaderboard</h3>
                <p className="text-gray-300 mb-6">See how you rank against other coding legends</p>
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-3 rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-200">
                  View Rankings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeArena;
