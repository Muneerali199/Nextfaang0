
import React from 'react';
import { CheckCircle, Circle, ArrowRight, Code, Brain, Trophy } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "Fundamentals",
      description: "Master basic programming concepts and problem-solving techniques",
      icon: Code,
      color: "sky",
      completed: true,
      topics: ["Arrays & Strings", "Time Complexity", "Basic Math", "Sorting"]
    },
    {
      title: "Data Structures",
      description: "Deep dive into essential data structures for competitive programming",
      icon: Brain,
      color: "violet",
      completed: true,
      topics: ["Linked Lists", "Stacks & Queues", "Trees", "Hash Tables"]
    },
    {
      title: "Algorithms",
      description: "Learn advanced algorithms and optimization techniques",
      icon: Trophy,
      color: "rose",
      completed: false,
      topics: ["Dynamic Programming", "Graph Algorithms", "Greedy", "Divide & Conquer"]
    },
    {
      title: "Advanced Topics",
      description: "Master complex topics for FAANG-level interviews",
      icon: Trophy,
      color: "emerald",
      completed: false,
      topics: ["Segment Trees", "Trie", "Advanced DP", "System Design"]
    }
  ];

  const getColorClasses = (color: string, completed: boolean) => {
    const colors = {
      sky: completed ? "from-sky-500 to-sky-600" : "from-gray-600 to-gray-700",
      violet: completed ? "from-violet-500 to-violet-600" : "from-gray-600 to-gray-700",
      rose: completed ? "from-rose-500 to-rose-600" : "from-gray-600 to-gray-700",
      emerald: completed ? "from-emerald-500 to-emerald-600" : "from-gray-600 to-gray-700"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Your Learning</span>
            <span className="block text-gradient-sky">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our structured path from beginner to competitive programming expert
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-500 via-violet-500 to-rose-500 rounded-full"></div>

          {/* Roadmap Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-12`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(item.color, item.completed)} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          {item.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                          <span className={`text-sm ${item.completed ? 'text-green-400' : 'text-gray-400'}`}>
                            {item.completed ? 'Completed' : 'In Progress'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {item.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="text-sm glass rounded-full px-3 py-1 text-gray-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <button className={`bg-gradient-to-r ${getColorClasses(item.color, true)} text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-200 flex items-center space-x-2`}>
                      <span>{item.completed ? 'Review' : 'Start Learning'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-20 w-6 h-6 lg:w-8 lg:h-8 my-8 lg:my-0">
                  <div className={`w-full h-full bg-gradient-to-r ${getColorClasses(item.color, item.completed)} rounded-full border-4 border-gray-900 animate-pulse`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
