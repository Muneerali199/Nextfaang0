import React, { useState, useEffect } from 'react';
import { Users, MessageSquare, ThumbsUp } from 'lucide-react';
import { 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn,
  useUser,
  ClerkLoaded,
  ClerkLoading
} from '@clerk/clerk-react';

interface CommunityPost {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  content: string;
  timestamp: Date;
  likes: string[]; // Array of user IDs who liked the post
  comments: CommunityComment[];
}

interface CommunityComment {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  content: string;
  timestamp: Date;
}

const Community = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    // Simulate loading real data - in a real app you would fetch from your backend
    const mockPosts: CommunityPost[] = [
      {
        id: '1',
        userId: 'user_123',
        userEmail: 'example1@email.com',
        userName: 'AlgorithmLover',
        content: 'Just solved the "Maximum Subarray" problem with O(n) time complexity! Any suggestions for similar problems?',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        likes: ['user_123', 'user_456'],
        comments: [
          {
            id: 'c1',
            userId: 'user_456',
            userEmail: 'example2@email.com',
            userName: 'DataStructMaster',
            content: 'Try "Best Time to Buy and Sell Stock" - similar Kadane\'s algorithm approach!',
            timestamp: new Date(Date.now() - 60 * 60 * 1000) // 1 hour ago
          }
        ]
      },
      {
        id: '2',
        userId: 'user_456',
        userEmail: 'example2@email.com',
        userName: 'DataStructMaster',
        content: 'Can someone explain the difference between BFS and DFS with real-world examples?',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
        likes: ['user_123'],
        comments: []
      }
    ];

    // In a real app, you would fetch posts from your backend here
    // and merge with Clerk user data
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim() || !user) return;

    const newPost: CommunityPost = {
      id: Date.now().toString(),
      userId: user.id,
      userEmail: user.primaryEmailAddress?.emailAddress || 'No email',
      userName: user.fullName || 'Anonymous',
      content: newPostContent,
      timestamp: new Date(),
      likes: [],
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleLikePost = (postId: string) => {
    if (!user) return;

    setPosts(posts.map(post => {
      if (post.id !== postId) return post;

      const isLiked = post.likes.includes(user.id);
      return {
        ...post,
        likes: isLiked
          ? post.likes.filter(id => id !== user.id)
          : [...post.likes, user.id]
      };
    }));
  };

  const handleAddComment = (postId: string, content: string) => {
    if (!content.trim() || !user) return;

    setPosts(posts.map(post => {
      if (post.id !== postId) return post;

      const newComment: CommunityComment = {
        id: Date.now().toString(),
        userId: user.id,
        userEmail: user.primaryEmailAddress?.emailAddress || 'No email',
        userName: user.fullName || 'Anonymous',
        content,
        timestamp: new Date()
      };

      return {
        ...post,
        comments: [...post.comments, newComment]
      };
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-violet-900/20 mb-4">
            <Users className="h-8 w-8 text-violet-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Community</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect, share, and learn with fellow coders
          </p>
        </div>

        <SignedIn>
          <ClerkLoading>
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
              </div>
            ) : (
              <>
                <div className="glass rounded-xl p-6 mb-6">
                  <form onSubmit={handlePostSubmit}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 flex items-center justify-center text-white font-bold">
                          {user?.firstName?.charAt(0) || 'U'}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <textarea
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="Share your thoughts with the community..."
                          rows={3}
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                        />
                        <div className="mt-2 flex justify-end">
                          <button 
                            type="submit"
                            className="bg-gradient-to-r from-sky-500 to-violet-500 text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-violet-600 transition-all duration-200 disabled:opacity-50"
                            disabled={!newPostContent.trim()}
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="space-y-6">
                  {posts.map((post) => (
                    <div key={post.id} className="glass rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 flex items-center justify-center text-white font-bold">
                            {post.userName.charAt(0)}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium text-white">{post.userName}</p>
                            <span className="text-xs text-gray-400">
                              {post.timestamp.toLocaleString()} • {post.userEmail}
                            </span>
                          </div>
                          <p className="mt-1 text-gray-300">{post.content}</p>
                          <div className="mt-4 flex space-x-6">
                            <button 
                              className={`flex items-center space-x-1 transition-colors ${
                                post.likes.includes(user?.id || '') ? 'text-sky-400' : 'text-gray-400 hover:text-sky-400'
                              }`}
                              onClick={() => handleLikePost(post.id)}
                            >
                              <ThumbsUp className="w-4 h-4" />
                              <span>{post.likes.length}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-400 hover:text-emerald-400 transition-colors">
                              <MessageSquare className="w-4 h-4" />
                              <span>{post.comments.length}</span>
                            </button>
                          </div>

                          {/* Comments section */}
                          {post.comments.length > 0 && (
                            <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-700">
                              {post.comments.map((comment) => (
                                <div key={comment.id} className="flex items-start space-x-3">
                                  <div className="flex-shrink-0">
                                    <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-300">
                                      {comment.userName.charAt(0)}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex items-center space-x-2">
                                      <p className="text-xs font-medium text-white">{comment.userName}</p>
                                      <span className="text-xs text-gray-400">
                                        {comment.timestamp.toLocaleString()}
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-300 mt-1">{comment.content}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Add comment */}
                          <div className="mt-4 flex items-center space-x-2">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-300">
                                {user?.firstName?.charAt(0) || 'U'}
                              </div>
                            </div>
                            <input
                              type="text"
                              className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent"
                              placeholder="Write a comment..."
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                                  handleAddComment(post.id, e.currentTarget.value);
                                  e.currentTarget.value = '';
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </ClerkLoaded>
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </div>
  );
};

export default Community;