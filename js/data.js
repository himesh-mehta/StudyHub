// Mock Data for the Application
const mockData = {
  user: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "👤",
  },

  stats: {
    totalStudyTime: 27, // hours
    chaptersCompleted: 4,
    lessonsCompleted: 24,
    conceptsLearned: 57,
    currentStreak: 2,
    sessionsToday: 3,
    focusTimeToday: 45, // minutes
  },

  weeklyProgress: [
    { day: "Mon", hours: 2.5, chapters: 3, lessons: 12, concepts: 25 },
    { day: "Tue", hours: 3.2, chapters: 4, lessons: 15, concepts: 32 },
    { day: "Wed", hours: 1.8, chapters: 2, lessons: 8, concepts: 18 },
    { day: "Thu", hours: 4.1, chapters: 5, lessons: 18, concepts: 38 },
    { day: "Fri", hours: 2.9, chapters: 3, lessons: 14, concepts: 28 },
    { day: "Sat", hours: 3.5, chapters: 4, lessons: 16, concepts: 35 },
    { day: "Sun", hours: 2.2, chapters: 2, lessons: 10, concepts: 22 },
  ],

  subjectDistribution: [
    { subject: "DSA", hours: 45, color: "#3b82f6" },
    { subject: "DLCA", hours: 38, color: "#10b981" },
    { subject: "DBMS", hours: 32, color: "#f59e0b" },
    { subject: "DSGT", hours: 12, color: "#ef4444" },
  ],

  dailyStudyTime: [
    { date: "2024-01-01", time: 2.5 },
    { date: "2024-01-02", time: 3.2 },
    { date: "2024-01-03", time: 1.8 },
    { date: "2024-01-04", time: 4.1 },
    { date: "2024-01-05", time: 2.9 },
    { date: "2024-01-06", time: 3.5 },
    { date: "2024-01-07", time: 2.2 },
    { date: "2024-01-08", time: 3.8 },
    { date: "2024-01-09", time: 2.1 },
    { date: "2024-01-10", time: 4.5 },
    { date: "2024-01-11", time: 3.3 },
    { date: "2024-01-12", time: 2.7 },
    { date: "2024-01-13", time: 3.9 },
    { date: "2024-01-14", time: 2.4 },
  ],

  chapterProgress: [
    { subject: "DSA", completed: 15, total: 20 },
    { subject: "DLCA", completed: 12, total: 18 },
    { subject: "DBMS", completed: 10, total: 16 },
    { subject: "DSGT", completed: 8, total: 14 },
  ],

  conceptMastery: [
    { level: "Beginner", count: 120 },
    { level: "Intermediate", count: 280 },
    { level: "Advanced", count: 167 },
  ],

  learningVelocity: [
    { week: "Week 1", concepts: 45 },
    { week: "Week 2", concepts: 52 },
    { week: "Week 3", concepts: 38 },
    { week: "Week 4", concepts: 61 },
    { week: "Week 5", concepts: 47 },
    { week: "Week 6", concepts: 55 },
    { week: "Week 7", concepts: 42 },
    { week: "Week 8", concepts: 58 },
  ],

  subjectProgress: [
    {
      name: "DSA",
      percentage: 75,
      chapters: { completed: 15, total: 20 },
      lessons: { completed: 89, total: 120 },
      concepts: { completed: 234, total: 300 },
    },
    {
      name: "DLCOA",
      percentage: 67,
      chapters: { completed: 12, total: 18 },
      lessons: { completed: 67, total: 95 },
      concepts: { completed: 156, total: 220 },
    },
    {
      name: "DBMS",
      percentage: 63,
      chapters: { completed: 10, total: 16 },
      lessons: { completed: 52, total: 85 },
      concepts: { completed: 123, total: 180 },
    },
    {
      name: "DSGT",
      percentage: 57,
      chapters: { completed: 8, total: 14 },
      lessons: { completed: 43, total: 70 },
      concepts: { completed: 98, total: 150 },
    },
  ],

  recentActivity: [
    {
      type: "chapter",
      subject: "DSA",
      title: "Completed Chapter: Array",
      time: "2 hours ago",
      icon: "📚",
      color: "#3b82f6",
    },
    {
      type: "quiz",
      subject: "LinkedList",
      title: "Scored 85% in Quiz: LinkedList Basics",
      time: "4 hours ago",
      icon: "🧠",
      color: "#10b981",
    },
    {
      type: "video",
      subject: "Search Algorithms",
      title: "Watched Video: Binary Search Explained",
      time: "1 day ago",
      icon: "🎥",
      color: "#f59e0b",
    },
    {
      type: "lesson",
      subject: "Sorting Algorithms",
      title: "Completed Lesson: Quick Sort",
      time: "2 days ago",
      icon: "📖",
      color: "#ef4444",
    },
  ],

  notes: [
    {
      id: 1,
      title: "Arrays",
      subject: "Data Structures",
      description:
        "Linear data structure for storing elements of the same type. Supports random access and efficient traversal.",
      pages: 10,
      lastModified: "1 day ago",
      url: "https://www.geeksforgeeks.org/dsa/array-data-structure-guide/",
    },
    {
      id: 2,
      title: "Linked Lists",
      subject: "Data Structures",
      description:
        "Collection of nodes where each node contains data and a reference to the next node. Useful for dynamic memory allocation.",
      pages: 8,
      lastModified: "2 days ago",
      url: "https://www.geeksforgeeks.org/dsa/linked-list-data-structure/",
    },
    {
      id: 3,
      title: "Stacks",
      subject: "Data Structures",
      description:
        "LIFO (Last In First Out) structure. Supports push and pop operations. Used in function calls, expression evaluation, etc.",
      pages: 7,
      lastModified: "3 days ago",
      url: "https://www.geeksforgeeks.org/dsa/stack-data-structure/",
    },
    {
      id: 4,
      title: "Queues",
      subject: "Data Structures",
      description:
        "FIFO (First In First Out) structure. Supports enqueue and dequeue operations. Used in scheduling, buffering, etc.",
      pages: 6,
      lastModified: "4 days ago",
      url: "https://www.geeksforgeeks.org/dsa/queue-data-structure/",
    },
    {
      id: 5,
      title: "Trees",
      subject: "Data Structures",
      description:
        "Hierarchical data structure with nodes connected by edges. Used for representing hierarchical relationships.",
      pages: 12,
      lastModified: "5 days ago",
      url: "https://www.geeksforgeeks.org/dsa/tree-data-structure/",
    },
    {
      id: 6,
      title: "Graphs",
      subject: "Data Structures",
      description:
        "Collection of nodes (vertices) and edges. Used to represent networks, relationships, and connections.",
      pages: 15,
      lastModified: "6 days ago",
      url: "https://www.geeksforgeeks.org/dsa/graph-data-structure/",
    },
  ],

  videos: [
    {
      id: 1,
      title: "Introduction to Data Structures",
      subject: "Data Structures and Algorithms",
      description:
        " What is data structure.Why data structure is very important.",
      duration: "5.20",
      instructor: "Naina Mam",
      url: "https://youtu.be/3cU__spdMIw?si=aXugP8WNiHKzD_yF",
    },
    {
      id: 2,
      title: "Arrays in Data Structure",
      subject: "Data Structures and Algorithms",
      description:
        "Introduction of Arrays. How to declare,Initialize and Memory representation is done.",
      duration: "11.06",
      instructor: "Naina Mam",
      url: "https://youtu.be/6e6yKtr2VGI?si=aQ41MTm2WX5N_GR-",
    },
    {
      id: 3,
      title: "Types of Arrays",
      subject: "Data Structures and Algorithms",
      description:
        "The various types of arrays are One dimensional array and Multi-dimensional array.",
      duration: "9.16",
      instructor: "Naina Mam",
      url: "https://youtu.be/lAEmhJA-tVw?si=tJUY4vVJgkQoooFG",
    },
    {
      id: 4,
      title: "Addressing in One Dimensional Array",
      subject: "Data Structures and Algorithms",
      description:
        "In this video you will find the formula for address calculation in single dimensional array with examples.",
      duration: "7.13",
      instructor: "Naina Mam",
      URL: "https://youtu.be/JTfPmCiLhz0?si=KeA5LU88EsmuDffw",
    },
    {
      id: 5,
      title: "2D Arrays",
      subject: "Data Structures and Algorithms",
      description:
        "Addressing in 2D Arrays | Row Major Order.collection of elements arranged in rows and columns",
      duration: "8.20",
      instructor: "Naina Mam",
      url: "https://youtu.be/BNA6Sb1wM8E?si=59qa8N2KS1cbap8c",
    },
        {
      id: 6,
      title: "2D Arrays",
      subject: "Data Structures and Algorithms",
      description:
        "3D Arrays | Addressing in 3D Arrays | Row Major Order",
      duration: "8.20",
      instructor: "Naina Mam",
      url: "https://youtu.be/mzfhcfa0Ra0?si=X2DL-yZyPM1NzCrI",
    },
        {
      id:7 ,
      title: "2D Arrays",
      subject: "Data Structures and Algorithms",
      description:
" Addressing in Lower Triangular Matrix",
      duration: "8.20",
      instructor: "Naina Mam",
      url: "https://youtu.be/X-vk__Y1Tgk?si=BuBIJN7eXo8j0A_e",
    },
        {
      id:8 ,
      title: "2D Arrays",
      subject: "Data Structures and Algorithms",
      description:
        "Find 2nd Largest2️⃣ Number in Array",
      duration: "8.20",
      instructor: "Naina Mam",
      url: "https://youtu.be/eIm9ODShmCI?si=Vuv_p_Rshg5Q3ABN",
    },
        {
      id:9 ,
      title: "2D Arrays",
      subject: "Data Structures and Algorithms",
      description:
        "Two 2️⃣ Pointer👆 Technique",
      duration: "8.20",
      instructor: "Naina Mam",
      url: "https://youtu.be/B2L4mAglJZA?si=rxMkdTkzazZRSC3b",
    },
        {
      id:10 ,
      title: "2D Arrays",
      subject: "Data Structures and Algorithms",
      description:
        " Maximum Sum Subarray Problem",
      duration: "8.20",
      instructor: "Naina Mam",
      url: "https://youtu.be/9N3hDuS28EI?si=365-Rds6MSUuN7io",
    },
  ],
};

// Utility functions for data manipulation
const dataUtils = {
  formatTime: (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  },

  formatDuration: (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  },

  getRandomColor: () => {
    const colors = [
      "#3b82f6",
      "#10b981",
      "#f59e0b",
      "#ef4444",
      "#8b5cf6",
      "#ec4899",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  },

  calculatePercentage: (completed, total) => {
    return Math.round((completed / total) * 100);
  },
};
