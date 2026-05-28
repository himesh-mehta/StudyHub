import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useProgress } from '../contexts/ProgressContext';
import { 
  Play, 
  Search, 
  Filter, 
  Clock, 
  Eye,
  Star,
  Bookmark,
  PlayCircle,
  X
} from 'lucide-react';

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [activeVideo, setActiveVideo] = useState<any | null>(null);
  const { watchVideo, addStudyTime } = useProgress();

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const subjects = ['all', 'Data Structures', 'Algorithms'];

  const videos = [
    {
      id: 1,
      title: 'Lec-2: Introduction to Data Structure with Real Life Examples',
      subject: 'Data Structures',
      topic: 'Basics',
      duration: '11:42',
      views: 1254300,
      rating: 4.9,
      instructor: 'Varun Singla (Gate Smashers)',
      difficulty: 'Beginner',
      isBookmarked: true,
      thumbnail: 'https://img.youtube.com/vi/3cU__spdMIw/hqdefault.jpg',
      description: 'An engaging introduction to Data Structures, explaining what they are, why we use them, and real-life analogies like libraries and wardrobes.',
      youtubeId: '3cU__spdMIw'
    },
    {
      id: 2,
      title: 'Lec-18: Single Linked List in Data Structures | Creation & Traversal',
      subject: 'Data Structures',
      topic: 'Linked List',
      duration: '15:28',
      views: 897600,
      rating: 4.8,
      instructor: 'Varun Singla (Gate Smashers)',
      difficulty: 'Intermediate',
      isBookmarked: false,
      thumbnail: 'https://img.youtube.com/vi/Y3Ckd3OW0_g/hqdefault.jpg',
      description: 'Learn the foundational concepts of Single Linked Lists, including node structures, pointer references, memory allocation, and traversal algorithms.',
      youtubeId: 'Y3Ckd3OW0_g'
    },
    {
      id: 3,
      title: 'Lec-30: Introduction to Stack | PUSH and POP Operations',
      subject: 'Data Structures',
      topic: 'Stack',
      duration: '13:02',
      views: 656300,
      rating: 4.9,
      instructor: 'Varun Singla (Gate Smashers)',
      difficulty: 'Intermediate',
      isBookmarked: true,
      thumbnail: 'https://img.youtube.com/vi/HRDHgKrYHgU/hqdefault.jpg',
      description: 'Understanding Stack data structures, the LIFO (Last In First Out) principle, overflow/underflow criteria, and visual demonstrations of PUSH and POP operations.',
      youtubeId: 'HRDHgKrYHgU'
    },
    {
      id: 4,
      title: 'Lec-46: Introduction to Queue | FIFO & Representation',
      subject: 'Data Structures',
      topic: 'Queue',
      duration: '10:45',
      views: 498500,
      rating: 4.7,
      instructor: 'Varun Singla (Gate Smashers)',
      difficulty: 'Intermediate',
      isBookmarked: false,
      thumbnail: 'https://img.youtube.com/vi/0XKlbNJLvjs/hqdefault.jpg',
      description: 'Explore the Queue data structure, operating on the FIFO (First In First Out) mechanism. Discusses real-world examples and sequential memory representations.',
      youtubeId: '0XKlbNJLvjs'
    },
    {
      id: 5,
      title: 'Lec-53: Binary Search Tree (BST) | Insertion & Creation',
      subject: 'Algorithms',
      topic: 'Trees',
      duration: '15:10',
      views: 723400,
      rating: 4.8,
      instructor: 'Varun Singla (Gate Smashers)',
      difficulty: 'Advanced',
      isBookmarked: false,
      thumbnail: 'https://img.youtube.com/vi/sXABdGalFNg/hqdefault.jpg',
      description: 'A deep dive into Binary Search Trees, discussing insertion methods, searching complexities, and how to construct a BST from scratch.',
      youtubeId: 'sXABdGalFNg'
    },
    {
      id: 6,
      title: "L-4.10: Dijkstra's Algorithm | Single Source Shortest Path",
      subject: 'Algorithms',
      topic: 'Graphs',
      duration: '19:42',
      views: 924500,
      rating: 4.9,
      instructor: 'Varun Singla (Gate Smashers)',
      difficulty: 'Advanced',
      isBookmarked: true,
      thumbnail: 'https://img.youtube.com/vi/WJ-UaAaumNA/hqdefault.jpg',
      description: "Learn Dijkstra's Algorithm for finding the single-source shortest path in weighted graphs, using the Greedy Method with complete tabular walkthroughs.",
      youtubeId: 'WJ-UaAaumNA'
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          video.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          video.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || video.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleWatchVideo = (video: any) => {
    watchVideo();
    // Parse duration to add to study progress (e.g. "11:42" -> 11 mins)
    const minutes = parseInt(video.duration.split(':')[0], 10) || 10;
    addStudyTime(minutes);
    
    // Set active video to open the dynamic modal
    setActiveVideo(video);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  };

  return (
    <Layout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Lectures</h1>
          <p className="text-gray-600">Learn DSA from Gate Smashers with premium video lectures</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search videos by title, topic, or instructor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[180px]"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'All DSA Topics' : subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Thumbnail */}
                <div className="relative group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                       onClick={() => handleWatchVideo(video)}>
                    <PlayCircle className="w-16 h-16 text-white hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-semibold">
                    {video.duration}
                  </div>
                  <button className={`absolute top-2 right-2 p-2 rounded-lg transition-colors ${
                    video.isBookmarked ? 'text-yellow-500 bg-black bg-opacity-50' : 'text-white bg-black bg-opacity-50 hover:text-yellow-500'
                  }`}>
                    <Bookmark className="w-5 h-5" fill={video.isBookmarked ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 pb-0">
                  {/* Title and Subject */}
                  <div className="mb-3">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer" onClick={() => handleWatchVideo(video)}>
                      {video.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold text-blue-600">{video.subject}</span>
                      <span className="mx-2">•</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{video.topic}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <p className="text-xs font-semibold text-gray-500 mb-3">by {video.instructor}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                </div>
              </div>

              <div className="p-6 pt-2">
                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1 text-gray-400" />
                    <span>{formatViews(video.views)} views</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span className="font-bold text-gray-700">{video.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Difficulty & Watch Button */}
                <div className="flex items-center justify-between gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(video.difficulty)}`}>
                    {video.difficulty}
                  </span>
                  <button
                    onClick={() => handleWatchVideo(video)}
                    className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center shadow-md shadow-red-200 hover:shadow-lg"
                  >
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <Play className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Dynamic YouTube Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col my-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
              <div className="flex-1 min-w-0">
                <span className="text-xs uppercase tracking-wider font-semibold text-red-500 bg-red-950 px-2 py-0.5 rounded mr-2">
                  Now Playing
                </span>
                <h3 className="text-lg font-bold truncate inline-block align-middle">{activeVideo.title}</h3>
              </div>
              <button 
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors ml-4 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Frame (16:9 aspect ratio) */}
            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Body / Information */}
            <div className="p-6 bg-gray-50 flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-semibold text-blue-600 text-sm bg-blue-50 px-3 py-1 rounded-full">
                  {activeVideo.subject}
                </span>
                <span className="text-xs text-gray-500 font-semibold bg-gray-200 px-2 py-1 rounded">
                  Topic: {activeVideo.topic}
                </span>
                <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${getDifficultyColor(activeVideo.difficulty)}`}>
                  {activeVideo.difficulty}
                </span>
                <span className="text-xs text-gray-500 ml-auto flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                  {activeVideo.rating} Rating
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Video Description:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{activeVideo.description}</p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Instructor: <strong className="text-gray-700">{activeVideo.instructor}</strong></span>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-semibold">
                    ✓ Credited {activeVideo.duration.split(':')[0]} mins to Study Tracker
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setActiveVideo(null)}
                className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 active:bg-black text-white font-semibold rounded-xl transition-colors shadow"
              >
                Close Video
              </button>
            </div>

          </div>
        </div>
      )}
    </Layout>
  );
}