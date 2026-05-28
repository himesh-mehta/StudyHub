import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  BookOpen, 
  Play, 
  Brain, 
  FileText, 
  Timer, 
  LogOut,
  User
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [avatarFailed, setAvatarFailed] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Notes', href: '/notes', icon: BookOpen },
    { name: 'Videos', href: '/videos', icon: Play },
    { name: 'Quiz', href: '/quiz', icon: Brain },
    { name: 'PYQ', href: '/pyq', icon: FileText },
    { name: 'Timer', href: '/timer', icon: Timer },
  ];

  // Global Keyboard Shortcuts for Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore shortcuts if the user is typing in forms or input boxes
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.tagName === 'SELECT' ||
        (document.activeElement as HTMLElement)?.isContentEditable ||
        e.ctrlKey || e.metaKey || e.altKey
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'd':
          e.preventDefault();
          navigate('/dashboard');
          break;
        case 'n':
          e.preventDefault();
          navigate('/notes');
          break;
        case 'v':
          e.preventDefault();
          navigate('/videos');
          break;
        case 'q':
          e.preventDefault();
          navigate('/quiz');
          break;
        case 'p':
          e.preventDefault();
          navigate('/pyq');
          break;
        case 't':
          e.preventDefault();
          navigate('/timer');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg flex flex-col justify-between border-r border-gray-100">
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <Brain className="w-8 h-8 text-blue-600 mr-3 animate-pulse" />
            <h1 className="text-xl font-bold text-gray-900">StudyHub</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </nav>


          {/* User Profile */}
          <div className="border-t border-gray-200 p-4 bg-white mt-auto">
            <div className="flex items-center mb-4">
              {user?.avatar && !avatarFailed ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  onError={() => setAvatarFailed(true)}
                  className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-200"
                />
              ) : (
                <div className="w-10 h-10 rounded-full mr-3 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {user?.name?.slice(0, 2).toUpperCase() || 'ST'}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;