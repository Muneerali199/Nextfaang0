
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Lightbulb, Code, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your AI coding assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(content),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('algorithm') || input.includes('complexity')) {
      return 'Great question about algorithms! Time complexity is crucial for efficient code. Would you like me to explain Big O notation or help with a specific algorithm?';
    } else if (input.includes('debug') || input.includes('error')) {
      return 'I can help you debug! Please share your code or describe the error you\'re encountering. Common issues include syntax errors, logic problems, or runtime exceptions.';
    } else if (input.includes('practice') || input.includes('problem')) {
      return 'I recommend starting with easy problems and gradually increasing difficulty. Focus on patterns like Two Pointers, Sliding Window, and Dynamic Programming. Would you like specific problem recommendations?';
    } else if (input.includes('interview')) {
      return 'For coding interviews, practice these key areas: Arrays, Strings, Trees, Graphs, and System Design. Mock interviews and explaining your thought process are crucial!';
    } else {
      return 'I\'m here to help with coding questions, algorithm explanations, debugging, and interview preparation. What specific topic would you like to explore?';
    }
  };

  const quickActions = [
    { icon: Code, text: 'Debug my code', action: 'Help me debug my code' },
    { icon: Lightbulb, text: 'Algorithm help', action: 'Explain algorithms and complexity' },
    { icon: HelpCircle, text: 'Interview prep', action: 'Help me prepare for coding interviews' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Chat Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 z-50 lg:relative lg:w-80 xl:w-96"
          >
            <Card className="h-full glass border-l border-gray-800 rounded-none lg:rounded-l-2xl flex flex-col">
              {/* Header */}
              <CardHeader className="border-b border-gray-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">AI Assistant</h3>
                      <p className="text-xs text-gray-400">Always here to help</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-0 overflow-hidden">
                <div className="h-full flex flex-col">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === 'user' 
                              ? 'bg-sky-500 ml-2' 
                              : 'bg-gray-700 mr-2'
                          }`}>
                            {message.type === 'user' ? (
                              <User className="w-4 h-4 text-white" />
                            ) : (
                              <Bot className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className={`p-3 rounded-lg ${
                            message.type === 'user'
                              ? 'bg-sky-500 text-white'
                              : 'bg-gray-800 text-gray-100'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  {messages.length === 1 && (
                    <div className="p-4 border-t border-gray-800">
                      <p className="text-xs text-gray-400 mb-3">Quick actions:</p>
                      <div className="space-y-2">
                        {quickActions.map((action, index) => (
                          <button
                            key={index}
                            onClick={() => handleSendMessage(action.action)}
                            className="w-full flex items-center space-x-2 p-2 text-left hover:bg-white/5 rounded-lg transition-colors text-sm"
                          >
                            <action.icon className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300">{action.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-gray-800">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                        placeholder="Ask me anything..."
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
                      />
                      <button
                        onClick={() => handleSendMessage(inputValue)}
                        disabled={!inputValue.trim()}
                        className="p-2 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                      >
                        <Send className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;
