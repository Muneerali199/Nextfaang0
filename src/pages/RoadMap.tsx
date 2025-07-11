import React from 'react';
import { BookOpen } from 'lucide-react';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-sky-900/20 mb-4">
            <BookOpen className="h-8 w-8 text-sky-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Learning Roadmap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your guided path to mastering competitive programming
          </p>
        </div>

        <SignedIn>
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Progress</h2>
            <div className="space-y-6">
              {/* Roadmap items */}
              {[1, 2, 3, 4, 5].map((level) => (
                <div key={level} className="border border-gray-700 rounded-lg p-6 hover:border-sky-400 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">Level {level}: Data Structures</h3>
                  <p className="text-gray-300 mb-4">Master fundamental data structures and algorithms</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-sky-400 to-violet-500 h-2.5 rounded-full" 
                      style={{ width: `${level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </div>
  );
};

export default Roadmap;