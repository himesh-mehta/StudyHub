import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import {
  Brain,
  BookOpen,
  Play,
  Clock,
  Trophy,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  FileText,
  Target,
  BarChart2,
  Zap,
  ChevronRight,
  Github,
  Mail,
  LogOut,
  Layout as LayoutIcon,
  Flame
} from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { progress } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle active navigation section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'showcase', 'how-it-works'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu keyboard (Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryAction = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleFeatureClick = (path: string) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  // Metric values (using context data when logged in, or default product values)
  const studyHours = user && progress.totalStudyTime > 0 
    ? (progress.totalStudyTime / 60).toFixed(1) 
    : '12.5';

  const completedQuizzes = user && progress.completedQuizzes > 0 
    ? progress.completedQuizzes 
    : 8;

  const currentStreak = user && progress.currentStreak > 0 
    ? progress.currentStreak 
    : 7;

  const weeklyProgressHours = user && progress.weeklyProgress > 0
    ? progress.weeklyProgress.toFixed(1)
    : '14.5';

  const weeklyGoalHours = user ? progress.weeklyGoal : 20;

  // Shared responsive wide container style across all sections
  const wideContainerClass = "w-[94%] max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden flex flex-col justify-between">
      
      {/* Subtle Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1400px] h-[750px] bg-gradient-to-tr from-blue-200/50 via-indigo-100/40 to-purple-100/30 blur-3xl opacity-80 rounded-full" />
        <div className="absolute top-[800px] -right-40 w-[900px] h-[900px] bg-gradient-to-br from-indigo-100/40 via-blue-100/30 to-slate-100 blur-3xl opacity-70 rounded-full" />
      </div>

      {/* HEADER / STICKY NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-slate-200/70 shadow-xs transition-all">
        <div className={wideContainerClass}>
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Brand */}
            <div 
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  StudBud
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 -mt-1">
                  Smart Learning Platform
                </span>
              </div>
            </div>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <button
                onClick={() => scrollToSection('features')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeSection === 'features'
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('showcase')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeSection === 'showcase'
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Showcase
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeSection === 'how-it-works'
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                How It Works
              </button>
            </nav>

            {/* Right: Auth State Controls (Sign In / Sign Out / Dashboard) */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-3 bg-slate-100/80 p-1.5 pl-3.5 rounded-full border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      {user.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-semibold text-slate-800 max-w-[120px] truncate">
                      {user.name}
                    </span>
                  </div>

                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium text-xs hover:bg-indigo-700 shadow-sm transition-all duration-150 flex items-center"
                  >
                    <LayoutIcon className="w-3.5 h-3.5 mr-1.5" />
                    Dashboard
                  </button>

                  <button
                    onClick={() => logout()}
                    className="p-2 rounded-full text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Sign Out"
                    aria-label="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/login')}
                    className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-100/80 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-indigo-500/25 transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left px-4 py-2.5 rounded-xl text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium text-sm transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('showcase')}
                className="text-left px-4 py-2.5 rounded-xl text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium text-sm transition-colors"
              >
                Showcase
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left px-4 py-2.5 rounded-xl text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium text-sm transition-colors"
              >
                How It Works
              </button>
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/dashboard');
                    }}
                    className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium text-center shadow-md text-sm flex items-center justify-center"
                  >
                    <LayoutIcon className="w-4 h-4 mr-2" />
                    Go to Dashboard
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                    }}
                    className="w-full py-2.5 rounded-xl bg-red-50 text-red-600 font-medium text-center text-sm flex items-center justify-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/login');
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-medium text-center text-sm"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/login');
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-center shadow-md text-sm"
                  >
                    Get Started →
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-1">
        
        {/* HERO SECTION — WIDE 40/60 RESPONSIVE LAYOUT */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 sm:py-16 lg:py-20">
          <div className={wideContainerClass}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Hero Column (40% width on Desktop) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 sm:space-y-8">
                
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs sm:text-sm font-semibold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                  <span>Your learning, organized.</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Learn Smarter.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                    Stay Consistent.
                  </span><br />
                  Go Further.
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Everything you need to learn, practice, and track your progress — thoughtfully organized in one powerful study platform.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <button
                    onClick={handlePrimaryAction}
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center justify-center"
                  >
                    {user ? 'Go to Dashboard' : 'Get Started'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>

                  <button
                    onClick={() => scrollToSection('features')}
                    className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-medium text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center justify-center shadow-xs"
                  >
                    Explore StudBud
                  </button>
                </div>

                {/* Value Indicators */}
                <div className="pt-6 border-t border-slate-200/60 w-full grid grid-cols-3 gap-3 sm:gap-6">
                  <div className="flex items-center space-x-2 text-slate-700 font-medium text-xs sm:text-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span>Learn</span>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-700 font-medium text-xs sm:text-sm">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span>Practice</span>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-700 font-medium text-xs sm:text-sm">
                    <div className="w-8 h-8 rounded-lg bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>Track</span>
                  </div>
                </div>

              </div>

              {/* Right Hero Column: Wide Dashboard Showcase Preview (60% width on Desktop) */}
              <div className="lg:col-span-7 relative mt-6 lg:mt-0 w-full">
                
                {/* Browser Window Frame */}
                <div className="relative rounded-3xl bg-slate-900/5 p-2.5 sm:p-4 ring-1 ring-slate-900/10 shadow-2xl backdrop-blur-xl w-full">
                  <div className="rounded-2xl bg-white overflow-hidden shadow-lg border border-slate-200/80 w-full">
                    
                    {/* Browser Header Bar */}
                    <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="bg-white px-4 py-1 rounded-md text-xs text-slate-400 font-mono border border-slate-200/60 shadow-xs flex items-center">
                        <span className="text-slate-300 mr-1">https://</span>studbud.app/dashboard
                      </div>
                      <div className="w-12" />
                    </div>

                    {/* Wide Dashboard Body */}
                    <div className="p-5 sm:p-8 bg-slate-50 min-h-[400px] sm:min-h-[460px] flex flex-col justify-between">
                      
                      {/* Top User Greeting */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                        <div>
                          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Welcome back</span>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                            {user ? user.name : 'Data Structures & Algorithms'}
                          </h3>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center">
                          <Zap className="w-3.5 h-3.5 mr-1.5 fill-indigo-600" />
                          Active Session
                        </div>
                      </div>

                      {/* Quick Module Cards Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
                        <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xs">
                              <BookOpen className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">Notes</span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 truncate">Data Structures</p>
                          <p className="text-[10px] text-slate-500 truncate">Arrays & Linked Lists</p>
                        </div>

                        <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs">
                              <Brain className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">Quiz</span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 truncate">Stacks & Queues</p>
                          <p className="text-[10px] text-emerald-600 font-medium truncate">85% Score</p>
                        </div>

                        <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-xs">
                              <Clock className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">Timer</span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 truncate">Focus Session</p>
                          <p className="text-[10px] text-purple-600 font-medium truncate">25 min Pomodoro</p>
                        </div>

                        <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
                              <Trophy className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">PYQ</span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 truncate">Exam Papers</p>
                          <p className="text-[10px] text-amber-600 font-medium truncate">2024 Solved</p>
                        </div>
                      </div>

                      {/* Weekly Progress Bar */}
                      <div className="bg-white p-5 rounded-xl border border-slate-200/70 shadow-xs mb-6">
                        <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
                          <span className="font-semibold text-slate-700">Weekly Goal Progress</span>
                          <span className="font-semibold text-indigo-600">
                            {weeklyProgressHours} / {weeklyGoalHours} hrs
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${Math.min((parseFloat(weeklyProgressHours) / weeklyGoalHours) * 100, 100)}%` }}
                          />
                        </div>
                      </div>

                      {/* Activity Log Item */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span className="font-semibold text-slate-700">Recent Activity</span>
                          <span className="text-xs text-indigo-600 font-medium">View All</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-700">
                          <div className="flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="font-semibold truncate">Completed Quiz: Binary Search Trees</span>
                          </div>
                          <span className="text-[11px] text-slate-400 hidden sm:inline">2 hours ago</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Floating Stat Card 1: Study Progress */}
                <div className="absolute -top-5 -left-4 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-4.5 rounded-2xl shadow-xl border border-slate-200/80 animate-[bounce_6s_infinite_ease-in-out] hidden sm:flex items-center space-x-4 z-20">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900 block">
                      {studyHours} hrs
                    </span>
                    <p className="text-xs text-slate-500 font-medium">Study time this week</p>
                  </div>
                </div>

                {/* Floating Stat Card 2: Quiz Progress */}
                <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-4.5 rounded-2xl shadow-xl border border-slate-200/80 animate-[bounce_7s_infinite_ease-in-out] hidden sm:flex items-center space-x-4 z-20">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900 block">
                      {completedQuizzes} quizzes
                    </span>
                    <p className="text-xs text-slate-500 font-medium">Completed</p>
                  </div>
                </div>

                {/* Floating Stat Card 3: Current Streak */}
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-200/80 animate-[bounce_8s_infinite_ease-in-out] hidden xl:flex items-center space-x-3.5 z-20">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900 block">
                      {currentStreak} days
                    </span>
                    <p className="text-xs text-amber-700 font-semibold">Keep going!</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20 sm:py-28 bg-white/70 border-y border-slate-200/70 scroll-mt-20">
          <div className={wideContainerClass}>
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                Core Features
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
                Everything you need to make progress
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3">
                StudBud brings your essential study tools together without the clutter.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              
              {/* Feature 1: Learn */}
              <div 
                onClick={() => handleFeatureClick('/notes')}
                className="group bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-sm">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Learn
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Access organized notes and learning resources in one place.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs sm:text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Notes</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>

              {/* Feature 2: Practice */}
              <div 
                onClick={() => handleFeatureClick('/quiz')}
                className="group bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 shadow-sm">
                    <Brain className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    Practice
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Test your understanding with quizzes and previous-year questions.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs sm:text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                  <span>Start Quizzes</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>

              {/* Feature 3: Focus */}
              <div 
                onClick={() => handleFeatureClick('/timer')}
                className="group bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200 shadow-sm">
                    <Clock className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Focus
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Use the built-in study timer to turn study sessions into consistent habits.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs sm:text-sm font-semibold text-purple-600 group-hover:translate-x-1 transition-transform">
                  <span>Open Timer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>

              {/* Feature 4: Track */}
              <div 
                onClick={() => handleFeatureClick('/dashboard')}
                className="group bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-200 shadow-sm">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    Track
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    See your study activity and progress at a glance.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs sm:text-sm font-semibold text-amber-600 group-hover:translate-x-1 transition-transform">
                  <span>View Dashboard</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PRODUCT SHOWCASE SECTION — WIDE CARDS (40% Text / 60% Preview) */}
        <section id="showcase" className="py-20 sm:py-28 scroll-mt-20">
          <div className={wideContainerClass}>
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                Interactive Workspace
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
                One workspace for your entire study journey
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3">
                Explore the real modules integrated into StudBud.
              </p>
            </div>

            <div className="space-y-12">
              
              {/* Panel 1: Dashboard Overview (Wide Card) */}
              <div className="w-full bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Text Column (40% width on Desktop) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center space-x-2 text-indigo-600 font-semibold text-xs uppercase tracking-wider">
                    <LayoutIcon className="w-4 h-4" />
                    <span>Central Command</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    Intuitive Progress Dashboard
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Stay on top of deadlines, resume active learning sessions instantly, and monitor your weekly hour goals with real-time feedback.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700 pt-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      Quick action launcher for notes, videos, quizzes & timer
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      Automated activity logging and streaks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      Upcoming assignment deadline tracker
                    </li>
                  </ul>
                </div>

                {/* Product Preview Column (60% width on Desktop) */}
                <div className="lg:col-span-7 bg-slate-900/5 p-4 sm:p-6 rounded-2xl border border-slate-200/60 shadow-inner w-full">
                  <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-5 w-full">
                    <div className="flex items-center justify-between border-b pb-3">
                      <span className="font-bold text-slate-800 text-sm sm:text-base">Dashboard Overview</span>
                      <span className="text-xs text-slate-500">DSA Track</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100">
                        <span className="block text-xl font-bold text-blue-700">{studyHours} h</span>
                        <span className="text-xs text-blue-600 font-medium">Study Hours</span>
                      </div>
                      <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
                        <span className="block text-xl font-bold text-emerald-700">{completedQuizzes}</span>
                        <span className="text-xs text-emerald-600 font-medium">Quizzes</span>
                      </div>
                      <div className="bg-purple-50/70 p-4 rounded-xl border border-purple-100">
                        <span className="block text-xl font-bold text-purple-700">{user ? progress.notesRead : 12}</span>
                        <span className="text-xs text-purple-600 font-medium">Notes Read</span>
                      </div>
                      <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-100">
                        <span className="block text-xl font-bold text-amber-700">{currentStreak} Days</span>
                        <span className="text-xs text-amber-600 font-medium">Streak</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Panel 2: Video Lectures (Wide Card) */}
              <div className="w-full bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Text Column (40% width on Desktop) */}
                <div className="lg:col-span-5 lg:order-2 space-y-5">
                  <div className="inline-flex items-center space-x-2 text-indigo-600 font-semibold text-xs uppercase tracking-wider">
                    <Play className="w-4 h-4 fill-indigo-600" />
                    <span>Curated Learning</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    Structured Video Lectures
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Watch structured video playlists tailored for Data Structures & Algorithms with built-in topic navigation and progress completion indicators.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700 pt-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      Organized by core topics (Arrays, Trees, Graphs, DP)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      Direct access to DSA video course lectures
                    </li>
                  </ul>
                </div>

                {/* Product Preview Column (60% width on Desktop) */}
                <div className="lg:col-span-7 lg:order-1 bg-slate-900/5 p-4 sm:p-6 rounded-2xl border border-slate-200/60 shadow-inner w-full">
                  <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-4 w-full">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-sm font-bold text-slate-800">Featured DSA Video Lessons</span>
                      <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">4 Modules</span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                            <Play className="w-4 h-4 fill-white" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-slate-800">Graph Theory — Depth First Search (DFS)</p>
                            <p className="text-xs text-slate-500">18 mins • Algorithms Series</p>
                          </div>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-800 font-medium px-2.5 py-1 rounded-md">Watched</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                            <Play className="w-4 h-4 fill-white" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-slate-800">Binary Search Trees & Traversal</p>
                            <p className="text-xs text-slate-500">24 mins • Data Structures Series</p>
                          </div>
                        </div>
                        <span className="text-xs bg-indigo-100 text-indigo-800 font-medium px-2.5 py-1 rounded-md">Next Up</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Panel 3: Quiz & PYQs (Wide Card) */}
              <div className="w-full bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Text Column (40% width on Desktop) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center space-x-2 text-emerald-600 font-semibold text-xs uppercase tracking-wider">
                    <Brain className="w-4 h-4" />
                    <span>Self Assessment</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    Interactive Quizzes & PYQs
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Evaluate your understanding with instant quiz scoring, detailed explanations, and access downloadable previous-year university exam papers.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700 pt-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      Instant scoring with answer explanations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      Downloadable Previous Year Question (PYQ) PDFs
                    </li>
                  </ul>
                </div>

                {/* Product Preview Column (60% width on Desktop) */}
                <div className="lg:col-span-7 bg-slate-900/5 p-4 sm:p-6 rounded-2xl border border-slate-200/60 shadow-inner w-full">
                  <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-4 w-full">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Quiz Challenge</span>
                      <span className="text-slate-400">Question 3 of 10</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-800">
                      What is the time complexity of searching an element in a Balanced Binary Search Tree?
                    </p>
                    <div className="space-y-2 pt-1">
                      <div className="p-3 rounded-lg border border-emerald-500 bg-emerald-50 text-emerald-900 text-xs sm:text-sm font-medium flex items-center justify-between">
                        <span>B) O(log n)</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="p-3 rounded-lg border border-slate-200 text-slate-600 text-xs sm:text-sm">
                        <span>A) O(n)</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-20 sm:py-28 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className={`${wideContainerClass} relative z-10`}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3.5 py-1.5 rounded-full border border-indigo-800/60">
                Simple Workflow
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
                How StudBud Works
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mt-3">
                Three easy steps to transform your daily study habits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Step 1 */}
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 lg:p-10 relative flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
                <div>
                  <span className="text-4xl lg:text-5xl font-black text-indigo-400/40 mb-4 block font-mono">01</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Choose what to learn</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Find notes, lectures, quizzes and practice material thoughtfully organized by subject.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 lg:p-10 relative flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
                <div>
                  <span className="text-4xl lg:text-5xl font-black text-indigo-400/40 mb-4 block font-mono">02</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Study and practice</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Stay focused with structured learning modules and dedicated study sessions using the timer.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 lg:p-10 relative flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
                <div>
                  <span className="text-4xl lg:text-5xl font-black text-indigo-400/40 mb-4 block font-mono">03</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Track your progress</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Monitor your daily activity, maintain study streaks, and build consistent study habits.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 sm:py-28">
          <div className={wideContainerClass}>
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 sm:p-16 lg:p-20 text-white text-center shadow-2xl shadow-indigo-600/30 overflow-hidden w-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Make every study session count.
                </h2>
                <p className="text-base sm:text-lg text-indigo-100 max-w-xl mx-auto">
                  Learn with structure. Practice with purpose. Keep moving forward.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handlePrimaryAction}
                    className="px-9 py-4 rounded-2xl bg-white text-slate-900 font-bold text-base shadow-xl hover:bg-slate-100 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center"
                  >
                    Start Learning
                    <ArrowRight className="w-5 h-5 ml-2 text-indigo-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* RICH HIGH-QUALITY FOOTER */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
        <div className={wideContainerClass}>
          <div className="py-16">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
              
              {/* Brand Column */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-extrabold text-white tracking-tight">StudBud</span>
                    <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider -mt-1">
                      Smart Learning Platform
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                  Smart learning, made simple. Empowering students with interactive study notes, curated video lectures, practice quizzes, and real-time progress tracking.
                </p>

                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700/80 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>All systems operational</span>
                </div>
              </div>

              {/* Quick Modules Column */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">Core Modules</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => handleFeatureClick('/notes')} className="hover:text-indigo-400 transition-colors">
                      Study Notes
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFeatureClick('/videos')} className="hover:text-indigo-400 transition-colors">
                      Video Lectures
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFeatureClick('/quiz')} className="hover:text-indigo-400 transition-colors">
                      Practice Quizzes
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFeatureClick('/pyq')} className="hover:text-indigo-400 transition-colors">
                      Previous Year Papers
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleFeatureClick('/timer')} className="hover:text-indigo-400 transition-colors">
                      Focus Timer
                    </button>
                  </li>
                </ul>
              </div>

              {/* Navigation Column */}
              <div className="md:col-span-2 space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => scrollToSection('features')} className="hover:text-indigo-400 transition-colors">
                      Features
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('showcase')} className="hover:text-indigo-400 transition-colors">
                      Showcase
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('how-it-works')} className="hover:text-indigo-400 transition-colors">
                      How It Works
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigate(user ? '/dashboard' : '/login')} className="hover:text-indigo-400 transition-colors">
                      Dashboard
                    </button>
                  </li>
                </ul>
              </div>

              {/* Connect Column */}
              <div className="md:col-span-2 space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href="https://github.com/himesh-mehta/StudyHub" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-indigo-400 transition-colors flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:support@studbud.app" 
                      className="hover:text-indigo-400 transition-colors flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
              <p>© 2026 StudBud. All rights reserved.</p>
              <p className="mt-2 sm:mt-0">Designed for consistent student success.</p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
