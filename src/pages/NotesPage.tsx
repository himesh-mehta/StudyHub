import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useProgress } from '../contexts/ProgressContext';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Eye,
  Download,
  Bookmark,
  X,
  CheckCircle2
} from 'lucide-react';

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [activeNote, setActiveNote] = useState<any | null>(null);
  const { readNote } = useProgress();

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeNote) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeNote]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveNote(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const subjects = ['all', 'Data Structures', 'Algorithms'];

  const notes = [
    {
      id: 1,
      title: 'DSA Lecture Notes: Introduction to Data Structures',
      subject: 'Data Structures',
      topic: 'Basics',
      pages: 12,
      readTime: '15 min',
      difficulty: 'Beginner',
      rating: 4.9,
      downloads: 4890,
      lastUpdated: '1 day ago',
      isBookmarked: true,
      preview: 'Essential basics of Data Structures. Covers Memory Allocation, Linear vs Non-Linear, and Time/Space Complexities.',
      content: `### 1. What is a Data Structure?
A data structure is a specialized format for organizing, processing, retrieving, and storing data in a computer so that operations can be performed efficiently. 

Choosing the right data structure can make or break the execution speed of your program!

---

### 2. Broad Classification of Data Structures

\`\`\`mermaid
                     Data Structures
                       /          \\
                  Linear          Non-Linear
                 /      \\          /       \\
           Static     Dynamic    Trees    Graphs
          (Arrays)   (Lists)
\`\`\`

#### A. Linear Data Structures
Elements are arranged in a sequential or linear order. Each element has a unique predecessor and successor (except the first and last).
* **Static**: Array (fixed size).
* **Dynamic**: Linked List, Stack, Queue (size can grow/shrink dynamically).

#### B. Non-Linear Data Structures
Elements are not arranged sequentially. Relationships are hierarchical or interconnected.
* **Trees**: Represent hierarchical data (parent-child relationships).
* **Graphs**: Represent network-like connections (nodes connected by edges).

---

### 3. Algorithm Complexity (Asymptotic Notation)
We measure algorithm performance in two terms:
1. **Time Complexity**: How the execution time of an algorithm grows relative to the input size ($N$).
2. **Space Complexity**: The amount of memory an algorithm needs relative to the input size ($N$).

#### Common Time Complexities (from best to worst):
* **$O(1)$** - Constant Time (e.g., Accessing array element by index).
* **$O(\\log N)$** - Logarithmic Time (e.g., Binary Search).
* **$O(N)$** - Linear Time (e.g., Simple Linear Search).
* **$O(N \\log N)$** - Linearithmic Time (e.g., Merge Sort, Quick Sort).
* **$O(N^2)$** - Quadratic Time (e.g., Bubble Sort, Insertion Sort).
* **$O(2^N)$** - Exponential Time (e.g., Recursive Fibonacci).`
    },
    {
      id: 2,
      title: 'DSA Lecture Notes: Arrays & Single Linked Lists',
      subject: 'Data Structures',
      topic: 'Linked List',
      pages: 18,
      readTime: '25 min',
      difficulty: 'Intermediate',
      rating: 4.8,
      downloads: 3670,
      lastUpdated: '3 days ago',
      isBookmarked: false,
      preview: 'Comparative notes on contiguous memory (Arrays) vs non-contiguous node chains (Linked Lists). Includes pointers and pointer manipulation.',
      content: `### 1. Contiguous Memory vs. Chained Memory

| Attribute | Arrays | Linked Lists |
| :--- | :--- | :--- |
| **Memory Allocation** | Contiguous (sequential block of memory) | Non-contiguous (scattered in heap) |
| **Size** | Fixed at compile time | Dynamic, changes at runtime |
| **Access Time** | $O(1)$ via index | $O(N)$ (requires sequential traversal) |
| **Insertion/Deletion** | $O(N)$ (due to shifting elements) | $O(1)$ (just update pointers, once node is found) |
| **Cache Friendliness**| Excellent (due to spatial locality) | Poor (elements are scattered) |

---

### 2. Node Structure in Linked List
In a Single Linked List, each element is a **Node** consisting of two fields:
1. **Data**: Holds the actual payload.
2. **Next Pointer**: A reference/address to the next node in the sequence. The last node points to \`NULL\`.

\`\`\`
  [Head] -> [ Data | Next ] -> [ Data | Next ] -> [ Data | NULL ]
\`\`\`

---

### 3. Linked List Key Code Snippet (C++)
\`\`\`cpp
struct Node {
    int data;
    Node* next;
    
    Node(int val) {
        data = val;
        next = nullptr;
    }
};
\`\`\`

### 4. Basic Linked List Operations
1. **Traversal**: Visit each node starting from the \`head\` until you reach \`nullptr\`. Time Complexity: $O(N)$.
2. **Insertion at Beginning**:
   * Create a new node.
   * Point the new node's \`next\` to the current \`head\`.
   * Make the new node the new \`head\`.
   * Time Complexity: $O(1)$.
3. **Deletion at End**:
   * Traverse to the second-to-last node.
   * Delete the last node and set \`secondToLast->next = nullptr\`.
   * Time Complexity: $O(N)$ (since we must traverse to find the end).`
    },
    {
      id: 3,
      title: 'DSA Lecture Notes: Stacks & Queues (PUSH, POP, FIFO, LIFO)',
      subject: 'Data Structures',
      topic: 'Stack',
      pages: 15,
      readTime: '20 min',
      difficulty: 'Intermediate',
      rating: 4.9,
      downloads: 4120,
      lastUpdated: '1 week ago',
      isBookmarked: true,
      preview: 'Comprehensive guide to Stacks and Queues. Explains PUSH/POP/ENQUEUE/DEQUEUE, standard array implementations, and real-world application examples.',
      content: `### 1. Stacks (LIFO - Last In First Out)
A Stack is an ordered list where insertions and deletions are made at one end called the **Top**.

#### Key Stack Operations:
* **PUSH**: Inserts an element on top of the stack. (Time Complexity: $O(1)$)
* **POP**: Removes and returns the top element of the stack. (Time Complexity: $O(1)$)
* **PEEK / TOP**: Returns the top element without removing it. (Time Complexity: $O(1)$)
* **IsEmpty / IsFull**: Checks boundary conditions to avoid Stack Overflow or Underflow.

#### Real-life Applications of Stacks:
1. **Undo/Redo Mechanisms** in text editors.
2. **Backtrack Navigation** in web browsers (Back button).
3. **Function Call Stacks** in compiler/OS execution systems.
4. **Balanced Parentheses Checking** in compiler parsers.

---

### 2. Queues (FIFO - First In First Out)
A Queue is an ordered list where insertions are made at the **Rear** end, and deletions are made at the **Front** end.

#### Key Queue Operations:
* **ENQUEUE**: Inserts an element at the rear of the queue. (Time Complexity: $O(1)$)
* **DEQUEUE**: Removes the element from the front of the queue. (Time Complexity: $O(1)$)
* **FRONT**: Gets the front element.
* **REAR**: Gets the rear element.

#### Real-life Applications of Queues:
1. **CPU Task Scheduling** (Round-robin scheduling queues).
2. **Buffer Storage** (e.g., IO buffers, keyboard keystroke buffers).
3. **Breadth-First Search (BFS)** traversal queue in Graph Algorithms.`
    },
    {
      id: 4,
      title: 'DSA Lecture Notes: Binary Search Trees (BST)',
      subject: 'Algorithms',
      topic: 'Trees',
      pages: 20,
      readTime: '30 min',
      difficulty: 'Advanced',
      rating: 4.8,
      downloads: 2980,
      lastUpdated: '5 days ago',
      isBookmarked: false,
      preview: 'Covers Tree terminology, Binary Trees, Binary Search Tree (BST) rules, search and insertion algorithms, and BST Traversals (Inorder, Preorder, Postorder).',
      content: `### 1. Tree Terminology
A tree is a non-linear hierarchical data structure consisting of nodes connected by edges.
* **Root**: The topmost node of the tree.
* **Parent / Child**: Parent nodes point to children nodes underneath.
* **Leaf Node**: A node with zero children.
* **Height**: Number of edges in the longest path from a node to a leaf.

---

### 2. What is a Binary Search Tree (BST)?
A Binary Search Tree is a binary tree that satisfies the following properties:
1. The **left subtree** of a node contains only nodes with keys **less than** the node's key.
2. The **right subtree** of a node contains only nodes with keys **greater than** the node's key.
3. Left and right subtrees must also be binary search trees.

\`\`\`
          [8]
         /   \\
       [3]   [10]
      /   \\     \\
    [1]   [6]   [14]
\`\`\`

---

### 3. Tree Traversals
Unlike linear structures which are traversed in a simple line, Trees can be traversed in several ways:
1. **Preorder (Root -> Left -> Right)**: Used to copy or duplicate trees.
2. **Inorder (Left -> Root -> Right)**: **CRITICAL**: Traverses a Binary Search Tree in strictly **sorted order** (ascending).
3. **Postorder (Left -> Right -> Root)**: Used to delete trees or calculate folders' directory sizes (bottom-up).

---

### 4. Search and Insertion Complexities
* **Average Case**: $O(\\log N)$ for both Search and Insertion (when the tree is relatively balanced).
* **Worst Case**: $O(N)$ (occurs when the tree becomes a skewed/degenerated tree, essentially behaving like a Linked List).`
    },
    {
      id: 5,
      title: 'DSA Lecture Notes: Graph Theory & BFS/DFS Traversal',
      subject: 'Algorithms',
      topic: 'Graphs',
      pages: 25,
      readTime: '35 min',
      difficulty: 'Advanced',
      rating: 4.9,
      downloads: 3240,
      lastUpdated: '2 days ago',
      isBookmarked: true,
      preview: 'In-depth notes on Graph representation (Adjacency Matrix & List), Depth-First Search (DFS), and Breadth-First Search (BFS) with code patterns.',
      content: `### 1. Basic Graph Definitions
A Graph $G = (V, E)$ consists of a set of vertices (nodes) $V$ and a set of edges $E$ connecting these vertices.
* **Directed Graph (Digraph)**: Edges have directions (arrows).
* **Undirected Graph**: Edges are bidirectional.
* **Weighted Graph**: Edges have numerical weights (representing distance, cost, time).

---

### 2. Graph Representation In Memory
There are two primary methods to represent a graph:

#### A. Adjacency Matrix
A 2D array of size $V \\times V$ where \`matrix[i][j] = 1\` indicates an edge between node \`i\` and \`j\`.
* **Space Complexity**: $O(V^2)$ (heavy for sparse graphs).
* **Edge Lookup**: $O(1)$ fast.

#### B. Adjacency List
An array of lists, where each index \`i\` contains a list of vertices adjacent to node \`i\`.
* **Space Complexity**: $O(V + E)$ (highly efficient for sparse graphs).
* **Edge Lookup**: $O(V)$ in the worst case.

---

### 3. Depth-First Search (DFS) vs Breadth-First Search (BFS)

#### Depth-First Search (DFS)
* **Strategy**: Explores as deep as possible along each branch before backtracking.
* **Data Structure**: Uses a **Stack** (often via recursion calls).
* **Time Complexity**: $O(V + E)$.
* **Ideal for**: Cycle detection, topological sorting, finding paths in labyrinths.

#### Breadth-First Search (BFS)
* **Strategy**: Explores the graph layer by layer, visiting all immediate neighbors first.
* **Data Structure**: Uses a **Queue**.
* **Time Complexity**: $O(V + E)$.
* **Ideal for**: Finding the **shortest path** in an unweighted graph.`
    }
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          note.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleReadNote = (note: any) => {
    readNote();
    // Set active note to open the Reader Modal
    setActiveNote(note);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Notes</h1>
          <p className="text-gray-600">Access comprehensive, expert-written notes to master Data Structures and Algorithms</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes by title or topic..."
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

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer" onClick={() => handleReadNote(note)}>
                      {note.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span className="font-semibold text-blue-600">{note.subject}</span>
                      <span className="mx-2">•</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{note.topic}</span>
                    </div>
                  </div>
                  <button className={`p-2 rounded-lg transition-colors ${
                    note.isBookmarked ? 'text-yellow-500 bg-yellow-50' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
                  }`}>
                    <Bookmark className="w-5 h-5" fill={note.isBookmarked ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Preview */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">{note.preview}</p>
              </div>

              <div>
                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
                    <span>{note.pages} pages</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                    <span>{note.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span className="font-bold text-gray-700">{note.rating}</span>
                  </div>
                </div>

                {/* Difficulty and Downloads */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(note.difficulty)}`}>
                    {note.difficulty}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Download className="w-4 h-4 mr-1 text-gray-400" />
                    <span>{note.downloads} downloads</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleReadNote(note)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center shadow-md shadow-blue-200 hover:shadow-lg"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Read Now
                  </button>
                  <button 
                    onClick={() => alert('PDF download started! (Mock)')}
                    className="px-3 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                {/* Last Updated */}
                <p className="text-[10px] text-gray-400 mt-3 text-right">Updated {note.lastUpdated}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Dynamic Note Reader Overlay Modal */}
      {activeNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col my-8">
            
            {/* Reader Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-blue-900 text-white">
              <div className="flex-1 min-w-0">
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-200 bg-blue-950 px-2.5 py-0.5 rounded-full mr-2">
                  Document Reader
                </span>
                <h3 className="text-lg font-bold truncate inline-block align-middle">{activeNote.title}</h3>
              </div>
              <button 
                onClick={() => setActiveNote(null)}
                className="p-1.5 rounded-full bg-blue-800 text-blue-200 hover:text-white hover:bg-blue-700 transition-colors ml-4 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Reader Text Body */}
            <div className="flex-1 overflow-y-auto px-8 py-8 bg-gray-50/50">
              <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-md p-8 md:p-10 prose prose-blue">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-4 mb-6">
                  {activeNote.title}
                </h1>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 mb-6 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="text-blue-600 uppercase bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {activeNote.subject}
                  </span>
                  <span>•</span>
                  <span>Topic: {activeNote.topic}</span>
                  <span>•</span>
                  <span>Estimated Read: {activeNote.readTime}</span>
                  <span className="ml-auto text-green-700 bg-green-50 px-2 py-0.5 rounded flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" />
                    Read Recorded
                  </span>
                </div>

                {/* Rendered content */}
                <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line font-normal space-y-4">
                  {activeNote.content}
                </div>
              </div>
            </div>

            {/* Reader Footer */}
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={() => alert('Offline PDF download started! (Mock)')}
                className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 py-2 px-4 rounded-xl transition-all shadow-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Offline PDF
              </button>
              
              <button
                onClick={() => setActiveNote(null)}
                className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 active:bg-black text-white font-semibold rounded-xl transition-colors shadow"
              >
                Close Reader
              </button>
            </div>

          </div>
        </div>
      )}
    </Layout>
  );
}