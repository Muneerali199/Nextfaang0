// src/pages/ResourceDetail.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { Download, ExternalLink, Star, ArrowLeft, Clock, FileText, BookOpen, Video, Headphones, Users, BarChart2, Code2, Layers, Cpu } from 'lucide-react';

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Comprehensive mock data for all resource types
  const resources = {
    "dsa-handbook": {
      id: "dsa-handbook",
      title: "The Complete DSA Handbook",
      type: "E-Book",
      description: "Master Data Structures and Algorithms with this comprehensive guide covering all essential concepts with implementations in multiple languages.",
      rating: 4.9,
      downloads: "12.5K+",
      color: "sky",
      icon: BookOpen,
      content: {
        author: "Dr. Jane Smith",
        pages: 420,
        languages: "JavaScript, Python, Java, C++",
        lastUpdated: "June 2023",
        fileSize: "18.7 MB",
        downloadLink: "#",
        previewLink: "#",
        details: [
          "Covers all essential data structures (Arrays, Linked Lists, Trees, Graphs, etc.)",
          "150+ carefully curated practice problems with solutions",
          "Detailed time and space complexity analysis",
          "Real-world application examples",
          "Interview preparation tips and strategies",
          "Comparison of different algorithmic approaches"
        ],
        chapters: [
          { title: "Introduction to Algorithms", pages: 35 },
          { title: "Array Techniques", pages: 58 },
          { title: "String Manipulation", pages: 42 },
          { title: "Recursion & Backtracking", pages: 47 },
          { title: "Tree Data Structures", pages: 63 },
          { title: "Graph Algorithms", pages: 72 },
          { title: "Dynamic Programming", pages: 55 },
          { title: "System Design Basics", pages: 48 }
        ]
      }
    },
    "system-design-masterclass": {
      id: "system-design-masterclass",
      title: "System Design Masterclass",
      type: "Video Course",
      description: "20-hour comprehensive course covering everything from basic principles to advanced distributed systems design patterns.",
      rating: 4.8,
      downloads: "8.2K+",
      color: "violet",
      icon: Video,
      content: {
        instructor: "John Doe (Ex-Google, Ex-Facebook)",
        duration: "20 hours",
        projects: [
          "Design a URL Shortener",
          "Build a Chat Application",
          "Create a Distributed File Storage",
          "Design a Social Media Feed",
          "Build a Real-time Analytics Dashboard"
        ],
        lastUpdated: "April 2023",
        fileSize: "4.2 GB",
        downloadLink: "#",
        previewLink: "#",
        modules: [
          {
            title: "Fundamentals of System Design",
            duration: "2.5 hours",
            lessons: 8,
            topics: ["CAP Theorem", "Load Balancing", "Consistent Hashing"]
          },
          {
            title: "Database Scaling Techniques",
            duration: "3 hours",
            lessons: 10,
            topics: ["Sharding", "Replication", "Indexing Strategies"]
          },
          {
            title: "Caching Strategies",
            duration: "2 hours",
            lessons: 6,
            topics: ["CDNs", "Redis", "Cache Invalidation"]
          },
          {
            title: "Microservices Architecture",
            duration: "4 hours",
            lessons: 12,
            topics: ["Service Discovery", "API Gateways", "Circuit Breakers"]
          },
          {
            title: "Handling High Traffic",
            duration: "3.5 hours",
            lessons: 9,
            topics: ["Rate Limiting", "Queue Systems", "Event-Driven Architecture"]
          }
        ]
      }
    },
    "coding-interview-cheatsheet": {
      id: "coding-interview-cheatsheet",
      title: "Ultimate Coding Interview Cheatsheet",
      type: "PDF Guide",
      description: "Quick reference for 75+ common patterns with solutions, time complexity analysis, and implementation tips.",
      rating: 4.9,
      downloads: "25.3K+",
      color: "rose",
      icon: FileText,
      content: {
        patterns: 78,
        difficulty: "Beginner to Advanced",
        lastUpdated: "May 2023",
        fileSize: "5.1 MB",
        downloadLink: "#",
        previewLink: "#",
        sections: [
          {
            title: "Array Techniques",
            patterns: 12,
            examples: ["Two Pointers", "Sliding Window", "Prefix Sum"]
          },
          {
            title: "String Manipulation",
            patterns: 9,
            examples: ["Anagrams", "Palindromes", "String Encoding"]
          },
          {
            title: "Tree Traversals",
            patterns: 8,
            examples: ["DFS Variations", "BFS Applications", "BST Operations"]
          },
          {
            title: "Graph Algorithms",
            patterns: 11,
            examples: ["Dijkstra's", "Topological Sort", "Union Find"]
          },
          {
            title: "Dynamic Programming",
            patterns: 15,
            examples: ["0/1 Knapsack", "LCS", "Coin Change"]
          }
        ],
        quickTips: [
          "How to approach any coding problem",
          "Time complexity cheat sheet",
          "Common pitfalls to avoid",
          "How to explain your solution",
          "Testing your code effectively"
        ]
      }
    },
    "frontend-architectures": {
      id: "frontend-architectures",
      title: "Modern Frontend Architectures",
      type: "E-Book",
      description: "Comprehensive guide to building scalable frontend applications with React, Vue, and Angular.",
      rating: 4.7,
      downloads: "6.8K+",
      color: "emerald",
      icon: Layers,
      content: {
        author: "Sarah Johnson",
        pages: 380,
        frameworks: "React, Vue, Angular, Svelte",
        lastUpdated: "March 2023",
        fileSize: "15.2 MB",
        downloadLink: "#",
        previewLink: "#",
        topics: [
          "Component Architecture",
          "State Management Comparison",
          "Performance Optimization",
          "Micro Frontends",
          "Testing Strategies",
          "CI/CD for Frontend"
        ],
        caseStudies: [
          "Migrating a Monolith to Micro Frontends",
          "Optimizing a Large-Scale E-commerce Site",
          "Building a Design System"
        ]
      }
    }
  };

  const resource = resources[id as keyof typeof resources];

  if (!resource) {
    return (
      <div className="container-responsive py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Resource not found</h1>
        <button 
          onClick={() => navigate('/resources')}
          className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 rounded-lg"
        >
          Back to Resources
        </button>
      </div>
    );
  }

  const colorClasses = {
    sky: 'bg-sky-500/20 text-sky-400 border-sky-400',
    violet: 'bg-violet-500/20 text-violet-400 border-violet-400',
    rose: 'bg-rose-500/20 text-rose-400 border-rose-400',
    emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-400'
  };

  return (
    <div className="container-responsive py-8 md:py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Resources
      </button>

      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Resource Overview */}
          <div className="lg:w-1/3">
            <div className="flex items-center justify-between mb-6">
              <div className={`${colorClasses[resource.color as keyof typeof colorClasses]} px-4 py-2 rounded-full text-sm font-medium inline-flex items-center border`}>
                <resource.icon className="w-4 h-4 mr-2" />
                {resource.type}
              </div>
              <div className="flex items-center space-x-1 bg-gray-800/50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">{resource.rating}</span>
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{resource.title}</h1>
            <p className="text-gray-300 mb-6">{resource.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-400 mb-1">
                  <Download className="w-4 h-4" />
                  <span className="text-xs">DOWNLOADS</span>
                </div>
                <div className="text-white font-semibold">{resource.downloads}</div>
              </div>
              
              {'pages' in resource.content && (
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-400 mb-1">
                    <FileText className="w-4 h-4" />
                    <span className="text-xs">PAGES</span>
                  </div>
                  <div className="text-white font-semibold">{resource.content.pages}</div>
                </div>
              )}
              
              {'duration' in resource.content && (
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">DURATION</span>
                  </div>
                  <div className="text-white font-semibold">{resource.content.duration}</div>
                </div>
              )}
              
              {'patterns' in resource.content && (
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-400 mb-1">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs">PATTERNS</span>
                  </div>
                  <div className="text-white font-semibold">{resource.content.patterns}</div>
                </div>
              )}
            </div>
            
            <div className="flex flex-col space-y-4 mb-8">
              <a 
                href={resource.content.downloadLink}
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Resource</span>
              </a>
              <a 
                href={resource.content.previewLink}
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Preview Online</span>
              </a>
            </div>
            
            {'author' in resource.content && (
              <div className="bg-gray-800/30 p-4 rounded-lg mb-6">
                <h3 className="text-sm text-gray-400 mb-2">AUTHOR</h3>
                <p className="text-white">{resource.content.author}</p>
              </div>
            )}
            
            {'instructor' in resource.content && (
              <div className="bg-gray-800/30 p-4 rounded-lg mb-6">
                <h3 className="text-sm text-gray-400 mb-2">INSTRUCTOR</h3>
                <p className="text-white">{resource.content.instructor}</p>
              </div>
            )}
          </div>
          
          {/* Right Column - Resource Details */}
          <div className="lg:w-2/3">
            <div className="glass rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Resource Details</h2>
              
              {/* E-Book Specific Content */}
              {'chapters' in resource.content && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-300 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-sky-400" />
                    Table of Contents
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resource.content.chapters.map((chapter, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-white">{chapter.title}</h4>
                          <span className="text-gray-400 text-sm">{chapter.pages} pages</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Video Course Specific Content */}
              {'modules' in resource.content && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-300 mb-3 flex items-center">
                    <Video className="w-5 h-5 mr-2 text-violet-400" />
                    Course Modules
                  </h3>
                  <div className="space-y-4">
                    {resource.content.modules.map((module, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-white">{module.title}</h4>
                          <span className="text-gray-400 text-sm">{module.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {module.topics.map((topic, i) => (
                            <span key={i} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Cheatsheet Specific Content */}
              {'sections' in resource.content && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-300 mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-rose-400" />
                    Cheatsheet Sections
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resource.content.sections.map((section, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="font-medium text-white mb-2">{section.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {section.examples.map((example, i) => (
                            <span key={i} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Common Details Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-3 flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {resource.content.details?.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-sky-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                  {resource.content.quickTips?.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-rose-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Projects/Case Studies Section */}
            {(resource.content.projects || resource.content.caseStudies) && (
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Cpu className="w-5 h-5 mr-2" />
                  {resource.content.projects ? 'Hands-on Projects' : 'Case Studies'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(resource.content.projects || resource.content.caseStudies)?.map((item, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <span className={`text-${resource.color}-400 mr-2 mt-1`}>▹</span>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;