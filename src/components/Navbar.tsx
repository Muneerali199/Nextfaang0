import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Users, BookOpen, Trophy, LogIn } from 'lucide-react';
import { 
  UserButton, 
  useUser, 
  SignInButton, 
  SignOutButton,
  SignedIn,
  SignedOut
} from '@clerk/clerk-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Roadmap', href: '/roadmap', icon: BookOpen },
    { name: 'Practice', href: '/problems', icon: Code },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-xl py-2 shadow-md' : 'bg-gray-900/80 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-violet-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">NEXTFAANG</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </a>
              ))}

              <div className="ml-4">
                <SignedIn>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                        userButtonPopoverCard: "bg-gray-800 border border-gray-700",
                      }
                    }}
                  />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white px-4 py-1.5 rounded-full hover:from-sky-600 hover:to-violet-600 transition-all">
                      <LogIn className="w-4 h-4" />
                      <span className="text-sm">Sign In</span>
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <SignedIn>
                <div className="flex items-center px-3 py-2">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                      }
                    }}
                  />
                  <SignOutButton>
                    <button className="ml-3 text-gray-300 hover:text-white">
                      Sign Out
                    </button>
                  </SignOutButton>
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button 
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white px-6 py-2 rounded-full hover:from-sky-600 hover:to-violet-600 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;