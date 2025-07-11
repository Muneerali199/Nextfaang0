import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import ProblemsList from "./components/ProblemsList";
import ProblemPage from "./components/ProblemPage";
import Navbar from "./components/Navbar";
import ResourceHub from "./components/ResourceHub";
import ResourceDetail from "./pages/ResourceDetail";
import AIResumeBuilder from "./components/AIResumeBuilder";
import ResumeBuilderPage from "./components/ResumeBuilderPage";
import Roadmap from "./pages/RoadMap";
import Leaderboard from "./pages/Leaderboard";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk publishable key");
}

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <main className="pt-16 min-h-screen bg-gray-900">
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                
                {/* Protected routes */}
                <Route
                  path="/dashboard"
                  element={
                    <>
                      <SignedIn>
                        <Dashboard />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />
                <Route
                  path="/problems"
                  element={
                    <>
                      <SignedIn>
                        <ProblemsList />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />
                <Route
                  path="/problems/:id"
                  element={
                    <>
                      <SignedIn>
                        <ProblemPage />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />

                {/* New Protected Routes */}
                <Route
                  path="/roadmap"
                  element={
                    <>
                      <SignedIn>
                        <Roadmap />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />
                <Route
                  path="/leaderboard"
                  element={
                    <>
                      <SignedIn>
                        <Leaderboard />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />
                <Route
                  path="/community"
                  element={
                    <>
                      <SignedIn>
                        <Community />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />
                
                {/* Resume Builder routes */}
                <Route
                  path="/resume-builder"
                  element={
                    <>
                      <SignedIn>
                        <ResumeBuilderPage />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />
                <Route
                  path="/ai-resume"
                  element={
                    <>
                      <SignedIn>
                        <AIResumeBuilder />
                      </SignedIn>
                      <SignedOut>
                        <RedirectToSignIn />
                      </SignedOut>
                    </>
                  }
                />
                
                {/* Resource routes (public) */}
                <Route path="/resources" element={<ResourceHub />} />
                <Route path="/resources/:id" element={<ResourceDetail />} />
                
                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default App;