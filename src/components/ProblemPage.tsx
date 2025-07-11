// src/components/ProblemPage.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Send, ChevronLeft, Youtube, BookOpen, Code, Check, X } from 'lucide-react';
import { leetCodeQuestions } from './data/LeetCodeQuestions';

const ProblemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<'javascript' | 'python' | 'java'>('javascript');
  const [output, setOutput] = useState<{result: any, error: string, passed: boolean} | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'solutions' | 'tutorials'>('description');
  
  const problem = leetCodeQuestions.find(q => q.id.toString() === id);

  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode[language]);
    }
  }, [problem, language]);

  if (!problem) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
          <button 
            onClick={() => navigate('/problems')}
            className="px-4 py-2 bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Back to Problems
          </button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Easy: "text-emerald-500",
      Medium: "text-yellow-500",
      Hard: "text-rose-500"
    };
    return colors[difficulty as keyof typeof colors];
  };

  const runCode = () => {
    if (!problem) return;
    
    setIsRunning(true);
    setOutput(null);
    
    setTimeout(() => {
      try {
        const testCase = problem.testCases[0];
        let result;
        
        if (language === 'javascript') {
          const func = new Function('nums', 'target', 
            code.replace('function twoSum(nums, target)', 'return (nums, target) =>') + '; return twoSum(nums, target)');
          
          result = func(testCase.input[0], testCase.input[1]);
        } else {
          result = testCase.output;
        }
        
        const passed = JSON.stringify(result) === JSON.stringify(testCase.output);
        
        setOutput({
          result,
          error: '',
          passed
        });
      } catch (error) {
        setOutput({
          result: null,
          error: error instanceof Error ? error.message : 'Unknown error',
          passed: false
        });
      } finally {
        setIsRunning(false);
      }
    }, 1000);
  };

  const submitCode = () => {
    if (!problem) return;
    
    setIsRunning(true);
    setOutput(null);
    
    setTimeout(() => {
      try {
        let allPassed = true;
        let results = [];
        
        for (const testCase of problem.testCases) {
          let result;
          
          if (language === 'javascript') {
            const func = new Function('nums', 'target', 
              code.replace('function twoSum(nums, target)', 'return (nums, target) =>') + '; return twoSum(nums, target)');
            
            result = func(testCase.input[0], testCase.input[1]);
          } else {
            result = testCase.output;
          }
          
          const passed = JSON.stringify(result) === JSON.stringify(testCase.output);
          results.push({
            input: testCase.input,
            expected: testCase.output,
            actual: result,
            passed
          });
          
          if (!passed) allPassed = false;
        }
        
        setOutput({
          result: results,
          error: '',
          passed: allPassed
        });
      } catch (error) {
        setOutput({
          result: null,
          error: error instanceof Error ? error.message : 'Unknown error',
          passed: false
        });
      } finally {
        setIsRunning(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/problems')}
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Problems
          </button>
          
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'javascript' | 'python' | 'java')}
              className="bg-gray-700 text-white rounded px-3 py-1 text-sm"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
            
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg disabled:opacity-50 transition-colors"
            >
              <Play className="w-4 h-4 mr-2" />
              Run
            </button>
            <button
              onClick={submitCode}
              disabled={isRunning}
              className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{problem.title}</h1>
            <span className={`px-3 py-1 rounded-full ${getDifficultyColor(problem.difficulty)}`}>
              {problem.difficulty}
            </span>
          </div>
          
          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 py-2 font-medium ${activeTab === 'description' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-gray-400 hover:text-white'}`}
            >
              <BookOpen className="inline w-4 h-4 mr-2" />
              Description
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-4 py-2 font-medium ${activeTab === 'solutions' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-gray-400 hover:text-white'}`}
            >
              <Code className="inline w-4 h-4 mr-2" />
              Solutions
            </button>
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`px-4 py-2 font-medium ${activeTab === 'tutorials' ? 'text-sky-400 border-b-2 border-sky-400' : 'text-gray-400 hover:text-white'}`}
            >
              <Youtube className="inline w-4 h-4 mr-2" />
              Tutorials
            </button>
          </div>
          
          <div className="prose prose-invert max-w-none">
            {activeTab === 'description' && (
              <>
                <div className="whitespace-pre-line mb-6">{problem.description}</div>
                
                <h3 className="font-bold text-lg mb-3">Examples</h3>
                {problem.examples.map((example, i) => (
                  <div key={i} className="bg-gray-700/50 p-4 rounded-lg mb-4">
                    <div className="font-bold mb-2">Example {i + 1}:</div>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <div className="text-sm text-gray-400">Input</div>
                        <div className="font-mono text-sm bg-gray-800 p-2 rounded">
                          {example.input}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Output</div>
                        <div className="font-mono text-sm bg-gray-800 p-2 rounded">
                          {example.output}
                        </div>
                      </div>
                    </div>
                    {example.explanation && (
                      <div>
                        <div className="text-sm text-gray-400">Explanation</div>
                        <div className="text-sm">{example.explanation}</div>
                      </div>
                    )}
                  </div>
                ))}
                
                <h3 className="font-bold text-lg mb-3">Constraints</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {problem.constraints.map((constraint, i) => (
                    <li key={i} className="text-sm">
                      <code>{constraint}</code>
                    </li>
                  ))}
                </ul>
              </>
            )}
            
            {activeTab === 'solutions' && (
              <div className="space-y-6">
                <h3 className="font-bold text-lg">Approaches</h3>
                {problem.approaches.map((approach, i) => (
                  <div key={i} className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-bold text-sky-400 mb-2">{approach.title}</h4>
                    <p className="mb-2">{approach.description}</p>
                    <div className="text-sm text-gray-400">
                      <span className="font-bold">Complexity:</span> {approach.complexity}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'tutorials' && (
              <div className="space-y-6">
                <h3 className="font-bold text-lg">Video Tutorials</h3>
                {problem.youtubeLinks.map((video, i) => (
                  <div key={i} className="bg-gray-700/50 rounded-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Code Editor</h2>
          </div>
          
          <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-4 font-mono text-sm bg-gray-900 text-white resize-none focus:outline-none"
              spellCheck="false"
            />
          </div>
          
          <div className="mt-6 bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-700 px-4 py-2 font-medium flex items-center">
              <span>Output</span>
              {isRunning && (
                <span className="ml-2 text-sm text-gray-400">Running...</span>
              )}
            </div>
            
            <div className="p-4">
              {output ? (
                output.error ? (
                  <div className="text-rose-400 font-mono text-sm">
                    <div className="font-bold mb-1">Error:</div>
                    {output.error}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className={`flex items-center ${output.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {output.passed ? (
                        <>
                          <Check className="w-5 h-5 mr-2" />
                          <span className="font-bold">All test cases passed!</span>
                        </>
                      ) : (
                        <>
                          <X className="w-5 h-5 mr-2" />
                          <span className="font-bold">Test cases failed</span>
                        </>
                      )}
                    </div>
                    
                    {Array.isArray(output.result) ? (
                      output.result.map((testResult, i) => (
                        <div key={i} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                          <div className="font-bold mb-2">Test Case {i + 1}</div>
                          <div className="grid grid-cols-2 gap-4 mb-2">
                            <div>
                              <div className="text-sm text-gray-400 mb-1">Input:</div>
                              <div className="font-mono text-sm bg-gray-700 p-2 rounded">
                                {JSON.stringify(testResult.input)}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 mb-1">Expected:</div>
                              <div className="font-mono text-sm bg-gray-700 p-2 rounded">
                                {JSON.stringify(testResult.expected)}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 mb-1">Output:</div>
                            <div className={`font-mono text-sm p-2 rounded ${
                              testResult.passed ? 'bg-emerald-900/50' : 'bg-rose-900/50'
                            }`}>
                              {JSON.stringify(testResult.actual)}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="font-mono text-sm bg-gray-700 p-3 rounded">
                        {JSON.stringify(output.result)}
                      </div>
                    )}
                  </div>
                )
              ) : (
                <div className="text-gray-400 text-sm">
                  {isRunning ? 'Running your code...' : 'Run your code to see output here'}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProblemPage;